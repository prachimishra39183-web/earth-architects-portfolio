import { Reveal } from "./Reveal";
import { process } from "@/data/site";

export function Process() {
  return (
    <section id="process" className="border-t border-border py-28 lg:py-40">
      <div className="shell">
        <Reveal>
          <p className="eyebrow">08 — How we work</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="display-xl mt-8 max-w-2xl text-[clamp(2rem,5vw,4rem)]">
            Five steps, one continuous conversation.
          </h2>
        </Reveal>

        <ol className="mt-20 grid gap-12 lg:grid-cols-5 lg:gap-6">
          {process.map((p, i) => (
            <Reveal key={p.n} delay={Math.min(i * 0.08, 0.4)}>
              <li className="relative border-l border-border pl-6 lg:border-l-0 lg:border-t lg:pt-8 lg:pl-0">
                <span className="absolute -left-[3px] top-1 size-[5px] rounded-full bg-bronze lg:top-auto lg:-mt-[3px] lg:left-0" />
                <p className="text-[0.7rem] tracking-[0.22em] text-bronze">{p.n}</p>
                <h3 className="font-display mt-3 text-2xl font-light">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
