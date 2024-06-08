import React from 'react'
import { testimonials } from '../constants'
import pic1 from '../assets/profile-pictures/user1.jpg'
import pic2 from '../assets/profile-pictures/user2.jpg'
import pic3 from '../assets/profile-pictures/user3.jpg'
import pic4 from '../assets/profile-pictures/user4.jpg'
import pic5 from '../assets/profile-pictures/user5.jpg'
import pic6 from '../assets/profile-pictures/user6.jpg'
const Testimonials = () => {
  return (
    <div className='mt-10 '>
        <div>
            <h2 className='text-3xl lg:text-5xl text-center'>What people are saying</h2>
            <div className='flex flex-wrap justify-center'>
                {testimonials.map((item,index)=>(
                   <div key={index} className='2-full sm:w-1/2 lg:w-1/3 px-4 py-2 mt-4'>
                    <div className='bg-neutral-800 p-6 rounded-lg text-md '>
                        <p>{item.text}</p>
                    <div className='flex items-center mt-4 '>
                        <img className='w-15 h-10 mr-3 rounded-full border-2 border-neutral-500' src={item.image} alt="image" />
                        <div >
                            <h6>{item.user}</h6>
                            <span className='text-gray-400 text-sm font-normal italic'>{item.company}</span>
                        </div>
                    </div>
                    </div>
                   </div>               


                ))}

            </div>
        </div>
    </div>
  )
}

export default Testimonials