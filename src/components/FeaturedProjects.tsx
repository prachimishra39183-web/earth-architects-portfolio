import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
  const [a, b, c, d] = projects;

  return (
    <section id="projects" className="border-t border-border py-28 lg:py-40">
      <div className="shell">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div>
            <Reveal>
              <p className="eyebrow">04 — Selected work</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="display-xl mt-8 max-w-2xl text-[clamp(2rem,5vw,4rem)]">
                Projects shaped by place, light and use.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/projects"
              className="link-underline text-[0.7rem] tracking-[0.2em] uppercase"
            >
              View All Projects
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-14 lg:grid-cols-12 lg:gap-x-10 lg:gap-y-24">
          <div className="lg:col-span-8">
            {a && <ProjectCard project={a} aspect="aspect-[16/11]" index={0} />}
          </div>
          <div className="lg:col-span-4 lg:pt-28">
            {b && <ProjectCard project={b} aspect="aspect-[4/5]" index={1} />}
          </div>
          <div className="lg:col-span-5">
            {c && <ProjectCard project={c} aspect="aspect-[4/5]" index={2} />}
          </div>
          <div className="lg:col-span-7 lg:pt-32">
            {d && <ProjectCard project={d} aspect="aspect-[16/11]" index={3} />}
          </div>
        </div>
      </div>
    </section>
  );
}
