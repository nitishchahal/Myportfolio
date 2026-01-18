import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Facebook,
  Twitter,
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
    platform: "X (Twitter)",
    desc: "Visual clips, reels & high-impact short posts.",
    stats: "120K impressions",
    image: "/images/reels/twitter.jpg",
    icon: Twitter,
    link: "https://x.com",
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

/* ================= CARD ================= */
const SocialCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <motion.div
      className="
        group relative h-[450px] rounded-[2rem] overflow-hidden
        bg-light-surface dark:bg-dark-surface
        border border-light-border dark:border-dark-border
        shadow-sm hover:shadow-2xl transition-all duration-500
      "
    >
      {/* IMAGE */}
      <div className="absolute inset-0 z-0">
        <img
          src={item.image}
          alt={item.platform}
          className="
            w-full h-full object-cover grayscale
            group-hover:grayscale-0 group-hover:scale-110
            transition-all duration-700
          "
        />

        <div
          className="
            absolute inset-0
            bg-light-bg/70 dark:bg-dark-bg/60
            group-hover:opacity-0 transition-opacity duration-500
          "
        />

        <div
          className="
            absolute inset-0 opacity-0 group-hover:opacity-100
            bg-gradient-to-b
            from-light-accent/80 to-charcoal/95
            transition-opacity duration-500
          "
        />
      </div>

      {/* PLAY ICON */}
      <div
        className="
          absolute inset-0 z-10 flex items-center justify-center
          opacity-0 group-hover:opacity-100 transition
        "
      >
        <Play size={60} className="text-snow drop-shadow-xl" />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 p-8 h-full flex flex-col">
        {/* ICON */}
        <div
          className="
            w-14 h-14 rounded-2xl flex items-center justify-center
            bg-light-surface dark:bg-dark-bg
            shadow-md
            border border-light-border dark:border-dark-border
            group-hover:bg-light-accent/20 transition-all duration-300
          "
        >
          <Icon
            size={26}
            strokeWidth={1.8}
            className="
              stroke-light-accent dark:stroke-dark-accent
              group-hover:stroke-snow transition-colors duration-300
            "
          />
        </div>

        {/* TEXT */}
        <div className="mt-auto">
          <h3
            className="
              text-2xl font-bold tracking-tight
              text-light-text dark:text-dark-text
              group-hover:text-snow transition
            "
          >
            {item.platform}
          </h3>

          <p
            className="
              mt-4 text-sm line-clamp-2 transition
              text-light-textMuted dark:text-dark-textMuted
              group-hover:text-snow/80
            "
          >
            {item.desc}
          </p>

          <p
            className="
              mt-2 text-xs font-semibold tracking-wide
              text-light-accent dark:text-dark-accent
              group-hover:text-snow transition
            "
          >
            {item.stats}
          </p>

          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-6 inline-flex items-center gap-2
              text-xs font-bold uppercase tracking-[0.15em]
              text-light-accent dark:text-dark-accent
              group-hover:text-snow transition
            "
          >
            Watch Reel <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */
export default function SocialReelsShowcase() {
  return (
    <section className="py-24 bg-light-bg dark:bg-dark-bg">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-12 h-[3px] bg-light-accent dark:bg-dark-accent rounded-full" />
            <span className="text-xs font-black tracking-[0.3em] uppercase
                             text-light-textMuted dark:text-dark-textMuted">
              Social Media
            </span>
          </div>

          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl md:text-6xl font-black tracking-tighter
              text-light-text dark:text-dark-text
            "
          >
            Viral{" "}
            <span className="text-light-accent dark:text-dark-accent">
              Reels
            </span>{" "}
            & Content
          </motion.h2>

          <p
            className="
              mt-6 font-medium max-w-sm text-lg leading-relaxed
              text-light-textMuted dark:text-dark-textMuted
            "
          >
            Showcasing high-performing reels across platforms with real
            engagement & reach.
          </p>
        </div>

        {/* GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {SOCIAL_REELS.map((item, index) => (
            <SocialCard key={index} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
