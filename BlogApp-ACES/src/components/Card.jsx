import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Card = ({blog}) => {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    // check if blog is already liked
    const savedLikes = localStorage.getItem('likedBlogs')
    if (savedLikes) {
      const likedBlogs = JSON.parse(savedLikes)
      setIsLiked(likedBlogs.some(likedBlog => likedBlog.id === blog.id))
    }
  }, [blog.id])

  const handleLike = (e) => {
    e.preventDefault() 
    
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

  if(!blog){
    return null
  }
    
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden relative">
      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`absolute top-3 right-3 z-10 w-10 h-10 rounded-full shadow-md transition-all duration-300 flex items-center justify-center ${
          isLiked 
            ? 'bg-red-500 text-white hover:bg-red-600' 
            : 'bg-white text-gray-400 hover:text-red-500 hover:bg-red-50'
        }`}
        title={isLiked ? 'Unlike this post' : 'Like this post'}
      >
        <span className="text-lg">
          {isLiked ? '❤️' : '🤍'}
        </span>
      </button>

      <Link to={"/single/" + blog.id}>
        <img 
          className="w-full h-48 object-cover" 
          src={blog.image || 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'} 
          alt={blog.title || "Blog image"}
          onError={(e) => {
            e.target.src = 'https://static.vecteezy.com/system/resources/previews/048/926/084/non_2x/silver-membership-icon-default-avatar-profile-icon-membership-icon-social-media-user-image-illustration-vector.jpg'
          }}
        />
      </Link>
      
      <div className="p-6">
        <Link to={"/single/" + blog.id}>
          <h5 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {blog.title || 'Untitled Blog'}
          </h5>
        </Link>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {blog.description || 'No description available...'}
        </p>
        
        <div className="flex items-center justify-between text-sm">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
            {blog.subtitle || 'General'}
          </span>
          <span className="text-gray-500">
            {blog.createdAt || 'No date'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
