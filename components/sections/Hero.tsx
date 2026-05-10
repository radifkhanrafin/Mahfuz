"use client";

import { orbitItems, personalInfo } from "@/lib/data";
import { useState, useEffect } from "react";

const roles = [
  "Full Stack Developer",
  "UI/UX Enthusiast",
  "React Specialist",
  "Open Source Contributor",
];
const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 3000);

    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6 pt-32 pb-16 bg-[#080c14]"
    >
      {/* Background blobs */}
      <div className="absolute w-[600px] h-[600px] -top-24 -left-24 rounded-full blur-[80px] bg-blue-500/10 animate-float" />
      <div className="absolute w-[500px] h-[500px] top-48 -right-24 rounded-full blur-[80px] bg-teal-400/10 animate-float-slow" />
      <div className="absolute w-[300px] h-[300px] bottom-0 left-1/2 -translate-x-1/2 rounded-full blur-[80px] bg-purple-400/10 animate-float" />

      {/* Dot grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#3d4f68_1px,transparent_1px)] bg-[length:40px_40px]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-[1fr_auto] gap-6 items-center">
        {/* LEFT CONTENT */}
        <div className=" ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-blue-500/20 bg-blue-500/10">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-sm text-teal-300 font-medium">
              Available for new opportunities
            </span>
          </div>

          {/* Title */}
          <h1 className=" text-4xl lg:text-7xl font-extrabold leading-tight text-white mb-5">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-teal-400 to-purple-400 bg-clip-text text-transparent animate-[gradient_4s_ease_infinite] bg-[length:200%]">
              {personalInfo.name}
            </span>
          </h1>

          {/* Roles */}
          <div className="text-xl sm:text-2xl text-gray-400 mb-6 flex items-center gap-2 h-10">
            <span className="text-white font-medium">
              {roles[roleIdx]}
            </span>
            <span className="text-blue-400 animate-pulse">|</span>
          </div>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed   mb-10">
            I craft exceptional digital experiences — from blazing-fast APIs to pixel-perfect UIs.
            3+ years shipping products that users love and businesses trust.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-3 rounded-xl font-medium text-white bg-gradient-to-r from-blue-500 to-indigo-500 shadow-lg hover:scale-105 transition"
            >
              Hire Me →
            </button>

            <button
              onClick={() => scrollToSection("skills")}
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              Skills
            </button>

            <button
              onClick={() => scrollToSection("projects")}
              className="px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition"
            >
              View Work
            </button>
          </div>


        </div>

        {/* RIGHT AVATAR */}
        <div className="relative hidden md:block">

          {/* OUTER ROTATING RING */}
          <div className="absolute inset-[-24px] rounded-full border border-dashed border-blue-500/20 animate-spin-slow" />

          <div className="absolute inset-[-10px] rounded-full border border-white/10" />

          {/* ORBIT CONTAINER */}
          <div className="relative w-[300px] h-[300px] flex items-center justify-center">

            {/* IMAGE FRAME */}
            <div className="relative w-[200px] h-[200px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_60px_rgba(79,142,247,0.25)] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">

              <img
                src="/Profile/mahfuz.png"
                alt="profile"
                className="w-full h-full object-cover"
              />

              {/* inner glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(79,142,247,0.15),transparent_60%)]" />
            </div>

            <div className="absolute inset-0 animate-spin-slow">
              {orbitItems.map((item) => (
                <div
                  key={item.name}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `
          rotate(${item.angle}deg)
          translateY(-150px)
          rotate(-${item.angle}deg)
        `,
                  }}
                >
                  <span
                    className={`px-3 py-1 text-xs rounded-full border backdrop-blur whitespace-nowrap ${item.color}`}
                  >
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}