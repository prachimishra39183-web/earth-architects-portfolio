import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CTA } from "@/components/CTA";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { filters, projects } from "@/data/projects";

const title = "Projects | Earth Architects";
const description =
  "Selected architecture and interior projects by Earth Architects across residential, healthcare, commercial and interior work.";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  const [active, setActive] = useState<string>("All");
  const list = active === "All" ? projects : projects.filter((p) => p.filters.includes(active));

  return (
    <>
      <Navbar />
      <main className="pt-32 lg:pt-40">
        <section className="shell">
          <Reveal>
            <p className="eyebrow">Selected work</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="display-xl mt-8 max-w-3xl text-[clamp(2.4rem,6vw,5rem)]">
              Every project begins as a conversation.
            </h1>
          </Reveal>

          <div className="mt-14 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                aria-pressed={active === f}
                className={`min-h-11 text-[0.7rem] tracking-[0.2em] uppercase transition-colors duration-500 ${
                  active === f ? "text-bronze" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <motion.div layout className="mt-14 grid gap-x-10 gap-y-16 lg:grid-cols-2">
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div
                  key={p.slug}
                  layout
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={i % 3 === 0 ? "lg:col-span-2" : ""}
                >
                  <ProjectCard
                    project={p}
                    index={i}
                    aspect={i % 3 === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {list.length === 0 && (
            <p className="mt-16 text-muted-foreground">No projects in this category yet.</p>
          )}
        </section>

        <div className="mt-28 lg:mt-40">
          <CTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
