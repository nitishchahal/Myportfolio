import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = ({ toggleTheme, theme }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  /* ================= ANIMATION VARIANTS ================= */
  const navVariants = {
    hidden: { y: -60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 },
    }),
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <motion.nav
      className="
        fixed w-full z-50 backdrop-blur-md
        bg-light-bg/85 dark:bg-dark-bg/85
        border-b border-light-border dark:border-dark-border
      "
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO */}
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            to="/"
            className="
              text-2xl font-bold font-poppins
              text-light-accent dark:text-dark-accent
              tracking-wide
            "
          >
            Nitish Choudhary
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex space-x-8">
          {["/", "/about", "/portfolio", "/gallery", "/contact"].map(
            (path, i) => (
              <motion.div
                key={path}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
              >
                <Link
                  to={path}
                  className="
                    font-medium transition-colors
                    text-light-text dark:text-dark-text
                    hover:text-light-accent dark:hover:text-dark-accent
                  "
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").charAt(0).toUpperCase() +
                      path.slice(2)}
                </Link>
              </motion.div>
            )
          )}
        </div>

        {/* THEME + MOBILE TOGGLE */}
        <div className="flex items-center space-x-4">
          <motion.button
            onClick={toggleTheme}
            type="button"
            whileHover={{ scale: 1.1, rotate: 8 }}
            whileTap={{ scale: 0.9 }}
            className="
              p-2 rounded-full transition
              text-light-accent dark:text-dark-accent
              hover:bg-light-accent/10 dark:hover:bg-dark-accent/10
            "
            aria-label="Theme toggle"
          >
            <i
              className={`fas ${
                theme === "dark" ? "fa-sun" : "fa-moon"
              }`}
            />
          </motion.button>

          <motion.button
            className="
              md:hidden p-2
              text-light-text dark:text-dark-text
            "
            onClick={handleMobileMenuClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <i className="fas fa-bars text-xl"></i>
          </motion.button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="
              md:hidden
              bg-light-surface dark:bg-dark-surface
              border-t border-light-border dark:border-dark-border
            "
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="px-6 py-4 flex flex-col space-y-4">
              {["/", "/about", "/portfolio", "/gallery", "/contact"].map(
                (path) => (
                  <Link
                    key={path}
                    to={path}
                    onClick={handleMobileMenuClick}
                    className="
                      font-medium transition-colors
                      text-light-text dark:text-dark-text
                      hover:text-light-accent dark:hover:text-dark-accent
                    "
                  >
                    {path === "/"
                      ? "Home"
                      : path.replace("/", "").charAt(0).toUpperCase() +
                        path.slice(2)}
                  </Link>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
