import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
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
      <Route path="" element={<div className="bg-red-600 text-white p-4 rounded-lg mx-4 mt-4"><h1 className="text-2xl font-bold">Welcome to the Index Page</h1><p className="mt-2">Navigate using the menu above to explore different sections.</p></div>}/>
      <Route path="home" element={<Home/>}/>
      <Route path="edit" element={<EditPage/>}/>
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