import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import heroImg from "@/assets/hero.jpg";
import { heroFilm } from "@/data/projects";

/**
 * Hero background. Drop an .mp4 URL into HERO_VIDEO to switch from the
 * cinematic still to autoplaying, muted, looping footage.
 */
const HERO_VIDEO: string | undefined = heroFilm;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink">
      <div className="absolute inset-0">
        {HERO_VIDEO ? (
          <video
            className="h-full w-full object-cover"
            src={HERO_VIDEO}
            poster={heroImg}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
        ) : (
          <img
            src={heroImg}
            alt="Concrete and timber residence at dusk designed by Earth Architects"
            width={1920}
            height={1088}
            className="kenburns h-full w-full object-cover"
            fetchPriority="high"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/45" />
      </div>

      <div className="shell relative z-10 pb-20 pt-40 text-ink-foreground lg:pb-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="eyebrow text-ink-foreground/70"
        >
          Earth Architects — Architecture & Interiors
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="display-xl mt-6 max-w-5xl text-[clamp(2.6rem,8vw,7rem)]"
        >
          Designing Spaces.
          <br />
          <span className="italic">Creating Experiences.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-ink-foreground/75"
        >
          Architecture and interiors shaped around the way you live, work and experience space.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.78, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <Link
            to="/projects"
            className="inline-flex min-h-12 items-center bg-ink-foreground px-8 text-[0.7rem] tracking-[0.22em] text-ink uppercase transition-colors duration-500 hover:bg-bronze hover:text-ink-foreground"
          >
            Explore Our Projects
          </Link>
          <Link
            to="/"
            hash="contact"
            className="inline-flex min-h-12 items-center border border-ink-foreground/45 px-8 text-[0.7rem] tracking-[0.22em] text-ink-foreground uppercase transition-colors duration-500 hover:bg-ink-foreground hover:text-ink"
          >
            Start a Project
          </Link>
        </motion.div>
      </div>

      <motion.a
        href="#philosophy"
        aria-label="Scroll to content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute right-6 bottom-10 z-10 hidden flex-col items-center gap-3 text-ink-foreground/60 lg:flex"
      >
        <span className="text-[0.6rem] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">
          Scroll
        </span>
        <motion.span
          animate={{ scaleY: [0.2, 1, 0.2], originY: 0 }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-16 w-px bg-ink-foreground/50"
        />
      </motion.a>
    </section>
  );
}
