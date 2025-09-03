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

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-white dark:bg-gray-900"
    >
      {/* Section Heading */}
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-navy dark:text-gold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Professional Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        {[
          {
            icon: "fas fa-code",
            title: "Web Development",
            desc: "HTML, CSS, JavaScript, Tailwind CSS, React, Node.js",
          },
          {
            icon: "fas fa-video",
            title: "Videography & Editing",
            desc: "Adobe Premiere Pro, CapCut, Color Grading, Reels Editing",
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
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow transition"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            custom={i}
            viewport={{ once: true, amount: 0.2 }}
          >
            <i className={`${skill.icon} text-3xl text-teal mb-3`}></i>
            <h3 className="text-xl font-semibold mb-1 text-navy dark:text-white">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{skill.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
