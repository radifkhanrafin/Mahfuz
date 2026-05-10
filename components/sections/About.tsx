"use client";
import { motion } from "framer-motion";
import { User, Zap, Coffee, Award } from "lucide-react";
import SectionWrapper from "@/components/shared/SectionWrapper";
import SectionHeading from "@/components/shared/SectionHeading";
import GlowCard from "@/components/shared/GlowCard";
import { personalInfo } from "@/lib/data";
import Image from "next/image";
import profile from "../../public/Profile/mahfuz.png";
const statIcons = [Award, Zap, User, Coffee];

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto ">
        <SectionHeading

          label="About Me"
          title="Passionate Developer,"
          highlight="Problem Solver"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Decorative avatar placeholder */}
              <div className="w-full max-w-sm mx-auto lg:mx-0 aspect-square rounded-3xl bg-gradient-to-br from-accent/20 via-surface to-accent-2/20 border border-white/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-50" />
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center mx-auto mb-4">
                    <User size={40} className="text-accent" />
                  </div>
                  <Image
                    src={profile}
                    alt="Profile"
                    width={800}
                    height={600}
                    className="object-cover"
                  />


                </div>
                {/* Corner glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 blob-purple" />
                <div className="absolute -bottom-10 -left-10 w-32 h-32 blob-cyan" />
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="flex w-1/2 ml-12  mt-5 justify-center items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/30 text-accent font-medium hover:bg-accent/20 transition-all duration-200"
              >
                Get In Touch
              </motion.a>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 text-justify"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-accent font-medium mb-2">
                Introduction
              </p>

              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                Meet Mahfuz Hossain
              </h2>

              <h1 className="text-xl font-mono text-accent">
                — MERN & Next.js Developer Bringing Ideas to Life.
              </h1>
            </div>

            <p className="text-white/50 leading-relaxed text-[17px]">
              In today’s fast-paced digital world, building high-performing,
              modern web applications isn’t just a skill — it’s an art.
              I’m Mahfuz Hossain, a dedicated full-stack web developer with
              a sharp focus on crafting elegant, scalable, and responsive
              web solutions using the MERN stack (MongoDB, Express.js,
              React, Node.js) and Next.js.
            </p>

            <div>
              <h3 className="text-2xl font-display font-bold text-white">
                What I Do
              </h3>
            </div>

            <p className="text-white/50 leading-relaxed text-[17px]">
              As a developer, I bridge the gap between design and functionality
              — transforming ideas into dynamic, user-friendly digital experiences.
              With JavaScript and TypeScript as my core languages, I create seamless
              front-end interfaces using React.js and Next.js, while powering robust
              back-end systems with Node.js and Express.
              <br />
              <br />
              Whether it’s building an interactive portfolio, a full-scale
              eCommerce platform, or a lightning-fast landing page, I bring a
              clear focus on performance, security, and user experience.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "Next.js",
                "Node.js",
                "TypeScript",
                "MongoDB",
                "Tailwind",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full font-mono bg-accent/10 border border-accent/20 text-accent"
                >
                  {tag}
                </span>
              ))}
            </div>


          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {personalInfo.stats.map((stat, i) => {
            const Icon = statIcons[i];
            return (
              <GlowCard key={stat.label} className="p-6 text-center" glowColor="purple">
                <Icon size={22} className="text-accent mx-auto mb-3" />
                <div className="text-3xl font-display font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
