import React from 'react'
import Link from 'next/link'
const Banner = () => {
  return (
    <div>
        <div className=''>
        <img className='w-1000 h-180 object-cover' src="banner.jpg" alt="" />
        </div>

         <div className="absolute h-full space-y-8 top-80 left-30 ">
          <h2 className="text-4xl font-bold leading-snug sm:text-5xl text-zinc-800">
            Get Best Experiences <br />
            <span className="text-teal-800">for your stay here</span>
          </h2>
          <p className="md:w-4/5 text-zinc-600">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci necessitatibus <br /> eveniet fugit unde, in id looking for the next read, we make it easy and affordable.
          </p>
    </div>
    </div>
  )
}

export default Banner