import React from "react";
import Header from "../Header";
import Heading from "../Heading";

import address from "../../assets/icons/address.svg";
import work from "../../assets/icons/work.svg";
import { workData } from "../utils/helpers";

const ListItem = ({ data }: any) => {
  return (
    <div className="grid grid-flow-col justify-between border-b-2 pb-5 mt-5">
      <div>
        <p className="text-[#666] lg:text-lg text-base">{data?.role}</p>
        <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-5 md:gap-5 gap-1">
          {/* Work */}
          <div className="flex items-center gap-2 mt-2">
            <img className="w-[18px] h-[18px]" src={work} alt="" />
            <p className="lg:text-base text-sm text-[#666]">{data?.company}</p>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2 mt-2">
            <img className="w-[18px] h-[18px]" src={address} alt="" />
            <p className="lg:text-base text-sm text-[#666]">{data?.location}</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="lg:w-[150px] md:w-[150px] w-[100px]">
          <p className="bg-[#D7FFE0] lg:text-base text-sm text-[#018C0F] px-3 py-2 rounded-full flex justify-center items-center flex-shrink-0">
            {data?.type}
          </p>
        </div>
        <p className="lg:text-base text-sm text-[#666] mt-2">{data?.period}</p>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:px-40 px-5">
        <div className="my-10">
          <Heading title="About" />
          <p className="text-lg text-[#666] lg:w-[708px] md:w-[500px] w-full">
            The Generator App is an online tool that helps you to export
            ready-made templates ready to work as your future website. It helps
            you to combine slides, panels and other components and export it as
            a set of static files: HTML/CSS/JS.
          </p>
        </div>

        <div className="my-10">
          <Heading title="Work Experience" />

          {workData.map((item: any) => (
            <ListItem data={item} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default About;
