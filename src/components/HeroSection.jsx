import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center  mt-4 lg:mt-10'>
        <h1 className='text-4xl sm:text-6xl lg:7xl text-center tracking-wide hover:text-orange-500'>
            Virtual developer tools  
            <span className='bg-gradient-to-r from-yellow-500 to-orange-600 bg-clip-text text-transparent'>
              {" "}   for Everyone</span>
            </h1>
            <p className='mt-5 text-center px-4 py-4 hover:text-orange-500'>
                Experience the future of immersion <br />
                 Step into new worlds and endless possibilities with cutting-edge virtual reality technology.
            </p>
            <div className='flex mr-5'>
                <a href="#" className='mr-20 border rounded-md px-4 py-2 bg-gradient-to-r from-yellow-200 to-yellow-600 text-black'>Start for free</a>
                <a href="#" className='ml-10 border rounded-md px-4 py-2 bg-gradient-to-r from-yellow-200 to-yellow-600 text-black'>Read more</a>
            </div>
            <div className='flex justify-center mt-10 px-4'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-400 shadow-orange-400 mx-2 my-4'> <source src={video1} type="video/mp4" /> your broswer doesnt support </video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-400 shadow-orange-400 mx-2 my-4'> <source src={video2} type="video/mp4" /> your broswer doesnt support </video>
            </div>

    </div>
  )
}

export default HeroSection