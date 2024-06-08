import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import Footer from './components/Footer'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div> 
    <Navbar/>
    <div className='mx-auto max-w-7xl pt-9 px-10'>
      <HeroSection/>
      <FeatureSection/>
      <WorkFlow/>
      <Pricing/>
      <Testimonials/>
      <Footer/>
      
    </div>   
    
  </div>
  )
}

export default App