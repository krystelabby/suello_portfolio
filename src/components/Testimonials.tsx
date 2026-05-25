import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { highlights } from "../data/portfolio";
import { PetAvatar } from "./PetAvatar";
import { SectionTitle } from "./layout/SectionTitle";

export function Testimonials() {
  return (
    <section className="bg-bg-page py-16 md:py-24">
      <div className="container-main">
        <SectionTitle
          title="What My"
          accent="Highlights Say"
          subtitle="Recognition, experience, and design values that shape my work."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, index) => (
            <motion.article
              key={item.name}
              className="card-elevated relative flex h-full flex-col rounded-2xl p-6 md:p-7"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex gap-0.5" aria-label={`${item.rating} stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-soft-orange text-soft-orange"
                      aria-hidden
                    />
                  ))}
                </div>
                <Quote
                  className="h-10 w-10 shrink-0 text-soft-pink/50"
                  aria-hidden
                />
              </div>

              <div className="mt-5 flex items-center gap-3">
                <PetAvatar type={item.avatar} />
                <div>
                  <p className="text-sm font-bold text-text-primary">{item.name}</p>
                  <p className="text-xs text-text-muted">{item.role}</p>
                </div>
              </div>

              <p className="mt-5 flex-1 text-sm leading-relaxed text-text-body md:text-base">
                {item.quote}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
