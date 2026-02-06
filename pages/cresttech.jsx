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
          <p className="text-gray-700 leading-relaxed">
            <strong>CrestTech Hub</strong> is an emerging EdTech ecosystem
            designed to provide affordable access to in-demand tech skills.
            Currently in <strong>active development</strong>, the platform is
            being built to host live interactive sessions, expert mentorship
            tracks, and hands-on project management for aspiring developers.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            Serving as a <strong>Frontend Developer</strong> within a
            cross-functional team, my focus is on architecting a{" "}
            <strong>scalable component library</strong> and ensuring seamless
            navigation across the platform&apos;s core modules. I am responsible
            for translating design mockups into responsive interfaces and
            <strong> structuring the frontend architecture</strong> to support
            upcoming API integrations for mentorship and live-streaming
            features. This collaborative process emphasizes Agile methodologies,
            ensuring the UI is polished and accessible as the platform evolves
            toward its full release.
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
