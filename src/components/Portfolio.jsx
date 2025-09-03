import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, category: "web", title: "E-Commerce Website", description: "Modern online store with seamless checkout", imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", projectUrl: "https://e-commerce-frontend-ten-olive.vercel.app/", caseStudyUrl: "#" },
  { id: 2, category: "app", title: "Village Inquiry Portal", description: "Project Goal: Bridging the gap between residents and essential services", imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", projectUrl: "https://nitishchahal.github.io/Village-Inquiry/", caseStudyUrl: "#" },
  { id: 3, category: "web", title: "Weather App", description: "Complete Weather Report for your city.", imageUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80", projectUrl: "https://nitishchahal.github.io/Weather/", caseStudyUrl: "#" },
  { id: 4, category: "web", title: "PassWord Generator", description: "Data visualization platform", imageUrl: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80", projectUrl: "#", caseStudyUrl: "#" },
  { id: 5, category: "app", title: "Todo App", description: "Task planning made them easy", imageUrl: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", projectUrl: "https://front-todo-omega.vercel.app/", caseStudyUrl: "#" },
  { id: 6, category: "graphic", title: "Marketing Campaign", description: "Print and digital materials", imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80", projectUrl: "#", caseStudyUrl: "#" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  // Animation variants
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-4 mt-5 font-poppins"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My <span className="text-teal">Portfolio</span>
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Here are some of my recent projects. Each one was carefully crafted to
          solve specific problems.
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-md shadow-sm" role="group">
            {["all", "web", "app", "graphic"].map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`filter-btn px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 ${
                  filter === "all"
                    ? "rounded-l-lg"
                    : filter === "graphic"
                    ? "rounded-r-lg"
                    : ""
                } ${
                  activeFilter === filter
                    ? "active bg-teal text-white border-teal"
                    : ""
                }`}
              >
                {filter === "all"
                  ? "All"
                  : filter === "web"
                  ? "Web Design"
                  : filter === "app"
                  ? "Mobile Apps"
                  : "Graphic Design"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="portfolio-item"
              variants={item}
            >
              <div className="relative group overflow-hidden rounded-xl shadow-lg">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110 "
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition duration-500">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-100">
                    {project.description}
                  </p>
                  <div className="flex space-x-3 transform translate-y-4 group-hover:translate-y-0 transition duration-500 delay-150">
                    <a
                      href={project.projectUrl}
                      className="px-4 py-2 bg-teal text-white rounded-lg text-sm hover:bg-teal-600"
                    >
                      View Project
                    </a>
                    <a
                      href={project.caseStudyUrl}
                      className="px-4 py-2 bg-white/20 text-white rounded-lg text-sm hover:bg-white/30"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-teal text-teal rounded-lg hover:bg-teal hover:text-white transition"
          >
            View All Projects
            <i className="fas fa-arrow-right ml-2"></i>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
