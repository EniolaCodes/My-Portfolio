import React from "react";
import ProjectItem from "./ProjectItem";
import LogisticsImg from "../public/assets/projects/logistics.PNG";
import WeatherImg from "../public/assets/projects/WeatherImg.PNG";
import QuizImg from "../public/assets/projects/quiz.PNG";
import CrestTechImg from "../public/assets/projects/cresttech.png";
import coffeeImg from "../public/assets/projects/coffeeImg.png";
import linkImg from "../public/assets/projects/linkImg.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="uppercase text-xl tracking-widest text-[#D3A43E]">
          Projects
        </p>
        <h2 className="py-4">What I Have Built</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Coffee Shop App"
            backgroundImg={coffeeImg}
            tech="React Native With Expo, NativeWind, Lucide React Native"
            projectUrl="/coffee"
          />
          <ProjectItem
            title="CrestTech Hub Website"
            backgroundImg={CrestTechImg}
            tech="React, Tailwindcss, Framer-Motion, React-query"
            projectUrl="/cresttech"
          />
          <ProjectItem
            title="Link Sharing Website"
            backgroundImg={linkImg}
            tech="Next.js, TypeScript, Firebase, Tailwindcss"
            projectUrl="/links"
          />
          <ProjectItem
            title="Tracking Website"
            backgroundImg={LogisticsImg}
            tech="Next.js, Tailwind, GoogleMap API"
            projectUrl="/trackage"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={WeatherImg}
            tech="React, Vanilla css, OpenWeatherMap API"
            projectUrl="/weather"
          />
          {/* <ProjectItem
            title="Quiz App"
            backgroundImg={QuizImg}
            tech="JavaScript, Vanilla css"
            projectUrl="/quiz"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
