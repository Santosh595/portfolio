import React from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <AboutMe />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;
