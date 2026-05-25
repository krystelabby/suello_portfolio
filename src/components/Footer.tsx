import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navLinks } from "../data/portfolio";
import { FacebookIcon, InstagramIcon } from "./SocialIcons";

export function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (id: string) => (e: { preventDefault: () => void }) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border-theme bg-bg-card">
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xl font-bold text-text-primary">
              Irish<span className="text-highlight">.</span>
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-body">
              UI/UX designer focused on clear, intuitive, and user-friendly
              digital experiences that leave a lasting impression.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map(({ id, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={handleNav(id)}
                    className="text-sm text-text-body transition hover:text-text-accent-sage"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-text-body">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-text-accent-sage" />
                <a href={`tel:${contact.phone}`} className="hover:text-text-accent-sage">
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-body">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-text-accent-sage" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-text-accent-sage"
                >
                  {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm text-text-body">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-text-accent-sage" />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-text-primary">
              Get the latest information
            </h3>
            <p className="mt-4 text-sm text-text-body">
              Stay updated on new projects and design work.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href={contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-section-alt text-text-primary transition hover:bg-soft-pink/30"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-bg-section-alt text-text-primary transition hover:bg-soft-pink/30"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border-theme pt-8 text-sm text-text-muted sm:flex-row">
          <p>
            © {year} Irish Suello. All Rights Reserved.
          </p>
          <p className="text-text-body">
            <a href="#home" className="transition hover:text-text-accent-sage">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
