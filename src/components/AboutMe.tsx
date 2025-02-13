const AboutMe = () => {
    return (
      <section className="bg-white text-black md:h-screen flex items-center justify-center">
        <div className="py-12 px-6 md:px-16 lg:px-32">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed">
              I’m a <strong>Front-End Developer</strong> skilled in <strong>React, Angular, JavaScript, HTML, and CSS</strong>, passionate about building dynamic, user-friendly, and accessible web experiences. I focus on <strong>performance optimization, responsive design, and intuitive UI/UX</strong> to create seamless digital interactions. Always eager to learn and innovate, I thrive on solving complex challenges. Let’s collaborate to craft visually stunning and high-performing applications! 🚀
            </p>
          </div>
  
          {/* Career Path Section */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-center">My Career Journey</h3>
            <div className="flex flex-col space-y-6">
              
              {/* Engineer at Tata Elxsi */}
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg transition">
                <div className="w-6 h-6 bg-lime-500 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-semibold">Engineer, Tata Elxsi</h4>
                  <p className="text-gray-600">Pune, Maharashtra | December 2024 - Present</p>
                </div>
              </div>
  
              {/* Intern at Tata Elxsi */}
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg transition">
                <div className="w-6 h-6 bg-lime-500 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-semibold">Intern, Tata Elxsi</h4>
                  <p className="text-gray-600">Pune, Maharashtra | January 2024 – June 2024</p>
                </div>
              </div>
  
              {/* Intern at Persistent Systems */}
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg transition">
                <div className="w-6 h-6 bg-lime-500 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-semibold">Intern, Persistent Systems</h4>
                  <p className="text-gray-600">Pune, Maharashtra | June 2023 – August 2023</p>
                </div>
              </div>
  
              {/* Education */}
              <div className="flex items-start space-x-4 p-4 hover:bg-gray-100 rounded-lg transition">
                <div className="w-6 h-6 bg-lime-500 rounded-full"></div>
                <div>
                  <h4 className="text-xl font-semibold">B.Tech. (Computer Science & Engineering)</h4>
                  <p className="text-gray-600">S’O’A University, Bhubaneswar | 2020 - 2024</p>
                </div>
              </div>
  
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMe;
  