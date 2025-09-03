import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-navy via-gray-900 to-navy text-white py-12 relative overflow-hidden">
      {/* Futuristic glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(0,200,200,0.15),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link
              to="/"
              className="text-2xl font-extrabold bg-gradient-to-r from-red-400 to-indigo-500 bg-clip-text text-transparent"
            >
              Nitish Choudhary
            </Link>
            <p className="mt-2 text-gray-400 text-sm">
              Building digital experiences that inspire 🚀
            </p>
          </div>

          {/* Navigation + Socials */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            {/* Nav links */}
            <div className="flex space-x-6">
              <Link to="/" className="hover:text-teal-400 transition">
                Home
              </Link>
              <Link to="/about" className="hover:text-teal-400 transition">
                About
              </Link>
              <Link to="/portfolio" className="hover:text-teal-400 transition">
                Portfolio
              </Link>
              <Link to="/contact" className="hover:text-teal-400 transition">
                Contact
              </Link>
            </div>

            {/* Social links */}
            <div className="flex space-x-4 text-gray-400">
              <a
                href="https://github.com/nitishchahal"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/nitish-choudhary-mr-13-jatt/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/jk08edits/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/NitishChahal_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <Twitter size={20} />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs">
              &copy; {new Date().getFullYear()} Nitish Choudhary. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
