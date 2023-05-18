import React from "react";
import Heading from "../Heading";
import { skills } from "../utils/helpers";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <div className="my-[200px]">
      <div className="flex justify-center items-center text-center">
        <Heading
          title="Tech Stack"
          subText="Technologies I’ve been working with recently"
        />
      </div>

      <div className="flex justify-center items-center lg:mt-20 mt-10">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center lg:gap-20 gap-10">
          {skills.map((item, index) => (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 200,
                ease: "easeInOut",
                delay: 0.2 * index + 1,
              }}
            >
              <img src={item.logo} alt="" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
