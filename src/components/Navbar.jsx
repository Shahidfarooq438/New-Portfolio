import React from 'react'
import logo from '../assets/logo.jpg'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaS, FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img src={logo} alt="" className="mx-2 w-10" />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://github.com/Shahidfarooq438" target='_blank'><FaGithub/></a>
            <a href="https://www.linkedin.com/in/shahid-farooq-540027229/" target='_blank'><FaLinkedinIn/></a>
            <a href="https://www.instagram.com/shahidfarooq_05/" target='_blank'><FaInstagram/></a>
            <a href="https://x.com/shahidfarooq438" target='_blank'><FaSquareXTwitter/></a>
        </div>
    </nav>
    
  )
}

export default Navbar
