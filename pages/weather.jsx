import React from 'react';
import Image from 'next/image';
import WeatherImg from '../public/assets/projects/weather.PNG';
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link';
 
const Weather = () => {
  return (
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
             <Image className='absolute z-1' layout='fill'  src={WeatherImg}  alt='/'/>
       <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
            <h2 className='py-2'>Weather App</h2>
            <h3>React Js / Vanilla CSS</h3>
       </div>
     </div>
     <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
            <p>Project</p>
            <h2>Overview</h2>
            <p> This weather app, built with React and hosted on Vercel, lets you explore weather conditions in any city! Simply enter a city name 
                and the app displays current date and time, wind speed, humidity, 
                and a 5-day temperature forecast. It leverages the OpenWeatherMap API to deliver this real-time weather information.</p>
           <Link href="https://react-weather-app-livid-mu.vercel.app/">
           <button className='px-8 py-2 mt-8 mr-8'>Demo</button>
           </Link> 
           <Link href="https://github.com/EniolaCodes/react-weather-app.git">
           <button className='px-8 py-2 mt-8'>Code</button>
           </Link>
            
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='p-2'>
              <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>React Js
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>Vanilla CSS
            </p>
            <p className='text-gray-600 py-2 flex items-center'>
              <RiRadioButtonFill className='pr-1'/>OpenWeatherMap API</p>
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

export default Weather
