import { memo } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

const SkillCard = memo(({ tool }) => {
    return (
        <div
            className="skill-card backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center p-4"
        >
            <div className="w-28 h-28 flex items-center justify-center">
                <div className="w-24 h-24 decagon-shape bg-white shadow-[0_0_15px_rgba(255,200,100,0.4)] transform transition-transform hover:scale-110 duration-300 p-[2px]">
                    <div className="w-full h-full decagon-shape primary-bg flex items-center justify-center">
                        <img
                            className="w-14 h-14 object-contain drop-shadow-lg"
                            src={tool.icon}
                            alt={tool.name}
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>

            <p className="text-lg mt-4 text-center font-medium text-white drop-shadow">
                {tool.name}
            </p>
        </div>
    );
});

const Skills = () => {
    return (
        <div className="relative bg-transparent text-white min-h-screen py-10" id="skills">
            <motion.div variants={textVariant()}>
                <h2 className={`${styles.sectionSubText} text-center`}>
                    These technologies which I use to build my projects
                </h2>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-10 px-5 lg:px-20 py-12"
            >
                {technologies.map((tool) => (
                    <SkillCard key={tool.name} tool={tool} />
                ))}
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Skills, "skill");
