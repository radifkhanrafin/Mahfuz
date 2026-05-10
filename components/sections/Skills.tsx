"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { skills } from "@/lib/data";

const categories = ["Frontend", "Backend", "Tools", "3D/Creative"];

const categoryColors: Record<string, string> = {
  Frontend: "text-accent border-accent/30 bg-accent/5",
  Backend: "text-accent-2 border-accent-2/30 bg-accent-2/5",
  Tools: "text-accent-3 border-accent-3/30 bg-accent-3/5",
  "3D/Creative": "text-pink-400 border-pink-400/30 bg-pink-400/5",
};

type Tech = {
  name: string;
  icon: string;
  category: string;
};

function MarqueeRow({ items, reverse = false }: { items: Tech[]; reverse?: boolean }) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden py-2">
      <div
        className={`flex gap-4 w-max ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((tech, i) => {
          const color = categoryColors[tech.category] || categoryColors.Frontend;

          return (
            <motion.div
              key={`${tech.name}-${i}`}
              whileHover={{ scale: 1.08, y: -4 }}
              className={`flex items-center gap-3 px-5 py-3 glass border rounded-full text-sm font-mono whitespace-nowrap cursor-default transition-all duration-200 ${color}`}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className="w-5 h-5 object-contain"
              />
              <span>{tech.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const row1 = skills.slice(0, 10);
  const row2 = skills.slice(10);

  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="Tech Stack"
          title="skills I"
          highlight="Work With"
          subtitle="A collection of tools and skills I use to bring ideas to life."
        />

        {/* Category legend */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const color = categoryColors[cat];
            const count = skills.filter((s) => s.category === cat).length;

            return (
              <div
                key={cat}
                className={`flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-mono ${color}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                {cat} ({count})
              </div>
            );
          })}
        </div>

        {/* Marquee rows */}
        <div className="space-y-4">
          <MarqueeRow items={row1} />
          <MarqueeRow items={row2} reverse />
        </div>

        {/* Grid view */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {skills.map((skill, i) => {
            const color =
              categoryColors[skill.category] || categoryColors.Frontend;

            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ y: -4, scale: 1.05 }}
                className={`glass border rounded-xl p-3 text-center text-xs font-mono transition-all duration-200 cursor-default ${color}`}
              >
                {skill.name}
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}