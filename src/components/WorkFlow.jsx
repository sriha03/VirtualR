import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import Img from '../assets/code.jpg'
import { checklistItems } from '../constants'


const WorkFlow = () => {
  return (
    <div className='mt-10 '> 
    <h2 className='text-3xl lg:text-5xl text-center tracking-wide'>Accelerate your 
      <span className='text-orange-500 '>{" "}coding workflow</span>
      </h2>
      <div className='flex flex-wrap justify-center'>
        <div className=' p-2 w-full lg:w-1/2'>
          <img src={Img} alt="Code" />
        </div>
        <div className='pt-10 w-full lg:w-1/2'>
          {checklistItems.map((item,index)=>(
            <div key={index} className='flex mb-10'>
              <div className='flex items-center justify-center h-10 w-10 mx-6 rounded-full text-green-400 p-2'>
                <CheckCircle2/>
              </div>
                <div>
                  <h5 className='text-xl'>{item.title}</h5>
                  <p className='text-gray-400'>{item.description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkFlow