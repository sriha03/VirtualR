import React from 'react'
import { CheckCircle2, SpaceIcon } from 'lucide-react'
import { pricingOptions } from '../constants'

const Pricing = () => {
  return (
    <div className='mt-10 border-b border-neutral-800 mb-5'>
        <h2 className='text-3xl sm:text-5xl lg:text-6xl text-center tracking-wide '>Pricing</h2>
        <div className='flex flex-wrap justify-center'>
            {pricingOptions.map((item,index)=>(
                 <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2 mt-4'>
                    <div className='bg-neutral-800 p-6 rounded-xl'>
                        <p>{item.title}
                            {item.title==="Pro" && <span className='text-orange-500 ml-2'>(Most Popular)</span>}
                        </p>
                        <p className='mt-2 '>
                            <span className='text-3xl mt-2 mr-2'> {item.price}</span>
                            <span className='text-gray-400'>/Month</span>
                        </p>
                        <ul>
                            {item.features.map((feature,index)=>(
                               <li key={index} className='flex items-center my-2 mx-2'>
                                <CheckCircle2/>
                                <span className='ml-2'>{feature}</span>
                               </li>
                            ))}
                        </ul>
                        <a href="#" className='inline-flex text-center justify-center items-center border rounded-md px-4 py-1 tracking-wide mt-2 text-white  w-full hover:bg-orange-500'>Subscribe</a>
                    </div>
                 </div>
            ))}
        </div>
    </div>
  )
}

export default Pricing