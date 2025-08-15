import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import sfaridLogo from '../../assets/company_logo/logoSF.png'



const Navbar =() => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


// Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

  const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
};

  const menuItems = [
    { id: "about", label: "About"},
    { id: "skills", label: "Skills"},
    { id: "experience", label: "Experience"},
    { id: "work", label: "Work"},
    { id: "education", label: "Education"},
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition duration-300 px-[4vw] md:px-[4vw] lg:px-[8vw] ${
        isScrolled ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}>
      <div className='text-white py-1 flex justify-between items-center'>
        <div>
        <img src={sfaridLogo} alt="logo" className='w-[80px] h-[80px]' />
          {/* <span className='text-white text-3xl hover:text-[#8245ec]'>FARID</span> */}
        </div>
       

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) =>(
            <li key={item.id} className={`cursor-pointer hover:text-[#8245ec] ${activeSection === item.id ? "text-[#8245ec]" : ""}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>

            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <a 
            href="https://github.com/skhfarid"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/faridmsfh/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#8245ec]"
          >
            <FaLinkedin size={24} />
          </a>
        </div>

         {/* Mobile Menu Icon */}
         <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
            className='text-3xl text-[#8245ec] cursor-pointer' onClick={() => setIsOpen(true)}
            /> 
          )}
         </div>
      </div>

    {/*mobile menu items*/}
        {isOpen && (
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4/5 bg-[#050414] bg-opacity-50 backdrop-filter backdrop-blur-lg z-50 rounded-lg shadow-lg md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4 text-gray-300">
            {menuItems.map((item) => (
              <li 
              key={item.id}
              className={`cursor-pointer hover:text-white ${activeSection === item.id ? "text-[#8245ec]" : "" 
              }`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>
                  {item.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4'>
              <a 
                href="https://github.com/skhfarid"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="https://www.linkedin.com/in/faridmsfh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#8245ec]"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
            </ul>
          </div>
        )}
    </nav>
  );
};

export default Navbar;

