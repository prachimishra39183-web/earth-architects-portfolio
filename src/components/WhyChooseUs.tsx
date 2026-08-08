import { Reveal } from "./Reveal";
import { whyChooseUs } from "@/data/site";

export function WhyChooseUs() {
  return (
    <section className="border-t border-border bg-secondary/40 py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">11 — Why Earth Architects</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-xl mt-8 max-w-2xl text-[clamp(2rem,5vw,4rem)]">
            The things we refuse to rush.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((w, i) => (
            <Reveal key={w.title} delay={Math.min(i * 0.07, 0.35)}>
              <div className="border-t border-border pt-6">
                <p className="text-[0.7rem] tracking-[0.22em] text-bronze">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-display mt-4 text-2xl font-light">{w.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-foreground/75">{w.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
