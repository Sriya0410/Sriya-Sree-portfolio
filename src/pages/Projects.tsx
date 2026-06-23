import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "AI-Enhanced Anti-Plagiarism System",
    subtitle: "MERN-Based Assignment Submission & Academic Integrity Platform",
    desc: "Developed a full-stack AI-enhanced anti-plagiarism assignment submission system with separate Admin, Teacher, and Student portals. The platform allows teachers to create assignments, students to submit PDF, DOCX, or TXT files, and the system extracts submitted content for plagiarism and AI-content analysis. It includes role-based authentication, protected dashboards, plagiarism reports, AI detection reports, evaluation with marks and feedback, notifications, and admin analytics. The system uses text similarity techniques such as cosine similarity, Jaccard similarity, and n-gram matching to support academic integrity and improve the assignment evaluation workflow.",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Multer",
      "NLP",
    ],
    color: "from-blue-500 via-cyan-500 to-teal-400",
    github: "https://github.com/Sriya0410/AI-Enhanced-Anti-Plagiarism-System",
  },
  {
    title: "Real-Time College Fests & Updates",
    subtitle: "Smart Event, Ticketing & Festival Management Platform",
    desc: "Designed and built a full-stack college fest management system to simplify event registrations, live announcements, ticket generation, QR-based ticket verification, food ordering, lost and found reporting, refund tracking, and admin analytics. The platform includes real-time updates using Socket.IO, role-based dashboards for students and administrators, and data-driven monitoring to improve event coordination and crowd management.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Socket.IO"],
    color: "from-primary via-secondary to-neon-cyan",
    github: "https://github.com/Sriya0410/Real-Time-College-Fests-Updates",
  },
  {
    title: "AI-Based Placement Preparation Dashboard",
    subtitle: "Placement Readiness & Career Preparation Platform",
    desc: "Created an AI-based placement preparation dashboard that helps students practice coding, aptitude, mock interviews, resume analysis, and company-specific preparation. The system includes student progress tracking, skill evaluation, placement readiness prediction, and admin-side monitoring. This project strengthened my skills in full-stack development, AI integration, analytics, and role-based application design.",
    tech: ["React", "Node.js", "Express.js", "MySQL", "Flask"],
    color: "from-purple-500 via-pink-500 to-cyan-400",
    github: "https://github.com/Sriya0410/ai-placement-preparation-dashboard",
  },
  {
    title: "Smart Expense Tracker",
    subtitle: "Android-Based Personal Finance & Budget Analytics App",
    desc: "Developed a smart Android expense tracking application to help users manage income, expenses, budgets, and financial insights in one place. The app includes a modern landing page, dashboard with total balance, income and expense summaries, add income and expense forms, transaction history, category-wise tracking, weekly expense analysis, budget monitoring, smart reminders, and analytics screens. Built using Kotlin, Jetpack Compose, Room Database, MVVM architecture, Flow, StateFlow, Navigation Compose, and Material 3 to deliver a smooth and organized personal finance management experience.",
    tech: [
      "Kotlin",
      "Jetpack Compose",
      "Room Database",
      "MVVM",
      "Flow",
      "StateFlow",
      "Material 3",
    ],
    color: "from-green-400 via-emerald-500 to-cyan-400",
    github: "https://github.com/Sriya0410/Smart-Expense-Tracker",
  },
  {
    title: "Emotion Detection in Video",
    subtitle: "Deep Learning Based Facial Emotion Recognition System",
    desc: "Implemented a real-time facial emotion recognition system that detects faces from video input and predicts emotions using deep learning models. The system uses OpenCV for face detection and trained CNN-based models for emotion classification. Temporal smoothing was applied to improve prediction stability, making the system more reliable for real-time analysis and human-computer interaction use cases.",
    tech: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "MobileNetV2",
      "ResNet50",
      "EfficientNet",
    ],
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