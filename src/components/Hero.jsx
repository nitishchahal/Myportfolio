import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  // 🎭 Typewriter Strings (Only the parts that actually type)
  const texts = ["Nitish Choudhary", "a Software Engineer"];
  const [text, setText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // 📝 Dynamic Typewriter Effect
  useEffect(() => {
    const current = texts[currentTextIndex];
    const speed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(current.substring(0, text.length + 1));

        if (text === current) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setText(current.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, currentTextIndex]);

  // 🌌 Particles & Theme Management Effect
  useEffect(() => {
    const initParticles = () => {
      if (!window.particlesJS) return;

      const container = document.getElementById("particles-js");
      const isDark = document.documentElement.classList.contains("dark");

      if (container) {
        container.innerHTML = "";
      }

      window.particlesJS("particles-js", {
        particles: {
          number: { value: 70, density: { enable: true, value_area: 900 } },
          color: {
            value: isDark ? "#E6D3B1" : "#4A2C2A",
          },
          shape: { type: "circle" },
          opacity: {
            value: isDark ? 0.8 : 0.5,
          },
          size: {
            value: isDark ? 4 : 3,
            random: true,
          },
          shadow: {
            enable: true,
            color: isDark ? "#ffffff" : "#000000",
            blur: isDark ? 15 : 6,
          },
          line_linked: {
            enable: true,
            distance: 160,
            color: isDark ? "#ffffff" : "#000000",
            opacity: isDark ? 0.6 : 0.35,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.8,
            out_mode: "out",
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" },
            resize: true,
          },
          modes: {
            grab: { distance: 140, line_linked: { opacity: 0.6 } },
            push: { particles_nb: 3 },
          },
        },
        retina_detect: true,
      });
    };

    initParticles();

    const observer = new MutationObserver(() => {
      initParticles();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center relative overflow-hidden
        bg-light-bg dark:bg-dark-bg
      "
    >
      {/* Particles Layout */}
      <div id="particles-js" className="absolute inset-0" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-20 w-full">
        {/* Dynamic Headings */}
        <motion.h1
          className="
            text-5xl md:text-7xl font-bold font-poppins mb-6
            tracking-tight min-h-[120px] md:min-h-[160px] flex items-center justify-center combo-box
          "
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span>
            {/* 🎨 Static Text: Using a nicely muted variation of your core theme styles */}
            <span className="text-light-textMuted/80 dark:text-dark-textMuted/70 mr-3 md:mr-5">
              Hi, I am
            </span>
            
            {/* ⚡ Dynamic Typing Container matched perfectly to your custom theme colors */}
            <span className="text-[#4A2C2A] dark:text-[#E6D3B1]">
              {text}
              <span className="text-[#4A2C2A]/60 dark:text-[#E6D3B1]/80 animate-pulse inline-block ml-1">
                |
              </span>
            </span>
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="
            text-xl md:text-2xl mb-10
            text-light-textMuted dark:text-dark-textMuted
            max-w-2xl mx-auto
          "
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Creative Web Developer · Visual Storyteller
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          className="
            flex flex-col sm:flex-row justify-center items-center
            sm:space-x-5 space-y-4 sm:space-y-0
          "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.25, delayChildren: 2 },
            },
          }}
        >
          {/* Primary CTA */}
          <motion.div
            className="w-full sm:w-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to="/portfolio"
              className="
                px-8 py-3 rounded-lg font-medium
                bg-light-accent text-snow
                dark:bg-dark-accent dark:text-charcoal
                hover:opacity-90
                transition-all transform hover:scale-[1.04]
                block text-center min-w-[180px]
              "
            >
              View My Work
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            className="w-full sm:w-auto"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Link
              to="/contact"
              className="
                px-8 py-3 rounded-lg font-medium
                border border-light-accent text-light-accent
                dark:border-dark-accent dark:text-dark-accent
                hover:bg-light-accent hover:text-snow
                dark:hover:bg-dark-accent dark:hover:text-charcoal
                transition-all transform hover:scale-[1.04]
                block text-center min-w-[180px]
              "
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <Link to="/about">
          <i
            className="
              fas fa-chevron-down text-2xl
              text-light-textMuted dark:text-dark-textMuted
              hover:text-light-accent dark:hover:text-dark-accent
              transition
            "
          />
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;