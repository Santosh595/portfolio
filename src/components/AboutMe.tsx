const AboutMe = () => {
  return (
    <section className="bg-white text-black mt-8 sm:mt-10 md:mt-12 lg:mt-16 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center md:text-left mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-800">
            I’m a <strong>Front-End Developer</strong> skilled in{" "}
            <strong>React, Angular, JavaScript, HTML, and CSS</strong>, passionate about building
            dynamic, user-friendly, and accessible web experiences. I focus on{" "}
            <strong>performance optimization, responsive design, and intuitive UI/UX</strong> to
            create seamless digital interactions. Always eager to learn and innovate, I thrive on
            solving complex challenges. Let’s collaborate to craft visually stunning and
            high-performing applications! 🚀
          </p>
        </div>

        {/* Career Journey */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-8 text-center md:text-left">
            My Career Journey
          </h3>
          <div className="flex flex-col space-y-5 sm:space-y-6">
            {[
              {
                title: "Engineer, Tata Elxsi",
                location: "Pune, Maharashtra | December 2024 - Present",
              },
              {
                title: "Intern, Tata Elxsi",
                location: "Pune, Maharashtra | January 2024 – June 2024",
              },
              {
                title: "Intern, Persistent Systems",
                location: "Pune, Maharashtra | June 2023 – August 2023",
              },
              {
                title: "B.Tech. (Computer Science & Engineering)",
                location: "S’O’A University, Bhubaneswar | 2020 - 2024",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-4 sm:p-5 md:p-6 hover:bg-gray-100 rounded-lg transition"
              >
                <div className="w-5 h-5 sm:w-6 sm:h-6 mt-1 bg-lime-500 rounded-full flex-shrink-0"></div>
                <div>
                  <h4 className="text-lg sm:text-xl font-semibold">{item.title}</h4>
                  <p className="text-gray-600 text-sm sm:text-base">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
