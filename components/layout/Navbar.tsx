"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";
import { personalInfo } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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
          scrolled ? "glass border-b border-white/5 py-3" : "py-5"
        }`}
      >
        <div className="   mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center">
              <Code2 size={16} className="text-accent" />
            </div>
            <span className="font-bold text-lg">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          {/* Desktop Links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="text-white/70 hover:text-white text-sm"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1riKm2nwsXUGMs3r68Ya6ZXMIFnwjVr07/view?usp=sharing"
            target="_blank"
            className="hidden md:block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm"
          >
            Resume
          </a>

          {/* Mobile Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
          >
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
              className="fixed top-0 right-0 w-[80%] sm:w-[60%] h-full z-50 bg-[#0f0f0f] border-l border-white/10 p-6 flex flex-col"
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
            className="hidden md:block px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-sm"
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