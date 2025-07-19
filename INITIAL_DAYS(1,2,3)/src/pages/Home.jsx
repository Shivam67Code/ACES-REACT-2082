import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
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
    <div>
      <Navbar/>
      <div className="container mx-auto px-4 py-8">
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