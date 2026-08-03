"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Users, User, Star } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import { projects } from "@/lib/data";
import Image from "next/image";

const categories = ["All", "Full Stack", "Frontend", "Automation"];

const colorMap: Record<string, string> = {
  accent: {
    badge: "bg-accent/10 border-accent/20 text-accent",
    border: "hover:border-accent/30",
    glow: "hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]",
    tag: "bg-accent/5 border-accent/15 text-accent/70",
  } as unknown as string,
  "accent-2": {
    badge: "bg-accent-2/10 border-accent-2/20 text-accent-2",
    border: "hover:border-accent-2/30",
    glow: "hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]",
    tag: "bg-accent-2/5 border-accent-2/15 text-accent-2/70",
  } as unknown as string,
  "accent-3": {
    badge: "bg-accent-3/10 border-accent-3/20 text-accent-3",
    border: "hover:border-accent-3/30",
    glow: "hover:shadow-[0_0_40px_rgba(245,158,11,0.15)]",
    tag: "bg-accent-3/5 border-accent-3/15 text-accent-3/70",
  } as unknown as string,
};

type ColorKey = "accent" | "accent-2" | "accent-3";

function getColor(colorName: string): Record<string, string> {
  return (colorMap[colorName as ColorKey] as unknown as Record<string, string>) || (colorMap["accent"] as unknown as Record<string, string>);
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <SectionWrapper id="projects">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          label="Projects"
          title="Featured"
          highlight="Work"
          subtitle="A selection of projects that showcase my technical skills and problem-solving approach."
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${activeCategory === cat
                ? "bg-accent text-white shadow-glow-purple"
                : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
                }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => {
              if (!project) return null;
              const colors = getColor(project.color);
              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  whileHover={{ y: -8 }}
                  className={`group glass border border-white/7 rounded-2xl overflow-hidden transition-all duration-300 ${colors.border} ${colors.glow} flex flex-col`}
                >
                  {/* Card image placeholder */}
                  <div className="relative h-40 bg-gradient-to-br from-white/3 via-transparent to-accent/5 border-b border-white/5 flex items-center justify-center overflow-hidden">
                    <div className="group relative overflow-hidden h-full w-full">
                      <div className="absolute inset-0 transition-transform duration-[5000ms] group-hover:-translate-y-full">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-grid opacity-30" />
                    <Star
                      size={32}
                      className={`relative z-10 opacity-20 ${project.color === "accent"
                        ? "text-accent"
                        : project.color === "accent-2"
                          ? "text-accent-2"
                          : "text-accent-3"
                        }`}
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={15} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <span
                        className={`text-xs font-mono px-2.5 py-1 rounded-full border ${colors.badge}`}
                      >
                        {project.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/30">
                        {project.badge === "Team" ? (
                          <Users size={11} />
                        ) : (
                          <User size={11} />
                        )}
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-white text-base mb-2">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-xs leading-relaxed mb-4 flex-1">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`text-xs font-mono px-2 py-0.5 rounded-md border ${colors.tag}`}
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-xs font-mono px-2 py-0.5 rounded-md border border-white/10 text-white/30">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium border transition-all duration-200 ${colors.badge} hover:opacity-80`}
                      >
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium glass border border-white/10 text-white/50 hover:text-white hover:border-white/20 transition-all duration-200"
                      >
                        <Github size={12} />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
