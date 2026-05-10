"use client";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Experience"
          title="My Work"
          highlight="Journey"
          subtitle="The roles and responsibilities that shaped me as a developer."
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full bg-accent border-2 border-bg shadow-glow-purple md:-translate-x-2 mt-6 z-10" />

                  {/* Card */}
                  <div
                    className={`ml-16 md:ml-0 w-full md:w-[45%] ${isLeft ? "md:mr-auto md:pr-10" : "md:ml-auto md:pl-10"
                      }`}
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="glass w-96 border border-white/7 rounded-2xl p-6 hover:border-accent/20 hover:shadow-[0_0_30px_rgba(124,58,237,0.1)] transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="flex items-start justify-evenly mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
                            <Briefcase size={18} className="text-accent" />
                          </div>
                          <div>
                            <h3 className="font-display font-bold text-white text-base">
                              {exp.role}
                            </h3>
                            <p className="text-accent text-sm">{exp.company}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1  min-w-40">
                          <span className="text-xs font-mono text-white/40 bg-white/5 px-2 py-1 rounded-full border border-white/10">
                            {exp.period}
                          </span>
                          <span className="text-xs font-mono text-accent-2 bg-accent-2/5 px-2 py-1 rounded-full border border-accent-2/20">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-white/50 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono px-2.5 py-1 rounded-full bg-accent/5 border border-accent/15 text-white/70"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
