import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import axios from "axios"

const Home = () => {
  const [blogs,setBlogs] = useState([])
  async function fetchBlogs(){
    const response = await axios.get("https://687af35cabb83744b7ee46db.mockapi.io/Blogs")
    console.log(response.data)
    if(response.status == 200){
      setBlogs(response.data)
    }else{
      alert("Error Aayooo");
    }
  }

  useEffect(()=>{
    fetchBlogs()
  },[])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">Our Blog Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog)=>{
          return(
            <Card key={blog.id} blog={blog}/>
          )
        })}
      </div>
    </div>
  )
}

export default Home