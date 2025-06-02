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
  intelligence2, 
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
  hirewave,
  lawyer,
  vessel,
  wubcs
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
  // Legal Lawyer
  {
    name: "Legal Lawyer",
    team: false,
    description:
    {
      "overview": "The Legal Lawyer Website is an innovative platform designed to connect individuals seeking legal assistance with qualified lawyers. The website features an intuitive interface and a robust chat system that facilitates real-time communication between users and legal professionals.",
      "key_features": [
        "Chat System: Users can engage in live chat with lawyers to discuss their legal concerns, receive guidance, and schedule consultations, ensuring quick and efficient communication.",
        "Lawyer Directory: A comprehensive directory allows users to search for lawyers based on their specialties, location, and user ratings, making it easier to find the right legal expert. User Profiles: Individuals can create personal profiles to track their inquiries, consultations, and any ongoing legal matters, providing a personalized experience.",
        "Resources and Articles: The website includes a section with legal resources and informative articles, helping users understand various legal topics and their rights.",
        "Secure Communication: All interactions on the platform are secured to protect user privacy and ensure confidentiality."
      ]
    }
    ,
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
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
        name: "fire-base",
        color: "green-text-gradient",
      },

    ],
    image: lawyer,
    source_code_link_client: "https://github.com/radifkhanrafin/Legal_lawyer",
    source_code_link_server: "https://github.com/radifkhanrafin/legal_lawyer_server",
    live_link: "https://grand-centaur-e1b3c6.netlify.app/",
  },

  // hire wave
  {
    name: "Hire Wave -Hiring Agency",
    team: true,
    description:
    {
      "description": "Celebrating the creation of Hirewave: A game-changing hiring agency that connects businesses with top global talent effortlessly. Our unique approach to recruitment, combining cutting-edge technology with personalized service, has already transformed countless organizations. With Hirewave...",
      "key_features": [
        "Talent Marketplace: A diverse pool of vetted professionals across various industries and skill levels.",
        "Simple Matching System: Streamlined tools to help businesses find suitable candidates based on skills, experience, and availability.",
        "Secure Payments: An integrated payment system ensuring safe and timely transactions between clients and freelancers.",
        "Project Management Tools: Features like time tracking, file sharing, and task updates to support smooth project execution.",
        "Review and Rating System: A transparent feedback system for both clients and freelancers to promote accountability.",
        "Custom Job Posting: Employers can create detailed job listings with clear requirements, budgets, and deadlines.",
        "Real-Time Messaging: Built-in chat system for immediate and organized communication between clients and freelancers.",
        "Global Reach: Enables connections between businesses and skilled professionals worldwide, regardless of location."
      ]
    }
    ,
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
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
        name: "fire-base",
        color: "green-text-gradient",
      },

    ],
    image: hirewave,
    source_code_link_client: "https://github.com/ProgrammerShipon/HireWave-Client",
    source_code_link_server: "https://github.com/ProgrammerShipon/HireWave-Server",
    live_link: "https://hire-wave.web.app/",
  },

  // Any Vessel
  {
    name: "Any Vessel ",
    team: true,
    description:
    {
      "description": "Introducing Any Vessel – a comprehensive platform dedicated to everything related to vessels. Whether you're looking to sell or buy a vessel, hire a crew, or find a maritime job, Any Vessel simplifies it all in one unified space. Built with a focus on the marine industry, it offers seamless interactions between vessel owners, shipping companies, and seafarers across the globe.",
      "key_features": [
        "Vessel Marketplace: A specialized section for listing and browsing vessels for sale, covering all types and sizes.",
        "Crew Hiring: Vessel owners and operators can easily post crew requirements and connect with qualified maritime professionals.",
        "Job Listings: Seafarers can explore and apply to job opportunities tailored to their rank, expertise, and desired location.",
        "Secure Transactions: Safe and trusted payment processing for services and vessel-related deals.",
        "Profile Management: Detailed profiles for both companies and individuals, highlighting experience, certifications, and availability.",
        "Real-Time Messaging: Instant communication tools to coordinate sales, job offers, and crew arrangements.",
        "Verified Listings: All vessels and job posts are verified for authenticity to ensure trust and professionalism.",
        "Global Network: Connect with maritime professionals and businesses from around the world with ease."
      ]
    }

    ,
    tags: [
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
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
        name: "fire-base",
        color: "green-text-gradient",
      },

    ],
    image: vessel,
    source_code_link_client: "https://github.com/foridislam332/anyvessel-client/tree/Mahfuz",
    source_code_link_server: "https://github.com/rayhanrayhan/anyvessel-server/tree/Mahfuz",
    live_link: "https://hire-wave.web.app/",
  },
  // Wub computer Club
  {
    name: "WUB Computer Society",
    team: false,
    description:
    {
      "description": "WUBCS (World University of Bangladesh Computer Society) is the official student-run tech community of the CSE Department at the World University of Bangladesh. Dedicated to fostering innovation, collaboration, and technical excellence, WUBCS serves as a platform for students to explore and grow in the fields of programming, robotics, web development, AI, cybersecurity, and more. Through workshops, coding contests, seminars, and national-level tech events, WUBCS empowers students to bridge the gap between academic knowledge and real-world skills, nurturing the next generation of tech leaders."
    }


    ,
    tags: [

      {
        name: "react",
        color: "blue-text-gradient",
      },

    ],
    image: wubcs,
    source_code_link_client: "",
    source_code_link_server: "",
    live_link: "https://fascinating-panda-892615.netlify.app/",
  },
];

export { services, technologies, education, experiences, testimonials, projects };
