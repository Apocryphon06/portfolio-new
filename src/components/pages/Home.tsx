import React from "react";
import Footer from "../Footer";
import Header from "../Header";
import HeroSection from "../sections/HeroSection";
import Projects from "../sections/Projects";
import TechStack from "../sections/TechStack";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="lg:px-10 px-5">
        <HeroSection />
        <TechStack />
        <Projects />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
