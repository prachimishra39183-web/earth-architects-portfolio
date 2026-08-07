import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  aspect = "aspect-[4/3]",
  index = 0,
}: {
  project: Project;
  aspect?: string;
  index?: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 1.1, delay: Math.min(index * 0.08, 0.3), ease: [0.22, 1, 0.36, 1] }}
      layout
    >
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group block"
        aria-label={`View project — ${project.title}`}
      >
        <div className={`relative overflow-hidden bg-secondary ${aspect}`}>
          <img
            src={project.cover}
            alt={project.coverAlt}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-[1600ms] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-ink/0 transition-colors duration-700 group-hover:bg-ink/25" />
          <div className="absolute inset-x-0 bottom-0 translate-y-3 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
            <p className="max-w-md text-sm leading-relaxed text-ink-foreground">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4">
          <div className="min-w-0">
            <h3 className="font-display text-2xl font-light transition-colors duration-500 group-hover:text-bronze">
              {project.title}
            </h3>
            <p className="mt-1 text-[0.7rem] tracking-[0.18em] text-muted-foreground uppercase">
              {project.category} · {project.location} · {project.year}
            </p>
          </div>
          <span className="mt-1 inline-flex shrink-0 items-center gap-2 text-[0.68rem] tracking-[0.2em] uppercase">
            View Project
            <ArrowUpRight
              className="size-4 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={1.2}
            />
          </span>
        </div>
      </Link>
    </motion.article>
  );
}
