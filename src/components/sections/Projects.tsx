import Heading from "../Heading";

import gitIcon from "../../assets/icons/gitIcon.svg";
import link from "../../assets/icons/link.svg";
import { projectList } from "../utils/helpers";
import { useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

const Card = ({ data }: any) => {
  return (
    <div
      style={{
        boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
      }}
      className="lg:w-[330px] w-[290px] rounded-xl bg-[#fff] "
    >
      <a href={data.live} target="__blank">
        <img
          className="lg:w-[330px] w-[290px] h-[200px] rounded-tl-xl rounded-tr-xl object-contain cursor-pointer"
          // src="https://picsum.photos/400"
          src={data.image}
          alt=""
        />
      </a>

      <div className="p-5 flex flex-col gap-4">
        <p className="lg:text-2xl text-xl text-[#323232] font-medium">
          {data.name}
        </p>
        <p className="text-[#808080] lg:text-lg text-base leading-tight font-light h-[60px]">
          {data.description}
        </p>

        <p className="text-[#42446E] text-base">
          <span className="font-medium text-lg">Tech stack:</span>{" "}
          {data.techStack}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img className="w-[20px] h-[20px]" src={link} alt="" />
            <a href={data.live} target="__blank">
              <p className="text-base hover:underline cursor-pointer">
                Live Preview
              </p>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <img className="w-[20px] h-[20px]" src={gitIcon} alt="" />
            <a href={data.repo} target="__blank">
              <p className="text-base hover:underline cursor-pointer">
                View Code
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = ({ goto }: any) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    gsap.set(".projectsContainer", {
      opacity: 0,
    });

    gsap.to(".projectsContainer", {
      opacity: 1,
      ease: "power1.easeInOut",
      scrollTrigger: {
        trigger: ".stackContainer",
        start: "center",
        scrub: 1,
      },
    });
  });
  return (
    <div ref={goto} className="my-[200px] projectsContainer">
      <div className="flex justify-center items-center text-center">
        <Heading title="Projects" subText="Things I’ve built so far" />
      </div>
      <div className="flex items-center justify-center lg:mt-20 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-20 gap-10">
          {projectList.map((item) => (
            <Card data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
