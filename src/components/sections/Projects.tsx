import { gsap } from "gsap";
import Heading from "../Heading";
import { useEffect } from "react";
import { projectList } from "../utils/helpers";
import link from "../../assets/icons/link.svg";
import gitIcon from "../../assets/icons/gitIcon.svg";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

// const Card = ({ data }: any) => {
//   return (
//     <div
//       style={{
//         boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
//       }}
//       className="lg:w-[330px] w-[290px] rounded-xl bg-[#fff] "
//     >
//       <div className="debug px-3 rounded-[16px] ">
//         <a href={data.live} target="__blank">
//           <img
//             className="w-full h-[200px] rounded-tl-xl rounded-tr-xl object-contain cursor-pointer rounded-[16px]"
//             // src="https://picsum.photos/400"
//             src={data.image}
//             alt=""
//           />
//         </a>
//       </div>

//       <div className="p-5 flex flex-col gap-4 relative">
//         <p className="lg:text-2xl text-xl text-[#323232] font-medium">
//           {data.name}
//         </p>
//         <p className="text-[#808080] lg:text-lg text-base leading-tight font-light h-[60px]">
//           {data.description}
//         </p>

//         <p className="text-[#42446E] text-base">
//           <span className="font-medium text-lg">Tech stack:</span>{" "}
//           {data.techStack}
//         </p>

//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-2">
//             <img className="w-[20px] h-[20px]" src={link} alt="" />
//             <a href={data.live} target="__blank">
//               <p className="text-base hover:underline cursor-pointer">
//                 Live Preview
//               </p>
//             </a>
//           </div>

//           <div className="flex items-center gap-2">
//             <img className="w-[20px] h-[20px]" src={gitIcon} alt="" />
//             <a href={data.repo} target="__blank">
//               <p className="text-base hover:underline cursor-pointer">
//                 View Code
//               </p>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

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
    <div ref={goto} className=" projectsContainer flex flex-col w-full min-h-screen mb-20">
      <div className="flex justify-center items-center text-center">
        <Heading title="Projects" subText="Things I’ve built so far" />
      </div>
      <div className="flex items-center justify-center lg:mt-20 mt-10">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-10 gap-10 w-10/12">
          {projectList.map((item) => (
            <div
              style={{
                boxShadow: "2px 2px 100px rgba(0, 0, 0, 0.2)",
              }}
              className="w-full bg-white hover:bg-gradient-to-t from-purple-300 to-cyan-400 rounded-[24px] relative  group flex-shrink-0 lg:p-6 p-5 flex flex-col gap-4 justify-between"
            >
              <div className="h-3/12 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.image}
                  className="rounded-[16px]"
                />
              </div>

              <div className="flex flex-col h-9/12 flex-shrink-0 group">
                <p className="font-medium lg:text-2xl text-lg  transition ease-linear duration-200">
                  {item.name}
                </p>

                <div className="h-16 my-4 lg:text-base text-sm  transition ease-linear duration-200">
                  <p>{item.description}</p>
                </div>

                <div className="h-20  transition ease-linear duration-200">
                  <p className="lg:text-base text-sm">
                    <span className="text-base font-medium">Tech Stack:</span>{" "}
                    {item.techStack}
                  </p>
                </div>

                <div className="flex items-center justify-end group-hover:translate-y-[-5px] translate-y-[5px] opacity-0 group-hover:opacity-100 transition ease-linear duration-200">
                  <a
                    href={item.live}
                    target="__blank"
                    className="text-base hover:underline cursor-pointer flex items-center gap-1"
                  >
                    Live demo{" "}
                    <img src="/link.svg" alt="link" className="w-5 h-5" />
                  </a>

                  {/* <a
                    href={item.repo}
                    target="__blank"
                    className="text-base hover:underline cursor-pointer"
                  >
                    View code
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
