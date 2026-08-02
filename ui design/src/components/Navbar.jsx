import React from 'react'

const Navbar = () => {
  return (
    <div className=' flex justify-between'>
        <div className='px-15 py-10 text-4xl font-bold  '>TheOrdinary</div>
        <div className='flex gap-10 px-15 items-center font-medium text-lg  '>
            <button className='bg-white h-10 w-20'>Catalog</button>
            <button className='bg-white h-10 w-20'>About Us</button>
            <button className='bg-white h-10 w-20'>Reviews</button>
            <button className='bg-white h-10 w-24'>Contact Us</button>
            
        </div>
    </div>
  )
}

export default Navbar