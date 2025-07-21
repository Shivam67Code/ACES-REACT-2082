// how about when user clicks on edit user gets live preview of the blog side by side of the edit page 

import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams,useNavigate,Link} from 'react-router-dom'

function SinglePage() {
  const navigate = useNavigate()
  const [blog, setBlog] = useState({})
  const [loading, setLoading] = useState(true)
  const [isLiked, setIsLiked] = useState(false) // ADD THIS
  const { id } = useParams()

  // ADD THIS FUNCTION
  const checkIfLiked = () => {
    const savedLikes = localStorage.getItem('likedBlogs')
    if (savedLikes && blog.id) {
      const likedBlogs = JSON.parse(savedLikes)
      setIsLiked(likedBlogs.some(likedBlog => likedBlog.id === blog.id))
    }
  }

  // ADD THIS FUNCTION
  const handleLike = () => {
    const savedLikes = localStorage.getItem('likedBlogs')
    let likedBlogs = savedLikes ? JSON.parse(savedLikes) : []
    
    if (isLiked) {
      // Remove from likes
      likedBlogs = likedBlogs.filter(likedBlog => likedBlog.id !== blog.id)
      setIsLiked(false)
    } else {
      // Add to likes
      likedBlogs.push(blog)
      setIsLiked(true)
    }
    
    localStorage.setItem('likedBlogs', JSON.stringify(likedBlogs))
  }

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

  
  useEffect(() => {
    fetchBlog()
  }, [id])

  // Aded NEW useEffect for checking likes
  useEffect(() => {
    checkIfLiked()
  }, [blog])

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

  // add edit button here
  // const handleEdit = ()=>{
  //     navigate(`/edit/${id}`)
  // }

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
      <div className="mb-8 bg-white p-6 rounded-2xl shadow-lg border-2 border-gray-200">
        <img 
          className="h-96 w-full object-contain rounded-xl shadow-md" 
          src={blog.image || 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'} 
          alt={blog.title}
          onError={(e) => {
            e.target.src = 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'
          }}
        />
      </div>
      
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
        <div className="mb-6">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-blue-500 mb-4">
            {blog.title}
          </h1>
          {/* <h2 className="text-xl md:text-2xl text-gray-600 mb-6">
            {blog.subtitle}
          </h2> */}
        </div>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg text-gray-800 mb-6">
            <span className='text-blue-600 font-semibold text-md'>Description of the blog:</span> <br></br>
            {blog.description}
          </p>
        </div>
        
        <div className="border-t pt-6 mb-8">
          <p className="text-blue-600 font-medium">
            Published: {blog.createdAt}
          </p>
        </div>
        
        <div className="flex flex-wrap justify-evenly gap-4 mb-6">
          <button 
            onClick={handleLike}
            className={`px-6 py-3 rounded-2xl shadow-md transition-all duration-300 ${
              isLiked 
                ? 'bg-pink-600 hover:bg-pink-900 text-white' 
                : 'bg-pink-300 hover:bg-red-50 text-gray-700 hover:text-pink-700'
            }`}
          >
            {isLiked ? '❤️ Liked' : '🤍 Like'}
          </button>
          
          <button onClick={() => navigate('/home')} 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-2xl shadow-md transition-colors"
          >🏠Back to Home
          </button>
          
          <button onClick={handleRandomBlog} className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-3xl shadow-md transition-colors"
          >♻️ Random Blog
          </button>
          
          <Link to={'/edit/' + blog.id}>
            <button className="bg-amber-600 hover:bg-green-700 text-white px-6 py-3 rounded-4xl shadow-md transition-colors"
            >✍🏻 Edit Blog
            </button>
          </Link>
        </div>

        <div className="flex justify-center items-center border-t pt-4">
          <button 
            onClick={handleDelete} 
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-2xl shadow-md transition-colors"
          >🗑️DELETE POST
          </button>
        </div>
      </div>
    </div>
  </div>
   )
}

export default SinglePage