import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { getCertificateImage } from "../assets";
import { certificates } from "../data/portfolio";
import { HonorBadge } from "./HonorBadge";
import { ImagePreviewModal } from "./ImagePreviewModal";
import { SectionTitle } from "./layout/SectionTitle";

export function Certificates() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);
  const selectedCert = certificates.find((c) => c.title === selectedTitle);
  const selectedImage = selectedCert
    ? getCertificateImage(selectedCert.imageKey)
    : undefined;

  return (
    <section
      id="certificates"
      className="scroll-mt-28 bg-bg-section py-16 md:py-24"
    >
      <div className="container-main">
        <SectionTitle
          title="Certificates &"
          accent="Achievements"
          subtitle="Training, competitions, and academic honors along my journey."
        />

        <div className="grid grid-cols-1 items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {certificates.map((cert, index) => {
            const imageSrc = getCertificateImage(cert.imageKey);
            const isBadgeOnly = "badgeOnly" in cert && cert.badgeOnly === true;

            if (isBadgeOnly) {
              return (
                <motion.article
                  key={cert.title}
                  className="card-elevated flex h-full min-h-[240px] flex-col overflow-hidden rounded-2xl"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.03 }}
                >
                  <div className="flex flex-1 items-center justify-center bg-soft-pink/15 py-8">
                    <HonorBadge />
                  </div>
                  <p className="p-4 text-sm font-semibold leading-snug text-text-primary md:p-5 md:text-base">
                    {cert.title}
                  </p>
                </motion.article>
              );
            }

            return (
              <motion.article
                key={cert.title}
                className="card-elevated group flex h-full flex-col overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <div className="relative flex min-h-[220px] flex-1 items-center justify-center bg-soft-pink/15 p-3 md:min-h-[240px]">
                  {imageSrc ? (
                    <img
                      src={imageSrc}
                      alt={cert.title}
                      className="max-h-[200px] w-full object-contain md:max-h-[220px]"
                    />
                  ) : (
                    <span className="text-sm text-text-muted">No image</span>
                  )}
                  {imageSrc && (
                    <button
                      type="button"
                      onClick={() => setSelectedTitle(cert.title)}
                      className="absolute right-3 bottom-3 flex h-10 w-10 items-center justify-center rounded-full bg-bg-card text-text-primary shadow-[var(--shadow-card)] transition hover:bg-soft-pink focus:outline-none focus-visible:ring-2 focus-visible:ring-sage/50"
                      aria-label={`View full certificate: ${cert.title}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden />
                    </button>
                  )}
                </div>
                <p className="shrink-0 p-4 text-sm font-semibold leading-relaxed text-text-primary md:p-5 md:text-base">
                  {cert.title}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ImagePreviewModal
        open={selectedTitle !== null && !!selectedImage}
        onClose={() => setSelectedTitle(null)}
        imageSrc={selectedImage}
        title={selectedTitle ?? ""}
      />
    </section>
  );
}
