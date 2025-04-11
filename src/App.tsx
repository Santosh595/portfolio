import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const App: React.FC = () => {
  return (
    <div className="min-h-screen scroll-smooth">
      <Navbar />

      <section id="home">
        <Hero />
      </section>

      <section id="about">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default App;

