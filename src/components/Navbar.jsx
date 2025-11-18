import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, github, logo_m, facebook } from "../assets";
import linkedin from "../assets/linkedin.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll listener
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 100);
      }, 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = toggle ? "hidden" : "auto";
  }, [toggle]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-50 transition-colors duration-300 ease-in-out ${
        scrolled
          ? "bg-[#0b0b1c]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Social Icons */}
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo_m} alt="logo" className="w-10 h-10 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Mahfuz &nbsp;
              <span className="sm:block hidden">| Full-Stack Developer</span>
            </p>
          </Link>

          {/* Social Icons */}
          <div className="flex gap-3 justify-center md:justify-center ml-0 md:ml-4">
            <a
              href="https://www.facebook.com/mahfuz.web.dev"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-110 hidden lg:inline-block"
            >
              <img src={facebook} alt="facebook" className="w-9 h-9" />
            </a>
            <a
              href="https://www.linkedin.com/in/mahfuz-web-dev"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-110"
            >
              <img
                src={linkedin}
                alt="linkedin"
                className="w-9 h-9 border-2 border-blue-500 rounded-xl"
              />
            </a>
            <a
              href="https://github.com/radifkhanrafin"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-110"
            >
              <img
                src={github}
                alt="github"
                className="w-9 h-9 border-2 border-white rounded-full p-1"
              />
            </a>
            <a
              href="https://www.upwork.com/freelancers/~011dbc167e1a463e39"
              target="_blank"
              rel="noreferrer"
              className="transition-all hover:scale-110"
            >
              <img
                src="https://i.ibb.co.com/PsW9K3gJ/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png"
                alt="upwork"
                className="w-9 h-9 rounded-full"
              />
            </a>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`text-[18px] font-medium cursor-pointer transition-all duration-200 ${
                active === nav.title ? "text-white" : "text-gray-400"
              } hover:text-white`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center relative">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className={`w-[28px] h-[28px] object-contain cursor-pointer transition-all duration-300 ${
              toggle ? "filter invert" : ""
            }`}
            onClick={() => setToggle(!toggle)}
          />

          {/* Full Screen Animated Menu */}
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="fixed top-0 left-0 w-full h-screen z-50 backdrop-blur-xl bg-[#050816]/95 flex flex-col items-center pt-20"
              >
                {/* Animated Close Button */}
                <motion.button
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setToggle(false)}
                  className="text-white text-xl font-bold mb-10 p-2 rounded-full   hover:bg-white hover:text-[#050816] transition-all duration-300"
                >
                  ✕  Close
                </motion.button>

                {/* Nav Items */}
                <ul className="list-none flex flex-col gap-8 text-center">
                  {navLinks.map((nav, index) => (
                    <motion.li
                      key={nav.id}
                      initial={{ x: 100, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: 100, opacity: 0 }}
                      transition={{
                        delay: 0.1 * index,
                        type: "tween",
                        ease: "easeOut",
                        duration: 0.3,
                      }}
                      className={`text-[22px] font-semibold cursor-pointer transition-all duration-200 ${
                        active === nav.title ? "text-white" : "text-gray-300"
                      } hover:text-white hover:scale-110`}
                      onClick={() => {
                        setToggle(false);
                        setActive(nav.title);
                        const element = document.getElementById(nav.id);
                        if (element)
                          element.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      {nav.title}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
