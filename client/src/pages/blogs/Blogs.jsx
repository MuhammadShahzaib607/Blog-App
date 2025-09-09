import React from 'react'
import "./blogs.scss"
import { IoIosArrowRoundBack, IoIosSearch } from 'react-icons/io'
import BlogCard from '../../components/blogCard/BlogCard'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  const {id} = useParams()

  const fetchBlog = async ()=> {
    try {
      const res = await axios.get(`http://localhost:8000/api/blogs/${id}`)
      setBlogs(res.data.blog.blogs)
      localStorage.setItem("blogId", id)
      // console.log(res.data.blog.blogs)
    } catch (error) {
      
    }
  }

  useEffect(()=> {
    fetchBlog()
  }, [])

  return (
    <div className='blogs'>
        <div className="container">
          <div className="section_1">
            <Link to="/"><button><span><IoIosArrowRoundBack fontSize={19}/></span>Back</button></Link>
          </div>
          <div className="section_2">
<Link to="/create"><button className='new'>New</button></Link>
<div>
  <input type="text" placeholder='Search Your Blog' />
  <IoIosSearch style={{
    cursor: "pointer"
  }} />
</div>
          </div>
          <div className="section_3">
{
  blogs?.map((b, i)=> {
    return <BlogCard title={b.title} desc={b?.content[0]?.blog?.slice(0, 130)} i={i} id={id} key={i} />
  })
}
          </div>
        </div>
    </div>
  )
}

export default Blogs