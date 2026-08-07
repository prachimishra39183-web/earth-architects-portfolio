import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";
import { site, services } from "@/data/site";
import { projects } from "@/data/projects";

export function Footer() {
  return (
    <footer className="border-t border-border bg-ink text-ink-foreground">
      <div className="shell grid gap-14 py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <img
            src={logo}
            alt="Earth Architects"
            width={1152}
            height={576}
            loading="lazy"
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-foreground/60">
            An architecture and interior design studio creating thoughtful, functional and timeless
            spaces across residential, commercial and healthcare work.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Instagram"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink-foreground/25 transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              <Instagram className="size-4" strokeWidth={1.2} />
            </a>
            <a
              href={site.socials.whatsapp}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="WhatsApp"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink-foreground/25 transition-colors hover:bg-ink-foreground hover:text-ink"
            >
              <MessageCircle className="size-4" strokeWidth={1.2} />
            </a>
            {site.socials.facebook ? (
              <a
                href={site.socials.facebook}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Facebook"
                className="inline-flex min-h-11 min-w-11 items-center justify-center border border-ink-foreground/25 transition-colors hover:bg-ink-foreground hover:text-ink"
              >
                <Facebook className="size-4" strokeWidth={1.2} />
              </a>
            ) : null}
          </div>
        </div>

        <nav className="lg:col-span-2" aria-label="Footer navigation">
          <h2 className="text-[0.68rem] tracking-[0.22em] text-ink-foreground/45 uppercase">
            Navigate
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/75">
            <li>
              <Link to="/" className="link-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" hash="about" className="link-underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" className="link-underline">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/" hash="process" className="link-underline">
                Process
              </Link>
            </li>
            <li>
              <Link to="/" hash="contact" className="link-underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="text-[0.68rem] tracking-[0.22em] text-ink-foreground/45 uppercase">
            Services
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/75">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>{s.title}</li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-[0.68rem] tracking-[0.22em] text-ink-foreground/45 uppercase">
            Projects
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/75">
            {projects.map((p) => (
              <li key={p.slug}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="link-underline"
                >
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          <h2 className="mt-10 text-[0.68rem] tracking-[0.22em] text-ink-foreground/45 uppercase">
            Contact
          </h2>
          <ul className="mt-6 space-y-3 text-sm text-ink-foreground/75">
            <li>
              <a href={site.phoneHref} className="link-underline">
                {site.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="link-underline">
                {site.email}
              </a>
            </li>
            <li>{site.location}</li>
          </ul>
        </div>
      </div>

      <div className="shell flex flex-col gap-3 border-t border-ink-foreground/12 py-8 text-[0.68rem] tracking-[0.16em] text-ink-foreground/45 uppercase sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Earth Architects. All rights reserved.</p>
        <p>Architecture · Interiors · Turnkey</p>
      </div>
    </footer>
  );
}
