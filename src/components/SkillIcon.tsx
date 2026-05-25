import { Code2, Image, Layout, Palette, Server } from "lucide-react";

const icons = {
  html: Code2,
  css: Palette,
  php: Server,
  canva: Image,
  figma: Layout,
} as const;

export function SkillIcon({ type }: { type: keyof typeof icons }) {
  const Icon = icons[type];
  return <Icon className="h-8 w-8 text-text-accent-sage" aria-hidden />;
}
