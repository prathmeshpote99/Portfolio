import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100000] h-[4px]">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(90deg, #2a2a2a, #444)",
        }}
      />
      <motion.div
        className="absolute inset-0 origin-left"
        style={{
          scaleX,
          background:
            "linear-gradient(90deg, #ffffff 0%, #c0c0c0 50%, #ffffff 100%)",
          boxShadow:
            "0 0 10px rgba(255,255,255,0.5), 0 0 20px rgba(255,255,255,0.2)",
        }}
      />
    </div>
  );
};

export default ScrollProgress;
