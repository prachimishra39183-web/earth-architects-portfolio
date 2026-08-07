import { Reveal } from "./Reveal";
import { showreel } from "@/data/projects";

export function VideoShowcase() {
  return (
    <section id="film" className="border-t border-border bg-ink py-28 text-ink-foreground lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow text-ink-foreground/55">07 — Film</p>
        </Reveal>
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-end">
          <Reveal delay={0.1}>
            <h2 className="display-xl text-[clamp(2rem,5vw,4rem)]">Spaces in Motion</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="leading-relaxed text-ink-foreground/65">
              Photographs hold a moment; film holds the walk-through. Short cinematic studies of how
              light, material and movement behave inside our built work.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {showreel.map((clip, i) => (
            <Reveal key={clip.title} delay={Math.min(i * 0.08, 0.3)}>
              <figure className="group">
                <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                  {clip.src ? (
                    <video
                      className="h-full w-full object-cover"
                      src={clip.src}
                      poster={clip.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="none"
                    />
                  ) : (
                    <img
                      src={clip.poster}
                      alt={`${clip.title} — ${clip.caption}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-90 transition-transform duration-[1800ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
                    />
                  )}
                </div>
                <figcaption className="mt-4">
                  <p className="font-display text-xl font-light">{clip.title}</p>
                  <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-ink-foreground/50 uppercase">
                    {clip.caption}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
