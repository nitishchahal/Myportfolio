import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const tiltSpring = { stiffness: 220, damping: 20, mass: 0.4 };

/**
 * CTAButton — professional 3D-tilt call-to-action.
 *
 * - Tilts in 3D (rotateX/rotateY) following the cursor, spring-smoothed.
 * - A specular highlight tracks the pointer, like light catching glass.
 * - Shadow deepens and lifts on hover for real elevation, not just opacity.
 * - variant="primary" -> filled button (bg-light-accent / dark-accent)
 * - variant="secondary" -> outlined button (border + fill on hover)
 *
 * Usage:
 *   <CTAButton to="/portfolio" variant="primary">View My Work</CTAButton>
 *   <CTAButton to="/contact" variant="secondary">Contact Me</CTAButton>
 */
export function CTAButton({ to, children, variant = "primary" }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-30, 30], [8, -8]), tiltSpring);
  const rotateY = useSpring(useTransform(mouseX, [-90, 90], [-10, 10]), tiltSpring);
  const lift = useSpring(hovered ? 14 : 0, tiltSpring);

  const glowX = useTransform(mouseX, (v) => v + 90);
  const glowY = useTransform(mouseY, (v) => v + 24);
  const glow = useTransform([glowX, glowY], ([gx, gy]) =>
    `radial-gradient(140px circle at ${gx}px ${gy}px, rgba(255,255,255,0.4), transparent 65%)`
  );

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    setHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  const isPrimary = variant === "primary";

  return (
    <motion.div
      className="w-full sm:w-auto"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      style={{ perspective: 900 }}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={handleLeave}
        whileTap={{ scale: 0.96 }}
        style={{ rotateX, rotateY, translateZ: lift, transformStyle: "preserve-3d" }}
        className="block"
      >
        <Link
          to={to}
          className={`
            relative overflow-hidden block text-center min-w-[180px] select-none
            px-8 py-3 rounded-lg font-medium
            transition-[background-color,box-shadow,border-color] duration-300
            ${
              isPrimary
                ? `bg-light-accent text-snow dark:bg-dark-accent dark:text-charcoal
                   shadow-[0_6px_16px_-6px_rgba(74,44,42,0.45)]
                   dark:shadow-[0_6px_16px_-6px_rgba(230,211,177,0.3)]
                   ${hovered ? "shadow-[0_22px_40px_-12px_rgba(74,44,42,0.55)] dark:shadow-[0_22px_40px_-12px_rgba(230,211,177,0.4)]" : ""}`
                : `border border-light-accent text-light-accent dark:border-dark-accent dark:text-dark-accent
                   hover:bg-light-accent hover:text-snow dark:hover:bg-dark-accent dark:hover:text-charcoal
                   ${hovered ? "shadow-[0_18px_34px_-14px_rgba(74,44,42,0.4)] dark:shadow-[0_18px_34px_-14px_rgba(230,211,177,0.3)]" : ""}`
            }
          `}
        >
          {/* Specular highlight tracking the cursor */}
          <motion.span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-lg"
            style={{ background: glow, opacity: hovered ? 1 : 0, mixBlendMode: "overlay", transition: "opacity .25s ease" }}
          />
          <span className="relative z-10" style={{ transform: "translateZ(20px)" }}>
            {children}
          </span>
        </Link>
      </motion.div>
    </motion.div>
  );
}
export default CTAButton;