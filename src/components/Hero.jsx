import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 text-navy dark:text-white">
          <span ref={typingTextRef}></span>
          <span className="text-teal cursor-blink">|</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Creative Web Developer | Visual Storyteller
        </p>

        {/* CTA Buttons */}
        <div className="flex justify-center space-x-4">
          <Link
            to="/portfolio"
            className="px-8 py-3 bg-teal hover:bg-teal-600 text-white rounded-lg font-medium transition-all transform hover:scale-105"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border-2 border-teal text-teal hover:bg-teal hover:text-white rounded-lg font-medium transition-all transform hover:scale-105"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll Down Button */}
      <Link
        to="/about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <i className="fas fa-chevron-down text-2xl text-gray-500 hover:text-teal"></i>
      </Link>
    </section>
  );
};

export default Hero;
