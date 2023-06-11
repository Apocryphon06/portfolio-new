import React, { useRef } from "react";
import Footer from "../Footer";
import Header from "../Header";
import HeroSection from "../sections/HeroSection";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";

const Home = () => {
  const techStack: any = useRef();
  const projects: any = useRef();
  // scroll into view
  const handleTechStack = () => {
    techStack.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };
  const handleProjects = () => {
    projects.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "start",
    });
  };

  return (
    <React.Fragment>
      <Header handleTechStack={handleTechStack} handleProjects={handleProjects} />
      <div className="lg:px-10 px-5">
        <HeroSection />
        <TechStack goto={techStack} />
        <Projects goto={projects} />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
