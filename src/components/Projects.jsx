import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Globe, Smartphone, Palette, ArrowRight, X, Github } from "lucide-react";

import ecomm from "/images/ecomm.png";
import vill from "/images/vill.png";
import weather from "/images/weather.png";
import password from "/images/pass.png";
import Doctor from "/images/Doctor.jpg";

/* ================= PROJECT DATA ================= */
const PROJECTS = [
  {
    id: "doctor-app",
    title: "Doctor Appointment System",
    desc: "Full-stack healthcare platform (React, Node.js, MongoDB) enabling patients to book appointments, manage schedules, and connect with doctors in real-time.",
    image: Doctor,
    icon: Smartphone,
    projectUrl: "https://dr-authority-frontend.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Dr.Authority_frontend/",
  },
  {
    id: "company-site",
    title: "Official Company Website",
    desc: "Responsive corporate website built with modern UI/UX principles.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1470&q=80",
    icon: Globe,
    projectUrl: "#",
    githubUrl: "#",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Website",
    desc: "Modern online store with seamless checkout and scalable architecture.",
    image: ecomm,
    icon: Globe,
    projectUrl: "https://e-commerce-frontend-ten-olive.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/E-commerce-frontend",
  },
  {
    id: "village",
    title: "Village Inquiry Portal",
    desc: "A platform connecting rural residents with essential government services.",
    image: vill,
    icon: Smartphone,
    projectUrl: "https://nitishchahal.github.io/Village-Inquiry/",
    githubUrl: "https://github.com/nitishchahal/Village-front",
  },
  {
    id: "weather",
    title: "Weather App",
    desc: "Real-time weather updates with clean UI and fast performance.",
    image: weather,
    icon: Globe,
    projectUrl: "https://nitishchahal.github.io/Weather/",
    githubUrl: "https://github.com/nitishchahal/Weather",
  },
  {
    id: "password",
    title: "Password Generator",
    desc: "Secure password generation with customizable strength options.",
    image: password,
    icon: Globe,
    projectUrl: "https://nitishchahal.github.io/Password-Generator/",
    githubUrl: "https://github.com/nitishchahal/Password-Generator",
  },
  {
    id: "todo",
    title: "Todo App",
    desc: "Task management app focused on productivity and simplicity.",
    image:
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&w=1470&q=80",
    icon: Smartphone,
    projectUrl: "https://front-todo-omega.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Todo-frontend",
  },
  {
    id: "educonnect",
    title: "EduConnect",
    desc: "Digital platform designed to enhance learning collaboration.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1470&q=80",
    icon: Palette,
    projectUrl: "https://interaction-platform.vercel.app/",
    githubUrl: "https://github.com/nitishchahal/Interaction-platform",
  },
];

/* ================= PROJECT CARD ================= */
const ProjectCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const Icon = item.icon;

  const handleCardClick = () => {
    navigate(`/projects/${item.id}`);
  };

  return (
    <motion.div
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleCardClick}
      className="group relative cursor-pointer h-[450px] rounded-[2rem] overflow-hidden
      bg-light-surface dark:bg-dark-surface
      border border-light-border dark:border-dark-border
      shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.target.src = "/images/fallback.png")}
          className="w-full h-full object-cover grayscale
          group-hover:grayscale-0 group-hover:scale-110
          transition-all duration-700"
        />

        <div className="absolute inset-0 bg-light-bg/70 dark:bg-dark-bg/60
        group-hover:opacity-0 transition-opacity duration-500" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-50
        bg-gradient-to-b from-light-accent/80 to-charcoal/95
        transition-opacity duration-500" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center
        bg-light-surface dark:bg-dark-bg
        shadow-md border border-light-border dark:border-dark-border
        group-hover:bg-light-accent/20 transition-all duration-300">
          <Icon
            size={26}
            strokeWidth={1.8}
            className="stroke-light-accent dark:stroke-dark-accent
            group-hover:stroke-snow transition-colors duration-300"
          />
        </div>

        {/* TEXT */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold tracking-tight
          text-light-text dark:text-dark-text
          group-hover:text-snow transition">
            {item.title}
          </h3>

          <p className="mt-4 text-sm line-clamp-2
          text-light-textMuted dark:text-dark-textMuted
          group-hover:text-snow/80">
            {item.desc}
          </p>

          {/* ACTION BUTTONS */}
          <div className="mt-6 flex gap-3 flex-wrap">

            {/* DETAILS */}
           

            {/* PREVIEW */}
            <a
              onClick={(e) => e.stopPropagation()}
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 h-10 flex items-center gap-2 rounded-xl
              text-xs font-bold uppercase tracking-[0.12em]
              border border-light-border dark:border-dark-border
              bg-light-surface/80 dark:bg-dark-bg/60 backdrop-blur-md
              text-light-textMuted dark:text-dark-textMuted
              hover:text-light-accent dark:hover:text-dark-accent
              hover:border-light-accent dark:hover:border-dark-accent
              hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
              dark:hover:shadow-[0_0_14px_rgba(56,189,248,0.6)]
              transition-all duration-300"
            >
              Preview <ArrowRight size={14} />
            </a>

            {/* GITHUB */}
            {item.githubUrl && item.githubUrl !== "#" && (
              <a
                onClick={(e) => e.stopPropagation()}
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 h-10 flex items-center gap-2 rounded-xl
                text-xs font-bold uppercase tracking-[0.12em]
                border border-light-border dark:border-dark-border
                bg-light-surface/80 dark:bg-dark-bg/60 backdrop-blur-md
                text-light-textMuted dark:text-dark-textMuted
                hover:text-light-accent dark:hover:text-dark-accent
                hover:border-light-accent dark:hover:border-dark-accent
                hover:shadow-[0_0_12px_rgba(99,102,241,0.5)]
                dark:hover:shadow-[0_0_14px_rgba(56,189,248,0.6)]
                transition-all duration-300"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* EXPANDED PANEL */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              onClick={(e) => e.stopPropagation()}   // ✅ FIXED
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-3 bottom-3 p-6 rounded-[1.5rem]
              bg-light-surface dark:bg-dark-bg shadow-2xl border
              border-light-border dark:border-dark-border z-20"
            >
              <h4 className="text-xs font-bold uppercase tracking-widest mb-2
              text-light-accent dark:text-dark-accent">
                Project Details
              </h4>

              <p className="text-sm font-medium mb-4
              text-light-text dark:text-dark-text">
                {item.desc}
              </p>

              <div className="flex gap-4">
                <a
                  onClick={(e) => e.stopPropagation()}   // ✅ FIXED
                  href={item.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold
                  text-light-accent dark:text-dark-accent"
                >
                  Preview <ArrowRight size={16} />
                </a>

                {item.githubUrl && item.githubUrl !== "#" && (
                  <a
                    onClick={(e) => e.stopPropagation()}   // ✅ FIXED
                    href={item.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold
                    text-light-textMuted hover:text-light-accent"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */
export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-light-accent dark:bg-dark-accent rounded-full" />
            <span className="text-xs font-black tracking-[0.3em] uppercase
            text-light-textMuted dark:text-dark-textMuted">
              Portfolio
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-black tracking-tighter
            text-light-text dark:text-dark-text"
          >
            College{" "}
            <span className="text-light-accent dark:text-dark-accent">
              Projects
            </span>
          </motion.h2>

          <p className="mt-6 font-medium max-w-sm text-lg leading-relaxed
          text-light-textMuted dark:text-dark-textMuted">
            A curated set of real-world projects focused on performance, UI, and scalability.
          </p>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {PROJECTS.map((item) => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}