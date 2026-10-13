import Reveal from "./Reveal";

const PHONE_DISPLAY = "(905) 687-2884";
const PHONE_TEL = "tel:+19056872884";
const PHONE_SMS = "sms:+19056872884";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Spenzies%20Commericial%20%26%20Residential%20Cleaning%20%26%20Landscaping&query_place_id=ChIJG7zUzAVR04kRBtqfykztsvY";
const FACEBOOK = "https://www.facebook.com/spenziescleaning";
const INSTAGRAM = "https://www.instagram.com/spenziescleaning";
const TIKTOK = "https://www.tiktok.com/@spenziescleaning";

type IconName =
  | "phone" | "star" | "pin" | "home" | "building" | "key" | "hammer" | "sparkle" | "leaf" | "snow" | "droplet"
  | "car" | "check" | "message" | "clock" | "users" | "shield" | "plus" | "arrow" | "calendar" | "heart";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>;
    case "star":
      return <svg {...p} fill="currentColor" stroke="none"><path d="M12 2.5l2.94 5.96 6.56.95-4.75 4.63 1.12 6.54L12 17.5l-5.87 3.08 1.12-6.54L2.5 9.41l6.56-.95z" /></svg>;
    case "pin":
      return <svg {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "home":
      return <svg {...p}><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /><path d="M10 21v-6h4v6" /></svg>;
    case "building":
      return <svg {...p}><rect x="4" y="3" width="16" height="18" rx="1" /><path d="M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3" /></svg>;
    case "key":
      return <svg {...p}><circle cx="7.5" cy="15.5" r="4.5" /><path d="m10.7 12.3 9.3-9.3M17 6l3 3M14 9l2 2" /></svg>;
    case "hammer":
      return <svg {...p}><path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" /><path d="M17.64 15 22 10.64M20.91 11.7l-1.25-1.25a2.4 2.4 0 0 1-.7-1.7V7.86L16.7 5.6A5.56 5.56 0 0 0 12.76 4H9l.92.82A6.18 6.18 0 0 1 12 9.43V11l2 2h1.17a2.4 2.4 0 0 1 1.7.7l1.25 1.25" /></svg>;
    case "sparkle":
      return <svg {...p}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.1 2.1M15.6 15.6l2.1 2.1M6.3 17.7l2.1-2.1M15.6 8.4l2.1-2.1" /></svg>;
    case "leaf":
      return <svg {...p}><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z" /><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" /></svg>;
    case "snow":
      return <svg {...p}><path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07 19.07 4.93" /></svg>;
    case "droplet":
      return <svg {...p}><path d="M12 2.7s-6 6.3-6 11.3a6 6 0 0 0 12 0c0-5-6-11.3-6-11.3z" /></svg>;
    case "car":
      return <svg {...p}><path d="M5 17h14v-5l-2-5H7l-2 5z" /><path d="M3 12h18" /><circle cx="7.5" cy="17" r="1.5" /><circle cx="16.5" cy="17" r="1.5" /></svg>;
    case "check":
      return <svg {...p}><path d="M20 6 9 17l-5-5" /></svg>;
    case "message":
      return <svg {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>;
    case "users":
      return <svg {...p}><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>;
    case "shield":
      return <svg {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></svg>;
    case "plus":
      return <svg {...p}><path d="M12 5v14M5 12h14" /></svg>;
    case "arrow":
      return <svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
    case "calendar":
      return <svg {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>;
    case "heart":
      return <svg {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></svg>;
  }
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const cleaning: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "home",
    title: "Residential cleaning",
    body: "Regular and deep cleaning for houses, condos and apartments. Customers call it the Spenzie's touch: the crew goes past the checklist, like moving the fridge to clean behind it.",
  },
  {
    icon: "building",
    title: "Commercial cleaning",
    body: "Cleaning for offices and commercial spaces, done by a crew that is fast, careful and trustworthy around your property and your schedule.",
  },
  {
    icon: "key",
    title: "Move-in and move-out deep cleans",
    body: "A top-to-bottom deep clean before you move in or after you move out, timed around your move day so the new place is ready when you are.",
  },
  {
    icon: "hammer",
    title: "New-build and post-renovation cleaning",
    body: "Dust, debris and film cleared out of newly built homes and freshly renovated spaces, so you can actually live in them.",
  },
];

const outdoor: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "leaf",
    title: "Garden clean-ups and mulching",
    body: "Spring and fall clean-ups, full garden bed clean-outs, reorganizing and fresh mulch. One customer had about 70 feet of beds redone.",
  },
  {
    icon: "sparkle",
    title: "Lawn maintenance",
    body: "Ongoing lawn care so the outside of the property looks as good as the inside.",
  },
  {
    icon: "snow",
    title: "Snow removal",
    body: "Winter snow service, including for older homeowners who want one crew they trust all year.",
  },
  {
    icon: "droplet",
    title: "Pressure washing",
    body: "Driveways, walkways, patios and siding brought back to clean.",
  },
  {
    icon: "hammer",
    title: "Demolition",
    body: "Small demolition jobs as part of a bigger clean-up or reno project. Ask Spencer about your job.",
  },
  {
    icon: "car",
    title: "Car detailing",
    body: "Full inside-and-outside car cleaning and detailing.",
  },
];

const reviews = [
  {
    name: "Julian S.",
    place: "Brampton",
    job: "Repeat deep cleaning since 2021",
    text: "They first came out on a Sunday at the last minute, all the way from near Niagara. I've used them for deep cleans ever since. This time they moved the fridge and cleaned behind it, and the apartment still felt freshly scrubbed a week later. That's the Spenzie's touch.",
  },
  {
    name: "Kate B.",
    place: "",
    job: "Garden clean-out and mulching",
    text: "About 70 feet of garden beds cleaned out, reorganized and mulched. Fast, extremely thorough, and they have an amazing eye for design. I'm over the moon with how the beds look.",
  },
  {
    name: "Kyle L.",
    place: "",
    job: "New home, before move-in",
    text: "We hired Spenzies to get our new home ready before we moved in. Professional, easy to coordinate with, and great attention to detail in every room. It made move-in day so much easier.",
  },
  {
    name: "Eryn W.",
    place: "",
    job: "Cleaning, landscaping, pressure washing and more",
    text: "Spencer and his team have done residential and commercial cleaning, before-and-after-move deep cleans, landscaping, pressure washing and demolition for us. Always fast, reliable, efficient and trustworthy.",
  },
  {
    name: "Brandon G.",
    place: "",
    job: "Car detail and condo deep clean",
    text: "Hired Spencer and his crew to detail my car and deep clean a condo. Extremely affordable, efficient and professional.",
  },
  {
    name: "Google reviewer",
    place: "",
    job: "Year-round care for aging parents",
    text: "Spenzies handled spring and fall garden clean-ups, lawn maintenance and snow removal so my parents could stay in their home. A prompt, professional, efficient team that gave our whole family peace of mind.",
  },
];

const steps = [
  { title: "Call or text", body: `Reach Spencer at ${PHONE_DISPLAY} and tell him what needs cleaning: the home, the office, the move, the yard.` },
  { title: "Get a quote and a date", body: "Spencer works out what the job needs and books a time that suits you, including move days and short notice when the schedule allows." },
  { title: "The crew does the work", body: "A team shows up on time, works fast and pays attention to the corners other cleaners skip." },
  { title: "Walk through it together", body: "Check the result. Many customers end up keeping Spenzies on for the next deep clean, the garden or the snow." },
];

const areas = ["St. Catharines", "Niagara Region", "Toronto", "Brampton", "GTA"];

const faqs = [
  {
    q: "What areas do you serve?",
    a: "Spenzies is based on a St. Catharines number and works across the Niagara Region and Toronto and the GTA. Customers have booked them as far as Brampton. Call (905) 687-2884 with your address and Spencer will tell you if you're covered.",
  },
  {
    q: "Do you do both cleaning and yard work?",
    a: "Yes. That's what makes Spenzies different. The same crew handles house and commercial cleaning, deep cleans, garden clean-ups, mulching, lawn care, snow removal and pressure washing, so you only need one number.",
  },
  {
    q: "Can you clean a new build or a home after renovations?",
    a: "Yes. New-build and post-renovation cleaning is one of the main services: dust, debris and film cleared out so the space is ready to live in.",
  },
  {
    q: "Do you do move-in and move-out cleans?",
    a: "Yes. Deep cleans before and after a move are booked around your move-in or move-out day.",
  },
  {
    q: "Can you come on short notice?",
    a: "When the schedule allows. One long-time customer first booked them on a Sunday at the last minute. Call or text and ask.",
  },
  {
    q: "How long have you been in business?",
    a: "Customers have been hiring Spenzies since at least 2021, and many are repeat clients who keep calling back for the next job.",
  },
  {
    q: "How do I get a price?",
    a: `Call or text ${PHONE_DISPLAY}. Tell Spencer the size of the space, the type of clean and when you need it, and he'll give you a quote. Customers describe the pricing as very affordable.`,
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HouseCleaningService",
  name: "Spenzies Cleaning",
  alternateName: "Spenzies Commercial & Residential Cleaning & Landscaping",
  description:
    "Residential, commercial, new-build, post-renovation and move-in/move-out cleaning, plus garden clean-ups, lawn maintenance, snow removal, pressure washing and car detailing in the Niagara Region and the GTA.",
  telephone: "+1-905-687-2884",
  founder: { "@type": "Person", name: "Spencer" },
  address: { "@type": "PostalAddress", addressLocality: "St. Catharines", addressRegion: "ON", addressCountry: "CA" },
  areaServed: areas.map((a) => ({ "@type": "Place", name: `${a}, Ontario` })),
  aggregateRating: { "@type": "AggregateRating", ratingValue: "4.9", reviewCount: "42" },
  sameAs: [FACEBOOK, INSTAGRAM, TIKTOK],
  hasMap: MAPS_URL,
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-4 focus:py-2">
        Skip to content
      </a>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Spenzies Cleaning, back to top">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
              <Icon name="sparkle" className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-extrabold tracking-tight text-ink">
              Spenzies <span className="text-brand">Cleaning</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 font-semibold text-muted lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Areas</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={PHONE_TEL} className="hidden font-bold text-ink hover:text-brand md:inline">{PHONE_DISPLAY}</a>
            <a href={PHONE_TEL} className="btn-press hidden min-h-12 items-center rounded-lg bg-cta px-5 font-bold text-white hover:bg-cta-hover md:inline-flex">
              Get a Quote
            </a>
            <a href={PHONE_TEL} aria-label={`Call ${PHONE_DISPLAY}`} className="btn-press flex h-11 w-11 items-center justify-center rounded-lg bg-cta text-white md:hidden">
              <Icon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Hero */}
        <section id="top" className="relative overflow-hidden bg-surface">
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-brand-soft" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[1.25fr_0.75fr]">
            <Reveal>
              <p className="mb-5 inline-flex items-center gap-2 rounded-md bg-brand-soft px-3 py-1.5 text-sm font-bold text-brand-deep">
                <Icon name="users" className="h-4 w-4" /> Owner Spencer and his crew
              </p>
              <h1 className="text-[clamp(2.4rem,5.4vw,4rem)] text-ink">
                House, Commercial &amp; Move-Out Cleaning in <span className="text-brand">Niagara and the GTA</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-muted md:text-xl">
                Deep cleans, new-build and post-reno cleaning, plus garden clean-ups, lawn care and snow removal. One trusted crew for inside and out.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href={PHONE_TEL} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-white hover:bg-cta-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta">
                  <Icon name="phone" className="h-5 w-5" /> Call {PHONE_DISPLAY}
                </a>
                <a href={PHONE_SMS} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-brand px-7 text-lg font-bold text-brand hover:bg-brand-soft">
                  <Icon name="message" className="h-5 w-5" /> Text Us
                </a>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted hover:text-ink">
                <Stars />
                <span className="font-bold text-ink">4.9</span>
                <span>· 42 Google reviews</span>
                <span>· Trusted since 2021</span>
                <span>· Homes and businesses</span>
              </a>
            </Reveal>

            <Reveal>
              <div className="rounded-xl border border-line bg-surface p-7 shadow-[0_24px_48px_-24px_oklch(0.3_0.1_255/0.25)]">
                <p className="font-display text-lg font-bold text-ink">Quick facts</p>
                <ul className="mt-5 space-y-4">
                  {[
                    { icon: "star" as IconName, t: "4.9 stars from 42 Google reviews" },
                    { icon: "home" as IconName, t: "Homes, condos, apartments and offices" },
                    { icon: "key" as IconName, t: "Move-in, move-out and new-build deep cleans" },
                    { icon: "leaf" as IconName, t: "Garden, lawn and snow from the same crew" },
                    { icon: "pin" as IconName, t: "Niagara Region, Toronto and the GTA" },
                  ].map((f) => (
                    <li key={f.t} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-soft text-brand">
                        <Icon name={f.icon} className="h-4 w-4" />
                      </span>
                      <span className="text-[1rem] text-ink">{f.t}</span>
                    </li>
                  ))}
                </ul>
                <a href={PHONE_TEL} className="btn-press mt-7 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-brand font-bold text-white hover:bg-brand-deep">
                  Book a clean <Icon name="arrow" className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why customers trust Spenzies" className="bg-brand text-white">
          <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, top: "4.9 on Google", sub: "42 reviews" },
              { icon: "calendar" as IconName, top: "Since 2021", sub: "repeat customers for years" },
              { icon: "users" as IconName, top: "Owner-led crew", sub: "Spencer and team" },
              { icon: "check" as IconName, top: "Inside and out", sub: "cleaning, yard and snow" },
            ].map((t) => (
              <li key={t.top} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/15">
                  <Icon name={t.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-bold">{t.top}</span>
                  <span className="block text-sm text-white/85">{t.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* Services */}
        <section id="services" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl text-ink md:text-5xl">Cleaning services</h2>
              <p className="mt-4 text-muted">
                From a weekly tidy to a full deep clean before the keys change hands. Every job gets the same attention to detail.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {cleaning.map((s, i) => (
                <Reveal key={s.title}>
                  <article className={`card-lift flex h-full flex-col rounded-xl border bg-surface p-7 md:p-8 ${i === 0 ? "border-brand" : "border-line"}`}>
                    <div className="flex items-center justify-between">
                      <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-soft text-brand">
                        <Icon name={s.icon} />
                      </span>
                      {i === 0 && <span className="rounded-md bg-brand px-2.5 py-1 text-xs font-bold text-white">Most requested</span>}
                    </div>
                    <h3 className="mt-5 text-xl text-ink md:text-2xl">{s.title}</h3>
                    <p className="mt-3 flex-1 text-[1rem] text-muted">{s.body}</p>
                    <a href={PHONE_TEL} className="mt-5 inline-flex items-center gap-1.5 font-bold text-brand hover:text-brand-deep">
                      Call about this <Icon name="arrow" className="h-4 w-4" />
                    </a>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16 max-w-2xl">
              <h2 className="text-3xl text-ink md:text-4xl">Yard, outdoor and extra services</h2>
              <p className="mt-4 text-muted">
                The same crew takes care of the outside too, so you can hand one team the whole property, all year.
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {outdoor.map((s) => (
                <Reveal key={s.title}>
                  <article className="card-lift flex h-full gap-4 rounded-xl border border-line bg-surface p-6">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
                      <Icon name={s.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-lg text-ink">{s.title}</h3>
                      <p className="mt-1.5 text-[0.98rem] text-muted">{s.body}</p>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <h2 className="text-3xl text-ink md:text-5xl">Rated 4.9 from 42 Google reviews</h2>
                <p className="mt-4 text-muted">
                  Customers talk about a prompt, professional crew with very high standards, and many of them have been calling back for years.
                </p>
              </div>
              <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-press inline-flex min-h-12 shrink-0 items-center gap-2 rounded-lg border-2 border-brand px-5 font-bold text-brand hover:bg-brand-soft">
                Read all reviews on Google <Icon name="arrow" className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal className="mt-10">
              <figure className="rounded-xl bg-brand-deep p-8 text-white md:p-12">
                <Stars className="h-6 w-6" />
                <blockquote className="mt-5 max-w-4xl font-display text-2xl font-bold leading-snug md:text-3xl">
                  &ldquo;{reviews[0].text}&rdquo;
                </blockquote>
                <figcaption className="mt-6 text-white/85">
                  <span className="font-bold text-white">{reviews[0].name}</span>, {reviews[0].place} · {reviews[0].job}
                </figcaption>
              </figure>
            </Reveal>

            <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reviews.slice(1).map((r) => (
                <Reveal key={r.job}>
                  <figure className="flex h-full flex-col rounded-xl border border-line bg-bg p-6">
                    <Stars className="h-4 w-4" />
                    <blockquote className="mt-3 flex-1 text-[1rem] leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-5 border-t border-line pt-4 text-sm">
                      <span className="block font-bold text-ink">{r.name}</span>
                      <span className="text-muted">{r.job}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-tint py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <h2 className="text-3xl text-ink md:text-5xl">One crew you can trust with the whole property</h2>
              <div className="mt-6 space-y-5 text-muted">
                <p>
                  Spenzies is led by owner Spencer, who built the business on a simple idea: do the job properly, then do a little more than you were asked. Customers have a name for it, the Spenzie&apos;s touch, and it&apos;s why so many of them have stayed since 2021.
                </p>
                <p>
                  The crew handles homes and businesses inside and out: deep cleans, garden beds, lawns, snow and pressure washing. Families use Spenzies to look after aging parents&apos; homes year-round, and new homeowners book them before the moving truck shows up.
                </p>
                <p>
                  The team is fast and efficient, but they don&apos;t cut corners. That&apos;s the trade-off customers say they never have to make.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: "check" as IconName, t: "Goes past the checklist", b: "Behind the fridge, inside the corners, the details other cleaners skip." },
                  { icon: "clock" as IconName, t: "Prompt and efficient", b: "Shows up on time and works fast without rushing the finish." },
                  { icon: "shield" as IconName, t: "Trustworthy in your home", b: "Customers trust the crew with their parents' homes and their businesses." },
                  { icon: "heart" as IconName, t: "Peace of mind", b: "One number for cleaning, garden, lawn and snow. Less to manage." },
                ].map((d) => (
                  <li key={d.t} className="rounded-xl border border-line bg-surface p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand text-white">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-4 text-lg text-ink">{d.t}</h3>
                    <p className="mt-2 text-[0.98rem] text-muted">{d.b}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-5 md:px-6">
            <Reveal className="max-w-2xl">
              <h2 className="text-3xl text-ink md:text-5xl">How it works</h2>
            </Reveal>
            <ol className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <Reveal key={s.title}>
                  <li className="h-full border-t-4 border-brand bg-surface p-6">
                    <span className="font-display text-4xl font-extrabold text-brand">{i + 1}</span>
                    <h3 className="mt-3 text-lg text-ink">{s.title}</h3>
                    <p className="mt-2 text-[0.98rem] text-muted">{s.body}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-surface py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-start gap-10 px-5 md:px-6 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="text-3xl text-ink md:text-5xl">Serving Niagara, Toronto and the GTA</h2>
              <p className="mt-4 text-muted">
                Spenzies works out of the St. Catharines area and travels for the right job, from Niagara homes to condos in Toronto and repeat clients in Brampton. Not sure if you&apos;re covered? Call and ask.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-md border border-line bg-bg px-3.5 py-2 font-semibold text-ink">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <a href={PHONE_TEL} className="btn-press mt-8 inline-flex min-h-12 items-center gap-2 rounded-lg bg-cta px-6 font-bold text-white hover:bg-cta-hover">
                <Icon name="phone" className="h-5 w-5" /> Check your address: {PHONE_DISPLAY}
              </a>
            </Reveal>
            <Reveal>
              <div className="overflow-hidden rounded-xl border border-line">
                <iframe
                  title="Map of the Spenzies Cleaning service area, Niagara Region to the GTA"
                  src="https://maps.google.com/maps?q=St.%20Catharines%2C%20Ontario&z=8&output=embed"
                  className="h-[340px] w-full md:h-[420px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-5 md:px-6">
            <Reveal>
              <h2 className="text-3xl text-ink md:text-5xl">Common questions</h2>
            </Reveal>
            <div className="mt-8 border-t border-line">
              {faqs.map((f) => (
                <details key={f.q} className="border-b border-line">
                  <summary className="flex items-center justify-between gap-4 py-5 text-lg font-bold text-ink">
                    {f.q}
                    <span className="faq-icon flex h-8 w-8 shrink-0 items-center justify-center text-brand">
                      <Icon name="plus" className="h-5 w-5" />
                    </span>
                  </summary>
                  <p className="pb-6 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand py-16 text-white md:py-20">
          <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-5 md:flex-row md:items-center md:px-6">
            <div>
              <h2 className="text-3xl text-white md:text-5xl">Ready for a cleaner place?</h2>
              <p className="mt-3 text-lg text-white/90">Call or text Spencer at {PHONE_DISPLAY} for a quote.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_TEL} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg bg-cta px-7 text-lg font-bold text-white hover:bg-cta-hover">
                <Icon name="phone" className="h-5 w-5" /> Call {PHONE_DISPLAY}
              </a>
              <a href={PHONE_SMS} className="btn-press inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border-2 border-white px-7 text-lg font-bold text-white hover:bg-white/10">
                <Icon name="message" className="h-5 w-5" /> Text Us
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface pb-28 pt-14 md:pb-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-4 md:px-6">
          <div className="md:col-span-2">
            <p className="font-display text-xl font-extrabold">Spenzies <span className="text-brand">Cleaning</span></p>
            <p className="mt-3 max-w-sm text-muted">Commercial and residential cleaning and landscaping. Niagara Region, Toronto and the GTA. Owner: Spencer.</p>
            <div className="mt-5 flex gap-3">
              <a href={FACEBOOK} target="_blank" rel="noopener noreferrer" aria-label="Spenzies Cleaning on Facebook" className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M14 8h3V4h-3c-2.76 0-5 2.24-5 5v2H7v4h2v7h4v-7h3l1-4h-4V9c0-.55.45-1 1-1z" /></svg>
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" aria-label="Spenzies Cleaning on Instagram" className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" /></svg>
              </a>
              <a href={TIKTOK} target="_blank" rel="noopener noreferrer" aria-label="Spenzies Cleaning on TikTok" className="flex h-11 w-11 items-center justify-center rounded-lg border border-line text-muted hover:text-brand">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M16.5 3c.3 2.2 1.7 3.8 4 4v3.1c-1.5 0-2.9-.4-4-1.1v6.5A5.5 5.5 0 1 1 11 10v3.2a2.4 2.4 0 1 0 2.3 2.4V3z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li><a href={PHONE_TEL} className="hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li><a href={PHONE_SMS} className="hover:text-brand">Text us</a></li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google reviews</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-2 text-muted">
              <li>Residential and commercial cleaning</li>
              <li>Move-in / move-out deep cleans</li>
              <li>New-build and post-reno cleaning</li>
              <li>Garden, lawn and snow</li>
              <li>Pressure washing and detailing</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-6xl border-t border-line px-5 pt-6 text-sm text-muted md:px-6">
          © {new Date().getFullYear()} Spenzies Cleaning · Niagara Region · Toronto · GTA
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-line bg-surface/95 p-3 backdrop-blur md:hidden">
        <a href={PHONE_TEL} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cta font-bold text-white">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={PHONE_SMS} className="btn-press flex min-h-12 items-center justify-center gap-2 rounded-lg border-2 border-brand font-bold text-brand">
          <Icon name="message" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
