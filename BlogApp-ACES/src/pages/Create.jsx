import {useState} from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Create = () =>{

  const[blogData,setBlogData] = useState({
    title:'',
    'sub-title' :'',
    description:'',
    image:'',
    createdAt: new Date().toLocaleDateString()
  })
  const handleInputChange = (e)=>{
    const {name,value} = e.target 
    setBlogData(prev=>({
      ...prev,
      [name] : value
    }))
  }
  const handleSave = async(e)=>{
    if(e) {
      e.preventDefault()
    }
    try{
      const response  = await axios.post("https://687af35cabb83744b7ee46db.mockapi.io/Blogs",{
        title:blogData.title,
        subtitle:blogData['sub-title'],
        description:blogData.description,
        image : blogData.image,
        createdAt:blogData.createdAt
      })
      if(response.status===201){
        alert("Blog Created Successfully ! ")
        navigate(`/single/${response.data.id}`)
      }
      console.log(response)
    }catch(error){
      console.error("Error : ",error)
      alert(" Erro Creating Blog")
    }

  }

  

  const [showPreview,setShowPreview] = useState(true)

  const navigate = useNavigate()
 
  // async function sentDataToBackend(e){
  //   e.preventDefault()
  //  const response = await axios.post("https://687af35cabb83744b7ee46db.mockapi.io/Blogs",{
  //     title:title,
  //     subtitle:subtitle,
  //     description:description,
  //     image:image
  //     // title,                //Since the key and value names are same we can write only the value
  //     // subtitle,
  //     // description,
  //     // image
  //   })
    
  //   console.log(response)
  // }
  const handlePreview = async()=>{
    const response = await axios.get("https://687af35cabb83744b7ee46db.mockapi.io/Blogs")
    if(response.status===200){
      navigate("/home")
    }
  }
 
  
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 mb-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800">Create New Blog Post</h1>
            
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
                Create Blog
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex gap-4 transition-all duration-500 ease-in-out">
          {/* Create Form */}
          <div className={`bg-white rounded-lg shadow p-6 transition-all duration-500 ease-in-out ${
            showPreview ? 'w-1/2' : 'w-full'
          }`}>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">Create Blog</h2>
            
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
                <label className="block text-gray-600 font-medium mb-2">Subtitle/Category</label>
                <select
                  name="sub-title"
                  value={blogData['sub-title']}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                >
                  <option value="">Select a Category</option>
                  <option value="Technology">Technology</option>
                  <option value="Lifestyle">Lifestyle</option>
                  <option value="Travel">Travel</option>
                  <option value="Food">Food</option>
                  <option value="Sports">Sports</option>
                  <option value="Business">Business</option>
                  <option value="Health">Health</option>
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
                  placeholder="Write your amazing blog content here..."
                />
              </div>

              <div>
                <label className="block text-gray-600 font-medium mb-2">Featured Image URL</label>
                <input
                  type="text"
                  name="image"
                  value={blogData.image}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded focus:border-blue-500 outline-none transition-colors duration-200"
                  placeholder="Enter image URL (e.g., https://example.com/image.jpg)"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-700 px-6 py-2 rounded transition-colors duration-200"
                  onClick={() => {
                    if (window.confirm('Are you sure you want to cancel? All changes will be lost.')) {
                      navigate('/home')
                    }
                  }}
                >
                  Cancel
                </button>
                
                <button
                  onClick={handleSave}
                  disabled={!blogData.title || !blogData.description}
                  className={`px-6 py-2 rounded transition-colors duration-200 ${
                    !blogData.title || !blogData.description 
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  Create Blog Post
                </button>
              </div>
            </div>
          </div>

          {/* Live Preview with Animation */}
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
                      {blogData.title || 'Your Amazing Blog Title'}
                    </h1>
                    
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 flex-wrap">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {blogData['sub-title'] || 'Category'}
                      </span>
                      <span className="text-xs">{blogData.createdAt}</span>
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
                    {blogData.description || 'Start writing your blog content and see it come to life here...'}
                  </div>

                  {/* Preview Footer */}
                  {blogData.title && blogData.description && (
                    <div className="mt-6 pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-500 italic">
                        This is how your blog post will look when published!
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Create