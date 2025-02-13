import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";

const App: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vantaRef.current) {
      const vantaEffect = NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 150.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 2.0,
        color: 0xadd938,
        backgroundColor: 0x0a0a0a,
        points: 11.0,
        maxDistance: 10.0,
        spacing: 20.0,
      });

      return () => {
        if (vantaEffect) vantaEffect.destroy();
      };
    }
  }, []);

  return (
      <div className="min-h-screen scroll-smooth">
        {/* Vanta.js Background */}
        <div ref={vantaRef} className="absolute inset-0 z-0"></div>

        {/* Content Sections */}
        <div className="min-h-screen">
      <Navbar />
      
      {/* Page Sections */}
      <section id="home" >
        <Hero />
      </section>

      <section id="about" >
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </div>
      </div>
  );
};

export default App;
