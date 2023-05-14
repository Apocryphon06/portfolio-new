import React from "react";
import Heading from "../Heading";
import { skills } from "../utils/helpers";

const TechStack = () => {
  return (
    <div className="my-[200px]">
      <Heading
        title="Tech Stack"
        subText="Technologies I’ve been working with recently"
      />

      <div className="flex justify-center items-center lg:mt-20 mt-10">
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 items-center lg:gap-20 gap-10">
          {skills.map((item) => (
            <img src={item.logo} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
