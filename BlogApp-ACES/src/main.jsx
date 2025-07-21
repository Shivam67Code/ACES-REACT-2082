import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { useParams } from 'react-router-dom'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from "./pages/Home"
import EditPage from "./pages/EditPage"
import SinglePage from "./pages/SinglePage"
import Create from "./pages/Create"
import LearningUseState from "./components/LearningUseState"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path="" element={<Home/>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="edit" element={<EditPage/>}/>      
      <Route path="edit/:id" element={<EditPage/>}/>
      <Route path="single/:id" element={<SinglePage/>}/>
      <Route path="single" element={<SinglePage/>}/>
      <Route path="create" element={<Create/>}/>
      <Route path="learning" element={<LearningUseState/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)