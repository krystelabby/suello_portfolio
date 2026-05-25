import { Award } from "lucide-react";

type HonorBadgeProps = {
  label?: string;
};

export function HonorBadge({ label = "Dean's Lister" }: HonorBadgeProps) {
  return (
    <div
      className="flex flex-col items-center justify-center gap-2"
      aria-hidden
    >
      <div className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-soft-pink/50 via-peach/40 to-sage/45" />
        <div className="absolute inset-2 rounded-full border-2 border-bg-card bg-bg-card/90 shadow-inner" />
        <Award className="relative h-10 w-10 text-text-accent-sage md:h-12 md:w-12" />
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 rounded-full bg-soft-orange px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-text-primary">
          ★
        </span>
      </div>
      <span className="text-xs font-bold uppercase tracking-wider text-text-accent-pink">
        {label}
      </span>
    </div>
  );
}
