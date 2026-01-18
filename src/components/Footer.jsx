import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer
      className="
        relative overflow-hidden py-12
        bg-dark-bg text-snow
      "
    >
      {/* Subtle premium glow */}
      <div
        className="
          absolute inset-0 pointer-events-none
          bg-[radial-gradient(circle_at_top_left,_rgba(230,211,177,0.12),transparent_55%)]
        "
      ></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link
              to="/"
              className="
                text-2xl font-extrabold
                text-light-accent dark:text-dark-accent
              "
            >
              Nitish Choudhary
            </Link>

            <p className="mt-2 text-sm text-light-textMuted dark:text-dark-textMuted">
              Building digital experiences that inspire
            </p>
          </div>

          {/* Navigation + Socials */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Nav links */}
            <div className="flex space-x-6 text-sm">
              <Link
                to="/"
                className="
                  text-light-textMuted dark:text-dark-textMuted
                  hover:text-light-accent dark:hover:text-dark-accent
                  transition
                "
              >
                Home
              </Link>
              <Link
                to="/about"
                className="
                  text-light-textMuted dark:text-dark-textMuted
                  hover:text-light-accent dark:hover:text-dark-accent
                  transition
                "
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="
                  text-light-textMuted dark:text-dark-textMuted
                  hover:text-light-accent dark:hover:text-dark-accent
                  transition
                "
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="
                  text-light-textMuted dark:text-dark-textMuted
                  hover:text-light-accent dark:hover:text-dark-accent
                  transition
                "
              >
                Contact
              </Link>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 text-light-textMuted dark:text-dark-textMuted">
              <a
                href="https://github.com/nitishchahal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nitish-choudhary-mr-13-jatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/jk08edits/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/NitishChahal_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-accent dark:hover:text-dark-accent transition"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-light-textMuted dark:text-dark-textMuted">
              &copy; {new Date().getFullYear()} Nitish Choudhary. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
