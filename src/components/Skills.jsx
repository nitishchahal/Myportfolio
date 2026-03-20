import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: {
      scale: 1.05,
      boxShadow: "0px 8px 20px rgba(0,0,0,0.15)",
    },
  };

  // Floating icons list
  const floatingIcons = [
    "fab fa-react",
    "fab fa-js",
    "fab fa-node-js",
    "fab fa-html5",
    "fab fa-css3-alt",
    "fab fa-github",
    "fab fa-python",
    "fas fa-database",
    "fas fa-video",
    "fas fa-camera",
  ];

  // Random generator
  const getRandom = (min, max) => Math.random() * (max - min) + min;

  return (
    <section
      id="skills"
      className="relative py-16 px-6 md:px-20 bg-light-bg dark:bg-dark-bg overflow-hidden"
    >
      {/* 🔥 Floating Icons Background */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((icon, i) => (
          <motion.i
            key={i}
            className={`${icon} absolute text-light-accent dark:text-dark-accent opacity-20`}
            style={{
              left: `${getRandom(0, 100)}%`,
              top: `${getRandom(0, 100)}%`,
              fontSize: `${getRandom(18, 40)}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 20, -20, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: getRandom(6, 12),
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-light-text dark:text-dark-text"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="text-light-accent dark:text-dark-accent">
          Professional
        </span>{" "}
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: "fas fa-code",
            title: "Web Development",
            desc: "HTML, CSS, JavaScript, Tailwind CSS, React, Node.js",
          },
          {
            icon: "fas fa-video",
            title: "Videography & Editing",
            desc: "DaVinci Resolve, CapCut, Color Grading, Reels Editing",
          },
          {
            icon: "fas fa-camera",
            title: "Photography",
            desc: "Event Photography, Portraits, Candid Shots, Album Design",
          },
          {
            icon: "fas fa-database",
            title: "Data Entry & Excel",
            desc: "Accurate typing, formatting, spreadsheet formulas, PDF to Excel",
          },
        ].map((skill, i) => (
          <motion.div
            key={i}
            className="p-6 rounded-xl transition bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border shadow-sm"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={i}
            viewport={{ once: true, amount: 0.2 }}
          >
            <i
              className={`${skill.icon} text-3xl mb-3 text-light-accent dark:text-dark-accent`}
            ></i>

            <h3 className="text-xl font-semibold mb-1 text-light-text dark:text-dark-text">
              {skill.title}
            </h3>

            <p className="text-light-textMuted dark:text-dark-textMuted">
              {skill.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;