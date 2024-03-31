import React, { useState } from 'react'

import { AiOutlineMenu , AiOutlineClose } from "react-icons/ai";

const Navbar = () => { 
  const [nav,setNav] =useState(false);

  const handleNav =() => {
    setNav(!nav)
  } 

  return (
    <div className='text-white  flex justify-between max-w-[1240px]  items-center h-28 p-3 '>
      <h1 className='w-full text-2xl font-bold text-[#00df9a]'>React.js</h1> 
        
        
          <ul className='hidden md:flex'>
            
            <li className='p-4'>Home</li>
            <li className='p-4'>Updates</li>
            <li className='p-4'>Jobs</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Blog</li>
          </ul>
          <div onClick={handleNav} className='block md:' >
            {nav ? <AiOutlineClose size={20} /> :<AiOutlineMenu size={(20)}/> } 
        
          </div>
          <div className={nav ? 'fixed left-0 top-1 w-[30%]  m-3 h-full border-r-gray-600 bg-[#000300] ease-in-out duration-500 ' :'fixed left-[-100%]' } >
           <h1 className='w-full text-2xl font-bold text-[#00df9a] m-3'>React</h1>  
          
          <ul className='uppercase'>
            
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Company</li>
            <li className='p-4 border-b border-gray-600'>Resources</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4'>Contact</li>
          </ul>
          </div>
          
    </div>
  )
}

export default Navbar 