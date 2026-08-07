import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Intro } from "@/components/Intro";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Gallery } from "@/components/Gallery";
import { VideoShowcase } from "@/components/VideoShowcase";
import { Process } from "@/components/Process";
import { Achievements } from "@/components/Achievements";
import { Testimonials } from "@/components/Testimonials";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTA } from "@/components/CTA";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const title = "Earth Architects | Architecture & Interior Design";
const description =
  "Earth Architects creates thoughtful architecture and interior spaces that balance functionality, materiality and timeless design.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ArchitecturalService",
          name: "Earth Architects",
          description,
          areaServed: "India",
          url: "/",
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Navbar overlay />
      <main>
        <h1 className="sr-only">Earth Architects — Architecture and Interior Design Studio</h1>
        <Hero />
        <Intro />
        <About />
        <Services />
        <FeaturedProjects />
        <VideoShowcase />
        <Gallery />
        <Process />
        <Achievements />
        <Testimonials />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
