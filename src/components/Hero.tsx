import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Download, MessageCircle } from "lucide-react";
import avatar from "../assets/avatar.png";
import resume from "../../public/Santosh_Kumar_Kar_Resume.pdf";

const Hero: React.FC = () => {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    if (vantaRef.current) {
      vantaEffect = NET({
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
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-4 py-10 md:py-0 overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 max-w-6xl w-full">
        {/* Avatar */}
        <div className="flex justify-center md:justify-start">
          <img
            src={avatar}
            alt="Developer Avatar"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 object-cover shadow-lg border-4 border-lime-300"
          />
        </div>

     
        <div className="text-center md:text-left">
          <h1 className="md:text-6xl text-3xl font-bold mb-4">I'm Santosh</h1>

          <div className="min-h-[60px] relative w-full flex justify-center md:justify-start">
            <div className="absolute top-0 md:text-3xl text-xl bg-amber-200 text-black border-4 border-lime-300 p-2 md:min-w-[460px] min-w-[260px] shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
              <TypeAnimation
                sequence={[
                  "I'M A WEB DEVELOPER ",
                  1000,
                  "I'M A FRONT-END DEVELOPER ",
                  1000,
                  "I'M A UI DEVELOPER ",
                  1000,
                  "I'M A REACT DEVELOPER ",
                  1000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row gap-4 items-center md:items-start">
            <a
              href={resume}
              download="Santosh_Kumar_Kar_Resume.pdf"
              className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-md shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105"
            >
              <Download size={20} /> Download Resume
            </a>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="flex items-center gap-2 bg-lime-500 text-black px-5 py-3 rounded-md shadow-md cursor-pointer transition-all duration-300 hover:bg-lime-600 hover:shadow-xl hover:scale-105"
            >
              <MessageCircle size={20} /> Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
