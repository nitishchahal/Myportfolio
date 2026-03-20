import {
  Stethoscope,
  Building2,
  ShoppingCart,
  Landmark,
  CloudSun,
  KeyRound,
  CheckSquare,
  GraduationCap,
} from "lucide-react";


import Doctor from "/images/Doctor.jpg";
import Vill from "/images/vill.png";
import Weather from "/images/weather.png";
import Password from "/images/pass.png";
import Todo from "/images/ecomm.png";
import Educonnect from "/images/ecomm.png";
import Ecomm from "/images/ecomm.png";
export const PROJECTS = [
  {
    id: "doctor-app",
    title: "Doctor Appointment System",
    icon: Stethoscope,
    desc: "A full-stack healthcare platform that enables users to find doctors, book appointments, and manage schedules efficiently.",
    image: Doctor,
    projectUrl: "https://dr-authority-frontend.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Dr.Authority_frontend/",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],

    details:
      "A complete healthcare management system with authentication, appointment booking, and doctor dashboard.",

    simpleExplanation:
      "I built a platform where patients can book doctor appointments online and doctors can manage schedules.",

    overview: {
      title: "Project Overview",
      content:
        "An online system for booking doctor appointments and managing healthcare services digitally.",
      points: [
        "Search doctors",
        "Book appointments",
        "Manage schedules",
        "Secure authentication",
      ],
    },

    techStack: {
      frontend: ["React", "Tailwind CSS", "JavaScript"],
      backend: ["Node.js", "Express.js", "MongoDB", "JWT"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Saves time for patients",
        "Reduces hospital crowd",
        "24/7 accessibility",
      ],
    },
  },

  {
    id: "company-site",
    title: "Official Company Website",
    icon: Building2,
    desc: "A responsive corporate website with modern UI/UX design.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    projectUrl: "#",
    githubUrl: "#",
    tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],

    details:
      "A professional business website designed to represent a company online with modern layout and responsiveness.",

    simpleExplanation:
      "I created a company website that looks professional and works perfectly on all devices.",

    overview: {
      title: "Project Overview",
      content:
        "A modern corporate website designed to showcase services, company information, and contact details.",
      points: [
        "Responsive design",
        "Modern UI",
        "Fast loading",
        "SEO friendly",
      ],
    },

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["No backend (Static Website)"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Improves online presence",
        "Builds brand identity",
        "Helps businesses reach customers",
      ],
    },
  },

  {
    id: "ecommerce",
    title: "E-Commerce Website",
    icon: ShoppingCart,
    desc: "A modern online shopping platform with smooth UI and checkout system.",
    image: Ecomm,
    projectUrl: "https://e-commerce-frontend-ten-olive.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/E-commerce-frontend",
    tech: ["React", "Redux", "Tailwind CSS"],

    details:
      "A scalable e-commerce frontend with product listing, cart system, and checkout flow.",

    simpleExplanation:
      "I built an online store where users can browse products and make purchases easily.",

    overview: {
      title: "Project Overview",
      content:
        "An e-commerce platform that allows users to browse products, add to cart, and complete purchases.",
      points: [
        "Product browsing",
        "Add to cart",
        "Checkout system",
        "Responsive UI",
      ],
    },

    techStack: {
      frontend: ["React", "Redux", "Tailwind CSS"],
      backend: ["Can be integrated with Node.js APIs"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Enables online shopping",
        "Improves business reach",
        "User-friendly buying experience",
      ],
    },
  },

  {
    id: "village",
    title: "Village Inquiry Portal",
    icon: Landmark,
    desc: "A platform connecting rural citizens with government services.",
    image: Vill,
    projectUrl: "https://nitishchahal.github.io/Village-Inquiry/",
    githubUrl: "https://github.com/nitishchahal/Village-front",
    tech: ["HTML", "CSS", "JavaScript"],

    details:
      "A portal aimed at helping rural users access government services easily.",

    simpleExplanation:
      "I built a website to help villagers access important government information and services.",

    overview: {
      title: "Project Overview",
      content:
        "A digital platform designed to connect rural communities with essential services.",
      points: [
        "Access government schemes",
        "Easy navigation",
        "Simple UI",
      ],
    },

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Static / Optional backend"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Helps rural digitalization",
        "Easy access to information",
        "Bridges digital gap",
      ],
    },
  },

  {
    id: "weather",
    title: "Weather App",
    icon: CloudSun,
    desc: "Real-time weather updates with clean UI.",
    image: Weather,
    projectUrl: "https://nitishchahal.github.io/Weather/",
    githubUrl: "https://github.com/nitishchahal/Weather",
    tech: ["JavaScript", "API", "CSS"],

    details:
      "A weather application that fetches real-time data using APIs.",

    simpleExplanation:
      "I built an app that shows live weather information for any city.",

    overview: {
      title: "Project Overview",
      content:
        "An application that provides real-time weather updates using API integration.",
      points: [
        "Live weather data",
        "Search city",
        "Fast performance",
      ],
    },

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["Weather API"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Real-time information",
        "Helps in travel planning",
        "Easy to use",
      ],
    },
  },

  {
    id: "password",
    title: "Password Generator",
    icon: KeyRound,
    desc: "Secure password generator with customization options.",
    image: Password,
    projectUrl: "https://nitishchahal.github.io/Password-Generator/",
    githubUrl: "https://github.com/nitishchahal/Password-Generator",
    tech: ["JavaScript", "HTML", "CSS"],

    details:
      "A tool to generate strong and secure passwords.",

    simpleExplanation:
      "I built a tool that creates strong passwords to improve security.",

    overview: {
      title: "Project Overview",
      content:
        "A password generator that allows users to create secure passwords.",
      points: [
        "Custom length",
        "Strong security",
        "Instant generation",
      ],
    },

    techStack: {
      frontend: ["HTML", "CSS", "JavaScript"],
      backend: ["None"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Improves cybersecurity",
        "Protects user accounts",
      ],
    },
  },

  {
    id: "todo",
    title: "Todo App",
    icon: CheckSquare,
    desc: "Task management app focused on productivity.",
    image: Todo,
    projectUrl: "https://front-todo-omega.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Todo-frontend",
    tech: ["React", "State Management"],

    details:
      "A simple and efficient task manager for daily productivity.",

    simpleExplanation:
      "I built an app where users can manage daily tasks easily.",

    overview: {
      title: "Project Overview",
      content:
        "A task management application for organizing daily work.",
      points: [
        "Add tasks",
        "Delete tasks",
        "Track progress",
      ],
    },

    techStack: {
      frontend: ["React"],
      backend: ["Optional backend"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Improves productivity",
        "Helps manage tasks",
      ],
    },
  },

  {
    id: "educonnect",
    title: "EduConnect",
    icon: GraduationCap,
    desc: "A collaborative learning platform for students.",
      image: Educonnect,
    projectUrl: "https://interaction-platform.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Interaction-platform",
    tech: ["React", "Collaboration Tools"],

    details:
      "A platform that enhances learning collaboration among students.",

    simpleExplanation:
      "I built a platform where students can collaborate and learn together.",

    overview: {
      title: "Project Overview",
      content:
        "A digital learning platform designed for interaction and collaboration.",
      points: [
        "Student interaction",
        "Knowledge sharing",
        "Modern UI",
      ],
    },

    techStack: {
      frontend: ["React"],
      backend: ["Optional backend"],
    },

    usefulness: {
      title: "Why This Project is Useful",
      points: [
        "Enhances learning",
        "Encourages collaboration",
      ],
    },
  },
];