/* How about when user clicks on edit user gets live preview of the blog side by side of the edit page 

   APPLY IT HEREEEEEEEEE

   -> Also in the subtitle selection drop down give use a other option in which user can specify option
 */

import React,{useEffect, useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () =>{
  const navigate = useNavigate()
  const {id} = useParams()
  const [blogData,setBlogData] = useState({
    title:'',
    'sub-title' : ' ',
    description:"",
    image:"",
    createdAt:''
  })
  const[loading,setLoading] = useState(false)
  const [showPreview,setShowPreview] = useState(false)

  // function to fetch specific blog if user Enters Id
  useEffect(()=>{
    if(id){
      fetchBlog()
    }else{
      // Passing Default data 
      setBlogData({
        title:"Sample BLog TITLe",
        'sub-title': 'Technology',
        description: 'THis is a sample blog content.',
        image: '',
        createdAt: new Date().toLocaleDateString()
        
      })
    }
  },[id])
  const fetchBlog = async () =>{
    try{
      setLoading(true)
      const response = await axios.get(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`)
      if(response.status ===200){
        setBlogData({
          title:response.data.title || ' ',
          'sub-title' :response.data.subtitle || response.data[' sub-title'] ||'',
          description:response.data.description || ' ',
          image: response.data.image || '',
        createdAt: response.data.createdAt || ' '       })
      }
    }catch(error){
      alert("Error Loading Blog For Editing ! ")
      console.log(error)
    }finally{
      setLoading(false)
    }
  }
  const handleInputChange = (e) =>{
    const{name,value} = e.target 
    setBlogData(prev=>({
      ...prev,
      [name] :value
    }))
  }
  const handleSave = async()=>{
    if(id){
      //update existing blog
    try{
      const updateData = {
        title:blogData.title,
        subtitle:blogData['sub-title'],
        description:blogData.description,
        image:blogData.image
      }
      const response = await axios.put(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`, updateData)
      if(response.status === 200){
        alert('Blog Updated Successflly')
        navigate('/home')
      }
    }catch(error){
      alert(" Error Upadting blog")
      console.log(error)
    }
  }else{
    //create new Blog
    alert(" Blog Saved Successfuly")
    console.log(blogData)
  }
}
const handlePreview = ()=>{
  if(id){
    navigate(`/single/${id}`)
  }else{
    alert("Save the blog first to preview")
  }
}
const handleDelete = async () =>{
  if(window.confirm(" Are you sure you want to delte this Blog Post?")){
    if(id){
      try{
        await axios.delete(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`)
        alert("Blog Deleted Successfully")
        navigate('/home')
      }catch(error){
        alert("Error Deleting Blog")
        console.log(error)
      }
    }else{
      alert("Nothing to delte here")
    }
  }
}
if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg">Loading amazing blogs...</p>
        </div>
      </div>
    )
  }
return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">
              {id ? 'Edit Blog Post' : 'Create New Blog'}
            </h1>
            
            <div className="flex gap-2">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className={`px-4 py-2 rounded transition-colors duration-200 ${
                  showPreview ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
                } hover:bg-green-600`}
              >
                {showPreview ? 'Hide Preview' : 'Show Preview'}
              </button>
              
              <button
                onClick={handleSave}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                {id ? 'Update' : '🗃️Save'}
              </button>
              
              <button
                onClick={handlePreview}
                className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded transition-colors duration-200"
              >
                🔍Full Preview
              </button>
              
              {id && (
                <button
                  onClick={handleDelete}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors duration-200"
                >
                  🗑️Delete
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-4 transition-all duration-500 ease-in-out">
          {/* Edit Form */}
          <div className={`bg-white rounded-lg shadow p-6 transition-all duration-500 ease-in-out ${
            showPreview ? 'w-1/2' : 'w-full'
          }`}>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Edit Blog</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-gray-600 font-medium mb-2">Blog Title</label>
                <input
                  type="text"
                  name="title"
                  value={blogData.title}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                  placeholder="Enter your blog title"
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">Subtitle</label>
                <select
                  name="sub-title"
                  value={blogData['sub-title']}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                >
                  <option value="">Select a Subtitle</option>
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Sports">Sports</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">Blog Content</label>
                <textarea
                  name="description"
                  value={blogData.description}
                  onChange={handleInputChange}
                  rows={showPreview ? "8" : "12"}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-all duration-200"
                  placeholder="Write your blog content here..."
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={blogData.image}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                  placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                />
              </div>

              {id && (
                <div>
                  <label className="block text-gray-600 font-medium mb-2">Created At</label>
                  <input
                    type="text"
                    name="createdAt"
                    value={blogData.createdAt}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                    placeholder="Creation date"
                  />
                </div>
              )}

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded transition-colors duration-200"
                  onClick={() => {
                    alert('Changes cancelled')
                    navigate('/home')
                  }}
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleSave}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors duration-200"
                >
                  {id ? 'Update Changes' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>

          {/* Live Preview with opens with a subtle animation */}
          <div className={`bg-white rounded-lg shadow p-6 transition-all duration-500 ease-in-out overflow-hidden ${
            showPreview ? 'w-1/2 opacity-100 translate-x-0' : 'w-0 opacity-0 translate-x-full'
          }`}>
            {showPreview && (
              <div className="h-full">
                <h2 className="text-lg font-semibold mb-4 text-gray-700">Live Preview</h2>
                
                <div className="border rounded-lg p-4 bg-gray-50 h-full overflow-y-auto">
                  {/* Preview Header */}
                  <div className="mb-4">
                    <h1 className="text-xl font-bold text-gray-800 mb-2 break-words">
                      {blogData.title || 'Your Blog Title'}
                    </h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {blogData['sub-title'] || 'Category'}
                      </span>
                      <span className="text-xs">{blogData.createdAt || 'Today'}</span>
                    </div>
                  </div>

                  {/* Preview Image */}
                  {blogData.image && (
                    <div className="mb-4">
                      <img 
                        src={blogData.image} 
                        alt="Blog preview" 
                        className="w-full h-32 object-contain rounded border"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIG5vdCBmb3VuZDwvdGV4dD48L3N2Zz4='
                          e.target.alt = 'Image not found'
                        }}
                      />
                    </div>
                  )}

                  {/* Preview Content */}
                  <div className="text-sm text-gray-700 whitespace-pre-wrap break-words leading-relaxed">
                    {blogData.description || 'Your blog content will appear here...'}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>


  )
}

export default Edit
