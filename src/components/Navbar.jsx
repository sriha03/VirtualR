import React, { useState } from 'react'
import logo from "../assets/logo.png"
import {navItems} from "../constants/index"
import {Menu,X} from "lucide-react"

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    function handleNavbar(){
        setToggle(!toggle)
    }
  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/8'>
        <div className='container mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center flex-shrink-0'>
                    <img className ='h-10 w-10 mr-2' src={logo} alt="logo" />
                    <span className='text-xl tracking-right'>VirtualReality</span>
                </div>
                <ul className='hidden lg:flex ml-10 space-x-12'>
                    {
                        navItems.map((item, index) => (
                            <li key={index} className='text-neutral-300 hover:text-orange-500 cursor-pointer'>
                                {item.label}
                            </li>
                        ))
                    }
                </ul>
                <div className='hidden lg:flex  ml-auto space-x-6 items-center'>
                   
                    <a href="#" className='text-black hover:text-orange-500 px-3 py-3 border rounded-md bg-gradient-to-r from-white to-gray-600'>Sign In</a>
                    <a href="#" className='text-black hover:text-black px-4 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 border rounded-md'>Create account</a>
                </div>
                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={handleNavbar}>
                        {toggle?<X/>:<Menu/>}
                    </button>
                </div>
            </div>
            {toggle && 
            <div className='lg:hidden md:flex flex-col justify-center'>
                <ul className='flex flex-col space-y-1 justify-center lg:hidden '>
                    {
                        navItems.map((item, index) => (
                            <li key={index} className='text-neutral-300 hover:text-orange-500 cursor-pointer justify-center p-2 w-2 flex flex-col'>
                                {item.label}
                            </li>
                        ))
                    }
                
                </ul>
                <div className='flex space-x-6 justify-center' >
                <a href="#" className='mr-5 text-black hover:text-orange-500 px-4 py-4 border rounded-md bg-gradient-to-r from-white to-gray-600'>Sign In</a>
                <a href="#" className='text-black px-4 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 border rounded-md'>Create Account</a>
                </div>

            </div>
            }


        </div>
    </nav>
  )
}

export default Navbar