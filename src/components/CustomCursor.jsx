import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * CustomCursor — A smooth circle that follows the mouse with spring physics.
 * Expands when hovering over links, buttons, and interactive elements.
 * Automatically hides on touch devices.
 */
const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springX = useSpring(cursorX, { stiffness: 1000, damping: 40 });
  const springY = useSpring(cursorY, { stiffness: 1000, damping: 40 });

  useEffect(() => {
    // Disable on touch devices
    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    // Interactive elements that trigger the expand effect
    const interactiveSelectors =
      "a, button, input, textarea, select, [role='button'], label, .cursor-pointer, .nav-links, .live-demo";

    // Use event delegation for hover detection
    const handleHover = (e) => {
      const target = e.target;
      const isInteractive =
        target.matches?.(interactiveSelectors) ||
        target.closest?.(interactiveSelectors);
      setIsHovering(!!isInteractive);
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, []);

  if (!isVisible) return null;

  const cursorSize = isHovering ? 44 : 22;

  return (
    <motion.div
      className="custom-cursor"
      style={{
        left: springX,
        top: springY,
        width: cursorSize,
        height: cursorSize,
      }}
      animate={{
        width: cursorSize,
        height: cursorSize,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
        mass: 0.5,
      }}
    />
  );
};

export default CustomCursor;
