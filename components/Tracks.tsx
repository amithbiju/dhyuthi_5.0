import React from "react";
import Image from "next/image";
import single from "../assets/single.png";
import double from "../assets/double.png";
import triple from "../assets/triple.png";
const Tracks = () => {
  return (
    <div id="page2" className="w-full flex justify-center items-center ">
      <div className="md:w-[80%] m-3 mt-16 justify-center items-center">
        <h2 className=" font-palanquin text-4xl mb-10 font-bold bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] bg-clip-text text-transparent">
          Tracks
        </h2>

        <div className="max-w-[1380px] mx-auto grid lg:grid-cols-3 gap-8">
          <div className="w-full shadow-xl flex flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300">
            <div className="w-20 mx-auto mt-[-3rem] bg-white">
              <Image src={single} alt="" width="80" height="80" />
            </div>

            <h2 className="my-16 text-3xl font-bold text-center">TRAVERSE</h2>
            <p className="mt-[-3rem] text-center text-2xl font-serif">$149</p>

            <div className="text-center font-medium">
              <p className="text-justify py-2 border-b mx-8 mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] w-[200px] rounded-md font-medium my-8 mx-auto px-6 py-3 text-black">
              Register here
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300">
            <div className="w-20 mx-auto mt-[-3rem] bg-white">
              <Image src={double} alt="" width="80" height="80" />
            </div>

            <h2 className="my-16 text-3xl font-bold text-center">AURORA</h2>
            <p className="mt-[-3rem] text-center text-2xl font-serif">$149</p>

            <div className="text-center font-medium">
              <p className="text-justify py-2 border-b mx-8 mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Register here
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-16 rounded-lg hover:scale-105 duration-300">
            <div className="w-20 mx-auto mt-[-3rem] bg-white">
              <Image src={triple} alt="" width="80" height="80" />
            </div>

            <h2 className="my-16 text-3xl font-bold text-center">IGNITE</h2>
            <p className="mt-[-3rem] text-center text-2xl font-serif">$149</p>

            <div className="text-center font-medium">
              <p className="text-justify py-2 border-b mx-8 mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>

            <button className="bg-gradient-to-r from-[#efb98f] via-[#ef9a06] to-[#f1871d] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
              Register here
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center"></div>
      </div>
    </div>
  );
};

export default Tracks;