import React, { useEffect, useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemsClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
    // { id: "experience", label: "Experience" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-6 md:px-[7vw] lg:px-[20vw] ${isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-md" : "bg-transparent"
        }`}
    >
      <div className='text-white py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-xl font-semibold cursor-pointer tracking-wide'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span>Saurabh</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((items) => (
            <li
              key={items.id}
              className={`cursor-pointer transition-colors duration-200 hover:text-[#8245ec] ${activeSection === items.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemsClick(items.id)}>
                {items.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Icons - Desktop */}
        <div className='hidden md:flex space-x-4 text-gray-300'>
          <a
            href="https://github.com/SauRabhVaishnav"
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#8245ec] transition-colors duration-200'
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/saurabh-vaishnav-821562211/"
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-[#8245ec] transition-colors duration-200'
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-3xl text-[#8245ec] cursor-pointer'
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 max-w-md bg-[#050414]/90 backdrop-blur-md rounded-lg shadow-lg z-40 p-6 md:hidden">
          <ul className="flex flex-col items-center space-y-4 text-gray-300">
            {menuItems.map((items) => (
              <li
                key={items.id}
                className={`cursor-pointer hover:text-white transition-colors duration-200 ${activeSection === items.id ? "text-[#8245ec]" : ""
                  }`}
              >
                <button onClick={() => handleMenuItemsClick(items.id)}>
                  {items.label}
                </button>
              </li>
            ))}
            <div className='flex space-x-4 pt-4'>
              <a
                href="https://github.com/SauRabhVaishnav"
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/saurabh-vaishnav-821562211/"
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-300 hover:text-white'
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  );
}
