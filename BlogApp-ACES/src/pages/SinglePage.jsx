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
       const response = await axios.get(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`)
       console.log(response.data)
       if(response.status == 200){
         setBlog(response.data)
       }
     } catch (error) {
       alert("Error loading blog")
       console.error(error)
     } finally {
       setLoading(false)
     }
   }


   useEffect(()=>{
     if(id) {
       fetchBlog()
      }
      
    },[id])


   const handleDelete = () =>{
    axios.delete(`https://687af35cabb83744b7ee46db.mockapi.io/Blogs/${id}`)
    .then(navigate("/home"))
    .then(response=>{
      alert("Blog deleted successfully")
    })
    
   }
   if(loading) {
     return <div className="p-8 text-center">Please wait the page is Loading...</div>
   }

   return (
     <div className="max-w-4xl mx-auto p-6">
       <img src={blog.image} alt="blogImage" className="w-full h-100 object-contain rounded-lg mb-6" />
       <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
       <h3 className="text-xl text-gray-600 mb-4">{blog.subtitle}</h3>
       <p className="text-gray-800 leading-relaxed">{blog.description}</p>
       <p className="text-blue-800 leading-relaxed">{blog.createdAt}</p>
       <button onClick={handleDelete}className='bg-red-800 rounded-md w-15 h-15 shadow-md hover:bg-red-400'>DELETE POST</button>
     </div>
   )
}

export default SinglePage