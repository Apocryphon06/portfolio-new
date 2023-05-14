import React from "react";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center justify-around lg:mt-[150px] mt-10 gap-5">
      <div className="lg:text-6xl md:text-6xl text-4xl text-[#42446E] text-start font-medium tracking-wide lg:leading-snug">
        Hi 👋, <br />
        My name is <br />
        <span className="bg-clip-text bg-gradient-to-l from-[#E70FAA] to-[#00C0FD] text-transparent">Hrithik</span>
         <br />I build things for web
      </div>

      <div className="bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] lg:w-[370px] w-[260px] h-[260px] lg:h-[370px] rounded-full flex justify-center items-center">
        <img
          className="lg:w-[359px] w-[250px] lg:h-[359px] h-[250px] rounded-full"
          src="https://picsum.photos/400"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
