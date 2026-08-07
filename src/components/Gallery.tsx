import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { galleryImages } from "@/data/projects";

export function Gallery({ images = galleryImages }: { images?: { src: string; alt: string }[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length],
  );
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  const current = index === null ? null : images[index];

  return (
    <section id="gallery" className="border-t border-border py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">06 — Gallery</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-xl mt-8 max-w-2xl text-[clamp(2rem,5vw,4rem)]">
            Fragments of built work.
          </h2>
        </Reveal>

        <div className="mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {images.map((img, i) => (
            <Reveal key={img.src + i} delay={Math.min(i * 0.04, 0.3)} className="mb-5 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full overflow-hidden bg-secondary"
                aria-label={`Open image: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full transition-transform duration-[1400ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.06]"
                />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open && current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[70] flex items-center justify-center bg-ink/96 p-4"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close image viewer"
              className="absolute top-5 right-5 inline-flex min-h-11 min-w-11 items-center justify-center text-ink-foreground"
            >
              <X className="size-6" strokeWidth={1.2} />
            </button>
            <button
              type="button"
              onClick={prev}
              aria-label="Previous image"
              className="absolute left-3 inline-flex min-h-11 min-w-11 items-center justify-center text-ink-foreground/80 hover:text-ink-foreground"
            >
              <ChevronLeft className="size-8" strokeWidth={1} />
            </button>
            <motion.img
              key={current.src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              src={current.src}
              alt={current.alt}
              className="max-h-[85vh] max-w-[92vw] object-contain"
            />
            <button
              type="button"
              onClick={next}
              aria-label="Next image"
              className="absolute right-3 inline-flex min-h-11 min-w-11 items-center justify-center text-ink-foreground/80 hover:text-ink-foreground"
            >
              <ChevronRight className="size-8" strokeWidth={1} />
            </button>
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.2em] text-ink-foreground/60 uppercase">
              {(index ?? 0) + 1} / {images.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
