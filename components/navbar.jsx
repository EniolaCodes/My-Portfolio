import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='fixed w-full h-20 shadow-xl z-[100'>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Image src="/assets/mylogo2.png" alt='logo' width= "125" height="50"/>
      </div>
      <div>
        <ul>
          <link href='/'/>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
