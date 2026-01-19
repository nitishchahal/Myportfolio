import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  Instagram,
  Youtube,
  Facebook,
  Play,
  ArrowRight,
} from "lucide-react";

/* ================= SOCIAL REELS DATA ================= */
const SOCIAL_REELS = [
  {
    platform: "Instagram",
    desc: "High-engagement reels focused on trends, AI visuals & storytelling.",
    stats: "1.2M+ views • 48K followers",
    image: "/images/reels/instagram.jpg",
    icon: Instagram,
    link: "https://instagram.com",
  },
  {
    platform: "YouTube Shorts",
    desc: "Cinematic shorts & viral AI-generated video content.",
    stats: "850K+ views • 12K subscribers",
    image: "/images/reels/youtube.jpg",
    icon: Youtube,
    link: "https://youtube.com",
  },
  {
    platform: "Facebook Reels",
    desc: "Short-form content optimized for reach and shares.",
    stats: "500K+ views",
    image: "/images/reels/facebook.jpg",
    icon: Facebook,
    link: "https://facebook.com",
  },
  {
    platform: "Featured Portfolio",
    desc: "Top performing reels curated in one place.",
    stats: "Top 1% engagement",
    image: "/images/reels/portfolio.jpg",
    icon: Play,
    link: "#",
  },
];

/* ================= INSTAGRAM EMBEDS ================= */
const INSTAGRAM_EMBEDS = [
  "https://www.instagram.com/reel/DHxz_M_OjQ2/",
  "https://www.instagram.com/p/DTDnZ2pkyEG/",
  "https://www.instagram.com/reel/DCzsL9Mpgyj/",
];



/* ================= MAIN COMPONENT ================= */
export default function SocialReelsShowcase() {

  // Load Instagram script once
  useEffect(() => {
    if (!window.instgrm) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="relative py-32 bg-black overflow-hidden text-white">
      
      {/* Background accents */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-24"
        >
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-pink-400 mb-4">
            Social Media Showcase
          </p>

          <h2 className="text-4xl md:text-6xl font-black leading-tight">
            Viral <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Reels
            </span>{" "}
            & High-Impact Content
          </h2>

          <p className="mt-6 text-lg text-white/70 leading-relaxed">
            Showcasing real engagement, cinematic storytelling, and
            performance-driven short-form content across platforms.
          </p>
        </motion.div>

        {/* Instagram Embeds */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-32">
          {INSTAGRAM_EMBEDS.map((url, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl overflow-hidden bg-white shadow-2xl"
              dangerouslySetInnerHTML={{
                __html: `
                  <blockquote 
                    class="instagram-media"
                    data-instgrm-permalink="${url}"
                    data-instgrm-version="14"
                    style="max-width:540px;margin:auto;"
                  ></blockquote>
                `,
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
