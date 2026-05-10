"use client";
import { motion } from "framer-motion";
import { Globe, Smartphone, Server, PenTool } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Globe,
  Smartphone,
  Server,
  PenTool,
};

const colorMap: Record<string, string> = {
  accent: "text-accent border-accent/20 bg-accent/5 group-hover:bg-accent/10 group-hover:border-accent/40",
  "accent-2": "text-accent-2 border-accent-2/20 bg-accent-2/5 group-hover:bg-accent-2/10 group-hover:border-accent-2/40",
  "accent-3": "text-accent-3 border-accent-3/20 bg-accent-3/5 group-hover:bg-accent-3/10 group-hover:border-accent-3/40",
};

const glowMap: Record<string, string> = {
  accent: "group-hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
  "accent-2": "group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
  "accent-3": "group-hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
};

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-surface/50">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label="What I Do"
          title="My"
          highlight="Services"
          subtitle="Specialised in building modern, scalable digital solutions across the full stack."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            const colors = colorMap[service.color] || colorMap["accent"];
            const glow = glowMap[service.color] || glowMap["accent"];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group glass border border-white/7 rounded-2xl p-8 flex flex-col items-center text-center cursor-default transition-all duration-300 ${glow}`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl border flex items-center justify-center mb-6 transition-all duration-300 ${colors}`}
                >
                  {Icon && <Icon size={28} />}
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
