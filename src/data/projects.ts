import stair from "@/assets/work/Screenshot_2026-08-07_205905.png.asset.json";
import living from "@/assets/work/Screenshot_2026-08-07_205911.png.asset.json";
import dining from "@/assets/work/Screenshot_2026-08-07_205930.png.asset.json";
import terrace from "@/assets/work/Screenshot_2026-08-07_205934.png.asset.json";
import brick from "@/assets/work/Screenshot_2026-08-07_205941.png.asset.json";
import corridor from "@/assets/work/Screenshot_2026-08-07_205952.png.asset.json";
import reception from "@/assets/work/Screenshot_2026-08-07_205956.png.asset.json";
import mandir from "@/assets/work/Screenshot_2026-08-07_210008.png.asset.json";
import doubleHeight from "@/assets/work/Screenshot_2026-08-07_210013.png.asset.json";

export type Project = {
  slug: string;
  title: string;
  category: string;
  filters: string[];
  location: string; // PLACEHOLDER where unknown
  year: string; // PLACEHOLDER where unknown
  summary: string;
  overview: string;
  concept: string;
  challenges: string;
  approach: string;
  materials: string;
  cover: string;
  coverAlt: string;
  /** Optional cinematic clip — drop in an .mp4 URL to activate video. */
  video?: string;
  gallery: { src: string; alt: string }[];
};

export const filters = [
  "All",
  "Residential",
  "Commercial",
  "Healthcare",
  "Interior",
  "Hospitality",
] as const;

export const projects: Project[] = [
  {
    slug: "tiny-house",
    title: "Tiny House",
    category: "Residential",
    filters: ["Residential", "Interior"],
    location: "Location", // PLACEHOLDER
    year: "Year", // PLACEHOLDER
    summary:
      "A compact urban home where a brick screen, a deep balcony and a top-lit terrace stretch a small footprint into a generous way of living.",
    overview:
      "Set on a narrow plot between existing houses, the project rethinks how much space a family actually needs. Rooms are layered vertically, with light drawn down through the section rather than borrowed from the street.",
    concept:
      "A solid brick volume is carved by a single arched opening — a quiet threshold between the noise of the street and the calm of the interior.",
    challenges:
      "A tight frontage, close neighbours and strong western sun demanded privacy without darkness. Every square foot had to serve more than one purpose.",
    approach:
      "The plan is organised around a vertical void. Perforated brickwork filters light and air, while the upper terrace becomes an outdoor room shielded by a glazed canopy.",
    materials:
      "Exposed brick, board-formed concrete, dark stone flooring and warm timber joinery, held together by a restrained, earthy palette.",
    cover: brick.url,
    coverAlt: "Brick facade with a tall arched balcony opening and perforated brick screen",
    gallery: [
      { src: brick.url, alt: "Brick facade with arched balcony and perforated brick screen" },
      {
        src: terrace.url,
        alt: "Top-floor lounge with dark marble flooring opening onto a glazed terrace",
      },
      { src: stair.url, alt: "Cantilevered timber staircase beside a planted indoor garden" },
    ],
  },
  {
    slug: "bliss-ivf-hospital",
    title: "Bliss IVF Hospital",
    category: "Healthcare",
    filters: ["Healthcare", "Commercial", "Interior"],
    location: "Location", // PLACEHOLDER
    year: "Year", // PLACEHOLDER
    summary:
      "A fertility centre designed to feel less like a hospital and more like a place of reassurance — soft light, tactile surfaces and calm circulation.",
    overview:
      "The brief asked for clinical efficiency without clinical coldness. Consultation, treatment and waiting are separated by gentle thresholds so that patients never feel exposed.",
    concept:
      "Care expressed through softness: curved forms, warm neutrals and indirect light replace the hard geometry usually associated with medical interiors.",
    challenges:
      "Strict hygiene and equipment requirements had to coexist with an atmosphere of privacy, dignity and quiet for patients at a sensitive moment.",
    approach:
      "A curved reception anchors the entry. Corridors are widened and top-lit, with recessed niches that break their length and slow the pace of movement.",
    materials:
      "Fluted and textured wall panelling, terrazzo flooring, matte stone counters and concealed cove lighting in a warm sand palette.",
    cover: reception.url,
    coverAlt: "Curved hospital reception desk with textured panelling and teal seating",
    gallery: [
      { src: reception.url, alt: "Curved reception desk with textured wall panelling" },
      { src: corridor.url, alt: "Softly lit stone corridor with terrazzo flooring" },
    ],
  },
  {
    slug: "govind",
    title: "Govind",
    category: "Interior",
    filters: ["Interior", "Residential"],
    location: "Location", // PLACEHOLDER
    year: "Year", // PLACEHOLDER
    summary:
      "A family residence where a carved marble shrine, travertine walls and rich teak joinery hold traditional ritual inside a contemporary plan.",
    overview:
      "The home is organised around its dining and prayer spaces — the two rooms where the family gathers daily. Everything else is arranged to serve that centre.",
    concept:
      "Continuity between the old and the new: heritage craft is not decorated onto the interior, it is built into its structure.",
    challenges:
      "Integrating a full-height traditional shrine into a modern, light-filled volume without either element overpowering the other.",
    approach:
      "Teak columns frame the shrine and set a rhythm the rest of the interior follows. Stone is kept pale and quiet so the crafted pieces read clearly.",
    materials:
      "Travertine, honed marble flooring, solid teak, hand-carved stone and brushed brass detailing.",
    cover: mandir.url,
    coverAlt: "Dining room with teak columns beside a carved white marble shrine",
    gallery: [
      { src: mandir.url, alt: "Carved white marble shrine framed by teak columns" },
      { src: dining.url, alt: "Timber dining table below a glass globe chandelier" },
      { src: living.url, alt: "Formal living room with dark marble feature wall and velvet seating" },
    ],
  },
  {
    slug: "triplex-house",
    title: "Triplex House",
    category: "Residential",
    filters: ["Residential", "Interior", "Hospitality"],
    location: "Location", // PLACEHOLDER
    year: "Year", // PLACEHOLDER
    summary:
      "Three levels connected by a planted void, where a sculptural stair and a double-height living room turn circulation into the heart of the house.",
    overview:
      "A large family home planned as a vertical sequence. Each floor opens onto the same landscaped void, so the whole house shares one volume of light and air.",
    concept:
      "The stair as spine. Movement through the house is treated as the primary architectural experience rather than a leftover between rooms.",
    challenges:
      "Bringing daylight and greenery to the lowest level of a deep plan while keeping the three floors visually and acoustically connected.",
    approach:
      "A full-height void runs the length of the plan, planted at its base and lit from above, with the folded steel stair suspended within it.",
    materials:
      "Stone-clad walls, folded steel and timber treads, brass wall sculpture, upholstered seating and a soft green and grey interior palette.",
    cover: doubleHeight.url,
    coverAlt: "Double-height living room with stone walls, brass wall discs and green sofas",
    gallery: [
      { src: doubleHeight.url, alt: "Double-height living room with brass wall discs" },
      { src: stair.url, alt: "Folded steel staircase above a planted indoor garden" },
      { src: terrace.url, alt: "Upper lounge opening onto a glazed terrace" },
      { src: living.url, alt: "Formal seating area with marble feature wall" },
    ],
  },
];

export const galleryImages = [
  { src: doubleHeight.url, alt: "Double-height living room with brass wall discs and green sofas" },
  { src: stair.url, alt: "Folded steel staircase above a planted indoor garden" },
  { src: brick.url, alt: "Brick facade with a tall arched balcony opening" },
  { src: mandir.url, alt: "Carved white marble shrine framed by teak columns" },
  { src: reception.url, alt: "Curved hospital reception with textured panelling" },
  { src: terrace.url, alt: "Upper lounge with dark marble flooring and glazed terrace" },
  { src: living.url, alt: "Formal living room with dark marble feature wall" },
  { src: corridor.url, alt: "Softly lit stone corridor with terrazzo flooring" },
  { src: dining.url, alt: "Timber dining table below a glass globe chandelier" },
];

/** Cinematic reel — add `src` (.mp4/.webm) to any entry to play real footage. */
export const showreel: { title: string; caption: string; poster: string; src?: string }[] = [
  {
    title: "Triplex House",
    caption: "Light moving through the central void",
    poster: doubleHeight.url,
  },
  { title: "Tiny House", caption: "Brick, shadow and the arched threshold", poster: brick.url },
  { title: "Bliss IVF Hospital", caption: "Calm circulation, softened light", poster: corridor.url },
];
