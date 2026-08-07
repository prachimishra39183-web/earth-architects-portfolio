import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { navLinks } from "@/data/site";

export function Navbar({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || !overlay;
  const light = overlay && !scrolled;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,backdrop-filter,border-color,padding] duration-700 ${
          solid
            ? "border-b border-border/70 bg-background/80 py-3 backdrop-blur-xl"
            : "border-b border-transparent py-6"
        }`}
      >
        <nav
          aria-label="Primary"
          className="shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6 lg:grid-cols-[auto_1fr_auto]"
        >
          <Link to="/" className="flex min-w-0 items-center" aria-label="Earth Architects — home">
            <img
              src={logo}
              alt="Earth Architects"
              width={1152}
              height={576}
              className={`h-11 w-auto shrink-0 transition-all duration-700 lg:h-12 ${
                light ? "brightness-0 invert" : ""
              }`}
            />
          </Link>

          <ul className="hidden justify-center gap-8 lg:flex">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  {...(l.hash ? { hash: l.hash } : {})}
                  className={`link-underline text-[0.72rem] tracking-[0.18em] uppercase transition-colors ${
                    light ? "text-ink-foreground/85 hover:text-ink-foreground" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-2">
            <Link
              to="/"
              hash="contact"
              className={`hidden rounded-none border px-6 py-3 text-[0.68rem] tracking-[0.2em] uppercase transition-colors duration-500 lg:inline-block ${
                light
                  ? "border-ink-foreground/50 text-ink-foreground hover:bg-ink-foreground hover:text-ink"
                  : "border-foreground/25 text-foreground hover:bg-foreground hover:text-primary-foreground"
              }`}
            >
              Start a Project
            </Link>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className={`inline-flex min-h-11 min-w-11 items-center justify-center lg:hidden ${
                light ? "text-ink-foreground" : "text-foreground"
              }`}
            >
              <Menu className="size-6" strokeWidth={1.2} />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex flex-col bg-ink text-ink-foreground lg:hidden"
          >
            <div className="shell flex items-center justify-between py-6">
              <img
                src={logo}
                alt="Earth Architects"
                width={1152}
                height={576}
                className="h-11 w-auto brightness-0 invert"
              />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="inline-flex min-h-11 min-w-11 items-center justify-center"
              >
                <X className="size-6" strokeWidth={1.2} />
              </button>
            </div>
            <ul className="shell flex flex-1 flex-col justify-center gap-1">
              {navLinks.map((l, i) => (
                <motion.li
                  key={l.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * i + 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={l.to}
                    {...(l.hash ? { hash: l.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="font-display block py-3 text-4xl font-light"
                  >
                    {l.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="shell pb-12">
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="block border border-ink-foreground/40 py-4 text-center text-[0.7rem] tracking-[0.24em] uppercase"
              >
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
