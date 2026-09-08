import React from "react";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiTypescript,
  SiCplusplus,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTailwindcss,
  SiPostman,
  SiFigma,
  SiJson,
} from "react-icons/si";

import {
  FiCode,
  FiDatabase,
  FiServer,
  FiLayers,
  FiCpu,
} from "react-icons/fi";

/* =========================================================
   SKILLS DATA
========================================================= */

const skillsData = [
  {
    category: "Languages",
    icon: FiCode,
    skills: [
      {
        name: "JavaScript",
        icon: FaJs,
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
      },
      {
        name: "C++",
        icon: SiCplusplus,
      },
      {
        name: "SQL",
        icon: FiDatabase,
      },
      {
        name: "HTML5",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
      },
    ],
  },

  {
    category: "Frontend",
    icon: FaReact,
    skills: [
      {
        name: "React",
        icon: FaReact,
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
      },
      {
        name: "Responsive UI",
        icon: FiLayers,
      },
      {
        name: "Component Development",
        icon: FiLayers,
      },
    ],
  },

  {
    category: "Backend",
    icon: FaNodeJs,
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
      },
      {
        name: "Express.js",
        icon: SiExpress,
      },
      {
        name: "REST APIs",
        icon: FiServer,
      },
      {
        name: "API Integration",
        icon: FiServer,
      },
      {
        name: "Authentication",
        icon: FiServer,
      },
      {
        name: "JSON",
        icon: SiJson,
      },
    ],
  },

  {
    category: "Databases",
    icon: FiDatabase,
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
      },
      {
        name: "MySQL",
        icon: SiMysql,
      },
      {
        name: "SQL",
        icon: FiDatabase,
      },
      {
        name: "Database Management",
        icon: FiDatabase,
      },
    ],
  },

  {
    category: "Tools & Workflow",
    icon: FaGitAlt,
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        icon: FaGithub,
      },
      {
        name: "Postman",
        icon: SiPostman,
      },
      {
        name: "Figma",
        icon: SiFigma,
      },
      {
        name: "SMTP",
        icon: FiCode,
      },
    ],
  },

  {
    category: "Core Engineering",
    icon: FiCpu,
    skills: [
      {
        name: "Data Structures & Algorithms",
        icon: FiCode,
      },
      {
        name: "Object-Oriented Programming",
        icon: FiCode,
      },
      {
        name: "DBMS",
        icon: FiDatabase,
      },
      {
        name: "Computer Networks",
        icon: FiServer,
      },
      {
        name: "Operating Systems",
        icon: FiCpu,
      },
      {
        name: "Software Design",
        icon: FiLayers,
      },
      {
        name: "Debugging",
        icon: FiCode,
      },
      {
        name: "Performance Optimization",
        icon: FiCpu,
      },
    ],
  },
];

/* =========================================================
   SKILLS COMPONENT
========================================================= */

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        py-20
        bg-light-bg
        dark:bg-dark-bg
        overflow-hidden
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p
            className="
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              text-light-accent
              dark:text-dark-accent
              mb-3
            "
          >
            Technical Expertise
          </p>

          <h2
            className="
              text-3xl
              md:text-4xl
              font-bold
              font-poppins
              text-light-text
              dark:text-dark-text
            "
          >
            Skills &{" "}
            <span className="text-light-accent dark:text-dark-accent">
              Technologies
            </span>
          </h2>

          <div
            className="
              w-20
              h-1
              bg-light-accent
              dark:bg-dark-accent
              mx-auto
              mt-5
              mb-5
            "
          />

          <p
            className="
              text-light-textMuted
              dark:text-dark-textMuted
              max-w-2xl
              mx-auto
            "
          >
            A practical toolkit built around modern frontend,
            backend, database, and software engineering technologies.
          </p>
        </motion.div>

        {/* ================= SKILLS GRID ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {skillsData.map((category, index) => {
            const CategoryIcon = category.icon;

            return (
              <motion.div
                key={category.category}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                className="h-full"
              >
                <div
                  className="
                    group
                    relative
                    h-full
                    min-h-[230px]
                    p-6
                    rounded-xl
                    bg-light-surface
                    dark:bg-dark-surface
                    border
                    border-light-border
                    dark:border-dark-border
                    shadow-sm
                    overflow-hidden
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >

                  {/* Moving Hover Strike */}

                  <div
                    className="
                      absolute
                      top-0
                      left-0
                      w-24
                      h-[2px]
                      bg-light-accent
                      dark:bg-dark-accent
                      opacity-0
                      group-hover:opacity-100
                      animate-skill-strike
                    "
                  />

                  {/* Category Header */}

                  <div className="flex items-center gap-3 mb-6">

                    <div
                      className="
                        w-10
                        h-10
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        bg-light-accent/10
                        dark:bg-dark-accent/10
                      "
                    >
                      <CategoryIcon
                        className="
                          w-5
                          h-5
                          text-light-accent
                          dark:text-dark-accent
                        "
                      />
                    </div>

                    <div>
                      <h3
                        className="
                          text-lg
                          font-bold
                          font-poppins
                          text-light-text
                          dark:text-dark-text
                        "
                      >
                        {category.category}
                      </h3>

                      <p
                        className="
                          text-xs
                          text-light-textMuted
                          dark:text-dark-textMuted
                        "
                      >
                        {category.skills.length} skills
                      </p>
                    </div>

                  </div>

                  {/* Skills */}

                  <div className="flex flex-wrap gap-2">

                    {category.skills.map((skill, skillIndex) => {
                      const SkillIcon = skill.icon;

                      return (
                        <motion.div
                          key={skill.name}
                          initial={{
                            opacity: 0,
                            scale: 0.9,
                          }}
                          whileInView={{
                            opacity: 1,
                            scale: 1,
                          }}
                          transition={{
                            duration: 0.25,
                            delay: skillIndex * 0.03,
                          }}
                          viewport={{ once: true }}
                          title={skill.name}
                          className="
                            group/skill
                            inline-flex
                            items-center
                            gap-2
                            px-3
                            py-2
                            rounded-lg
                            bg-light-bg
                            dark:bg-dark-bg
                            border
                            border-light-border
                            dark:border-dark-border
                            text-light-text
                            dark:text-dark-text
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:border-light-accent/40
                            dark:hover:border-dark-accent/40
                          "
                        >
                          <SkillIcon
                            className="
                              w-4
                              h-4
                              text-light-accent
                              dark:text-dark-accent
                              transition-transform
                              duration-300
                              group-hover/skill:scale-110
                            "
                          />

                          <span
                            className="
                              text-xs
                              font-medium
                              whitespace-nowrap
                            "
                          >
                            {skill.name}
                          </span>
                        </motion.div>
                      );
                    })}

                  </div>
                </div>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default Skills;