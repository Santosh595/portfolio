import { useState } from "react";
import { Link } from "react-scroll";

import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", to: "home" },
    { name: "AboutMe", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <h1 className="text-black text-2xl font-bold">
            santosh<span className="text-lime-500">.</span>
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // Adjust based on navbar height
              className="text-black font-medium px-2 py-1 cursor-pointer transition-colors duration-300 hover:border-b-2 hover:border-gray-500"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Desktop "Let's Talk" Button */}
        <div className="hidden md:block">
        <Link
              key="Contact"
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={-70} // Adjust based on navbar height
            >
              <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
            Let's Talk
          </button>
            </Link>
          
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 py-2 shadow-md">
          {navItems.map(({ name, to }) => (
            <Link
              key={name}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              className="block py-2 text-black cursor-pointer transition-colors duration-300 hover:text-gray-500"
              onClick={() => setIsOpen(false)}
            >
              {name}
            </Link>
          ))}
          <button className="w-full bg-black text-white px-4 py-2 mt-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
            Let's Talk
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
