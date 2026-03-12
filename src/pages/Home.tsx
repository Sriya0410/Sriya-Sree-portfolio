import { motion } from "framer-motion";
import { BookOpen, Code2, Trophy } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ target, label }: { target: number; label: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      start += step;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold gradient-text">
        {count}+
      </div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center px-4 pt-16">

      {/* Animated Background */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />

      <div
        className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/10 blur-[120px] animate-pulse-glow"
        style={{ animationDelay: "1.5s" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-4xl"
      >

        {/* Profile Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mb-6 w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-full overflow-hidden shadow-2xl shadow-primary/40"
        >
          <img
            src="/Profile1.jpg"
            alt="Sriya Sree"
            className="w-full h-full object-cover object-center rounded-full"
          />
        </motion.div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight">
          Hi, I'm{" "}
          <span className="gradient-text text-glow">
            Sriya Sree
          </span>
        </h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
        >
          Computer Science Student · Full Stack Developer · Problem Solver
        </motion.p>

        

        {/* Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1 }}
          className="flex justify-center gap-6 mt-4"
        >
          <BookOpen className="text-primary animate-float" size={18} />

          <Code2
            className="text-secondary animate-float"
            size={18}
            style={{ animationDelay: "1s" }}
          />

          <Trophy
            className="text-neon-cyan animate-float"
            size={18}
            style={{ animationDelay: "2s" }}
          />
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Home;