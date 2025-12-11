import React from "react";
import Image from "next/image";
import CrestTechImg from "../public/assets/projects/cresttech.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const CrestTech = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          src={CrestTechImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">CrestTech Website</h2>
          <h3>React / Tailwindcss / Framer-motion/ React-Query</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-6">Overview</h2>
          <p>
            {" "}
            CrestTech Hub is an online learning platform that helps learners
            gain in-demand tech skills affordably. It offers live interactive
            classes, expert mentorship, hands-on projects, and real-world
            training opportunities. Learners can build portfolios, connect with
            industry professionals, and access internships through the platform.
            The project was developed collaboratively by a team of designers,
            backend engineers, and frontend developers. I contributed as a
            frontend developer, focusing on building responsive, accessible, and
            user-friendly interfaces. My work involved translating design
            mockups into functional web pages and ensuring smooth navigation
            across devices. I also collaborated with backend developers to
            integrate APIs for live classes and mentorship features. Testing and
            debugging were key parts of my role to deliver a polished interface.
            The teamwork fostered agile collaboration and strengthened my
            communication skills. Ultimately, CrestTech Hub became a scalable
            platform that empowers learners to advance their careers in
            technology.
          </p>
          <Link href="https://www.cresttech.org/">
            <button className="px-8 py-2 mt-8 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/Cresttechhub/crestFrontend.git">
            <button className="px-8 py-2 mt-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Framer-motion
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React-Query
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default CrestTech;
