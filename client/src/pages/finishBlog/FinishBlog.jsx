import React, { useState } from 'react'
import "./finishBlog.scss"
import { IoIosArrowRoundBack } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const FinishBlog = () => {

    const navigate = useNavigate()
    const [blog, setBlog] = useState(JSON.parse(localStorage.getItem("blog")))

    const createHandler = async ()=> {
        try {
           const id = localStorage.getItem("blogId")
           console.log(id)
await axios.put(`http://localhost:8000/api/blogs/${id}`, blog)
navigate(`/blogs/${id}`)
        } catch (error) {
            
        }
    }

  return (
    <div className='finishBlog'>
<div className="container">
    <div className="top">
        <h1>{blog?.title}</h1>
        {
            blog?.content?.map((b, i)=> {
               return <div className="finishBlog" key={i}>
                    <h2>{b.heading}</h2>
                    <p>{b.blog}</p>
                </div>
            })
        }
    </div>
    <div className="bottom">
{/* <Link to="/create" className='back'><button><span><IoIosArrowRoundBack fontSize={19}/></span>Back</button></Link> */}
<button className='finish' onClick={createHandler}>Finish</button>
    </div>
</div>
    </div>
  )
}

export default FinishBlog