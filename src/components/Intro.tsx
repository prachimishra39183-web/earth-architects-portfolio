import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="philosophy" className="shell py-28 lg:py-44">
      <Reveal>
        <p className="eyebrow">01 — Philosophy</p>
      </Reveal>
      <Reveal delay={0.1}>
        <h2 className="display-xl mt-10 max-w-4xl text-[clamp(2.2rem,6vw,5rem)]">
          Architecture that feels <span className="italic text-bronze">personal.</span>
        </h2>
      </Reveal>
      <div className="mt-14 grid gap-10 lg:grid-cols-12">
        <Reveal delay={0.15} className="lg:col-span-5 lg:col-start-6">
          <p className="text-lg leading-relaxed text-foreground/80">
            Earth Architects creates thoughtful, functional and timeless spaces by bringing
            architecture, interiors, materiality and human experience into a single conversation.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="lg:col-span-3">
          <p className="leading-relaxed text-muted-foreground">
            We work slowly and deliberately — reading the site, the light and the people who will
            use the space, then building only what the design genuinely needs.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
