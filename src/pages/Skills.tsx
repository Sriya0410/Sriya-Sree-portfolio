import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { Code, Users, Sparkles } from "lucide-react";

const softSkills = [
  "Communication",
  "Leadership",
  "Problem Solving",
  "Time Management",
  "Public Speaking",
  "Adaptability",
  "Continuous Learning",
];

const expertise = [
  "Problem Solving & Algorithms",
  "Backend Development",
  "Full Stack Development",
  "Database Design",
  "Data Analytics (Power BI)",
  "Team Collaboration",
];

const SkillTag = ({ name }: { name: string }) => (
  <span className="px-4 py-2 text-sm rounded-full bg-primary/10 border border-primary/30 text-white hover:bg-primary/20 transition-all">
    {name}
  </span>
);

const Skills = () => {
  return (
    <div className="relative z-10 min-h-screen pt-24 pb-10 px-4">
      <div className="max-w-6xl mx-auto">

        <SectionHeading
          title="Skills"
          subtitle="Technologies, strengths, and areas where I excel"
        />

        <div className="grid md:grid-cols-3 gap-8">

          {/* Technical Skills */}

          <GlassCard className="p-8 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <Code className="text-primary" size={26} />
              <h3 className="text-2xl font-semibold gradient-text">
                Technical Skills
              </h3>
            </div>

            <div className="space-y-4 text-white text-sm">

              <p>
                <span className="font-semibold text-primary/70">
                  Programming Languages:
                </span>{" "}
                Python, Java, C, C++, SQL
              </p>

              <p>
                <span className="font-semibold text-primary/70">
                  Core Concepts:
                </span>{" "}
                Data Structures & Algorithms, OOP, DBMS, OS
              </p>

              <p>
                <span className="font-semibold text-primary/70">
                  Web Technologies:
                </span>{" "}
                HTML, CSS
              </p>

              <p>
                <span className="font-semibold text-primary/70">
                  Backend:
                </span>{" "}
                REST APIs, JSP, MySQL, PHP Server
              </p>

              <p>
                <span className="font-semibold text-primary/70">
                  Cloud:
                </span>{" "}
                AWS (EC2, S3), Cloud Fundamentals
              </p>

              <p>
                <span className="font-semibold text-primary/70">
                  Tools:
                </span>{" "}
                Git, GitHub, Power BI
              </p>

            </div>
          </GlassCard>


          {/* Soft Skills */}

          <GlassCard className="p-8 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-primary" size={26} />
              <h3 className="text-2xl font-semibold gradient-text">
                Soft Skills
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {softSkills.map((s) => (
                <SkillTag key={s} name={s} />
              ))}
            </div>
          </GlassCard>


          {/* Areas of Expertise */}

          <GlassCard className="p-8 min-h-[320px]">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="text-primary" size={26} />
              <h3 className="text-2xl font-semibold gradient-text">
                Areas of Expertise
              </h3>
            </div>

            <div className="flex flex-wrap gap-3">
              {expertise.map((s) => (
                <SkillTag key={s} name={s} />
              ))}
            </div>
          </GlassCard>

        </div>
      </div>
    </div>
  );
};

export default Skills;