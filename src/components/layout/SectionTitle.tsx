import { motion } from "framer-motion";

type SectionTitleProps = {
  title: string;
  accent: string;
  subtitle?: string;
};

export function SectionTitle({ title, accent, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-2xl text-center md:mb-16"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold tracking-tight text-text-primary md:text-4xl lg:text-[2.5rem]">
        {title}{" "}
        <span className="text-highlight">{accent}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-text-body md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
