import React from 'react';
import ProjectItem from './ProjectItem';
import LogisticsImg from '../public/assets/projects/logistics.PNG';

const Projects = () => {
  return (
    <div id='projects' className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#D3A43E]">Projects</p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Tracking Website"
            backgroundImg={LogisticsImg}
            tech="Next.js, Tailwind CSS"
            projectUrl="/trackage"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={LogisticsImg}
            tech="React, Next.js, Tailwind CSS"
            projectUrl="/weather"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={LogisticsImg}
            tech="React, Next.js, Tailwind CSS"
            projectUrl="/property"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={LogisticsImg}
            tech="React, Next.js, Tailwind CSS"
            projectUrl="/property"
          />
          <ProjectItem
            title="Property Finder"
            backgroundImg={LogisticsImg}
            tech="React, Next.js, Tailwind CSS"
            projectUrl="/property"
          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
