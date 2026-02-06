import React from "react";
import Image from "next/image";
import linkImg from "../public/assets/projects/linkImg.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Links = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <Image className="absolute z-1" layout="fill" src={linkImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Link Sharing Website</h2>
          <h3>Next.js / TypeScript / Firebase / TailwindCSS</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-6">Overview</h2>
          <p className="text-gray-700 leading-relaxed">
            Nexus is a professional link-sharing platform designed specifically
            for developers. Built with <strong>Next.js 14</strong> and{" "}
            <strong>Firebase</strong>, this application features a real-time
            WYSIWYG editor that syncs seamlessly with a live mobile preview.
          </p>
          <br />
          <p className="text-gray-700 leading-relaxed">
            A key technical focus was data integrity; I implemented custom{" "}
            <strong>Regex validation</strong>
            to ensure all user-submitted social links are sanitized and
            correctly formatted. Furthermore, the platform adheres to{" "}
            <strong>A11y (Accessibility)</strong> standards, utilizing semantic
            HTML and high-contrast touch targets to ensure a professional
            experience for all users.
          </p>
          <Link href="https://alx-project-nexus-delta-one.vercel.app">
            <button className="px-8 py-2 mt-8 mr-8">Demo</button>
          </Link>
          <Link href="https://github.com/EniolaCodes/alx-project-nexus.git">
            <button className="px-8 py-2 mt-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Nextjs
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                TypeScript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Tailwindcss
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Context API
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

export default Links;
