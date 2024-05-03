import Image from 'next/image'
import React from 'react'
import ProfilePic from "../public/assets/profile.jpg"
import Link from 'next/link'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'> 
        <p className='uppercase text-xl tracking-widest text-[#D3A43E]'>About</p>
        <h2 className='py-2'>Who I am</h2>
        <p className='py-2 text-gray-600' >
            I bring mobile apps to life!  I craft user interfaces that not only look amazing but also seamlessly connect with APIs and backend systems. 
             I&#39;m a passionate learner, always on the lookout for new tech that can make my creations even better. Because for me, there&#39;s always more than
              one way to build something awesome. While I am fluent in the front-end languages of HTML, CSS, Javascript, React, and Next.js, I&#39;m a quick study when it comes to new tech stacks.  The key to being a great developer isn&#39;t mastering one specific language, it&#39;s choosing the perfect tool for the job.  
              That&#39;s the approach I take to every project, ensuring your app is not only functional but sets itself apart. </p>
        <p className='py-2 text-gray-600'></p>
        <Link href="/#projects">
            <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
        </Link>
        
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
            <Image src={ProfilePic} rounded-xl alt='profile picture'/>
        </div>
      </div>
    </div>
  )
}

export default About
