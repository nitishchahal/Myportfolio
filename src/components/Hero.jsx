import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const typingTextRef = useRef(null);

  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: { value: 70, density: { enable: true, value_area: 900 } },
          color: { value: "#4A2C2A" }, // walnut
          shape: { type: "circle" },
          opacity: { value: 0.35 },
          size: { value: 3, random: true },
          line_linked: {
            enable: true,
            distance: 160,
            color: "#E6D3B1", // sandstone
            opacity: 0.3,
            width: 1,
          },
          move: { enable: true, speed: 1.8, out_mode: "out" },
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
    }

    const text = "Nitish Choudhary";
    let i = 0;

    function typeWriter() {
      if (!typingTextRef.current) return;
      if (i < text.length) {
        typingTextRef.current.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 90);
      }
    }

    const timeoutId = setTimeout(typeWriter, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="home"
      className="
        min-h-screen flex items-center justify-center relative overflow-hidden
        bg-light-bg dark:bg-dark-bg
      "
    >
      {/* Particles */}
      <div id="particles-js" className="absolute inset-0" />

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10 py-20">
        {/* Heading */}
        <motion.h1
          className="
            text-5xl md:text-7xl font-bold font-poppins mb-6
            text-light-accent dark:text-dark-text
            tracking-tight
          "
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span ref={typingTextRef}></span>
          <span className="text-light-accent/70 dark:text-dark-accent/80 cursor-blink">
            |
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
            flex flex-col sm:flex-row justify-center
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
                block text-center
              "
            >
              View My Work
            </Link>
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
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
                block text-center
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
