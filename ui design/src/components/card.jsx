import React from 'react'
import cardimg from '../assets/cardimg.jpg'

const Card = () => {
  return (
    <div className='bg-zinc-100 w-100 h-50 rounded-4xl flex px-5 gap-5 py-5 '>
        <div className='w-30 h-40 bg-zinc-500 flex shrink-0 rounded-4xl overflow-hidden '>
        <img src={cardimg} alt="" className='w-full h-full object-cover'/>
        </div>

        <h1 className='py-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati, voluptates.
            
        </h1>

    </div>
  )
}

export default Card