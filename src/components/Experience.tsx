import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { experiences } from "../data/portfolio";
import { SectionTitle } from "./layout/SectionTitle";

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-28 bg-bg-page py-16 md:py-24">
      <div className="container-main">
        <SectionTitle
          title="My"
          accent="Experience"
          subtitle="Hands-on roles that strengthened my attention to detail and professionalism."
        />

        <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.article
              key={`${exp.position}-${exp.duration}`}
              className="card-elevated rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-sage/30 dark:bg-sage/20">
                  <Briefcase className="h-6 w-6 text-text-primary" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-text-accent-sage">
                    {exp.duration}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-text-primary">
                    {exp.position}
                  </h3>
                  <p className="mt-1 text-sm text-text-body">{exp.organization}</p>
                  <p className="mt-3 text-sm text-text-body">
                    <span className="font-semibold text-text-primary">Role:</span>{" "}
                    {exp.responsibilities}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
