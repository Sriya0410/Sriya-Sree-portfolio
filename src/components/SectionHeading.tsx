import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className="text-3xl sm:text-4xl font-bold gradient-text mb-3">{title}</h2>
    {subtitle && <p className="text-foreground">
  {subtitle}
</p>}
    <div className="mt-4 mx-auto w-24 h-1 rounded-full bg-gradient-to-r from-primary via-secondary to-neon-cyan" />
  </motion.div>
);

export default SectionHeading;
