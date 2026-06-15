import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

/**
 * HeroBackground — Animated 3D particle starfield for the hero section.
 * Uses only existing deps (@react-three/fiber, three).
 * Renders a cloud of subtle gray/white particles that slowly rotate,
 * adding depth and a premium feel without distracting from content.
 */
const Particles = () => {
  const ref = useRef(null);
  const count = 2000;

  // Generate particle positions in a sphere
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 15;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    // Slow, gentle rotation
    ref.current.rotation.y = state.clock.elapsedTime * 0.015;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#b5b5ba"
        transparent
        opacity={0.6}
        sizeAttenuation
        depthWrite={false}
        blending={2} // Additive blending
      />
    </points>
  );
};

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
        }}
        style={{ background: "transparent" }}
      >
        <Particles />
      </Canvas>
    </div>
  );
};

export default HeroBackground;
