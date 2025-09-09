import React, { useRef, useState } from 'react'
import "./create.scss"
import { Link } from 'react-router-dom'

const Create = () => {
const titleRef = useRef()
  const [heading, setHeading] = useState("")
  const [blog, setBlog] = useState("")
const [content, setContent] = useState([])

const add = ()=> {
  if (!heading || !blog) return
const newContent = {
  heading,
  blog
}
setContent([...content, newContent])
setHeading("")
setBlog("")
console.log(content)
}
const finishBlog = ()=> {
    const title = titleRef.current.value
  const newBlog = {
    title,
    content
  }
  localStorage.setItem("blog", JSON.stringify(newBlog))
}

  return (
    <div className='create'>
        <div className="container">
            <input type="text" placeholder='Enter Blog Title' ref={titleRef}/>
            <input type="text" placeholder='Enter Blog Heading' style={{
              fontSize: "25px",
              marginTop: "15px" 
            }} onChange={(e)=> setHeading(e.target.value)}
            value={heading}
            />
            <textarea name="" id="" rows={15} placeholder='Enter Your Blog Here' value={blog} onChange={(e)=> setBlog(e.target.value)}></textarea>
            <div className="btns">
                <div className="add" onClick={add}>Add</div>
                <Link to="/finishBlog"><div className="createBlog" onClick={(finishBlog)}>Create</div></Link>
            </div>
        </div>
    </div>
  )
}

export default Create