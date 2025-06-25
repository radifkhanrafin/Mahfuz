import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { education, experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const EducationCard = ({ edu }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={edu.year}
      iconStyle={{ background: edu.logobg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={edu.logo}
            alt='icon'
            className='w-auto h-auto object-cover rounded-full'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{edu.dept}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.institution}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {edu.status}
        </p>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
         passing Year {edu.year}
        </p>
      </div>

     
    </VerticalTimelineElement>
  );
};

const Education = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
         
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Educational Qualification.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {education.map((edu, index) => (
            <EducationCard
              key={`edu-${index}`}
              edu={edu}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
