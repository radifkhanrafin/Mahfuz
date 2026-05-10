"use client";

import { motion } from "framer-motion";
import { Trophy, Code, Award, GitBranch } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { achievements } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  Code,
  Award,
  GitBranch,
};

export default function Achievement() {
  return (
    <SectionWrapper id="achievements">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Achievements"
          title="Milestones &"
          highlight="Recognition"
          subtitle="Competitive programming, hackathons and contributions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, i) => {
            const Icon = iconMap[item.icon] || Trophy;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <GlowCard
                  className="p-8 h-full"
                  glowColor={i % 2 === 0 ? "cyan" : "purple"}
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
                    <Icon size={26} />
                  </div>

                  {/* Year */}
                  <span className="text-xs font-mono text-white/40 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white mt-4 mb-1">
                    {item.title}
                  </h3>

                  {/* Organization */}
                  <p className="text-sm text-accent mb-3 font-medium">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-white/40 text-sm leading-relaxed">
                    {item.description}
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