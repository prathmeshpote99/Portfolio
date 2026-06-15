import { useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

/**
 * useMouseParallax — tracks mouse position relative to the viewport center
 * and returns smooth spring-animated translateX/translateY motion values.
 *
 * @param {number} intensity - Max pixel offset (default 10)
 * @param {number} stiffness - Spring stiffness (default 150)
 * @param {number} damping - Spring damping (default 15)
 */
const useMouseParallax = (intensity = 10, stiffness = 150, damping = 15) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness, damping });
  const springY = useSpring(mouseY, { stiffness, damping });

  const translateX = useTransform(springX, [-1, 1], [-intensity, intensity]);
  const translateY = useTransform(springY, [-1, 1], [-intensity, intensity]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return { translateX, translateY };
};

export default useMouseParallax;
