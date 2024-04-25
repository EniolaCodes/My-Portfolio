import Image from 'next/image'
import React from 'react'
import AboutImg from "../public/assets/about.jpg"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'> 
        <p className='uppercase text-xl tracking-widest text-[#D3A43E]'>About</p>
        <h2 className='py-2'>Who I am</h2>
        <p className='py-2 text-gray-600' ></p>
        <p className='py-2 text-gray-600'></p>
        <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={AboutImg} rounded-xl alt='about image'/>
        </div>
      </div>
    </div>
  )
}

export default About
