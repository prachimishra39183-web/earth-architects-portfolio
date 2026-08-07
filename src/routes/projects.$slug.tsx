import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Gallery } from "@/components/Gallery";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Project not found | Earth Architects" }, { name: "robots", content: "noindex" }] };
    }
    const { project } = loaderData;
    const title = `${project.title} | Earth Architects`;
    return {
      meta: [
        { title },
        { name: "description", content: project.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: project.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/projects/${project.slug}` },
      ],
      links: [{ rel: "canonical", href: `/projects/${project.slug}` }],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <>
      <Navbar />
      <main className="shell flex min-h-[70vh] flex-col justify-center">
        <h1 className="display-xl text-5xl">Project not found</h1>
        <Link to="/projects" className="link-underline mt-8 text-[0.7rem] tracking-[0.2em] uppercase">
          Back to all projects
        </Link>
      </main>
      <Footer />
    </>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length]!;

  const facts = [
    { label: "Category", value: project.category },
    { label: "Location", value: project.location },
    { label: "Year", value: project.year },
  ];

  return (
    <>
      <Navbar overlay />
      <main>
        <section className="relative h-[80svh] min-h-[30rem] overflow-hidden bg-ink">
          {project.video ? (
            <video
              className="h-full w-full object-cover"
              src={project.video}
              poster={project.cover}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={project.cover}
              alt={project.coverAlt}
              className="kenburns h-full w-full object-cover"
              fetchPriority="high"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-ink/25" />
          <div className="shell absolute inset-x-0 bottom-0 pb-16 text-ink-foreground">
            <p className="eyebrow text-ink-foreground/70">{project.category}</p>
            <h1 className="display-xl mt-5 text-[clamp(2.4rem,7vw,5.5rem)]">{project.title}</h1>
          </div>
        </section>

        <section className="shell py-20 lg:py-28">
          <dl className="grid gap-8 border-b border-border pb-10 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                  {f.label}
                </dt>
                {/* PLACEHOLDER values where unconfirmed — edit src/data/projects.ts */}
                <dd className="font-display mt-2 text-2xl font-light">{f.value}</dd>
              </div>
            ))}
          </dl>

          <Reveal>
            <p className="font-display mt-16 max-w-4xl text-[clamp(1.4rem,3vw,2.4rem)] leading-[1.3] font-light">
              {project.summary}
            </p>
          </Reveal>

          <div className="mt-20 grid gap-x-16 gap-y-12 lg:grid-cols-2">
            {[
              ["Project Overview", project.overview],
              ["Design Concept", project.concept],
              ["Challenges", project.challenges],
              ["Design Approach", project.approach],
              ["Materials & Spatial Strategy", project.materials],
            ].map(([heading, body], i) => (
              <Reveal key={heading} delay={Math.min(i * 0.06, 0.3)}>
                <div className="border-t border-border pt-6">
                  <h2 className="text-[0.68rem] tracking-[0.22em] text-bronze uppercase">
                    {heading}
                  </h2>
                  <p className="mt-4 leading-relaxed text-foreground/80">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Gallery images={project.gallery} />

        <section className="border-t border-border bg-ink py-20 text-ink-foreground">
          <div className="shell">
            <p className="eyebrow text-ink-foreground/50">Next project</p>
            <Link
              to="/projects/$slug"
              params={{ slug: next.slug }}
              className="group mt-6 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-6"
            >
              <h2 className="display-xl text-[clamp(2rem,6vw,4.5rem)] transition-colors duration-500 group-hover:text-bronze">
                {next.title}
              </h2>
              <ArrowRight
                className="size-8 shrink-0 transition-transform duration-700 group-hover:translate-x-3"
                strokeWidth={1}
              />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
