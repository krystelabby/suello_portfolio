type PetAvatarProps = {
  type: "cat" | "dog" | "flower";
  className?: string;
};

const styles = {
  cat: {
    bg: "bg-gradient-to-br from-soft-pink/70 to-peach/80",
    ring: "ring-soft-pink/40",
    emoji: "🐱",
    label: "Cat",
  },
  dog: {
    bg: "bg-gradient-to-br from-sage/60 to-sage-light/70",
    ring: "ring-sage/40",
    emoji: "🐶",
    label: "Dog",
  },
  flower: {
    bg: "bg-gradient-to-br from-cream to-soft-pink/50",
    ring: "ring-soft-pink/30",
    emoji: "🌷",
    label: "Flower",
  },
} as const;

export function PetAvatar({ type, className = "h-12 w-12" }: PetAvatarProps) {
  const style = styles[type];

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full ring-2 ${style.bg} ${style.ring} ${className}`}
      role="img"
      aria-label={`Cute ${style.label} avatar`}
    >
      <span className="select-none text-[1.65rem] leading-none">{style.emoji}</span>
    </div>
  );
}
