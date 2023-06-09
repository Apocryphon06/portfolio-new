import React, { useEffect } from "react";
import Heading from "../Heading";
import { skills } from "../utils/helpers";
// import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

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
    <div ref={goto} className="my-[200px] stackContainer">
      <div className="flex justify-center items-center text-center techStack ">
        <Heading
          title="Tech Stack"
          subText="Technologies I’ve been working with recently"
        />
      </div>

      <div className="flex justify-center items-center lg:mt-20 mt-10 techStack">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center lg:gap-20 gap-10">
          {skills.map((item, index) => (
            // <motion.div
            //   initial={{ scale: 0 }}
            //   animate={{ scale: 1 }}
            //   transition={{
            //     type: "spring",
            //     stiffness: 200,
            //     ease: "easeInOut",
            //     delay: 0.2 * index + 1,
            //   }}
            // >
            <img src={item.logo} alt="" />
            // </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
