import React, { useEffect, useState, useRef } from 'react';

// Skill data array for easy management
const skillsData = [
  { name: 'HTML/CSS/JS', percentage: 90 },
  { name: 'React/Node/MySQL', percentage: 75 }, // Updated to reflect the backend changes
  { name: 'Photography / Videography', percentage: 90 },
  { name: 'DaVinci Resolve/Canva/Figma', percentage: 85 },
];

// Reusable SkillBar component
const SkillBar = ({ skillName, percentage }) => {
  const [fillWidth, setFillWidth] = useState(0);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setFillWidth(percentage);
            observer.unobserve(entry.target); // Stop observing once animated
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, [percentage]);

  return (
    <div ref={skillRef}>
      <div className="flex justify-between mb-1">
        <span>{skillName}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
        <div
          className="bg-teal h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${fillWidth}%` }}
        ></div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 mt-5 font-poppins">
          About <span className="text-teal">Me</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative group rounded-xl shadow-2xl transition duration-500 hover:scale-105 border-transparent hover:border-teal">
              <img
                src="/photo_2025-04-12_15-57-21.jpg"
                alt="Nitish Choudhary"
                className="w-full max-w-md mx-auto rounded-xl"
              />
              <div className="absolute inset-0 bg-teal opacity-0 group-hover:opacity-20 rounded-xl transition duration-500"></div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold mb-4 font-poppins">Who am I?</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate creative professional with expertise in web development, videography, and visual storytelling. With a strong foundation in modern web technologies and a keen eye for visual design, I am dedicated to crafting engaging digital experiences and compelling visual narratives.
            </p>
            <div className="mb-8">
              <h4 className="text-xl font-semibold mb-4 font-poppins">My Skills</h4>
              <div className="space-y-4">
                {skillsData.map((skill, index) => (
                  <SkillBar key={index} skillName={skill.name} percentage={skill.percentage} />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="./Nitish_Choudhary.pdf"
                className="px-6 py-2 bg-navy text-white rounded-lg hover:bg-teal transition flex items-center gap-2"
              >
                <i className="fas fa-download"></i> Download CV
              </a>
              <a
                href="#contact"
                className="px-6 py-2 border border-navy text-navy dark:text-white rounded-lg hover:bg-navy hover:text-white transition"
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
