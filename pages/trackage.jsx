import React from 'react';
import Image from 'next/image';
import LogisticsImg from '../public/assets/projects/logistics.PNG';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
 
const Trackage = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
             <Image className='absolute z-1' layout='fill'  src={LogisticsImg}  alt='/'/>
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Tracking Website</h2>
            <h3>Next Js / Tailwind</h3>
       </div>
     </div>
     <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p> This web application, built with Next.js and deployed on Vercel, offers several features to manage packages and connect with 
              support. Admins can generate unique tracking IDs to monitor packages throughout the system. Users can chat with a support
               system that uses simulations to answer anticipated questions. While a Google Maps API is integrated for development purposes,
                it may not be available in the final product. Navigation between different parts of the application is handled by react-router. </p>
           <Link href="https://trackage.vercel.app/">
           <button className='px-8 py-2 mt-8 mr-8'>Demo</button>
           </Link> 
           <Link href="https://github.com/EniolaCodes/trackage.git">
           <button className='px-8 py-2 mt-8'>Code</button>
           </Link>
            
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>Next Js
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>Tailwind
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>Google API
            </p>
            </div>
           
            </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
     </div>
    </div>
  )
}

export default Trackage
