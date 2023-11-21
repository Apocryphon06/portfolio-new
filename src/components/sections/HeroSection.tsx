import React from "react";
import ProfileImage from "../../assets/ProfileImage.jpeg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse items-center justify-around lg:mt-[150px] mt-10 gap-5 heroContainer">
      <div className="lg:text-6xl md:text-6xl text-4xl text-[#42446E] text-start font-medium tracking-wide lg:leading-snug">
        Hi{" "}
        <motion.div
          className="inline-block"
          initial={{ rotateZ: -20 }}
          animate={{
            rotateZ: [0, 20, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
        >
          👋
        </motion.div>
        , <br />
        My name is <br />
        <span className="bg-clip-text bg-gradient-to-l from-[#E70FAA] to-[#00C0FD] text-transparent">
          Aman
        </span>
        <br />I build things for web
      </div>

      <div className="bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] lg:w-[370px] w-[260px] h-[260px] lg:h-[370px] rounded-full flex justify-center items-center">
        <img
          className="lg:w-[359px] w-[250px] lg:h-[359px] h-[250px] rounded-full object-cover grayscale relative z-20"
          src={ProfileImage}
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroSection;
