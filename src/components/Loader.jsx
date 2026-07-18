import React, { useState, useEffect, useRef } from "react";

/**
 * JK08edits — Lens Loader
 * A cinematic "camera focusing" loader: rotating 3D iris blades and tilted
 * focus rings sit behind the logo, which sharpens from blur and is revealed
 * through a growing circular aperture as progress climbs. A timecode +
 * REC indicator ground it in an editing-software feel.
 *
 * Wire `progress` to real load state in production — this demo drives it
 * with requestAnimationFrame over ~1.5s by default.
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
  const totalFrames = Math.floor((progress / 100) * (fps * 8));
  const ff = totalFrames % fps;
  const totalSeconds = Math.floor(totalFrames / fps);
  const ss = totalSeconds % 60;
  const mm = Math.floor(totalSeconds / 60) % 60;
  const hh = Math.floor(totalSeconds / 3600);
  const pad = (n) => String(n).padStart(2, "0");
  const timecode = `${pad(hh)}:${pad(mm)}:${pad(ss)}:${pad(ff)}`;

  const blur = Math.max(0, ((100 - progress) / 100) * 16);
  const reveal = 12 + (progress / 100) * 68;
  const blades = Array.from({ length: 8 });

  return (
    <div className="jk-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=JetBrains+Mono:wght@400;600&display=swap');

        .jk-root{
          position:fixed; inset:0; overflow:hidden;
          display:flex; flex-direction:column; align-items:center; justify-content:center;
          background: radial-gradient(ellipse at 50% 42%, #0e0e0e 0%, #050505 65%, #000 100%);
          font-family:'Space Grotesk', sans-serif; color:#f2f2f2;
          perspective: 1200px;
        }
        .jk-grain{
          position:absolute; inset:0; pointer-events:none; opacity:.05; mix-blend-mode:overlay;
          background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>");
        }
        .jk-sprockets{
          position:absolute; left:0; right:0; height:20px;
          background-image: radial-gradient(circle, rgba(255,255,255,.16) 3px, transparent 3.2px);
          background-size: 34px 100%;
          animation: jk-scroll 3s linear infinite;
        }
        .jk-sprockets-top{ top:16px; }
        .jk-sprockets-bottom{ bottom:16px; animation-direction:reverse; }
        @keyframes jk-scroll{ from{ background-position:0 center; } to{ background-position:340px center; } }

        .jk-stage{
          position:relative; width:min(66vmin,400px); height:min(66vmin,400px);
          display:flex; align-items:center; justify-content:center;
          transform-style:preserve-3d;
        }
        .jk-iris{ position:absolute; inset:0; transform-style:preserve-3d; animation: jk-breathe 6s ease-in-out infinite; }
        @keyframes jk-breathe{
          0%,100%{ transform: rotateX(8deg) rotateY(-6deg); }
          50%{ transform: rotateX(-6deg) rotateY(8deg); }
        }
        .jk-blade{
          position:absolute; inset:0; margin:auto;
          clip-path: polygon(50% 50%, 100% 22%, 100% 0%, 66% 0%);
          background: linear-gradient(135deg,#1b1b1b,#0a0a0a 55%,#2a0409);
          border-top:1px solid rgba(255,30,60,.35);
          opacity:.85;
          animation: jk-spin 16s linear infinite;
        }
        @keyframes jk-spin{
          from{ transform: rotate(var(--start,0deg)) translateZ(var(--z,0px)); }
          to{ transform: rotate(calc(var(--start,0deg) + 360deg)) translateZ(var(--z,0px)); }
        }
        .jk-ring{
          position:absolute; left:50%; top:50%; border-radius:50%;
          border:1px solid rgba(255,255,255,.14);
          transform: translate(-50%,-50%) rotateX(70deg);
        }
        .jk-ring-1{ width:92%; height:92%; border-color:rgba(255,30,60,.4); animation: jk-ring1 8s linear infinite; }
        .jk-ring-2{ width:74%; height:74%; animation: jk-ring2 12s linear infinite; }
        @keyframes jk-ring1{ from{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(0deg);} to{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(360deg);} }
        @keyframes jk-ring2{ from{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(360deg);} to{ transform:translate(-50%,-50%) rotateX(70deg) rotateZ(0deg);} }

        .jk-reveal{
          position:relative; z-index:2; width:100%; height:100%;
          display:flex; align-items:center; justify-content:center;
        }
        .jk-logo{
          font-weight:700; font-size:clamp(1.9rem,6vw,3.3rem);
          letter-spacing:.16em; text-transform:uppercase; text-align:center;
          text-shadow:0 0 30px rgba(255,30,60,.22);
        }
        .jk-accent{ color:#ff1e3c; text-shadow:0 0 18px rgba(255,30,60,.8), 0 0 42px rgba(255,30,60,.4); }

        .jk-hud{
          position:absolute; bottom:88px; display:flex; align-items:center; gap:16px;
          font-family:'JetBrains Mono', monospace; font-size:.78rem; letter-spacing:.08em; color:#8f8f8f;
        }
        .jk-rec{ display:flex; align-items:center; gap:6px; color:#ff1e3c; }
        .jk-dot{ width:7px; height:7px; border-radius:50%; background:#ff1e3c; box-shadow:0 0 8px #ff1e3c; animation: jk-pulse 1.1s ease-in-out infinite; }
        @keyframes jk-pulse{ 0%,100%{ opacity:1;} 50%{ opacity:.25;} }
        .jk-timecode{ color:#f2f2f2; }
        .jk-status{ color:#5a5a5a; }

        .jk-progress-wrap{ position:absolute; bottom:46px; display:flex; align-items:center; gap:12px; width:min(58vmin,300px); }
        .jk-progress-track{ flex:1; height:3px; border-radius:2px; background:#1b1b1b; overflow:hidden; }
        .jk-progress-fill{ height:100%; background:linear-gradient(90deg,#7a0f1e,#ff1e3c); box-shadow:0 0 12px rgba(255,30,60,.6); }
        .jk-progress-pct{ font-family:'JetBrains Mono', monospace; font-size:.72rem; color:#8f8f8f; width:34px; text-align:right; }

        @media (prefers-reduced-motion: reduce){
          .jk-blade, .jk-ring-1, .jk-ring-2, .jk-iris, .jk-dot, .jk-sprockets{ animation:none !important; }
        }
      `}</style>

      <div className="jk-grain" />
      <div className="jk-sprockets jk-sprockets-top" />
      <div className="jk-sprockets jk-sprockets-bottom" />

      <div className="jk-stage">
        <div className="jk-iris">
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

        <div className="jk-reveal" style={{ clipPath: `circle(${reveal}% at 50% 50%)` }}>
          <h1 className="jk-logo" style={{ filter: `blur(${blur}px)` }}>
            JK08<span className="jk-accent">edits</span>
          </h1>
        </div>
      </div>

      <div className="jk-hud">
        <div className="jk-rec"><span className="jk-dot" /> REC</div>
        <div className="jk-timecode">{timecode}</div>
        <div className="jk-status">{done ? "READY" : "LOADING"}</div>
      </div>

      <div className="jk-progress-wrap">
        <div className="jk-progress-track">
          <div className="jk-progress-fill" style={{ width: `${progress}%` }} />
        </div>
        <div className="jk-progress-pct">{Math.floor(progress)}%</div>
      </div>
    </div>
  );
}