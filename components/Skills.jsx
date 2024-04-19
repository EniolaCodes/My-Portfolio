import Image from 'next/image'
import Skill from './Skill'
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import GitHub from '../public/assets/skills/github1.png';
import Nextjs from '../public/assets/skills/nextjs.png';
import React from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Javascript from '../public/assets/skills/javascript.png';
import Mongo from '../public/assets/skills/mongo.png';
import Node from '../public/assets/skills/node.png';
import Firebase from '../public/assets/skills/firebase.png';

const Skills = () => {
  return (
    <div className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
      <p className='uppercase text-xl tracking-widest text-[#D3A43E]'>Skills</p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
      <Skill Image={<Image src={Html} width={64} height={64} alt='/'/>}>HTML</Skill>
      <Skill Image={<Image src={Css} width={64} height={64} alt='/'/>}>CSS</Skill>
      <Skill Image={<Image src={GitHub} width={64} height={64} alt='/'/>}>GitHub</Skill>
      <Skill Image={<Image src={Javascript} width={64} height={64} alt='/'/>}> JavaScript</Skill>
      <Skill Image={<Image src={Tailwind} width={64} height={64} alt='/'/>}>Tailwind</Skill>
      <Skill Image={<Image src={React} width={64} height={64} alt='/'/>}>React</Skill>
      <Skill Image={<Image src={Node} width={64} height={64} alt='/'/>}>Node</Skill>
      <Skill Image={<Image src={Nextjs} width={64} height={64} alt='/'/>}>Next</Skill>
      <Skill Image={<Image src={Mongo} width={64} height={64} alt='/'/>}> Mongo</Skill>
      <Skill Image={<Image src={Firebase} width={64} height={64} alt='/'/>}>Firebase</Skill>
      </div>
      </div>
    </div>
  )
}

export default Skills
