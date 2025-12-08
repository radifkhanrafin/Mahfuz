import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  git,
  figma,
  next,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  tcs,
  intelligence,
  sun,
  github,
  mongoose,
  wub,
  bootstrap,
  react,
  tailwind,
  html,
  css,
  redux,
  nodejs,
  express,
  mongodb,
  socket,
  firebase,
  // hirewave,
  lawyer,
  vessel,
  wubcs,
  bulbul,
  webVolt,
  hirewave,
  hex,
  resturent,
  vijilan,
  nearby_blood

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skill",
    title: "Skill",
  },
  {
    id: "project",
    title: "Project",
  },
  {
    id: "experience",
    title: "Experience",
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
    icon: bootstrap,
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
    icon: react,
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
    name: "Express JS",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Mongoose",
    icon: mongoose,
  },
  {
    name: "Socket.IO",
    icon: socket,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];


const education = [
  {
    degree: " B.Sc in Computer Science Engineering",
    logo: wub,
    logobg: '#FFFFFF',

    status: "Complete",
    dept: "Computer Science and Engineering",
    institution: "World University of Bangladesh",
    year: "2024"
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    logo: bulbul,
    status: "Passed",
    dept: 'Science',
    institution: "Shahid Bulbul Govt. Collage",
    year: "2021"
  }
];

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company_name: "Return Hex",
    icon: hex,  // Replace with actual icon import or variable
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
    icon: webVolt,  // Replace with actual icon import or variable
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
    icon: "https://i.ibb.co.com/PsW9K3gJ/png-clipart-upwork-computer-icons-freelancer-others-miscellaneous-text-thumbnail.png",  
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
  // hire wave
  {
    name: "Hire Wave - Hiring Agency",
    projectType: "Client Project",
    category: "Web App", // <-- added
    team: true,
    description: {
      "description": "Celebrating the creation of Hirewave: A game-changing hiring agency that connects businesses with top global talent effortlessly...",
      "key_features": [
        "Talent Marketplace...",
        "Simple Matching System...",
        "Secure Payments...",
        "Project Management Tools...",
        "Review and Rating System...",
        "Custom Job Posting...",
        "Real-Time Messaging...",
        "Global Reach..."
      ]
    },
    tags: [
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "express.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "fire-base", color: "green-text-gradient" }
    ],
    image: hirewave,
    source_code_link_client: "https://github.com/ProgrammerShipon/HireWave-Client",
    source_code_link_server: "https://github.com/ProgrammerShipon/HireWave-Server",
    live_link: "https://hire-wave.web.app/",
  },

  // Vijilan
  {
    name: "Vijilan - Cybersecurity Solutions Platform",
    projectType: "Client Project",
    category: "Web App",
    team: false,
    description: { 
      overview: "Vijilan is a comprehensive React-based web application...",
      key_features: [
        "Multi-page Application...",
        "Responsive Design...",
        "MSP Partner Programs...",
        "Case Studies...",
        "Blog System...",
        "Dashboard...",
        "Pricing Tools...",
        "Resource Center...",
        "Professional Services Portfolio..."
      ]
    },
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "vite", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "react-router", color: "green-text-gradient" },
      { name: "npm", color: "yellow-text-gradient" }
    ],
    image: vijilan,
    source_code_link_client: " ",
    live_link: "https://vijilin.vercel.app/"
  },

  // Nearby Blood
  {
    name: "Nearby Blood",
    projectType: "Personal/Client Project",
    category: "Web App",
    team: false,
    description: {
      description: "Nearby Blood is a platform designed to connect blood donors...",
      key_features: [
        "Donor & Recipient Registration...",
        "Search Nearby Donors...",
        "Real-Time Notifications...",
        "Profile Management...",
        "Admin Panel...",
        "Secure Authentication...",
        "Emergency Requests...",
        "Direct Contact..."
      ]
    },
    tags: [
      { name: "next.js", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "node.js", color: "green-text-gradient" },
      { name: "express.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" }
    ],
    image: nearby_blood,
    source_code_link_client: "https://github.com/yourusername/nearby-blood-client",
    source_code_link_server: "https://github.com/yourusername/nearby-blood-server",
    live_link: "https://nearby-blood.vercel.app/"
  },

  // WhatsApp Automation
  {
    name: "WhatsApp Automation Workflow",
    projectType: "Automation Project",
    category: "Automation", // <-- added
    team: false,
    description: {
      description: "A WhatsApp automation workflow designed to streamline business communication...",
      key_features: [
        "Automated Messaging...",
        "Reminders & Notifications...",
        "Real-Time Data Sync...",
        "Scalable Workflow...",
        "Error Handling & Logging...",
        "Integration Ready..."
      ]
    },
    tags: [
      { name: "n8n", color: "pink-text-gradient" },
      { name: "whatsapp-api", color: "green-text-gradient" },
      { name: "firebase", color: "green-text-gradient" },
      { name: "automation", color: "blue-text-gradient" },
      { name: "workflow", color: "pink-text-gradient" }
    ],
    image: "whatsappAutomationImage",
    source_code_link_client: "https://github.com/YourUsername/WhatsApp-Automation-Client",
    source_code_link_server: "https://github.com/YourUsername/WhatsApp-Automation-Server",
    live_link: "https://your-live-demo-link.com",
  },

  // Restaurant Management
  {
    name: "Restaurant Management Website",
    projectType: "Client Project",
    category: "Web App",
    team: false,
    description: {
      overview: "The Restaurant Management Website is a modern, responsive platform...",
      key_features: [
        "Customer Dashboard...",
        "Admin Dashboard...",
        "Order Management...",
        "Responsive Design...",
        "Fast and SEO-Friendly...",
        "Modern UI..."
      ]
    },
    tags: [
      { name: "next.js", color: "blue-text-gradient" },
      { name: "typescript", color: "pink-text-gradient" },
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "local-storage", color: "green-text-gradient" }
    ],
    image: resturent,
    source_code_link_client: "",
    live_link: "https://hungry-me.vercel.app/"
  },

  // Any Vessel
  {
    name: "Any Vessel",
    projectType: "Client Project",
    category: "Web App",
    team: true,
    description: {
      description: "Introducing Any Vessel – a comprehensive platform dedicated to everything related to vessels...",
      key_features: [
        "Vessel Marketplace...",
        "Crew Hiring...",
        "Job Listings...",
        "Secure Transactions...",
        "Profile Management...",
        "Real-Time Messaging...",
        "Verified Listings...",
        "Global Network..."
      ]
    },
    tags: [
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "express.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "fire-base", color: "green-text-gradient" }
    ],
    image: vessel,
    source_code_link_client: "https://github.com/foridislam332/anyvessel-client/tree/Mahfuz",
    source_code_link_server: "https://github.com/rayhanrayhan/anyvessel-server/tree/Mahfuz",
    live_link: "https://cheerful-cucurucho-60f8c8.netlify.app/"
  },

  // Legal Lawyer
  {
    name: "Legal Lawyer",
    projectType: "Client Project",
    category: "Web App",
    team: false,
    description: {
      overview: "The Legal Lawyer Website is an innovative platform designed to connect individuals seeking legal assistance...",
      key_features: [
        "Chat System...",
        "Lawyer Directory...",
        "User Profiles...",
        "Resources and Articles...",
        "Secure Communication..."
      ]
    },
    tags: [
      { name: "tailwind", color: "pink-text-gradient" },
      { name: "react", color: "blue-text-gradient" },
      { name: "express.js", color: "pink-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "fire-base", color: "green-text-gradient" }
    ],
    image: lawyer,
    source_code_link_client: "https://github.com/radifkhanrafin/Legal_lawyer",
    source_code_link_server: "https://github.com/radifkhanrafin/legal_lawyer_server",
    live_link: "https://grand-centaur-e1b3c6.netlify.app/"
  },

  // WUB Computer Club
  {
    name: "WUB Computer Society",
    projectType: "Student/Club Project",
    category: "Community/Tech Club", // <-- added
    team: false,
    description: {
      description: "WUBCS (World University of Bangladesh Computer Society) is the official student-run tech community..."
    },
    tags: [
      { name: "react", color: "blue-text-gradient" }
    ],
    image: wubcs,
    source_code_link_client: "",
    source_code_link_server: "",
    live_link: "https://fascinating-panda-892615.netlify.app/"
  }
];


export { services, technologies, education, experiences, testimonials, projects };
