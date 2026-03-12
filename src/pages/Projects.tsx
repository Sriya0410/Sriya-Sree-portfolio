import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink, Vote } from "lucide-react";


const projects = [
{
  title: "Real-Time College Fest Management System",
  subtitle: "Smart Event & Festival Management Platform",
  desc: "A full-stack web application that digitalizes college fest operations by enabling event registration, online payments, QR-based ticket verification, certificate generation, announcements, and real-time analytics.",
  tech: ["React", "Node.js", "Express.js", "MySQL", "Socket.io"],

  color: "from-primary via-secondary to-neon-cyan",
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
            <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-10 transition-all`} />


            <div className="p-6 relative">

              {/* Project number */}
              <span className="absolute top-4 right-4 text-xs text-primary font-mono opacity-60">
                0{i + 1}
              </span>

              <h3 className="text-xl font-bold text-white mb-1">
                {p.title}
              </h3>

              <p className="text-xs text-primary font-mono mb-3">
                {p.subtitle}
              </p>

              <p className="text-sm text-white/80 leading-relaxed mb-5">
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-primary transition-colors"
              >
                <ExternalLink size={16} />
                View Project
              </a>

            </div>
          </motion.div>

        ))}

      </div>

    </div>
  </div>
);

export default Projects;