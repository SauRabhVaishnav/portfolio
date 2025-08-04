import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <footer className='text-white py-4 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500'>Saurabh</h2>
      </div>

      {/* Navigation Links */}
      <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4 '>
        {[
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Education", id: "education" },
          { name: "Contact", id: "contact" },
          // { name: "Experience", id: "experience" },
        ].map((item, index) => (
          <button key={index} onClick={() => handleScroll(item.id)}
            className='hover:text-purple-500 text-sm sm:text-base my-1 cursor-pointer'>
            {item.name}
          </button>
        ))}
      </nav>

      {/* Social media Icons */}
      <div className='flex flex-wrap justify-center space-x-4 mt-6'>
        {[
          { icons: <FaFacebook />, link: "https://www.facebook.com/100rabh.vaishnav/" },
          { icons: <FaInstagram />, link: "https://www.instagram.com/100rabh_vaishnav/" },
          { icons: <FaLinkedin />, link: "https://www.linkedin.com/in/saurabh-vaishnav-821562211/" },
          { icons: <FaGithub />, link: "https://github.com/SauRabhVaishnav" }
        ].map((item, index) => (
          <a href={item.link} key={index} target='_blank' rel='noopener noreferrer'
            className='text-xl hover:text-purple-500 transition-transform transform hover:scale-110 duration-200'>
            {item.icons} </a>
        ))}
      </div>

      {/* CopyRight text */}
      <p className="text-sm text-gray-400 mt-8 flex flex-wrap justify-center">
        © 2025 Saurabh. All rights reserved.
      </p>
    </footer>
  )
}
// trigger redeploy
