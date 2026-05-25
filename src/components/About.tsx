import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { assets } from "../assets";
import { aboutContent, contact } from "../data/portfolio";
import { ProfileFloralDecor } from "./ProfileFloralDecor";

export function About() {
  return (
    <section
      id="home"
      className="scroll-mt-28 bg-bg-section pt-28 pb-16 md:pt-32 md:pb-24"
    >
      <div className="container-main">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            className="relative mx-auto w-full max-w-md lg:max-w-none"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full bg-soft-pink md:h-20 md:w-20" aria-hidden />
            <div className="absolute -right-2 bottom-8 h-12 w-12 rounded-full bg-sage md:h-16 md:w-16" aria-hidden />

            <div className="group relative mx-auto w-[min(100%,340px)] py-6 lg:max-w-[400px]">
              <ProfileFloralDecor />
              <div className="relative z-10 mx-auto aspect-square w-[min(100%,300px)] max-w-[320px]">
                <div className="absolute inset-0 rounded-full bg-soft-pink/20 blur-xl" aria-hidden />
                <div className="relative h-full w-full overflow-hidden rounded-full border-[5px] border-bg-card shadow-[var(--shadow-card)]">
                  <img
                    src={assets.profileDefault}
                    alt="Irish Suello"
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                    width={400}
                    height={400}
                  />
                  <img
                    src={assets.profileHover}
                    alt="Irish Suello"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="text-sm font-bold tracking-[0.12em] text-text-accent-sage uppercase md:text-base">
              {aboutContent.greeting}
            </p>
            <h1 className="mt-2 text-4xl font-bold leading-[1.1] tracking-tight text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              {aboutContent.name}
            </h1>
            <p className="mt-3 text-base font-semibold text-text-body md:text-lg">
              {aboutContent.title}
            </p>
            <p className="mt-5 text-base leading-relaxed text-text-body md:text-lg">
              {aboutContent.bio}
            </p>

            <dl className="mt-8 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Phone
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-text-primary md:text-base">
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, "")}`}
                      className="transition hover:text-text-accent-sage"
                    >
                      {contact.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Email
                  </dt>
                  <dd className="mt-1 text-sm font-medium text-text-primary md:text-base">
                    <a
                      href={`mailto:${contact.email}`}
                      className="transition hover:text-text-accent-sage"
                    >
                      {contact.email}
                    </a>
                  </dd>
                </div>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                  Location
                </dt>
                <dd className="mt-1 text-sm font-medium text-text-primary md:text-base">
                  {contact.address}
                </dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#contact" className="btn-primary">
                <Mail className="h-4 w-4" aria-hidden />
                Contact me
              </a>
              <a
                href={assets.cvPdf}
                download="Irish_Suello_CV.pdf"
                className="btn-outline"
              >
                <Download className="h-4 w-4" aria-hidden />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
