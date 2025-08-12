import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_client,
  live_link
}) => {

  const overview = description.overview || description.description || "";

  // State to toggle full overview text
  const [showFullOverview, setShowFullOverview] = useState(false);

  // Truncate length
  const truncateLength = 150;

  const toggleOverview = () => setShowFullOverview((prev) => !prev);
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="max-w-md mx-auto"
    >
      <div className="relative w-full border-white border-2 p-5 rounded-2xl bg-gray-900">
        {/* Project Image */}
        <div className="relative w-full h-[230px] overflow-hidden rounded-2xl">
          <div className="relative w-full h-[230px] overflow-hidden rounded-2xl group">
            <a href={live_link} target="_blank" rel="noopener noreferrer" aria-label={`${name} live demo`}>
              <img
                src={image}
                alt={`${name} project screenshot`}
                style={{ maxHeight: "460px", transition: "transform 8s linear" }}
                className="w-full rounded-2xl object-cover transform group-hover:-translate-y-[230px]"
              />
            </a>
          </div>


          {/* Source code button */}
          {source_code_link_client && (
            <div
              onClick={(e) => {
                e.stopPropagation();
                window.open(source_code_link_client, "_blank");
              }}
              className="absolute top-3 right-3 black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
              title="View Source Code"
            >
              <img
                src={github}
                alt="GitHub repository icon"
                className="w-1/2 h-1/2 object-contain hover:object-bottom transition-all duration-1000"
              />
            </div>
          )}
        </div>

        {/* Project Name */}
        <div className="mt-5">
          <a href={live_link} target="_blank" rel="noopener noreferrer">
            <h3 className="text-white font-bold text-[24px] hover:underline">{name}</h3>
          </a>
        </div>

        {/* Overview with toggle */}
        {overview && (
          <div className="mt-2 text-gray-300 text-[14px] leading-relaxed">
            <p>
              {showFullOverview || overview.length <= truncateLength
                ? overview
                : overview.slice(0, truncateLength) + "..."}
            </p>

            {overview.length > truncateLength && (
              <button
                onClick={toggleOverview}
                className="mt-1 text-sm text-blue-400 hover:underline focus:outline-none"
                aria-expanded={showFullOverview}
              >
                {showFullOverview ? "See Less" : "See More"}
              </button>
            )}
          </div>
        )}

        {/* Key Features */}
        {description.key_features && (
          <div className="mt-4">
            <h4 className="text-white font-semibold mb-2">Key Features:</h4>
            <ul className="list-disc list-inside text-gray-300 text-[14px] max-h-40 overflow-y-auto space-y-1">
              {description.key_features.map((feature, idx) => (
                <li key={`${name}-feature-${idx}`}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
