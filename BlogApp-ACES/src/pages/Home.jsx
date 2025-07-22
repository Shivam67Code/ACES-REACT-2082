import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  async function fetchBlogs() {
    try {
      setLoading(true)
      const response = await axios.get("https://687af35cabb83744b7ee46db.mockapi.io/Blogs")
      console.log(response.data)
      if (response.status === 200) {
        setBlogs(response.data)
      } else {
        alert("Error loading blogs")
      }
    } catch (error) {
      console.error("Error fetching blogs:", error)
      alert("Failed to load blogs")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchBlogs()
  }, [])

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              📚 Our Blog Posts
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover amazing stories, insights, and knowledge from our community
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <span className="text-2xl mr-3">📊</span>
            <span className="text-lg font-semibold text-gray-800">
              {blogs.length} 
            </span>
            <span className="text-lg text-gray-600 ml-2">
              amazing {blogs.length === 1 ? 'post' : 'posts'} waiting for you
            </span>
            <span className="text-2xl ml-3">✨</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {blogs.map((blog) => {
            return (
              <div key={blog.id} className="transform hover:scale-105 transition-transform duration-300">
                <Card blog={blog} />
              </div>
            )
          })}
        </div>
      </div>

      {/* A new Floating Create Button */}
      <button 
        onClick={() => navigate('/create')}
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center text-2xl font-bold z-50"
        title="Create New Blog"
      >
        <span className='text-lg mr-2'>  + </span>
        Create New Blog
      </button>

      {/* Footer Section */}
      <div className="bg-white mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-gray-500">
            <p>✨ Keep reading, keep growing ✨</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home