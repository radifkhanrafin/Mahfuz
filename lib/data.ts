// lib/data.ts — All portfolio content in one place. Edit this to personalise.

// Projects
import wubcs from "../public/Project/wubcs.png";
import hirewave from "../public/Project/hirewave.png";
import lawyer from "../public/Project/lawyer.png";
import vessel from "../public/Project/vessel.png";
import resturent from "../public/Project/resturent.png";
import vijilan from "../public/Project/vijilan.png";
import nhims from "../public/Project/nhims.png";
import nearby_blood from "../public/Project/nearby_blood.png";

// Skills & Tech

export const skills = [
  {
    name: "HTML 5",
    icon: "/tech/html.png",
    category: "Frontend",
  },
  {
    name: "CSS 3",
    icon: "/tech/css.png",
    category: "Frontend",
  },
  {
    name: "Bootstrap CSS",
    icon: "/tech/bootstrap.png",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: "/tech/tailwind.png",
    category: "Frontend",
  },
  {
    name: "JavaScript",
    icon: "/tech/javascript.png",
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: "/tech/typescript.png",
    category: "Frontend",
  },
  {
    name: "React JS",
    icon: "/tech/reactjs.png",
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    icon: "/tech/redux.png",
    category: "Frontend",
  },
  {
    name: "Next.js",
    icon: "/tech/next.jpg",
    category: "Frontend",
  },
  {
    name: "Node JS",
    icon: "/tech/nodejs.png",
    category: "Backend",
  },
  {
    name: "Express JS",
    icon: "/tech/express.png",
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: "/tech/mongodb.png",
    category: "Backend",
  },
  {
    name: "Mongoose",
    icon: "/tech/mongoose.png",
    category: "Backend",
  },
  {
    name: "Socket.IO",
    icon: "/tech/socket.png",
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: "/tech/firebase.png",
    category: "Backend",
  },
  {
    name: "Three JS",
    icon: "/tech/threejs.jpg",
    category: "3D/Creative",
  },
  {
    name: "Git",
    icon: "/tech/git.png",
    category: "Tools",
  },
  {
    name: "GitHub",
    icon: "/tech/github.png",
    category: "Tools",
  },
  {
    name: "Figma",
    icon: "/tech/figma.png",
    category: "Tools",
  },
];

export const resume = {
  resumeUrl: "../public/Resume/MD_MAHFUZ_HOSSAIN.pdf",
};
export const personalInfo = {
  name: "Md Mahfuz Hossain",
  title: "MERN Stack & Next.js Developer",
  tagline: "I build things for the web.",
  bio: "A passionate full-stack developer from Bangladesh crafting pixel-perfect, performant web experiences. I specialise in React, Next.js, and the full MERN stack — turning complex problems into elegant digital solutions.",
  email: "mdmahfuzhossain278@gmail.com",
  location: "Dhaka, Bangladesh",
  github: "https://github.com/radifkhanrafin",
  linkedin: "https://www.linkedin.com/in/mahfuz-web-dev",
  facebook: "https://www.facebook.com/mahfuz.web.dev",
  upwork: "https://www.upwork.com/freelancers/~011dbc167e1a463e39",
  resumeUrl: "#",
  avatarUrl: "",
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "20+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Technologies", value: "19+" },
  ],
};

export const services = [
  {
    title: "Web Developer",
    description:
      "Building responsive, high-performance web applications with modern frameworks and best practices.",
    icon: "Globe",
    color: "accent",
  },
  {
    title: "React Native Developer",
    description:
      "Crafting cross-platform mobile apps with React Native — smooth, native-feeling experiences.",
    icon: "Smartphone",
    color: "accent-2",
  },
  {
    title: "Backend Developer",
    description:
      "Designing scalable REST APIs and server architecture with Node.js, Express, and MongoDB.",
    icon: "Server",
    color: "accent-3",
  },
];

// export const skills = [
//   { name: "HTML5", category: "Frontend" },
//   { name: "CSS3", category: "Frontend" },
//   { name: "Bootstrap", category: "Frontend" },
//   { name: "Tailwind CSS", category: "Frontend" },
//   { name: "JavaScript", category: "Frontend" },
//   { name: "TypeScript", category: "Frontend" },
//   { name: "React.js", category: "Frontend" },
//   { name: "Redux Toolkit", category: "Frontend" },
//   { name: "Next.js", category: "Frontend" },
//   { name: "Node.js", category: "Backend" },
//   { name: "Express.js", category: "Backend" },
//   { name: "MongoDB", category: "Backend" },
//   { name: "Mongoose", category: "Backend" },
//   { name: "Socket.IO", category: "Backend" },
//   { name: "Three.js", category: "3D/Creative" },
//   { name: "Git", category: "Tools" },
//   { name: "GitHub", category: "Tools" },
//   { name: "Figma", category: "Tools" },
//   { name: "Firebase", category: "Backend" },
// ];

export const achievements = [
  {
    title: "ICPC Regional Contest",
    organization: "ACM ICPC",
    year: "2024",
    description:
      "Participated in ACM ICPC Regional Contest and solved algorithmic problems under time pressure.",
    icon: "Trophy",
  },
  {
    title: "beecrowd & hackerrank 500+ Problems",
    organization: "LeetCode",
    year: "2023 - Present",
    description:
      "Solved 500+ DSA problems focusing on dynamic programming, graphs, and system design basics.",
    icon: "Code",
  },

  {
    title: "Open Source Contributor",
    organization: "GitHub Community",
    year: "2022 - Present",
    description:
      "Contributed to multiple open-source React and Node.js projects.",
    icon: "GitBranch",
  },
];

export const experiences = [
  {
    role: "MERN & Next.js  Developer",
    company: "Local Market Solutions",
    period: "2023 – Present",
    description:
      "Leading full-stack development of e-commerce and marketplace platforms. Architected scalable MongoDB schemas, built RESTful APIs, and delivered responsive React frontends.",
    tags: ["Next.js", "React", "Node.js", "MongoDB", "Express", "Redux"],
    type: "Full-time",
  },
  {
    role: "Front-End Developer & Trainer",
    company: "Webvolt Digital Agency",
    period: "2022 – 2023",
    description:
      "Developed client-facing web applications and mentored junior developers. Introduced component-driven development with React and streamlined the team's workflow with Git.",
    tags: ["React", "Next.js", "Tailwind CSS", "Figma"],
    type: "Full-time",
  },
];

export const education = [
  {
    degree: "B.Sc in Computer Science Engineering",
    institution: "World University of Bangladesh",
    period: "2020 – 2024",
    description:
      "Studied core CS fundamentals including data structures, algorithms, software engineering, database systems, and computer networks.",
    icon: "GraduationCap",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Shahid Bulbul Govt. College",
    period: "2018 – 2020",
    description:
      "Science group with focus on Mathematics, Physics, and Chemistry.",
    icon: "BookOpen",
  },
];

export const projects = [
  {
    title: "National Health Information Management System (NHIMS)",
    image: nhims,
    category: "Full Stack",
    description:
      "A scalable healthcare management platform that digitizes hospital operations with role-based access, patient management, appointment booking, electronic medical records, laboratory services, pharmacy management, and secure JWT-based authentication.",
    tags: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT",
      "React Query",
      "Zustand",
    ],
    features: [
      "Multi-role dashboards",
      "Hospital & patient management",
      "Appointment booking",
      "Lab & pharmacy workflow",
    ],
    liveUrl: "https://nhims-bd.vercel.app/",
    githubUrl: "https://github.com/radifkhanrafin/NHIMS",
    badge: "Featured",
    color: "primary",
  },
  {
    title: "Hire Wave",
    image: hirewave,
    category: "Full Stack",
    description:
      "A modern job board platform connecting employers and job seekers. Features real-time notifications, advanced filtering, and a dashboard for managing applications.",
    tags: ["React.js", "MongoDB", "Node.js", "Tailwind CSS", "JWT"],
    features: [
      "Real-time job alerts",
      "Company profiles",
      "Resume upload",
      "Application tracking",
    ],
    liveUrl: "https://hire-wave.web.app/",
    githubUrl: "https://github.com/ProgrammerShipon/HireWave-Client",
    badge: "Team",
    color: "accent",
  },
  {
    title: "Vijilan",
    image: vijilan,
    category: "Front-End",
    description:
      "Security monitoring dashboard with real-time threat detection, log analysis, and incident management workflows.",
    tags: ["React", "Node.js", "Socket.IO", "MongoDB", "Chart.js"],
    features: [
      "Live threat monitoring",
      "Log analytics",
      "Incident reports",
      "Role-based access",
    ],
    liveUrl: "https://vijilin.vercel.app/",
    githubUrl: "#",
    badge: "Team",
    color: "accent-2",
  },
  {
    title: "Nearby Blood",
    image: nearby_blood,
    category: "Full Stack",
    description:
      "Emergency blood donor finder app connecting donors and recipients by location with real-time availability updates.",
    tags: ["React Native", "Firebase", "Google Maps API", "Node.js"],
    features: [
      "Geolocation search",
      "Push notifications",
      "Donor profiles",
      "Emergency alerts",
    ],
    liveUrl: "https://nearby-blood.vercel.app/",
    githubUrl: "https://github.com/yourusername/nearby-blood-client",
    badge: "Solo",
    color: "accent-3",
  },
  {
    title: "WhatsApp Automation Workflow",
    image: "",
    category: "Automation",
    description:
      "Automated WhatsApp messaging workflow system for businesses — schedule messages, manage contacts, and track delivery.",
    tags: ["Node.js", "Baileys", "MongoDB", "Express", "React"],
    features: [
      "Bulk messaging",
      "Scheduled sends",
      "Contact groups",
      "Delivery reports",
    ],
    liveUrl: "#",
    githubUrl: "#",
    badge: "Solo",
    color: "accent",
  },
  {
    title: "Restaurant Management",
    image: resturent,
    category: "Full Stack",
    description:
      "Complete restaurant management system with POS, table management, menu builder, and real-time order tracking.",
    tags: ["React", "Node.js", "MongoDB", "Socket.IO", "Stripe"],
    features: [
      "POS system",
      "Order tracking",
      "Menu management",
      "Payment integration",
    ],
    liveUrl: "https://hungry-me.vercel.app/",
    githubUrl: "#",
    badge: "Solo",
    color: "accent-2",
  },
  {
    title: "Any Vessel",
    image: vessel,
    category: "Full Stack",
    description:
      "Maritime vessel tracking and management platform with live AIS data integration and fleet analytics.",
    tags: ["Next.js", "Node.js", "MongoDB", "Leaflet.js", "REST API"],
    features: [
      "Live tracking",
      "Fleet dashboard",
      "Route history",
      "Port management",
    ],
    liveUrl: "https://cheerful-cucurucho-60f8c8.netlify.app/",
    githubUrl: "https://github.com/foridislam332/anyvessel-client/tree/Mahfuz",
    badge: "Team",
    color: "accent-3",
  },
  {
    title: "Legal Lawyer",
    image: lawyer,
    category: "Full Stack",
    description:
      "Professional law firm website with case consultation booking, attorney profiles, and legal resource library.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "Sanity CMS"],
    features: [
      "Appointment booking",
      "Attorney profiles",
      "Blog/articles",
      "Live chat",
    ],
    liveUrl: "https://grand-centaur-e1b3c6.netlify.app/",
    githubUrl: "https://github.com/radifkhanrafin/Legal_lawyer",
    badge: "Solo",
    color: "accent",
  },
  {
    title: "WUB Computer Society",
    image: wubcs,
    category: "Frontend",
    description:
      "Official website for the WUB Computer Society club — events, member portal, blog, and project showcase.",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Framer Motion"],
    features: [
      "Event management",
      "Member portal",
      "News/blog",
      "Project gallery",
    ],
    liveUrl: "https://wubcs.vercel.app/",
    githubUrl: "#",
    badge: "Solo",
    color: "accent-2",
  },
];

export const testimonials = [
  {
    name: "Arif Hassan",
    role: "CEO, Local Market Solutions",
    content:
      "Rafiul delivered exceptional work on our marketplace platform. His attention to detail, clean code, and proactive communication made the whole project a pleasure.",
    avatar: "AH",
  },
  {
    name: "Nadia Rahman",
    role: "Project Manager, Webvolt Digital Agency",
    content:
      "One of the most skilled frontend developers I've worked with. Rafiul has a great eye for design and writes maintainable, well-structured React code.",
    avatar: "NR",
  },
  {
    name: "Tanvir Ahmed",
    role: "CTO, Return Hex",
    content:
      "Rafiul joined us as an intern but performed like a senior developer. He picked up our stack quickly and contributed meaningful features from day one.",
    avatar: "TA",
  },
  {
    name: "Sadia Islam",
    role: "Founder, Nearby Blood",
    content:
      "The blood donor app Rafiul built for us has already helped hundreds of people. His dedication to the project's mission was evident in every commit.",
    avatar: "SI",
  },
];
export const orbitItems = [
  {
    name: "React",
    color: "text-blue-400 border-blue-500/20 bg-blue-500/10",
    angle: 0,
  },
  {
    name: "Next.js",
    color: "text-white border-white/20 bg-white/5",
    angle: 72,
  },
  {
    name: "Node.js",
    color: "text-teal-300 border-teal-400/20 bg-teal-400/10",
    angle: 144,
  },
  {
    name: "TypeScript",
    color: "text-purple-300 border-purple-500/20 bg-purple-500/10",
    angle: 216,
  },
  {
    name: "MongoDB",
    color: "text-green-300 border-green-500/20 bg-green-500/10",
    angle: 288,
  },
];
