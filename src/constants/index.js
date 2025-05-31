import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  next,
  Bootstrap,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tcs,
  intelligence,
  sun,
  payment,
  intelligence2,
  rental,
  github,
  mongoose,
  wub
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Bootstrap CSS",
    icon: Bootstrap,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Next.js",
    icon: next,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mongoose",
    icon: mongoose,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "git hub",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },

];

const education = [
  {
    degree: "Bachelor of Science (BSc)",
    logo: wub,
    logobg: '#FFFFFF',

    status: "Running",
    dept: "Computer Science and Engineering", // or your actual field
    institution: "World University of Bangladesh", // or your actual university
    year: "2028" // replace with actual graduation year
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    logo: '',
    status: "Passed",
    dept: 'Science',
    institution: "Shahid Bulbul Govt. Collage", // replace with your actual college
    year: "2021"
  }
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Return Hex",
    icon: 'returnHexIcon',  // Replace with actual icon import or variable
    iconBg: "#F0F4F8",    // Light background color for the icon
    date: "January 2025 - April 2025",
    points: [
      "Developed and maintained full-stack web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented RESTful APIs to enable seamless communication between front-end and back-end services.",
      "Optimized front-end components for maximum performance across a range of devices using React.",
      "Collaborated with designers and back-end developers to create responsive and user-friendly interfaces.",
      "Participated in agile development processes including sprint planning, daily stand-ups, and code reviews.",
    ],
  },
  {
    title: "Front-End Developer & Trainer",
    company_name: "Webvolt Digital Agency",
    icon: 'webvoltIcon',  // Replace with actual icon import or variable
    iconBg: "#2563EB",  // Tailwind blue-600 for contrast
    date: "September 2023 - December 2024",
    points: [
      "Developed responsive, user-friendly front-end interfaces using React.js, HTML5, CSS3, and JavaScript.",
      "Conducted training sessions and workshops on modern web development technologies and best practices for junior developers and interns.",
      "Collaborated with cross-functional teams to translate design mockups into functional web pages.",
      "Implemented accessibility and performance optimizations to enhance user experience across devices.",
      "Mentored trainees in coding standards, debugging techniques, and project workflows to foster team growth and efficiency.",
    ],
  }
  ,
  {
    title: "MERN Stack Developer",
    company_name: "Local Market Solutions",
    icon: 'localMarketIcon',  // Replace with your actual icon or logo import
    iconBg: "#1F2937",      // A dark gray background for contrast
    date: "January 2022 - Present",
    points: [
      "Designed and developed dynamic e-commerce platforms tailored for local businesses using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Integrated payment gateways and optimized website performance for seamless user experience across devices.",
      "Implemented RESTful APIs to connect front-end interfaces with back-end databases securely and efficiently.",
      "Worked closely with clients to gather requirements, provide technical advice, and deliver customized software solutions on time.",
      "Maintained and updated existing applications to incorporate new features and improve security.",
    ],
  }
  ,


];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Jaser proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Jaser does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Jaser optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Payment App",
    description:
      // "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      "A full-featured web application developed using the MERN stack, designed to simulate the functionality of PayTM. This app supports user registration, authentication, and secure banking transactions. Built with modern tools and technologies such as React with Vite, Tailwind CSS for styling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: payment,
    source_code_link: "https://github.com/syedahmedullah14/PayTM-Project",
  },
  {
    name: "Company Portfolio",
    description:
      "Built a responsive portfolio using ReactJS, leveraging components and state management for a seamless user experience across devices. Developed a feature for dynamic theme changes, enhancing user engagement by allowing personalization of background and foreground colors through efficient state management.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap5",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: intelligence2,
    source_code_link: "https://int-elligence.co.uk/",
  },
  {
    name: "Rental Management System",
    description:
      "Developed a robust system for a construction equipment company to manage customer records, including transaction history, products, suppliers, and rental records, ensuring secure and efficient data storage and retrieval. Integrated a billing and invoicing system, allowing for accurate and streamlined financial transactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express.js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "green-text-gradient",
      },
    ],
    image: rental,
    source_code_link: "https://github.com/syedahmedullah14",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
