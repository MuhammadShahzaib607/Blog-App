import React from 'react'
import "./createBlogWeb.scss"
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateBlogWeb = () => {
  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [successMsg, setSuccessMsg] = useState(false)
const navigate = useNavigate()

  const createHandler = ()=> {
    try {
      if (title === "" || subtitle === "") return
      axios.post("https://blog-app-gamma-murex.vercel.app/api/blogs/", {
        title,
        subTitle: subtitle
      })
      setTitle("")
      setSubtitle("")
      setSuccessMsg(true)
      setTimeout(()=> {
        setSuccessMsg(false)
        navigate("/")
      }, 4000)
    } catch (error) {
      console.log(error.message)
    }
  }


  return (
    <div className='createBlogWeb'>
       <div className="container">
         <div className="top">
            <h1>Create Your Blog Website</h1>
            <p> Start your own mini blog website where you can add categories 
              (like Next.js, React, AWS) and publish blogs under each one. 
              Each website will have its own space to manage and view blogs.</p>
        </div>
        <div className="bottom">
            <div className="inputContainer">
                <input type="text" placeholder='Enter your Title' onChange={(e)=> setTitle(e.target.value)} value={title} />
            <input type="text" placeholder='Enter your SubTitle' value={subtitle} onChange={(e)=> setSubtitle(e.target.value) } />
            </div>
<button onClick={createHandler}>Create</button>
<div className="succesMsg" style={{
  color: "green",
  fontSize: "14px",
  marginTop: "20px",
  display: successMsg ? "block" : "none"
}}>Your Blog Website Created Successfully</div>
        </div>
       </div>
    </div>
  )
}

export default CreateBlogWeb