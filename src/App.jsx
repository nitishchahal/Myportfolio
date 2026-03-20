// import React from 'react';

// // This is a test component to verify Tailwind CSS installation.
// // It uses a variety of classes for colors, layout, and responsiveness.

// function App() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300 p-4 bg-gray-100 dark:bg-gray-900">
      
//       {/* Main content card */}
//       <div className="bg-white dark:bg-800 p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center space-y-6 transform transition-all duration-300 hover:scale-105">
        
//         {/* Heading with custom font and color */}
//         <h1 className="text-3xl md:text-5xl font-bold font-sans text-blue-600 dark:text-yellow-400">
//           Tailwind is Working!
//         </h1>

//         {/* Paragraph text */}
//         <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl">
//           If you can see these styles, your Tailwind CSS setup is correct.
//         </p>

//         {/* Button with hover effect and accessibility focus */}
//         <button className="bg-green-500 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-all duration-300">
//           Test Button
//         </button>

//         {/* A simple responsive block */}
//         <div className="mt-8">
//           <p className="text-sm text-gray-500 dark:text-gray-400">
//             This card should be centered and responsive.
//           </p>
//           <p className="text-sm md:text-base text-gray-500 dark:text-gray-400">
//             The text size changes on medium screens and up.
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import About from './components/About';
// import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
// import Gallery from './components/Gallery';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import BackToTop from './components/BackToTop';
// import './index.css';

// function App() {
//   const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
//   const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

//   useEffect(() => {
//     document.documentElement.className = theme;
//     localStorage.setItem('theme', theme);

//     const handleScroll = () => {
//       if (window.pageYOffset > 300) {
//         setIsBackToTopVisible(true);
//       } else {
//         setIsBackToTopVisible(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(theme === 'dark' ? 'light' : 'dark');
//   };

//   return (
//     <div className={`bg-gray-50 text-gray-800 dark:bg-dark dark:text-gray-200 font-inter`}>
//       <Header toggleTheme={toggleTheme} theme={theme} />
//       <main>
//         <Hero />
//         <About />
//         <Portfolio />
//         <Gallery />
//         <Skills />
//         <Contact />
//       </main>
//       <Footer />
//       <BackToTop isVisible={isBackToTopVisible} />
//     </div>
//   );
// }

// export default App;





import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ProjectDetails from "./components/ProjectDetails";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import ScrollToTop from "./ScrollToTop";
import ServicesShowcase from "./components/ServicesShowcase";
import "./index.css";

// ✅ Loader Component (inline for simplicity)
function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-white dark:bg-black">
      <span className="loader"></span>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isBackToTopVisible, setIsBackToTopVisible] = useState(false);

  // ✅ NEW: loader state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);

    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsBackToTopVisible(true);
      } else {
        setIsBackToTopVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // ✅ Loader timer (you can adjust time)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // ✅ Show loader first
  if (loading) return <Loader />;

  return (
    <Router>
      <div className="bg-gray-50 text-gray-800 dark:bg-dark dark:text-gray-200 font-inter">
        <Header toggleTheme={toggleTheme} theme={theme} />

        <main>
          <ScrollToTop />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Projects />
                  <Gallery />
                  <Skills />
                  <Contact />
                  <ServicesShowcase />
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
        <BackToTop isVisible={isBackToTopVisible} />
      </div>
    </Router>
  );
}

export default App;