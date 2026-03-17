import React, { useEffect, useState, useRef } from "react";

import img1 from '/Profile.png';

/* ================= SKILLS DATA ================= */
const skillsData = [
  { name: "HTML/CSS/JS/React", percentage: 90 },
  { name: "Node/Express/MySQL", percentage: 75 },
  { name: "Photography / Videography", percentage: 90 },
  { name: "DaVinci Resolve/Canva/Figma", percentage: 85 },
];

/* ================= SKILL BAR ================= */
const SkillBar = ({ skillName, percentage }) => {
  const [fillWidth, setFillWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFillWidth(percentage);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) observer.observe(skillRef.current);

    return () => {
      if (skillRef.current) observer.unobserve(skillRef.current);
    };
  }, [percentage]);

  return (
    <div ref={skillRef}>
      <div className="flex justify-between mb-1 text-light-text dark:text-dark-text">
        <span>{skillName}</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full h-3 rounded-full overflow-hidden
                      bg-light-border dark:bg-dark-border">
        <div
          className="
            h-full rounded-full transition-all duration-1000 ease-out
            bg-light-accent dark:bg-dark-accent
          "
          style={{ width: `${fillWidth}%` }}
        />
      </div>
    </div>
  );
};

/* ================= ABOUT SECTION ================= */
const About = () => {
  return (
    <section
      id="about"
      className="
        py-20
        bg-light-bg dark:bg-dark-bg
      "
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2
          className="
            text-3xl md:text-4xl font-bold text-center mb-16 mt-5
            font-poppins
            text-light-text dark:text-dark-text
          "
        >
          About{" "}
          <span className="text-light-accent dark:text-dark-accent">
            Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <div className="md:w-1/2">
            <div
              className="
                relative group rounded-xl 
                transition duration-500 hover:scale-105
               
              "
            >
              <img
                src={img1}
                alt="Nitish Choudhary"
                className="w-full max-w-md mx-auto rounded-xl"
              />

              {/* <div
                className="
                  absolute inset-0 rounded-xl transition duration-500
                  bg-light-accent/20 dark:bg-dark-accent/20
                  opacity-0 group-hover:opacity-100
                "
              /> */}
            </div>
          </div>

          {/* Content */}
          <div className="md:w-1/2">
            <h3
              className="
                text-2xl font-bold mb-4 font-poppins
                text-light-text dark:text-dark-text
              "
            >
              Who am I?
            </h3>

            <p
              className="
                mb-6
                text-light-textMuted dark:text-dark-textMuted
              "
            >
              I'm a passionate creative professional with expertise in web
              development, videography, and visual storytelling. With a strong
              foundation in modern web technologies and a keen eye for visual
              design, I am dedicated to crafting engaging digital experiences
              and compelling visual narratives.
            </p>

            {/* Skills */}
            <div className="mb-8">
              <h4
                className="
                  text-xl font-semibold mb-4 font-poppins
                  text-light-text dark:text-dark-text
                "
              >
                My Skills
              </h4>

              <div className="space-y-4">
                {skillsData.map((skill, index) => (
                  <SkillBar
                    key={index}
                    skillName={skill.name}
                    percentage={skill.percentage}
                  />
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="./Nitish Resumeee.pdf"
                className="
                  px-6 py-2 rounded-lg font-medium
                  bg-light-accent text-snow
                  dark:bg-dark-accent dark:text-charcoal
                  hover:opacity-90 transition
                  flex items-center gap-2
                "
              >
                <i className="fas fa-download"></i> Download CV
              </a>

              <a
                href="#contact"
                className="
                  px-6 py-2 rounded-lg font-medium
                  border border-light-accent text-light-accent
                  dark:border-dark-accent dark:text-dark-accent
                  hover:bg-light-accent hover:text-snow
                  dark:hover:bg-dark-accent dark:hover:text-charcoal
                  transition
                "
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
