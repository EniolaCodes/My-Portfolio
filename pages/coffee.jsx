import React from "react";
import Image from "next/image";
import coffeeImg from "../public/assets/projects/coffeeImg.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const Coffee = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/40 z-10" />
        <Image className="absolute z-1" layout="fill" src={coffeeImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Coffee Shop App</h2>
          <h3>React Native / Expo / NativeWind / Lucide React Native</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mb-6">Overview</h2>
          <p>
            {" "}
            A delightful mobile application for coffee lovers, built with React
            Native and Expo. Discover, order, and enjoy premium coffee beverages
            with a seamless user experience. The app features a user-friendly
            interface, allowing users to browse a variety of coffee options and
            customize their orders. With smooth navigation and appealing
            visuals, the Coffee Shop app aims to enhance the coffee ordering
            experience for users on the go.
          </p>
          <Link href="https://youtube.com/shorts/3VtcsxWn4Kg?feature=share">
            <button className="px-8 py-2 mt-8 mr-8">Watch Demo</button>
          </Link>
          <Link href="https://github.com/EniolaCodes/alx-coffee-shop-app.git">
            <button className="px-8 py-2 mt-8">Code</button>
          </Link>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React Native
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Expo
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                NativeWind
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Lucide React Native
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

export default Coffee;
