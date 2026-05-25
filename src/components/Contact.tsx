import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { contact } from "../data/portfolio";
import { SectionTitle } from "./layout/SectionTitle";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Contact() {
  return (
    <section id="contact" className="scroll-section bg-bg-section py-16 md:py-24">
      <div className="container-main">
        <SectionTitle
          title="Let's"
          accent="Connect"
          subtitle="Reach out for collaborations, internships, or design projects."
        />

        <div className="mx-auto grid max-w-4xl gap-8 lg:grid-cols-2">
          <motion.div
            className="card-elevated space-y-6 rounded-2xl p-6 md:p-8"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <ContactItem icon={Mail} label="Email" value={contact.email} href={`mailto:${contact.email}`} />
            <ContactItem icon={Phone} label="Phone" value={contact.phone} href={`tel:${contact.phone.replace(/\s/g, "")}`} />
            <ContactItem icon={MapPin} label="Address" value={contact.address} />
            <ContactItem icon={MapPin} label="Location" value={contact.location} />
            <div className="flex gap-3 pt-2">
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/30 text-text-primary transition hover:bg-sage/45"
              >
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-sage/30 text-text-primary transition hover:bg-sage/45"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.form
            className="card-elevated rounded-2xl p-6 md:p-8"
            onSubmit={(e) => e.preventDefault()}
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-lg font-bold text-text-primary">
              Send a Message
            </h3>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-text-muted uppercase">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-border-theme bg-bg-page px-4 py-3 text-sm text-text-primary outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-text-muted uppercase">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@email.com"
                  className="w-full rounded-xl border border-border-theme bg-bg-page px-4 py-3 text-sm text-text-primary outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25"
                />
              </label>
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold tracking-wider text-text-muted uppercase">
                  Message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Hello Irish..."
                  className="w-full resize-none rounded-xl border border-border-theme bg-bg-page px-4 py-3 text-sm text-text-primary outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/25"
                />
              </label>
              <button type="submit" className="btn-primary w-full sm:w-auto">
                <Send className="h-4 w-4" aria-hidden />
                Send Message
              </button>
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Or email directly at{" "}
              <a
                href={`mailto:${contact.email}`}
                className="font-medium text-text-accent-sage hover:underline"
              >
                {contact.email}
              </a>
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex gap-4">
      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-text-accent-sage" />
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-text-muted">
          {label}
        </p>
        {href ? (
          <a
            href={href}
            className="mt-1 block text-sm font-medium text-text-primary transition hover:text-text-accent-sage md:text-base"
          >
            {value}
          </a>
        ) : (
          <p className="mt-1 text-sm font-medium text-text-primary md:text-base">
            {value}
          </p>
        )}
      </div>
    </div>
  );
}
