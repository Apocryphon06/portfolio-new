import React, { useEffect } from "react";
import Heading from "../Heading";
import { skills } from "../utils/helpers";
// import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import Marquee from "react-fast-marquee";

const TechStack = ({ goto }: any) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.set(".techStack", {
      opacity: 0,
    });

    gsap.to(".techStack", {
      opacity: 1,
      ease: "power1.easeInOut",
      scrollTrigger: {
        trigger: ".heroContainer",
        start: "center",
        scrub: 1,
      },
    });
  });
  return (
    <div ref={goto} className="flex flex-col w-full min-h-screen stackContainer">
      <div className="flex justify-center items-center text-center techStack ">
        <Heading
          title="Tech Stack"
          subText="Technologies I’ve been working with recently"
        />
      </div>

      <div className="flex flex-col justify-center items-center lg:mt-20 mt-10 techStack gap-32">
        {/* <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center lg:gap-20 gap-10">
          {skills.map((item, index) => (
            <img src={item.logo} alt="" />
            // </motion.div>
          ))}
        </div> */}

        <Marquee>
          <div className="flex items-center">
            {skills.map((item, index) => (
              <img src={item.logo} alt="" className="w-[120px] h-[120px] mr-24" />
              // </motion.div>
            ))}
          </div>
        </Marquee>

        <Marquee direction="right">
          <div className="flex items-center">
            {skills.map((item, index) => (
              <img src={item.logo} alt="" className="w-[120px] h-[120px] mr-24" />
              // </motion.div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default TechStack;
