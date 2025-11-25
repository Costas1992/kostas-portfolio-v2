// src/components/Particles.tsx
import { motion, useScroll, useTransform } from "framer-motion";

// Deterministic "binary" particles – no Math.random, safe for SSR
const binaryParticles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: (i * 11) % 100, // percentage
  top: (i * 17) % 100, // percentage
  digit: i % 2 === 0 ? "0" : "1",
  delay: (i % 12) * 0.18,
}));

// Deterministic dot particles
const dotParticles = Array.from({ length: 80 }, (_, i) => ({
  id: i,
  left: (i * 19) % 100,
  top: (i * 23) % 100,
  delay: (i % 10) * 0.22,
  size: 3 + ((i % 5) + 1), // slightly larger so they're visible
}));

export default function Particles() {
  // Use whole-page scroll progress
  const { scrollYProgress } = useScroll();
  const zoom = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{ scale: zoom }}
    >
      {/* Binary digits */}
      {binaryParticles.map((p) => (
        <motion.span
          key={`b-${p.id}`}
          className="absolute font-mono text-[11px] text-blue-400/90 drop-shadow-[0_0_6px_rgba(59,130,246,0.9)]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.9, y: 0 }}
          transition={{
            delay: 0.6 + p.delay,
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.2,
          }}
        >
          {p.digit}
        </motion.span>
      ))}

      {/* Glowing dots */}
      {dotParticles.map((p) => (
        <motion.span
          key={`d-${p.id}`}
          className="absolute rounded-full bg-blue-400/80 blur-[1px]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            width: p.size,
            height: p.size,
          }}
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 0.8, y: 0 }}
          transition={{
            delay: 0.8 + p.delay,
            duration: 1.4,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1.1,
          }}
        />
      ))}
    </motion.div>
  );
}