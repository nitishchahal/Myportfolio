import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  ShieldCheck,
  Activity,
  Users,
  Database,
  Sparkles,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJsonwebtokens
} from "react-icons/si";

// ✅ IMPORT YOUR MAIN DATA
import { PROJECTS } from "../Data/Projectsdata";

// TECH ICONS
const techIcons = {
  React: <SiReact className="text-sky-500" />,
  "Node.js": <SiNodedotjs className="text-green-600" />,
  "Express.js": <SiExpress />,
  MongoDB: <SiMongodb className="text-green-500" />,
  JWT: <SiJsonwebtokens className="text-yellow-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-500" />
};

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = PROJECTS.find(
    (p) => p.id.toLowerCase() === id?.toLowerCase()
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        ❌ Project not found (ID: {id})
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-16 bg-light-bg dark:bg-dark-bg transition-colors">
      <div className="max-w-6xl mx-auto">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="mb-10 flex items-center gap-2 text-sm font-semibold text-light-accent dark:text-dark-accent"
        >
          <ArrowLeft size={18} /> Back
        </button>

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-10 items-center mb-16"
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[320px] md:h-[380px] object-cover rounded-3xl shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent rounded-3xl" />
          </div>

          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {project.title}
            </h1>

            <p className="text-lg mb-6 text-gray-500">
              {project.desc}
            </p>

            {/* TECH */}
            <div className="flex flex-wrap gap-3 mb-6">
              {project.tech?.map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-100 dark:bg-neutral-800 border"
                >
                  {techIcons[tech] || <Sparkles size={16} />}
                  <span className="text-sm">{tech}</span>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="flex gap-4">
              <a
                href={project.projectUrl}
                target="_blank"
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 text-white"
              >
                <ExternalLink size={16} /> Live
              </a>

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl border"
                >
                  <Github size={16} /> Code
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* SIMPLE */}
        {project.simpleExplanation && (
          <HighlightCard icon={<Sparkles />} title="Simple Explanation">
            {project.simpleExplanation}
          </HighlightCard>
        )}

        {/* OVERVIEW */}
        {project.overview && (
          <HighlightCard icon={<Activity />} title={project.overview.title}>
            <p className="mb-4">{project.overview.content}</p>
            <ul className="space-y-2">
              {project.overview.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle size={16} className="mt-1" />
                  {p}
                </li>
              ))}
            </ul>
          </HighlightCard>
        )}

        {/* TECH STACK */}
        {project.techStack && (
          <Section title="⚙️ Tech Stack">
            <div className="grid md:grid-cols-2 gap-6">
              <Card title="Frontend" items={project.techStack.frontend} />
              <Card title="Backend" items={project.techStack.backend} />
            </div>
          </Section>
        )}

        {/* USEFULNESS */}
        {project.usefulness && (
          <Section title={project.usefulness.title}>
            <Card title="Benefits" items={project.usefulness.points} />
          </Section>
        )}
      </div>
    </section>
  );
}

/* COMPONENTS */

function Section({ title, children }) {
  return (
    <div className="mb-14">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
}

function HighlightCard({ icon, title, children }) {
  return (
    <div className="mb-10 p-6 rounded-2xl border bg-gray-50 dark:bg-neutral-900">
      <div className="flex items-center gap-2 mb-3 font-semibold text-lg">
        {icon} {title}
      </div>
      <div className="text-gray-600 dark:text-gray-300">
        {children}
      </div>
    </div>
  );
}

function Card({ title, items }) {
  return (
    <div className="p-5 rounded-2xl border bg-white dark:bg-neutral-900">
      <div className="font-semibold mb-3">{title}</div>
      <ul className="space-y-2 text-sm">
        {items?.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}