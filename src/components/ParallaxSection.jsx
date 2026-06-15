import { motion } from "framer-motion";

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 20,
      mass: 1,
      duration: 0.8,
    },
  },
};

const ParallaxSection = ({ children, className = "" }) => {
  return (
    <motion.div
      className={`relative ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default ParallaxSection;
