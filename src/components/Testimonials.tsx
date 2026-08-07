import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { testimonials } from "@/data/site";

export function Testimonials() {
  const [i, setI] = useState(0);
  const count = testimonials.length;
  const next = useCallback(() => setI((v) => (v + 1) % count), [count]);
  const prev = () => setI((v) => (v - 1 + count) % count);

  useEffect(() => {
    const t = setInterval(next, 8000);
    return () => clearInterval(t);
  }, [next]);

  const t = testimonials[i];
  if (!t) return null;

  return (
    <section id="testimonials" className="border-t border-border py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">10 — Client voices</p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} className="size-3.5 fill-bronze text-bronze" strokeWidth={0} />
                  ))}
                </div>
                <p className="font-display mt-8 text-[clamp(1.5rem,3.4vw,2.75rem)] leading-[1.25] font-light">
                  “{t.quote}”
                </p>
                <footer className="mt-10">
                  {/* PLACEHOLDER client details — edit in src/data/site.ts */}
                  <p className="text-sm">— {t.name}</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {t.project} · {t.role}
                  </p>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          <div className="flex items-end gap-4 lg:col-span-4 lg:justify-end">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              <ArrowLeft className="size-4" strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="inline-flex min-h-11 min-w-11 items-center justify-center border border-border transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              <ArrowRight className="size-4" strokeWidth={1.2} />
            </button>
            <span className="ml-2 self-center text-[0.7rem] tracking-[0.2em] text-muted-foreground">
              {String(i + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
