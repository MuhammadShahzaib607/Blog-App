import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Blogs from './pages/blogs/Blogs'
import Navbar from './components/navbar/Navbar'
import Create from './pages/create/Create'
import CreateBlogWeb from './pages/createBlogWeb/CreateBlogWeb'
import FinishBlog from './pages/finishBlog/FinishBlog'
import Blog from './pages/blog/Blog' 
import Home from './pages/home/Home'

function App() {

  return (
<>
<Navbar />
<Routes>
  <Route index element={<Home />} />
  <Route path='/blogs' element={<Blogs />} />
  <Route path='/create' element={<Create />} />
  <Route path='/createBlogWeb' element={<CreateBlogWeb />} />
  <Route path='/blogs/:id' element={<Blogs />} />
  <Route path='/blog/:id/:i' element={<Blog />} />
  <Route path='/finishBlog' element={<FinishBlog />} />
</Routes>
</>
  )
}

export default App
