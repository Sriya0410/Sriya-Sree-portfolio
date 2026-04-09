import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Real-Time College Fest and Updates",
    subtitle: "Smart Event & Festival Management Platform",
    desc: "Designed and implemented a full-stack event management system for college fests, supporting event registrations, online payments, QR-based ticket validation, live announcements, and real-time updates. Integrated admin dashboards and analytics to improve event monitoring and coordination.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Socket.IO"],
    color: "from-primary via-secondary to-neon-cyan",
    github: "https://github.com/Sriya0410/Real-Time-College-Fests-Updates",
  },
  {
    title: "AI-Based Placement Preparation Dashboard",
    subtitle: "Placement Readiness & Career Preparation Platform",
    desc: "Engineered an AI-powered platform for coding practice, aptitude testing, mock interviews, and resume evaluation. Incorporated placement readiness prediction, progress analytics, skill tracking, and company-specific workflows. Developed secure role-based dashboards for both students and administrators.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Flask"],
    color: "from-purple-500 via-pink-500 to-cyan-400",
    github: "https://github.com/Sriya0410/ai-placement-preparation-dashboard",
  },
  {
    title: "Emotion Detection in Video",
    subtitle: "Deep Learning Based Facial Emotion Recognition System",
    desc: "Implemented a real-time facial emotion recognition system using deep learning models such as MobileNetV2, ResNet50, and EfficientNet. Applied OpenCV for face detection and temporal smoothing to improve prediction stability. Evaluated model performance through accuracy metrics and comparative analysis.",
    tech: ["Python", "OpenCV", "TensorFlow", "MobileNetV2", "ResNet50", "EfficientNet"],
    color: "from-orange-400 via-rose-500 to-fuchsia-500",
    github: "#",
  },
];

const Projects = () => (
  <div className="relative z-10 min-h-screen pt-24 pb-10 px-4">
    <div className="max-w-6xl mx-auto">
      <SectionHeading
        title="Projects"
        subtitle="Some of the solutions I've designed and built"
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            whileHover={{ y: -10 }}
            className="relative glass rounded-2xl overflow-hidden group transition-all duration-300"
          >
            {/* Glow background */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-all duration-300`}
            />

            <div className="p-6 relative h-full flex flex-col">
              {/* Project number */}
              <span className="absolute top-4 right-4 text-xs text-primary font-mono opacity-60">
                0{i + 1}
              </span>

              <h3 className="text-xl font-bold text-white mb-1 pr-8">
                {p.title}
              </h3>

              <p className="text-xs text-primary font-mono mb-3">
                {p.subtitle}
              </p>

              <p className="text-sm text-white/80 leading-relaxed mb-5 flex-grow">
                {p.desc}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-white border border-primary/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub link */}
              {p.github !== "#" ? (
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  View Project
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-sm text-white/40 cursor-default">
                  <ExternalLink size={16} />
                  GitHub Link Coming Soon
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Projects;