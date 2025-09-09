import React from 'react'
import "./blogCard.scss"
import { Link } from 'react-router-dom'

const BlogCard = ({title, desc, id, i}) => {
  return (
    <div className='blogCard'>
        <h1 className="title">{title}</h1>
        <p className="desc">{desc}....</p>
        <Link to={`/blog/${id}/${i}`}><button className="readBtn">Read Blog</button></Link>
    </div>
  )
}

export default BlogCard