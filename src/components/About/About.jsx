import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from "react-parallax-tilt";
import ProfilePhoto from "../../assets/ProfilePhoto.jpg";

export default function About() {
  return (
    <section
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 '
    >
      <div className='flex flex-col-reverse md:flex-row  justify-between items-center '>
        {/* Left section */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Saurabh
          </h2>

          {/* Typing Effect */}
          <h3 className='text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"'>
            <span className='text-white'>I am a </span>
            <span className='text-[#8245ec]'>
              <Typewriter
                words={['Fullstack Developer', 'Web Developer', 'Software Engineer', 'Coder']}
                loop={0}
                cursor
                cursorStyle='_'
                typeSpeed={100}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </h3>

          {/* About Paragraph */}
          <p className='text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed'>
            I’m a MERN stack developer who enjoys building web apps using MongoDB, Express.js, React, and Node.js.
            I've created projects like to-do apps and blogs that helped me improve my front-end and back-end skills.
            I'm now looking for an opportunity to learn more and contribute to real-world projects.
          </p>
          {/* Resume Button */}
          <a href="https://docs.google.com/document/d/1Y5nlIlSSCk69CekNIGg7qTJJ5svwfUnr/edit?usp=drive_link&ouid=113788360843180169532&rtpof=true&sd=true" target='_blank' rel='noopener noreferrer'
            className='inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105' style={{ background: "linear-gradient(90deg,#8245ec,#a855f7)", boxShadow: "0 0 2px #8245ec, 0 0 15px #8245ec", }}>Download CV</a>
        </div>

        {/* Right side */}
        <div className='md:w-1/2 flex justify-center md:justify-end'>
          <Tilt className='w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={1000} scale={1.05} transitionSpeed={1000} gyroscope={true}>
            <img
              src={ProfilePhoto} alt="Saurabh"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>

      </div>
    </section >
  );
}
