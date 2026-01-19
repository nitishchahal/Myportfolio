import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

// Logos
import logoDark from "../Assets/Logo1.png";   // Dark mode logo
import logoLight from "../Assets/Logo2.png";  // Light mode logo

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact", path: "/contact" },
];

const Header = ({ toggleTheme, theme }) => {
  const location = useLocation();

  const [hoveredPath, setHoveredPath] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= THEME DETECTION ================= */
  const [isDarkMode, setIsDarkMode] = useState(
    theme
      ? theme === "dark"
      : document.documentElement.classList.contains("dark")
  );

  // Fallback if theme prop is not reliable
  useEffect(() => {
    if (theme) {
      setIsDarkMode(theme === "dark");
      return;
    }

    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [theme]);

  const currentLogo = isDarkMode ? logoDark : logoLight;

  const activePath = hoveredPath || location.pathname;

  /* ================= MOBILE MENU VARIANTS ================= */
  const menuVariants = {
    closed: { opacity: 0, height: 0 },
    open: {
      opacity: 1,
      height: "auto",
      transition: { staggerChildren: 0.08 },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, x: -10 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrolled
            ? "bg-light-bg/80 dark:bg-dark-bg/80 backdrop-blur-xl border-b border-light-border/50 dark:border-dark-border/50 shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentLogo}
              src={currentLogo}
              alt="JK08 Edits Logo"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="h-12 md:h-14 w-auto object-contain drop-shadow-md"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
            />
          </AnimatePresence>
        </Link>

        {/* DESKTOP MENU */}
        <div
          className="
            hidden md:flex items-center space-x-2
            bg-light-surface/50 dark:bg-dark-surface/50
            p-1.5 rounded-full border
            border-light-border dark:border-dark-border
            backdrop-blur-sm relative
          "
          onMouseLeave={() => setHoveredPath(null)}
        >
          {NAV_LINKS.map((item) => {
            const isActive = activePath === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onMouseEnter={() => setHoveredPath(item.path)}
                className="relative px-5 py-2 rounded-full text-sm font-medium z-10 transition-colors text-light-text dark:text-dark-text"
              >
                <span
                  className={`relative z-10 ${
                    isActive ? "text-white dark:text-black" : ""
                  }`}
                >
                  {item.name}
                </span>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-light-accent dark:bg-dark-accent z-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                    />
                  )}
                </AnimatePresence>
              </Link>
            );
          })}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            className="p-2.5 rounded-full bg-light-surface dark:bg-dark-surface text-light-accent dark:text-dark-accent border border-light-border dark:border-dark-border"
          >
            <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"}`} />
          </motion.button>

          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen((p) => !p)}
            whileTap={{ scale: 0.9 }}
          >
            <i
              className={`fas ${
                isMobileMenuOpen ? "fa-times" : "fa-bars"
              } text-xl`}
            />
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden absolute top-full left-0 w-full bg-light-surface/95 dark:bg-dark-surface/95 backdrop-blur-xl border-b border-light-border dark:border-dark-border"
          >
            <div className="flex flex-col p-6 space-y-4">
              {NAV_LINKS.map((item) => (
                <motion.div key={item.path} variants={linkVariants}>
                  <Link
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-semibold text-light-text dark:text-dark-text hover:text-light-accent dark:hover:text-dark-accent transition-colors pl-3 border-l-2 border-transparent hover:border-light-accent dark:hover:border-dark-accent"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
