import { motion } from "framer-motion";

type Petal = {
  id: number;
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  driftX: number;
  driftY: number;
};

const petals: Petal[] = [
  { id: 1, left: "8%", top: "12%", size: 14, delay: 0, duration: 18, driftX: 12, driftY: -20 },
  { id: 2, left: "85%", top: "8%", size: 10, delay: 2, duration: 22, driftX: -10, driftY: 15 },
  { id: 3, left: "72%", top: "35%", size: 12, delay: 1, duration: 20, driftX: 8, driftY: 12 },
  { id: 4, left: "15%", top: "55%", size: 8, delay: 3, duration: 24, driftX: -14, driftY: -8 },
  { id: 5, left: "92%", top: "62%", size: 11, delay: 0.5, duration: 19, driftX: -6, driftY: 18 },
  { id: 6, left: "45%", top: "78%", size: 9, delay: 4, duration: 21, driftX: 10, driftY: -14 },
  { id: 7, left: "28%", top: "22%", size: 7, delay: 2.5, duration: 23, driftX: 6, driftY: 10 },
  { id: 8, left: "58%", top: "15%", size: 13, delay: 1.5, duration: 17, driftX: -8, driftY: -12 },
];

const particles = [
  { id: "p1", left: "20%", top: "30%", delay: 0 },
  { id: "p2", left: "70%", top: "25%", delay: 1.2 },
  { id: "p3", left: "50%", top: "65%", delay: 2.4 },
  { id: "p4", left: "10%", top: "70%", delay: 0.8 },
];

function PetalShape({ size }: { size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className="text-soft-pink opacity-[0.22] dark:opacity-[0.14]"
      aria-hidden
    >
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="8"
        fill="currentColor"
        transform="rotate(-30 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="5"
        ry="8"
        fill="currentColor"
        opacity="0.75"
        transform="rotate(30 12 12)"
      />
    </svg>
  );
}

export function FloatingFlowers() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute h-2 w-2 rounded-full bg-soft-pink/25 blur-[2px] dark:bg-soft-pink/15"
          style={{ left: p.left, top: p.top }}
          animate={{
            y: [0, -18, 0],
            opacity: [0.15, 0.35, 0.15],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{ left: petal.left, top: petal.top }}
          animate={{
            x: [0, petal.driftX, 0],
            y: [0, petal.driftY, 0],
            rotate: [0, 6, -4, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <PetalShape size={petal.size} />
        </motion.div>
      ))}
    </div>
  );
}
