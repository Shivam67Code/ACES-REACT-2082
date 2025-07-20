import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom'

function SinglePage() {
  const navigate =  useNavigate()
  
   const [blog, setBlog] = useState({})
   const [loading, setLoading] = useState(true)
   const { id } = useParams()

   async function fetchBlog(){
    try {
      setLoading(true)
      
      if (id) {
        // fetch the blog of ID entered by user
        const response = await axios.get(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`)
        console.log("API Response:", response.data)
        console.log("Status:", response.status)
        
        if(response.status === 200){
          setBlog(response.data)
        } else {
          console.error("Unexpected status:", response.status)
        }
      } else {
           //fetch all Blogs and pick a random blog to show in full screen If user visits /single
        const response = await axios.get(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs`)
        console.log("All Blogs Response:", response.data)
        
        if(response.status === 200 && response.data.length > 0){
          const randomIndex = Math.floor(Math.random() * response.data.length)
          const randomBlog = response.data[randomIndex]
          setBlog(randomBlog)
          console.log("Random blog selected:", randomBlog)
        } else {
          console.error("No blogs found")
          alert("No blogs available")
        }
      }
    } catch (error) {
      console.error("Fetch error:", error)
      alert("Error loading blog")
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchBlog()
  },[id])

  const handleDelete = async () =>{
    const confirmDelete = window.confirm(" Are you sure you want to delte this post???")
    if(!confirmDelete){
      return
    }
    try {
      const blogId = blog.id || id
      await axios.delete(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${blogId}`)
      alert("Blog deleted successfully")
      navigate("/home")
    } catch (error) {
      console.error("Delete error:", error)
      alert("Error deleting blog")
    }
  }

  const handleRandomBlog = async () => {
    try {
      setLoading(true)
      const response = await axios.get(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs`)
      console.log("All Blogs Response:", response.data)
      
      if(response.status === 200 && response.data.length > 0){
        const randomIndex = Math.floor(Math.random() * response.data.length)
        const randomBlog = response.data[randomIndex]
        setBlog(randomBlog)
        console.log("Random blog selected:", randomBlog)
      } else {
        console.error("No blogs found")
        alert("No blogs available")
      }
    } catch (error) {
      console.error("Fetch error:", error)
      alert("Error loading blog")
    } finally {
      setLoading(false)
    }
  }

  if(loading) {
    return <div className="p-8 text-center text-blue-600 text-3xl">Please wait the page is Loading...</div>
  }

  if(!blog || Object.keys(blog).length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl text-gray-600">No blog found</h2>
        <button 
          onClick={() => navigate('/home')} 
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    )
  }
   return (
     <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
           <img src={blog.image}alt="blogImage"className="w-full h-80 md:h-96 lg:h-[500px] object-cover rounded-xl shadow-lg" 
           />
         </div>
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
           <div className="mb-6">
             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
               {blog.title}
             </h1>
             <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
               {blog.subtitle}
             </h2>
           </div>
           <div className="prose max-w-none mb-8">
             <p className="text-lg text-gray-800 mb-6">
               {blog.description}
             </p>
           </div>
           <div className="border-t pt-6 mb-8">
             <p className="text-blue-600 font-medium">
               Published: {blog.createdAt}
             </p>
           </div>
           <div className="flex flex-wrap gap-4">
             <button 
               onClick={handleDelete} 
             className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
             >DELETE POST
             </button>
             <button onClick={() => navigate('/home')} 
               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
             >Back to Home
             </button>
             <button onClick={handleRandomBlog}className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow-md transition-colors"
             >Random Blog
             </button>
           </div>
         </div>
       </div>
     </div>
   )
}

export default SinglePage