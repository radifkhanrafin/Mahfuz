"use client";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { education } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  BookOpen,
};

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          label="Education"
          title="Academic"
          highlight="Background"
          subtitle="The foundation behind the code."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => {
            const Icon = iconMap[edu.icon] || GraduationCap;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <GlowCard
                  className="p-8 h-full"
                  glowColor={i === 0 ? "purple" : "cyan"}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 ${
                      i === 0
                        ? "bg-accent/10 border-accent/20 text-accent"
                        : "bg-accent-2/10 border-accent-2/20 text-accent-2"
                    }`}
                  >
                    <Icon size={26} />
                  </div>

                  <span className="text-xs font-mono text-white/30 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>

                  <h3 className="font-display font-bold text-lg text-white mt-4 mb-1">
                    {edu.degree}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-3 ${
                      i === 0 ? "text-accent" : "text-accent-2"
                    }`}
                  >
                    {edu.institution}
                  </p>
                  <p className="text-white/40 text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
