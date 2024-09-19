import React from "react";
import Image from "next/image";
import file from "../assets/images/file.jpg";
//hidden md:block
const About = () => {
  const about_event = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eu`;
  return (
    <section className="padding pt-12">
      <section
        id="page1"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container text-white"
      >
        <div className="flex-1 flex justify-center items-center ">
          <Image
            src={file}
            alt=""
            loading="lazy"
            width="350"
            height="280"
            decoding="async"
            data-nimg="1"
            className=" object-contain rounded-md"
          />
        </div>
        <div className="flex m-5 flex-1 flex-col">
          <h2 className="font-palanquin text-4xl mb-10 font-bold lg:max-w-lg lg:text-start ">
            About Dhyuthi
          </h2>
          <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-lg leading-7 text-justify text-[#bbbcbc]">
            {about_event}
          </p>
          <div className="flex-1 flex justify-center items-center ">
            <h2 className="font-palanquin text-4xl mb-10 font-bold bg-gradient-to-r from-[#8ef285] via-[#22ff05] to-[#095802] bg-clip-text text-transparent lg:max-w-lg">
              October 13 | 14 | 15
            </h2>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
