import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

/**
 * JK08edits — Lens Loader (portfolio theme)
 *
 * Recolored to match the site's warm brown/cream palette (#4A2C2A / #E6D3B1,
 * snow / charcoal) and switched to Poppins to line up with the Hero heading.
 * The logo now sits in a glassmorphism panel — backdrop-blurred, bordered,
 * glowing — floating on top of the rotating 3D iris so it reads as the
 * clear focal point instead of blending into the background motion.
 *
 * NOTE: I don't have your exact `light-bg` / `dark-bg` / `*-textMuted` hex
 * values (only the accent + snow/charcoal ones appeared in Hero.jsx), so
 * I picked warm cream / deep espresso tones that sit naturally with your
 * accent colors. Swap the values in the ":root"/".dark" block below for
 * your exact tailwind.config tokens if they differ.
 *
 * Dark mode follows your existing pattern: a `.dark` class on a parent
 * element (as read by Hero's particle effect), not prefers-color-scheme.
 */
export default function Loader({ onComplete, duration = 1500 }) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  useEffect(() => {
    let raf;
    let start = null;

    const tick = (ts) => {
      if (start === null) start = ts;
      const elapsed = ts - start;
      const pct = Math.min(100, (elapsed / duration) * 100);
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        onCompleteRef.current?.();
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration]);

  const fps = 24;
  const loaderSeconds = duration / 1000;
  const totalFrames = Math.floor((progress / 100) * fps * loaderSeconds);
  const ff = totalFrames % fps;
  const totalSeconds = Math.floor(totalFrames / fps);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = Math.floor(totalSeconds / 3600);
  const pad = (n) => String(n).padStart(2, "0");
  const timecode = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;

  const blur = Math.max(0, ((100 - progress) / 100) * 12);
  const stageScale = 0.9 + (progress / 100) * 0.1;
  const irisOpacity = 0.45 + (progress / 100) * 0.55;
  const blades = Array.from({ length: 8 });
  const dur = `${duration}ms`;
  const durFast = `${Math.round(duration * 0.85)}ms`;

  return (
    <div className="jk-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600&display=swap');

        .jk-root{
          --bg: #F7F1E8;
          --ink: #3B2420;
          --muted: #8a7266;
          --accent: #4A2C2A;
          --accent-soft: rgba(74,44,42,0.16);
          --glass-bg: rgba(255,255,255,0.38);
          --glass-border: rgba(74,44,42,0.16);
          --glass-shadow: rgba(74,44,42,0.16);

          position:fixed; inset:0; overflow:hidden;
          display:flex; align-items:center; justify-content:center;
          background: var(--bg);
          color: var(--ink);
          font-family:'Poppins', sans-serif;
          perspective: 1200px;
          transition: background-color .5s ease, color .5s ease;
        }
        .dark .jk-root{
          --bg: #1B1411;
          --ink: #F3E7D3;
          --muted: #b7a290;
          --accent: #E6D3B1;
          --accent-soft: rgba(230,211,177,0.16);
          --glass-bg: rgba(255,255,255,0.06);
          --glass-border: rgba(230,211,177,0.2);
          --glass-shadow: rgba(0,0,0,0.35);
        }

        .jk-stage{
          position:relative; width:min(66vmin,420px); height:min(66vmin,420px);
          display:flex; align-items:center; justify-content:center;
          transform-style:preserve-3d;
          transition: transform 0.08s linear;
        }
        .jk-iris{
          position:absolute; inset:0; transform-style:preserve-3d;
          animation: jk-breathe ${dur} ease-in-out forwards;
          transition: opacity 0.08s linear;
        }
        @keyframes jk-breathe{
          0%{ transform: rotateX(14deg) rotateY(-10deg) scale(0.92); }
          50%{ transform: rotateX(-8deg) rotateY(12deg) scale(1); }
          100%{ transform: rotateX(0deg) rotateY(0deg) scale(1); }
        }
        .jk-blade{
          position:absolute; inset:0; margin:auto;
          clip-path: polygon(50% 50%, 100% 22%, 100% 0%, 66% 0%);
          background: linear-gradient(135deg, var(--accent-soft), transparent 60%);
          border-top:1px solid var(--accent-soft);
          opacity:.85;
          animation: jk-spin ${dur} linear forwards;
        }
        @keyframes jk-spin{
          from{ transform: rotate(var(--start,0deg)) translateZ(var(--z,0px)); }
          to{ transform: rotate(calc(var(--start,0deg) + 360deg)) translateZ(var(--z,0px)); }
        }
        .jk-ring{
          position:absolute; left:50%; top:50%; border-radius:50%;
          border:1px solid var(--accent-soft);
          transform: translate(-50%,-50%) rotateX(70deg);
        }
        .jk-ring-1{ width:92%; height:92%; animation: jk-ring1 ${dur} linear forwards; }
        .jk-ring-2{ width:74%; height:74%; animation: jk-ring2 ${durFast} linear forwards; }
        @keyframes jk-ring1{ from{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(0deg);} to{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(360deg);} }
        @keyframes jk-ring2{ from{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(360deg);} to{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(0deg);} }

        /* --- Glassmorphism panel, floating above the iris --- */
        .jk-glass{
          position:relative; z-index:2;
          display:flex; flex-direction:column; align-items:center; gap:1.1rem;
          padding: 2.6rem 3.4rem;
          border-radius: 28px;
          background: var(--glass-bg);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          box-shadow: 0 24px 60px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,.25);
          animation: jk-glow ${dur} ease-in-out forwards;
        }
        @keyframes jk-glow{
          0%{ box-shadow: 0 12px 30px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,.15); transform: scale(0.96); }
          50%{ box-shadow: 0 24px 70px var(--glass-shadow), 0 0 0 1px var(--accent-soft), inset 0 1px 0 rgba(255,255,255,.3); }
          100%{ box-shadow: 0 24px 60px var(--glass-shadow), inset 0 1px 0 rgba(255,255,255,.25); transform: scale(1); }
        }

        .jk-logo{
          font-weight:700; font-size:clamp(1.7rem,5vw,2.9rem);
          letter-spacing:.14em; text-transform:uppercase; text-align:center;
          color: var(--ink);
        }
        .jk-accent{ color: var(--accent); }

        .jk-hud{
          display:flex; align-items:center; gap:14px;
          font-family:'JetBrains Mono', monospace; font-size:.72rem; letter-spacing:.08em; color: var(--muted);
        }
        .jk-rec{ display:flex; align-items:center; gap:6px; color: var(--accent); }
        .jk-dot{ width:6px; height:6px; border-radius:50%; background: var(--accent); animation: jk-pulse 0.75s ease-in-out infinite; }
        @keyframes jk-pulse{ 0%,100%{ opacity:1;} 50%{ opacity:.3;} }

        .jk-progress-wrap{ display:flex; align-items:center; gap:10px; width:min(46vmin,230px); }
        .jk-progress-track{ flex:1; height:3px; border-radius:2px; background: var(--accent-soft); overflow:hidden; }
        .jk-progress-fill{
          height:100%; background: var(--accent);
          transition: width 0.08s linear;
          box-shadow: 0 0 10px var(--accent-soft);
        }
        .jk-progress-pct{ font-family:'JetBrains Mono', monospace; font-size:.68rem; color: var(--muted); width:30px; text-align:right; }

        @media (prefers-reduced-motion: reduce){
          .jk-blade, .jk-ring-1, .jk-ring-2, .jk-iris, .jk-dot, .jk-glass{ animation:none !important; }
        }
      `}</style>

      <div className="jk-stage" style={{ transform: `scale(${stageScale})` }}>
        <div className="jk-iris" style={{ opacity: irisOpacity }}>
          {blades.map((_, i) => (
            <div
              key={i}
              className="jk-blade"
              style={{ "--start": `${i * (360 / blades.length)}deg`, "--z": `${i * 3}px` }}
            />
          ))}
          <div className="jk-ring jk-ring-1" />
          <div className="jk-ring jk-ring-2" />
        </div>

        <motion.div
          className="jk-glass"
          initial={{ opacity: 0, scale: 0.88, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="jk-logo" style={{ filter: `blur(${blur}px)`, transition: "filter .05s linear" }}>
            Nitish<span className="jk-accent">Choudhary</span>
          </h1>

          <div className="jk-hud">
            <div className="jk-rec"><span className="jk-dot" /> DEVELOPER</div>
            <div>{timecode}</div>
            <div>{done ? "READY" : "LOADING"}</div>
          </div>

          <div className="jk-progress-wrap">
            <div className="jk-progress-track">
              <div className="jk-progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <div className="jk-progress-pct">{Math.floor(progress)}%</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}