import { Reveal } from "./Reveal";
import { achievements } from "@/data/site";

export function Achievements() {
  return (
    <section id="achievements" className="border-t border-border bg-secondary/40 py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">09 — Achievements & exhibitions</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-xl mt-8 max-w-2xl text-[clamp(2rem,5vw,4rem)]">
            Recognition, in print and in person.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Placeholder entries — replace each line in <code>src/data/site.ts</code> with the
            studio's verified awards, exhibitions and published features.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {achievements.map((group, i) => (
            <Reveal key={group.group} delay={Math.min(i * 0.08, 0.3)}>
              <div className="border-t border-border pt-6">
                <h3 className="text-[0.7rem] tracking-[0.22em] text-bronze uppercase">
                  {group.group}
                </h3>
                <ul className="mt-6 space-y-5">
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <p className="font-display text-lg leading-snug font-light">{item.label}</p>
                      <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
                        {item.year}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
