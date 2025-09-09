import React from 'react'
import "./home.scss"
import axios from "axios"
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'

const Home = () => {
  const [blogs, setBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

const fecthBlogs = async ()=> {
  try {
    setIsLoading(true)
    localStorage.removeItem("blogId")
   const res = await axios.get("https://blog-app-gamma-murex.vercel.app/api/blogs/")
    setBlogs(res.data.blogWebsites.reverse())
    setIsLoading(false)
  } catch (error) {
        setIsLoading(false)
  }
}

useEffect(()=> {
fecthBlogs()
}, [])



  return (
<>
{
  isLoading ?
  <div className="loading">
    <p>Loading ....</p>
  </div> :
      <div className='home'>
        <div className="container">
            <div className="cardContainer">
                <Link to="/createBlogWeb" className="createBlog"><div>+</div></Link>
            {
              blogs?.map((blog, i)=> {
    return <Link to={`/blogs/${blog?._id}`} className="blogWebsiteCard" key={i}>
                    <h2>{blog?.title}</h2>
                    <p>{blog?.subTitle}</p>
<div className="blackScreen"></div>
                </Link>
              })
            }
            </div>
        </div>
    </div>
}
</>
  )
}

export default Home