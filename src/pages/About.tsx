import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Award, BookOpen, Heart, Lightbulb, Target, Trophy, Users } from "lucide-react";

/* NPTEL COURSES */

const nptel = [
  {
    title: "Privacy and Security in Online Social Media",
    detail: "Score: 53%",
  },
  {
    title: "Software Testing",
    detail: "Score: 60%",
  },
];

/* CERTIFICATIONS */

const certifications = [
  {
    title: "Responsive Web Design",
    org: "FreeCodeCamp",
    image: "/images/responsive-web-design.jpg",
  },
  {
    title: "Python Certification",
    org: "FreeCodeCamp",
    image: "/images/python-certification.jpg",
  },
  {
    title: "Python Essentials 1",
    org: "Cisco Networking Academy",
    image: "/images/python-essentials1.jpg",
  },
  {
    title: "Python Essentials 2",
    org: "Cisco Networking Academy",
    image: "/images/python-essentials2.jpg",
  },
  {
    title: "Artificial Intelligence & Machine Learning Projects",
    org: "Great Learning",
    image: "/images/ai-ml-projects.jpg",
  },
  {
    title: "Machine Learning Certification",
    org: "Analytics Vidhya",
    image: "/images/machine-learning.jpg",
  },
  {
    title: "Network Support and Security",
    org: "Cisco Networking Academy",
    image: "/images/network-support.jpg",
  },
  {
    title: "Networking Basics",
    org: "Cisco Networking Academy",
    image: "/images/networking-basics.jpg",
  },
];

/* ACHIEVEMENTS */

const achievements = [
  {
    title: "Project Expo – 3rd Prize",
    detail: "Presented innovative project and secured third place.",
  },
  {
    title: "Internship Opportunity Secured",
    detail: "Selected for internship after technical workshop.",
  },
  {
    title: "Workshop at IIT Hyderabad",
    detail: "Participated in workshop and secured internship opportunity.",
  },
];

/* EXTRA CURRICULAR */

const extracurricular = [
  {
    title: "Coordinator – Bala Mahotsav",
    detail: "Organized and coordinated cultural event activities.",
  },
  {
    title: "Coordinator – Mahotsav Cultural Fest",
    detail: "Managed coordination of college cultural programs.",
  },
  {
    title: "Participant – MERNVERSE Hackathon",
    detail: "Participated in MERN stack hackathon event.",
  },
];

/* PERSONAL TRAITS */

const traits = [
  {
    icon: Lightbulb,
    label: "Creative Thinker",
    desc: "Enjoy building innovative digital solutions.",
  },
  {
    icon: Target,
    label: "Goal-Oriented",
    desc: "Focused on continuous learning and growth.",
  },
  {
    icon: Users,
    label: "Team Player",
    desc: "Collaborate effectively with teams.",
  },
  {
    icon: Heart,
    label: "Passionate Learner",
    desc: "Always exploring new technologies.",
  },
];

const About = () => (
  <div className="relative z-10 min-h-screen pt-24 pb-10 px-4">
    <div className="max-w-6xl mx-auto">

      <SectionHeading
        title="About Me"
        subtitle="My journey, achievements, certifications, and learning path"
      />

      {/* STORY */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass p-8 rounded-2xl mb-16 glow-border"
      >
        <p className="text-foreground leading-relaxed mb-4">
          I am a Computer Science student passionate about building innovative
          solutions and exploring modern technologies. My journey started with
          curiosity for programming and gradually evolved into full-stack
          development, machine learning, and project development.
        </p>

        <p className="text-foreground leading-relaxed">
          I enjoy transforming ideas into real applications and continuously
          improving my technical skills through certifications, workshops,
          hackathons, and academic learning.
        </p>
      </motion.div>

      {/* ACHIEVEMENTS */}

      <SectionHeading title="Achievements" />

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {achievements.map((a, i) => (
          <GlassCard key={i}>
            <div className="flex items-start gap-3">
              <Trophy className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-foreground">{a.title}</h3>
                <p className="text-sm text-foreground">{a.detail}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* EXTRA ACTIVITIES */}

      <SectionHeading title="Extra Curricular Activities" />

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {extracurricular.map((e, i) => (
          <GlassCard key={i}>
            <div className="flex items-start gap-3">
              <Users className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-foreground">{e.title}</h3>
                <p className="text-sm text-foreground">{e.detail}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* NPTEL COURSES */}

      <SectionHeading title="NPTEL Courses" />

      <div className="grid md:grid-cols-3 gap-5 mb-16">
        {nptel.map((course, i) => (
          <GlassCard key={i}>
            <div className="flex items-start gap-3">
              <BookOpen className="text-primary" size={20} />
              <div>
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm text-foreground">{course.detail}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      {/* CERTIFICATIONS */}

      <SectionHeading title="Certifications" />

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {certifications.map((c, i) => (
          <GlassCard key={i} className="overflow-hidden">

            <img
              src={c.image}
              alt={c.title}
              className="w-full h-64 object-cover rounded-xl mb-4 hover:scale-105 transition duration-300"
            />

            <div className="flex items-start gap-3">
              <Award className="text-primary" size={24} />

              <div>
                <h3 className="font-semibold text-lg text-foreground">{c.title}</h3>
                <p className="text-sm text-foreground">{c.org}</p>
              </div>
            </div>

          </GlassCard>
        ))}
      </div>

      {/* PERSONAL TRAITS */}

      <SectionHeading title="Personal Traits" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {traits.map((t, i) => (
          <GlassCard key={i} className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
              <t.icon className="text-primary" size={22} />
            </div>

            <h3 className="font-semibold text-foreground">{t.label}</h3>

            <p className="text-xs text-foreground">{t.desc}</p>
          </GlassCard>
        ))}
      </div>

    </div>
  </div>
);

export default About;