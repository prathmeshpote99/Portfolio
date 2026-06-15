import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

/**
 * LazyBallCanvas defers creating the Three.js WebGL context until the
 * element is within 200px of the viewport. This prevents 13 simultaneous
 * WebGL contexts from being created on page load, drastically improving
 * scroll performance and GPU memory usage.
 */
const LazyBallCanvas = ({ icon, name }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Only mount once
        }
      },
      { rootMargin: "200px" } // Trigger before the element scrolls into view
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-28 h-28">
      {inView ? <BallCanvas icon={icon} /> : null}
    </div>
  );
};

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My toolbox</p>
        <h2 className={styles.sectionHeadTextLight}>Skills & Technologies.</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <LazyBallCanvas
            key={technology.name}
            icon={technology.icon}
            name={technology.name}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
