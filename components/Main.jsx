import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

const Main = () => {
  return (
    <div className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
            <p className='uppercase tracking-widest text-sm text-gray-600'>Let&#39;s build something together</p>
            <h1 className='py-4 text-gray-700'>Hi, I&#39;m <span className='text-[#D3A43E]'>Fatimah</span></h1>
            <h1 className=' py-2 text-gray-700'>A Frontend Web Developer</h1>
            <p className='py-4 text-gray-600 max-w-[70%] m-auto'>I&#39;m a Frontend developer specializing in crafting engaging digital experiences. Currently, I&#39;m focused on creating responsive and intuitive
               web applications that captivates users. While my focus is on frontend development, I am also actively expanding my skills in Backend technologies to deliver comprehensive solutions.</p>
            <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                  </div>
                  <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                  </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Main
