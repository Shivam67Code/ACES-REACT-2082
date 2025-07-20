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
    alert("Save the blof first to preview")
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
if (loading){
  return(
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='text-center'>
        <div className='text-blue-600 text-3xl'> Please wait while we load the blog...</div>
      </div>
    </div>
  )
}

return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-blue-800">
            {id ? 'Edit Blog Post' : 'Create New Blog'}
          </h1>
          
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
            >
              {id ? 'Update' : 'Save'}
            </button>
            
            <button
              onClick={handlePreview}
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg"
            >
              Preview
            </button>
            
            {id && (
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
              >
                Delete
              </button>
            )}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Blog Title</label>
              <input
                type="text"
                name="title"
                value={blogData.title}
                onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Enter your blog title"
              />
            </div>

            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <label className="block text-gray-700 font-medium mb-2 text-center">Sub TITle</label>
                <select
                  name="sub-title"
                  value={blogData['sub-title']}
                    onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                >
                  <option value="">Selecct a SUb TItle</option>
                  <option value="TEchnology">TEchnology</option>
                  <option value="LifeStyle">LifeStyle</option>
                    <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Sportss">Sportss</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Blog Description</label>
                <textarea
                name="description"
                value={blogData.description}
                onChange={handleInputChange}
                rows="10"
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Write your blog content here..."
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Blog Image URL</label>
              <input
                type="text"
                name="image"
                value={blogData.image}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                placeholder="Enter image URL"
              />
              {blogData.image && (
                <img src={blogData.image} alt="Preview" className="mt-2 w-32 h-32 object-cover rounded" />
              )}
            </div>

            {id && (
              <div>
                <label className="block text-gray-700 font-medium mb-2">Created At</label>
                <input
                  type="text"
                    name="createdAt"
                  value={blogData.createdAt}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50"
                  placeholder="Creation date"
                />
              </div>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded-lg"
                  onClick={() => {
                    alert('Changes cancelled')
                    navigate('/home')
                  }}
              >Cancel
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg"
              >
              {id ? 'Update Changes' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )


}

export default Edit