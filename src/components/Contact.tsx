import { useState } from "react";
import { toast } from "sonner";
import { Reveal } from "./Reveal";
import { site } from "@/data/site";

const field =
  "w-full border-0 border-b border-border bg-transparent py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-bronze";
const labelCls = "text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="border-t border-border py-28 lg:py-40">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow">12 — Contact</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="display-xl mt-8 text-[clamp(2rem,4.5vw,3.6rem)]">
              Let's Create Something Meaningful.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            {/* PLACEHOLDER contact details — edit in src/data/site.ts */}
            <dl className="mt-14 space-y-8">
              <div>
                <dt className={labelCls}>Phone</dt>
                <dd className="font-display mt-2 text-2xl font-light">
                  <a href={site.phoneHref} className="link-underline">
                    {site.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelCls}>Email</dt>
                <dd className="font-display mt-2 text-2xl font-light">
                  <a href={`mailto:${site.email}`} className="link-underline">
                    {site.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className={labelCls}>Location</dt>
                <dd className="font-display mt-2 text-2xl font-light">{site.location}</dd>
              </div>
            </dl>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <form
              className="grid gap-8 sm:grid-cols-2"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
                toast.success("Thank you — this demo form does not send data yet.");
              }}
            >
              <div>
                <label htmlFor="c-name" className={labelCls}>
                  Name
                </label>
                <input id="c-name" name="name" required placeholder="Your name" className={field} />
              </div>
              <div>
                <label htmlFor="c-email" className={labelCls}>
                  Email
                </label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@email.com"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="c-phone" className={labelCls}>
                  Phone
                </label>
                <input
                  id="c-phone"
                  name="phone"
                  type="tel"
                  placeholder="+91 00000 00000"
                  className={field}
                />
              </div>
              <div>
                <label htmlFor="c-type" className={labelCls}>
                  Project Type
                </label>
                <select id="c-type" name="projectType" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Healthcare</option>
                  <option>Interior</option>
                  <option>Renovation</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="c-location" className={labelCls}>
                  Location
                </label>
                <input id="c-location" name="location" placeholder="City" className={field} />
              </div>
              <div>
                <label htmlFor="c-budget" className={labelCls}>
                  Approximate Budget
                </label>
                <select id="c-budget" name="budget" defaultValue="" className={field}>
                  <option value="" disabled>
                    Select
                  </option>
                  <option>Under ₹25 Lakhs</option>
                  <option>₹25–50 Lakhs</option>
                  <option>₹50 Lakhs–₹1 Crore</option>
                  <option>₹1 Crore+</option>
                  <option>Not Decided</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="c-message" className={labelCls}>
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  placeholder="Tell us about the space you have in mind"
                  className={`${field} resize-none`}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex min-h-12 items-center bg-foreground px-10 text-[0.7rem] tracking-[0.22em] text-primary-foreground uppercase transition-colors duration-500 hover:bg-bronze"
                >
                  {sent ? "Enquiry Noted" : "Send Enquiry"}
                </button>
                <p className="mt-4 text-xs text-muted-foreground">
                  Demo form — submissions are not stored or sent.
                </p>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
