import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import coindrift1 from "../assets/coindrift1.png";
import coindrift2 from "../assets/coindrift2.png";
import coindrift3 from "../assets/coindrift3.png";
import coindrift5 from "../assets/coindrift5.png";

const Projects: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  React.useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  const fadeIn = (delay = 0) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  });

  const images = [coindrift2, coindrift3, coindrift5];

  return (
    <section className="bg-white text-black py-16 px-6 md:px-16 lg:px-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          className="flex flex-col lg:flex-row items-center lg:items-start gap-10"
        >
          <div className="w-full lg:w-1/2">
            <div className="rounded-2xl overflow-hidden shadow-xl bg-gray-100 backdrop-blur-md mb-4">
              <motion.img
                src={coindrift1}
                alt="Main Screenshot"
                {...fadeIn(0)}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="hidden sm:flex justify-between gap-4">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  {...fadeIn(index * 0.1)}
                  className="flex-1 h-[200px] overflow-hidden rounded-xl shadow-md bg-gray-100 backdrop-blur-md"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>

            <div className="sm:hidden flex gap-4 overflow-x-auto scrollbar-hide p-2 mt-4 rounded-2xl bg-gray-100 shadow-xl backdrop-blur-md">
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  {...fadeIn(index * 0.1)}
                  className="min-w-[260px] h-[180px] rounded-xl overflow-hidden flex-shrink-0"
                >
                  <img
                    src={img}
                    alt={`Screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div {...fadeIn(0.3)} className="flex-1">
            <h3 className="text-2xl font-semibold mb-4">🚀 Coindrift – Modern Crypto Tracking App</h3>
            <p className="text-gray-700 mb-4">
              Coindrift is a sleek, responsive cryptocurrency tracker built with <strong>React JS</strong>. It offers a premium user experience with real-time coin data, visualizations, wishlist tracking, and a comparison tool — all in dark mode too!
            </p>

            <ul className="list-disc ml-5 text-gray-700 mb-6 space-y-1">
              <li>🌙 Dark Mode toggle</li>
              <li>💖 Wishlist functionality</li>
              <li>📈 Real-time interactive charts</li>
              <li>🔍 Live search and filtering</li>
              <li>🆚 Side-by-side coin comparison</li>
              <li>🖱️ Smooth UI animations</li>
              <li>📱 Fully responsive design</li>
            </ul>

            <div className="flex gap-4 flex-wrap">
              <a
                href="https://github.com/Santosh595/Coindrift"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 transition"
              >
                GitHub Code
              </a>
              <a
                href="https://coindrift.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-lime-500 text-black rounded-md shadow hover:bg-lime-600 transition"
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          {...fadeIn(0.5)}
          className="mt-16 text-center text-gray-600 italic text-lg"
        >
          More exciting projects are in development phase – coming soon! 🚧
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
