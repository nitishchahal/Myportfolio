import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Github, Globe } from "lucide-react"; // ✅ added Globe

const ProjectCard = ({ item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const Icon = item.icon || Globe; // ✅ FIX: fallback icon

  const handleCardClick = (e) => {
    if (e.target.closest("a") || e.target.closest("button")) return;
    navigate(`/projects/${item.id}`);
  };

  return (
    <motion.div
      onMouseLeave={() => setIsExpanded(false)}
      onClick={handleCardClick}
      className="group relative cursor-pointer h-[450px] rounded-[2rem] overflow-hidden
      bg-light-surface dark:bg-dark-surface
      border border-light-border dark:border-dark-border
      shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.target.src = "/images/fallback.png")}
          className="w-full h-full object-cover grayscale
          group-hover:grayscale-0 group-hover:scale-110
          transition-all duration-700"
        />

        <div className="absolute inset-0 bg-light-bg/70 dark:bg-dark-bg/60
        group-hover:opacity-0 transition-opacity duration-500" />

        <div className="absolute inset-0 opacity-0 group-hover:opacity-50
        bg-gradient-to-b from-light-accent/80 to-charcoal/95
        transition-opacity duration-500" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        
        {/* ICON */}
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center
        bg-light-surface dark:bg-dark-bg
        shadow-md border border-light-border dark:border-dark-border">
          
          {/* ✅ SAFE RENDER */}
          {Icon && <Icon size={26} />}
        </div>

        {/* TEXT */}
        <div className="mt-auto">
          <h3 className="text-2xl font-bold">{item.title}</h3>
          <p className="mt-4 text-sm line-clamp-2">{item.desc}</p>

          {/* BUTTONS */}
          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              onClick={(e) => e.stopPropagation()}
              href={item.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              Preview <ArrowRight size={14} />
            </a>

            {item.githubUrl && item.githubUrl !== "#" && (
              <a
                onClick={(e) => e.stopPropagation()}
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <Github size={14} /> GitHub
              </a>
            )}
          </div>
        </div>

        {/* EXPANDED PANEL */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute bottom-3 inset-x-3 p-4 bg-white dark:bg-black rounded-xl"
            >
              <p>{item.desc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default ProjectCard;