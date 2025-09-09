import React, { useState } from 'react'
import "./navbar.scss"
import { MdOutlineMenu } from 'react-icons/md'
import { RxCross2 } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='navbar'>
            <div className="logo">
                <h2 onClick={()=> setIsOpen(false)}><Link to="/">CodeVerse</Link></h2>
            </div>
            <div className="navLinks">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/createBlogWeb">Create</Link></li>
                <li><a href="https://shahzaib-ai-model.vercel.app" target='_blank'>AI Model</a></li>
                <li><a href="https://muhammad-shahzaib-portfolio.vercel.app" target='_blank' >About Me</a></li>
            </div>

            <div className="menuIcon">
                { 
                !isOpen ?
                <MdOutlineMenu size={25} onClick={()=> setIsOpen(!isOpen)}/> :
                <RxCross2 size={25} onClick={()=> setIsOpen(!isOpen)}/> 
                }
            </div>

            {
                isOpen && <div className="toggleNavbar">
          <Link to="/"><li onClick={()=> setIsOpen(false)}>Home</li></Link>
            <Link to="/createBlogWeb"><li onClick={()=> setIsOpen(false)}>Create</li></Link>
            <a href="https://shahzaib-ai-model.vercel.app" target='_blank' ><li onClick={()=> setIsOpen(false)}>AI Model</li></a>
            <a href="https://muhammad-shahzaib-portfolio.vercel.app" target='_blank' ><li onClick={()=> setIsOpen(false)}>About Me</li></a>
        </div>
            }
        </div>
    )
}

export default Navbar