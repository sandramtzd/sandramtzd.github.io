import React from 'react'
import './socials.css'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className='socials'>
        <a href='https://www.linkedin.com/in/sandramtzd/' target='_blank'><FaLinkedinIn /></a>
        <a href='https://github.com/sandramtzd' target='_blank'><FaGithub /></a>
        <a href='https://medium.com/@sandramtzd' target='_blank'><FaMedium /></a>
      
    </div>
  )
}

export default Socials
