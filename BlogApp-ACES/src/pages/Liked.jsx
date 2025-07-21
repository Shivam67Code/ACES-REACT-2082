import {useEffect,useState} from 'react'
import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'

const Liked = ()=>{
  const[likedBlogs,setLikedBlogs] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    // function to get liked blogs from localStorage
    const savedLikes = localStorage.getItem('likedBlogs')
    if(savedLikes){
      setLikedBlogs(JSON.parse(savedLikes))
    }
  },[])
  const clearAllLikes = ()=>{
    if(window.confirm("Are you sure you want to remove all teh liked blogs?")){
      localStorage.removeItem('likedBlogs')
      setLikedBlogs([])
    }
  }
  return(
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              💗Your LIked Blogs
            </h1>
            <p className='text-xl text-gray-600 mb-8'>All Your Favorite Blog Posts in One place.</p>
            <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>


 {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {likedBlogs.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💔</div>
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No liked blogs yet!</h2>
            <p className="text-gray-500 mb-8">Start liking some amazing blog posts to see them here.</p>
            <button 
              onClick={() => navigate('/home')}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Browse Blogs
            </button>
          </div>
        ) : (
          <>
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
                <span className="text-2xl mr-3">💖</span>
                <span className="text-lg font-semibold text-gray-800">
                  {likedBlogs.length} 
                </span>
                <span className="text-lg text-gray-600 ml-2">
                  liked {likedBlogs.length === 1 ? 'post' : 'posts'}
                </span>
                <span className="text-2xl ml-3">✨</span>
              </div>
              
              <button
                onClick={clearAllLikes}
                className="mt-4 bg-red-100 hover:bg-red-200 text-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
              >
                🗑️ Clear All Likes
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {likedBlogs.map((blog) => (
                <div key={blog.id} className="transform hover:scale-105 transition-transform duration-300">
                  <Card blog={blog} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Liked