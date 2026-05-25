import { motion } from "framer-motion";

const floatingFlowers = [
  { className: "-top-2 left-[8%]", delay: 0, text: "✿" },
  { className: "top-[15%] -right-1", delay: 0.7, text: "❀" },
  { className: "bottom-[20%] -left-2", delay: 1.4, text: "✿" },
  { className: "-bottom-1 right-[12%]", delay: 2.1, text: "❀" },
  { className: "top-[40%] -left-3", delay: 2.8, text: "✿" },
  { className: "top-[8%] left-[45%]", delay: 3.5, text: "❀" },
];

export function ProfileFloralDecor() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {floatingFlowers.map((flower, i) => (
        <motion.span
          key={i}
          className={`absolute text-lg text-soft-pink/70 md:text-xl ${flower.className}`}
          animate={{
            y: [0, -8, 0],
            opacity: [0.45, 0.85, 0.45],
            rotate: [0, 6, -4, 0],
          }}
          transition={{
            duration: 5,
            delay: flower.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {flower.text}
        </motion.span>
      ))}
    </div>
  );
}
