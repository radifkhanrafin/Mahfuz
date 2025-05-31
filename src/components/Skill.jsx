import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const shadowColors = [
    "rgba(219, 39, 119, 0.7)",  // pink-600
    "rgba(59, 130, 246, 0.7)",  // blue-600
    "rgba(34, 197, 94, 0.7)",   // green-600
    "rgba(234, 179, 8, 0.7)",   // yellow-600
    "rgba(139, 92, 246, 0.7)",  // purple-600
    "rgba(239, 68, 68, 0.7)",   // red-600
];

const SkillCard = ({ tool }) => {
    const [hoverShadow, setHoverShadow] = useState(null);

    const handleMouseEnter = () => {
        let newColor;
        do {
            newColor = shadowColors[Math.floor(Math.random() * shadowColors.length)];
        } while (newColor === hoverShadow);
        setHoverShadow(newColor);
    };

    const handleMouseLeave = () => {
        setHoverShadow(null);
    };

    return (
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-500 flex flex-col items-center justify-center p-4"
            style={{
                boxShadow: hoverShadow
                    ? `0 0 15px 4px ${hoverShadow}`
                    : "0 4px 6px rgba(0,0,0,0.1)",
                transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
        >
            <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-24 h-24 decagon-shape bg-white shadow-[0_0_20px_rgba(255,200,100,0.6)] transform transition-transform hover:scale-110 duration-300 p-[2px]">
                    <div className="w-full h-full decagon-shape primary-bg flex items-center justify-center">
                        <img
                            className="w-14 h-14 object-contain drop-shadow-lg animate-[float_3s_ease-in-out_infinite]"
                            src={tool.icon}
                            alt={tool.name}
                        />
                    </div>
                </div>
            </div>

            <p className="text-lg mt-4 text-center font-medium text-white drop-shadow">
                {tool.name}
            </p>
        </div>
    );
};



const Skills = () => {
    return (
        <div className="relative bg-transparent text-white min-h-screen py-10" id="skills">
            <motion.div variants={textVariant()}>

                <h2 className={`${styles.sectionSubText} text-center`}>
                     These technologies which i use to build my project
                </h2>
            </motion.div>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 px-5 lg:px-20 py-12"
            >
                {technologies.map((tool) => (
                    <SkillCard key={tool.name} tool={tool} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Skills, "");
