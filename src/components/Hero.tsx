import React from "react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Download, MessageCircle } from "lucide-react";
import avatar from "../assets/avatar.png";
import resume from "../assets/Santosh_Resume.pdf"; // Ensure the correct path

const Hero: React.FC = () => {
  return (
    <div className="md:h-screen flex md:flex-row md:justify-stretch flex-col items-center justify-center text-white relative z-10">
      {/* Avatar Image */}
      <img
        src={avatar}
        alt="Developer Avatar"
        className="rounded-full mb-6 md:ml-12"
      />
      
      <div className="text-center md:text-left">
        {/* Title */}
        <h1 className="md:text-6xl text-3xl font-bold mb-4">I'm Santosh</h1>

        {/* Animated Text */}
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
                "I'M AN ANGULAR DEVELOPER ",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row gap-4">
          {/* Download Resume Button */}
          <a
            href={resume}
            download="Santosh_Resume.pdf"
            className="flex items-center gap-2 bg-black text-white px-5 py-3 rounded-md shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105"
          >
            <Download size={20} /> Download Resume
          </a>

          {/* Get in Touch Button */}
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
  );
};

export default Hero;
