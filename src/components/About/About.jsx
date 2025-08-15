import { section, span } from 'framer-motion'
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from 'react-parallax-tilt'
import profileImage from "../../assets/work_logo/md. sheikh farid.jpeg"


const About =() => {
  return (
    <section
    id='about'
    className='py-24 px-[4vw] md:px-[4vw] lg:px-[8vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* left side */}
        <div className='grid justify-items-start md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight'>
          Hi, I am
        </h1>
        <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
        Sheikh FARID
        </h2>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
          <span className='text-white'>I am a </span>
          {/* <ReactTypingEffect
          text={[
            'Fullstack Developer',
            'WordPress Developer',
            'UI/UX Designer',
            'Coder',
          ]}
          speed={100}
          eraseSpeed={50}
          typingDelay={500}
          eraseDelay={2000}
          cursorRenderer={(cursor) => (
            <span className="text-[#8245ec]">{cursor}</span>
          )}
          /> */}
          <TypeAnimation
              sequence={['Fullstack Developer', 2000, 'WordPress Developer', 2000, 'UI/UX Designer', 2000, 'Coder', 2000,]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
          />
        </h3>
        <p className="text-base text-left sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed">
          I am a passionate WordPress website developer with over 4 years of professional experience. My dedication to developing high-quality websites is evident in all my work. I believe that excellent service starts with great communication
        </p>
        <a
            href="https://drive.google.com/file/d/162ToHl9Jo1zw6TMG1eD4DK3qjQFrx3dD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>

        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
        <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img src={profileImage} alt="Sheikh Farid" className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'/>
            
          </Tilt>
        </div>

      </div>

    </section>
    
  )
}

export default About


