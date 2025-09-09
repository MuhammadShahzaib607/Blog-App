import React from 'react'
import "./blog.scss"
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const Blog = () => {
    const {id, i} = useParams()
const [blog, setBlog] = useState([])

const fetchBlog = async ()=> {
    try {
        const res = await axios.get(`http://localhost:8000/api/blogs/${id}`)
        // console.log(res.data.blog.blogs[i])
        setBlog(res.data.blog.blogs[i])
    } catch (error) {
        
    }
}

useEffect(()=> {
fetchBlog()
}, [])

  return (
    <div className='blog'>
       <div className="container">
         <div className="top">
            <h1>{blog?.title}</h1>
        </div>
        <div className="bottom">
{
    blog?.content?.map((b, i)=> {
return <div className="blogContainer" key={i}>
    <h2>{b.heading}</h2>
    <p>{b.blog}</p>
</div>
    })
}

        </div>
        <div className="back">
            <Link to={`/blogs/${id}`}><button><span><IoIosArrowRoundBack fontSize={19}/></span>Back</button></Link>
        </div>
       </div>
    </div>
  )
}

export default Blog