import React from "react";
import me from "../../assets/me.jpg";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center">
      <div className="flex lg:flex-row flex-col-reverse items-center justify-around lg:mt-0 mt-10 gap-5 heroContainer w-full">
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
            Hrithik
          </span>
          <br />I build things for web
        </div>

        <div className="bg-gradient-to-b from-[#E70FAA] to-[#00C0FD] lg:w-[370px] w-[260px] h-[260px] lg:h-[370px] rounded-full flex justify-center items-center">
          <img
            className="lg:w-[359px] w-[250px] lg:h-[359px] h-[250px] rounded-full object-cover grayscale relative z-20"
            src={me}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
