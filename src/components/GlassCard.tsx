import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const GlassCard = ({ children, className = "", delay = 0, hover = true }: GlassCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
    className={`glass p-6 transition-all duration-300 hover:glow-border ${className}`}
  >
    {children}
  </motion.div>
);

export default GlassCard;
