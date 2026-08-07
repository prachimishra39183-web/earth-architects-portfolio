import { Reveal } from "./Reveal";
import ctaImg from "@/assets/cta.jpg";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-ink py-32 text-ink-foreground lg:py-48">
      <img
        src={ctaImg}
        alt="Sculptural concrete staircase lit by a shaft of daylight"
        loading="lazy"
        decoding="async"
        width={1808}
        height={1008}
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/25" />
      <div className="shell relative">
        <Reveal>
          <h2 className="display-xl max-w-3xl text-[clamp(2.4rem,6vw,5rem)]">
            Have a space in mind?
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-foreground/75">
            Let's turn your ideas into a space that feels unmistakably yours.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center bg-ink-foreground px-8 text-[0.7rem] tracking-[0.22em] text-ink uppercase transition-colors duration-500 hover:bg-bronze hover:text-ink-foreground"
            >
              Start a Project
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 items-center border border-ink-foreground/45 px-8 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-ink-foreground hover:text-ink"
            >
              Schedule a Consultation
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
