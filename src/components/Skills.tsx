import { motion } from "framer-motion";
import { skills } from "../data/portfolio";
import { SectionTitle } from "./layout/SectionTitle";
import { SkillIcon } from "./SkillIcon";

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-28 bg-bg-page py-16 md:py-24">
      <div className="container-main">
        <SectionTitle
          title="My Work"
          accent="Skills"
          subtitle="Tools and technologies I use to bring creative ideas to life."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.article
              key={skill.name}
              className="card-elevated flex min-h-[200px] flex-col items-center rounded-2xl p-6 text-center transition hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06, duration: 0.45 }}
            >
              <SkillIcon type={skill.icon} />
              <h3 className="mt-4 text-lg font-bold text-text-primary">
                {skill.name}
              </h3>
              <p className="mt-1 text-xs font-medium text-text-muted">
                {skill.level}
              </p>
              <div className="mt-auto w-full pt-5">
                <div className="h-2 overflow-hidden rounded-full bg-bg-section">
                  <motion.div
                    className="h-full rounded-full progress-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
                <p className="mt-2 text-sm font-semibold text-text-body">
                  {skill.progress}%
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
