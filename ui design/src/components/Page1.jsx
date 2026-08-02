import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Left from "./Left"

const Page1 = () => {
  return (
    <div className='min-h-screen w-full '>
        <Navbar/>
        <Hero/>
        <Left/>
        
    </div>
    
  )
}

export default Page1