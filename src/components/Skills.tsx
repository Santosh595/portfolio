import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  // Core Frontend
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    link: "https://reactjs.org/",
  },

  // Styling
  {
    name: "Tailwind CSS",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    link: "https://tailwindcss.com/",
  },
  {
    name: "Material UI",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
    link: "https://mui.com/",
  },

  // State Management & Cloud
  {
    name: "Redux",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    link: "https://redux.js.org/",
  },
  {
    name: "Firebase",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    link: "https://firebase.google.com/",
  },
  {
    name: "AWS",
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    link: "https://aws.amazon.com/",
  },

  // Version Control
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    link: "https://git-scm.com/",
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/",
  },
];

const Skills: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-10 xl:px-20">
      <div className="max-w-7xl mx-auto text-center" id="skills">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">Skills</h2>
        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={controls}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 hover:scale-105 transition-transform"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className="w-14 h-14 mb-3 object-contain"
              />
              <span className="text-white text-sm sm:text-base font-medium">{skill.name}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
