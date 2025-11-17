import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { menu, close, github, logo_m, facebook,  } from "../assets";
import linkedin from "../assets/linkedin.svg";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Debounced Scroll Listener
  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setScrolled(window.scrollY > 100);
      }, 50); // 50ms delay for performance
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-colors duration-300 ease-in-out ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo + Social Icons */}
        <div className="flex items-center">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive("");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <img src={logo_m} alt="logo" className="w-9 h-9 object-contain" />
            <p className="text-white text-[18px] font-bold cursor-pointer flex">
              Mahfuz &nbsp;
              <span className="sm:block hidden"> | Full-Stack Developer</span>
            </p>
          </Link>

          <div className="flex gap-4 ml-5">
            <a href="https://www.facebook.com/mahfuz.web.dev" target="_blank">
              <img src={facebook} alt="facebook" className="w-9 h-9" />
            </a>
            <a
              href="www.linkedin.com/in/mahfuz-web-dev"
              target="_blank"
            >
              <img src={linkedin} alt="linkedin" className="w-9 h-9 border-2 border-blue-500 rounded-xl" />
            </a>
            <a href="https://github.com/radifkhanrafin" target="_blank">
              <img src={github} alt="github" className="w-9 h-9 border-white rounded-full p-1" />
            </a>
            <a href="https://www.upwork.com/freelancers/~011dbc167e1a463e39" target="_blank">
              <img src="https://i.ibb.co.com/PsW9K3gJ/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png" alt="upwork" className="rounded-full w-9 h-9" />
            </a>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                    // Smooth scroll to section
                    const element = document.getElementById(nav.id);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {nav.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
