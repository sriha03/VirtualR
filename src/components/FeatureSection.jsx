import React from 'react'
import { features } from '../constants'

const FeatureSection = () => {
  return (
   <div className='relative mt-20  min-h-[800px] '>
     <div className='text-center'>
        <span className='text-orange-500 rounded-full h-10 px-2 py-2 text-sm'>FEATURE</span>
        <h2 className='text-3xl sm:text-5xl lg:text-7xl mt-5 font-medium tracking-wide'>Easily build your
            <span className='text-orange-500'> VR apps</span>
        </h2>        
     </div>
     <div className='flex flex-wrap  mt-10 lg:mt-20'>
        {features.map((feature,index)=>(
            <div key={index} className='w-full sm:1/2 lg:w-1/3'>
                <div className='flex'>
                    <div className='flex mx-6 h-10 w-10 p-2 px-2 py-2 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 '>
                        {feature.icon}
                    </div>
                    <div >
                      <h5 className='mt-1 mb-6' >{feature.text}</h5>  
                    <p className='text-gray-400 mt-4 text-md py-2 px-2 mb-20'>{feature.description}</p>
                    </div>
                </div>

            </div>
        ))}
     </div>
   </div>
  )
}

export default FeatureSection