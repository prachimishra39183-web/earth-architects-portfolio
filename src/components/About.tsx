import { Link } from "@tanstack/react-router";
import { Reveal, RevealImage } from "./Reveal";
import { stats } from "@/data/site";
import aboutImg from "@/assets/about.jpg";

export function About() {
  return (
    <section id="about" className="border-t border-border py-28 lg:py-40">
      <div className="shell grid gap-14 lg:grid-cols-2 lg:gap-20">
        <RevealImage
          src={aboutImg}
          alt="Warm minimal interior with travertine wall, oak slats and linen seating"
          className="aspect-[4/5] lg:sticky lg:top-28 lg:self-start"
          imgClassName="transition-transform duration-[1400ms] hover:scale-105"
        />

        <div>
          <Reveal>
            <p className="eyebrow">02 — About the studio</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-xl mt-8 text-[clamp(2rem,4.5vw,3.6rem)]">
              A studio built on listening before drawing.
            </h2>
          </Reveal>

          <div className="mt-10 space-y-6 text-foreground/80">
            <Reveal delay={0.15}>
              <p className="leading-relaxed">
                Earth Architects is an architecture and interior design practice working across
                residences, healthcare, commercial and interior projects. Every commission begins
                with a long conversation and a careful reading of the site.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="leading-relaxed">
                Our philosophy is quiet: design should serve daily life first and photograph well
                second. We believe in restraint, honest materials and details that hold up years
                after handover.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="leading-relaxed text-muted-foreground">
                Our vision is to build spaces that age gracefully. Our approach keeps one team with
                you from concept through execution, so nothing is lost in translation between the
                drawing and the built room.
              </p>
            </Reveal>
          </div>

          {/* PLACEHOLDER statistics — see src/data/site.ts */}
          <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={0.1 + i * 0.07}>
                <div>
                  <p className="font-display text-4xl font-light text-bronze lg:text-5xl">
                    {s.value}
                  </p>
                  <p className="mt-2 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <Link
              to="/"
              hash="process"
              className="mt-12 inline-flex min-h-12 items-center border border-foreground/25 px-8 text-[0.7rem] tracking-[0.22em] uppercase transition-colors duration-500 hover:bg-foreground hover:text-primary-foreground"
            >
              Discover Our Approach
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
