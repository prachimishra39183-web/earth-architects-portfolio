import { useState } from "react";
import { Reveal } from "./Reveal";
import { services } from "@/data/site";
import { galleryImages } from "@/data/projects";

export function Services() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="border-t border-border bg-secondary/40 py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">03 — Services</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-xl mt-8 max-w-3xl text-[clamp(2rem,5vw,4rem)]">
            Disciplines we practise, end to end.
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Hover image reveal (desktop) */}
          <div className="pointer-events-none absolute top-0 right-0 z-10 hidden h-[26rem] w-[22rem] lg:block">
            {services.map((s, i) => (
              <img
                key={s.title}
                src={galleryImages[i % galleryImages.length]?.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`absolute inset-0 h-full w-full object-cover transition-all duration-[900ms] ease-[cubic-bezier(.22,1,.36,1)] ${
                  active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                }`}
              />
            ))}
          </div>

          <ul className="relative z-20">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 0.05, 0.3)}>
                <li
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  className="group grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-x-6 border-t border-border py-7 transition-colors duration-500 last:border-b lg:grid-cols-[5rem_18rem_minmax(0,1fr)] lg:gap-x-10"
                >
                  <span className="text-[0.7rem] tracking-[0.2em] text-bronze">{s.n}</span>
                  <h3 className="font-display text-2xl font-light transition-[transform,color] duration-700 group-hover:translate-x-2 group-hover:text-bronze lg:text-3xl">
                    {s.title}
                  </h3>
                  <p className="col-start-2 mt-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-start-3 lg:mt-0">
                    {s.text}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
