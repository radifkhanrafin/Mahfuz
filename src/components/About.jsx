import React from "react";
// import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex sm:justify-center lg:justify-between w-full flex-col lg:flex-row   lg:items-center ">

        
        <div className="text-justify">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Introduction</p>
            <h2 className={styles.sectionMidText}> Meet Mahfuz Hossain </h2>
            <h1 className="text-2xl font-mono">— MERN & Next.js Developer Bringing Ideas to Life.</h1>
          </motion.div>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >

            In today’s fast-paced digital world, building high-performing, modern web applications isn’t just a skill — it’s an art. I’m Mahfuz Hossain, a dedicated full-stack web developer with a sharp focus on crafting elegant, scalable, and responsive web solutions using the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js.
          </motion.p>

          <motion.div variants={textVariant()}>
            <h1 className="text-2xl font-mono mt-4">What I do </h1>
          </motion.div>
          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
          >

            As a developer, I bridge the gap between design and functionality — transforming ideas into dynamic, user-friendly digital experiences. With JavaScript and TypeScript as my core languages, I create seamless front-end interfaces using React.js and Next.js, while powering robust back-end systems with Node.js and Express. <br />

            Whether it’s building an interactive portfolio, a full-scale eCommerce platform, or a lightning-fast landing page, I bring a clear focus on performance, security, and user experience.
          </motion.p>
        </div>

        <div className="relative w-auto h-auto mx-auto">
          {/* Animated glowing gradient border */}
          <div className="w-full h-full rounded-full p-[5px] bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 animate-pulse shadow-xl">
            {/* Inner circle with transparent background */}
            <div className="w-full h-full rounded-full bg-[#050816]">
              <img
                src="https://i.ibb.co/PZFYBPKK/1720697818352-removebg-preview.png"
                alt="Profile"
                className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                style={{
                  maskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                  WebkitMaskImage:
                    'radial-gradient(circle at center, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
                  backgroundColor: 'transparent',
                }}
              />
            </div>
          </div>

          {/* Experience Tag */}
          <div className="-mt-[45px] text-center">
            <span className="inline-block px-4 py-1   font-semibold  bg-black text-white  rounded-full shadow-md">
              2.5 Years+
            </span>
          </div>
        </div>




      </div>


      {/* <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div> */}
    </>
  );
};

export default SectionWrapper(About, "about");
