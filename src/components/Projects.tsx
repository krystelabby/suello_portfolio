import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { getProjectImage } from "../assets";
import { projects } from "../data/portfolio";
import { ImagePreviewModal } from "./ImagePreviewModal";
import { SectionTitle } from "./layout/SectionTitle";

const IMAGE_ASPECT = "aspect-[5/4]";

function TechTags({
  items,
  className = "",
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {items.map((tech) => (
        <span
          key={tech}
          className="rounded-full bg-soft-pink/25 px-3 py-1 text-xs font-semibold text-text-primary dark:bg-soft-pink/15"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}

export function Projects() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const selectedProject = projects.find((p) => p.title === selectedTitle);
  const selectedImage = selectedProject
    ? getProjectImage(selectedProject.imageKey)
    : undefined;

  return (
    <section id="projects" className="scroll-section bg-bg-section py-16 md:py-24">
      <div className="container-main">
        <SectionTitle
          title="My"
          accent="Projects"
          subtitle="Selected UI/UX and development work showcasing design thinking and usability."
        />

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => {
            const imageSrc = getProjectImage(project.imageKey);
            return (
              <motion.article
                key={project.title}
                className="card-elevated group flex h-full min-h-0 flex-col overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <div className="flex min-h-[4.5rem] shrink-0 items-start px-5 pt-5 pb-3">
                  <h3 className="line-clamp-2 text-base font-bold leading-snug text-text-primary md:text-lg">
                    {project.title}
                  </h3>
                </div>

                <div
                  className={`relative mx-5 shrink-0 overflow-hidden rounded-xl bg-bg-section-alt ${IMAGE_ASPECT}`}
                >
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={project.title}
                      className="h-full w-full object-contain object-center p-1 transition duration-500 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-sm text-text-muted">Project preview</span>
                    </div>
                  )}
                  {imageSrc && (
                    <button
                      type="button"
                      onClick={() => setSelectedTitle(project.title)}
                      className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-bg-card text-text-primary shadow-[var(--shadow-card)] transition hover:bg-soft-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/50"
                      aria-label={`View details for ${project.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>

                <div className="flex flex-1 flex-col px-5 pt-4 pb-5">
                  <p className="text-sm leading-relaxed text-text-body">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <p className="mb-2 text-xs font-bold tracking-wider text-text-muted uppercase">
                      Technologies
                    </p>
                    <TechTags items={project.technologies} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ImagePreviewModal
        open={selectedTitle !== null}
        onClose={() => setSelectedTitle(null)}
        imageSrc={selectedImage}
        title={selectedTitle ?? ""}
        footer={
          selectedProject ? (
            <div className="mt-4 space-y-4">
              <p className="text-sm leading-relaxed text-text-body md:text-base">
                {selectedProject.description}
              </p>
              <div>
                <p className="mb-2 text-xs font-bold tracking-wider text-text-muted uppercase">
                  Technologies Used
                </p>
                <TechTags items={selectedProject.technologies} />
              </div>
            </div>
          ) : null
        }
      />
    </section>
  );
}
