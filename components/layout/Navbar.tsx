"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, Github, Linkedin, Facebook, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
const socials = [
  {
    icon: Github,
    href: personalInfo.github,
    label: "",
    color: "hover:text-white hover:border-white/30",
  },
  {
    icon: Linkedin,
    href: personalInfo.linkedin,
    label: "",
    color: "hover:text-[#0A66C2] hover:border-[#0A66C2]/30",
  },
  {
    icon: Facebook,
    href: personalInfo.facebook,
    label: "",
    color: "hover:text-[#1877F2] hover:border-[#1877F2]/30",
  },
  {
    icon: Mail,
    href: `mailto:${personalInfo.email}`,
    label: "",
    color: "hover:text-accent hover:border-accent/30",
  },
];
const AnimatedNavLink = ({
  label,
  onClick,
}: {
  label: string;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      animate="rest"
      className="relative px-2 py-2 text-sm font-medium text-slate-600 hover:text-accent transition-colors duration-200 rounded-md overflow-hidden"
    >
      {label}

      {/* Bottom Border */}
      <motion.span
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{
          duration: 0.25,
          ease: "easeOut",
        }}
        className="absolute left-0 bottom-0 h-[1.5px] bg-accent"
      />

      {/* Right Border */}
      <motion.span
        variants={{
          rest: { height: 0 },
          hover: { height: "100%" },
        }}
        transition={{
          duration: 0.2,
          delay: 0.25,
          ease: "easeOut",
        }}
        className="absolute right-0 bottom-0 w-[1.5px] bg-accent"
      />

      {/* Top Border */}
      <motion.span
        variants={{
          rest: { width: 0 },
          hover: { width: "100%" },
        }}
        transition={{
          duration: 0.25,
          delay: 0.45,
          ease: "easeOut",
        }}
        className="absolute right-0 top-0 h-[1.5px] bg-accent"
      />

      {/* Left Border */}
      <motion.span
        variants={{
          rest: { height: 0 },
          hover: { height: "100%" },
        }}
        transition={{
          duration: 0.2,
          delay: 0.7,
          ease: "easeOut",
        }}
        className="absolute left-0 top-0 w-[1.5px] bg-accent"
      />
    </motion.button>
  );
};
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass  py-3" : "py-5"
        }`}
      >
        <div className="   mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20  flex items-center justify-center">
              <Code2 size={16} className="text-accent" />
            </div>
            <span className="font-bold text-lg">
              {/* {personalInfo.name.split(" ")[0]} */}
              Mahfuz
            </span>
          </a>

          {/* Social Links */}
          <div className="hidden md:flex gap-3 ">
            {socials.map(({ icon: Icon, href, label, color }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`flex items-center gap-2.5 px-4 py-3 rounded-xl glass  text-white/40 text-sm font-medium transition-all duration-200 ${color}`}
              >
                <Icon size={16} />
                {label}
              </motion.a>
            ))}
          </div>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <AnimatedNavLink
                  label={link.label}
                  onClick={() => handleNavClick(link.href)}
                />
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="/resume/Mahfuz_Hossain_Resume.pdf"
            target="_blank"
            className="hidden md:block px-4 py-2 rounded-full bg-accent/10  text-sm"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setMobileOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </motion.nav>

      {/* OVERLAY + MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-[80%] sm:w-[60%] h-full z-50 bg-[#0f0f0f] p-6 flex flex-col"
            >
              <button
                className="self-end mb-10"
                onClick={() => setMobileOpen(false)}
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left text-lg text-white/80 hover:text-white"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <a
                href="https://drive.google.com/file/d/1riKm2nwsXUGMs3r68Ya6ZXMIFnwjVr07/view?usp=sharing"
                download
                className="block md:hidden px-4 py-2 rounded-full bg-accent/10  text-sm"
              >
                Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
