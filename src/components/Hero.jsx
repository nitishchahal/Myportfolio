import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    // Initialize Particles.js if available
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 80, density: { enable: true, value_area: 800 } },
          color: { value: "#6BBAA7" },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#6BBAA7",
            opacity: 0.4,
            width: 1,
          },
          move: { enable: true, speed: 2, out_mode: "out" },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 },
          },
        },
        retina_detect: true,
      });
    }

    // Typing Effect
    const text = "Nitish Choudhary";
    let i = 0;

    function typeWriter() {
      if (!typingTextRef.current) return;
      if (i < text.length) {
        typingTextRef.current.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
      }
    }

    const timeoutId = setTimeout(typeWriter, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Particles Background */}
      <div id="particles-js" className="absolute inset-0"></div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-20">
        {/* Typing Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-navy dark:text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <span ref={typingTextRef}></span>
          <span className="text-teal cursor-blink">|</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          Creative Web Developer | Visual Storyteller
        </motion.p>

       {/* CTA Buttons */}
<motion.div
  className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3, delayChildren: 2 },
    },
  }}
>
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <Link
      to="/portfolio"
      className="w-full sm:w-auto px-8 py-3 bg-teal hover:bg-teal-600 text-white rounded-lg font-medium transition-all transform hover:scale-105 block text-center"
    >
      View My Work
    </Link>
  </motion.div>

  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
    }}
  >
    <Link
      to="/contact"
      className="w-full sm:w-auto px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-medium transition-all transform hover:scale-105 block text-center"
    >
      Contact Me
    </Link>
  </motion.div>
</motion.div>

      </div>

      {/* Scroll Down Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <Link to="/about">
          <i className="fas fa-chevron-down text-2xl text-gray-500 hover:text-teal"></i>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
