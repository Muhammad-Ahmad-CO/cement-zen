import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import partnerNorthx from "@/assets/partner-northx.jpg";
import partnerCemex from "@/assets/partner-cemex.jpg";
import partnerTitan from "@/assets/partner-titan.jpg";
import partnerAcciona from "@/assets/partner-acciona.jpg";
import partnerCdl from "@/assets/partner-cdl.jpg";
import partnerUbc from "@/assets/partner-ubc.jpg";
import partnerAmplify from "@/assets/partner-amplify.jpg";
import partnerZacua from "@/assets/partner-zacua.jpg";
import curaLogo from "@/assets/cura-logo.png";
import teamErin from "@/assets/team-erin.jpg";
import teamPhil from "@/assets/team-phil.jpg";
import teamSabrina from "@/assets/team-sabrina.jpg";
import teamCurtis from "@/assets/team-curtis.jpg";
import newsStealth from "@/assets/news-stealth.jpg";
import newsFunding from "@/assets/news-funding.jpg";
import newsMap from "@/assets/news-map.jpg";
import {
  ArrowRight,
  Menu,
  X,
  Settings2,
  Crosshair,
  Plug,
  Linkedin,
  Twitter,
  Mail,
} from "lucide-react";
import stonesAsset from "@/assets/floating-stones.png.asset.json";
import stonesBounce from "@/assets/stones-bounce.png.asset.json";
import factoryAsset from "@/assets/factory.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CURA Climate — Decarbonized Cement Technology" },
      {
        name: "description",
        content:
          "Electrochemical cement decarbonization. CURA reduces cement process emissions by 85% with retrofit-ready technology.",
      },
      { property: "og:title", content: "CURA Climate" },
      {
        property: "og:description",
        content:
          "A practical path to deep decarbonization for the cement industry.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Technology />
        <ValueProps />
        <Stats />
        <Partners />
        <Press />
        <Mission />
        <Team />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Reveal-on-scroll hook ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ---------- Navigation ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Technology", href: "#technology" },
    { label: "About", href: "#about" },
    { label: "Partners", href: "#partners" },
    { label: "Press", href: "#press" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[999] nav-enter transition-all duration-300 ${
        scrolled ? "bg-background shadow-[0_1px_0_rgba(0,0,0,0.06)]" : "bg-transparent"
      }`}
    >
      <div className="container-cura flex h-[72px] items-center justify-between">
        <a href="#" className="group flex items-center gap-2.5">
          <img
            src={curaLogo}
            alt="CURA Climate logo"
            width={36}
            height={36}
            className="h-9 w-9 object-contain transition-transform duration-500 ease-out group-hover:rotate-[60deg] group-hover:scale-110"
          />
          <span className="text-[20px] font-semibold tracking-[0.08em] text-foreground transition-colors duration-300 group-hover:text-primary">
            CURA
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] font-medium text-foreground transition-colors duration-200 hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-[14px] font-semibold uppercase tracking-[0.03em] text-primary-foreground transition-all duration-200 hover:-translate-y-px hover:bg-[var(--primary-hover)]"
          >
            Contact
          </a>
        </nav>

        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6" strokeWidth={2} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-8 bg-[var(--dark)] text-[var(--dark-foreground)] md:hidden">
          <button
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6"
          >
            <X className="h-7 w-7" />
          </button>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-[32px] font-semibold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 rounded-md bg-primary px-8 py-3 text-base font-semibold uppercase tracking-wider"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [stonesVisible, setStonesVisible] = useState(true);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setStonesVisible(entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6, 1] },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background pt-24"
    >
      {/* factory with smoke */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[4%] left-[-2%] z-30 hidden w-[32vw] max-w-[420px] select-none lg:block"
      >
        <div className="relative">
          <img src={factoryAsset.url} alt="" className="w-full" />
          {/* smoke emitting from the chimney */}
          <div className="absolute left-[78%] top-0 h-0 w-0">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <span
                key={i}
                className="smoke-puff"
                style={{ animationDelay: `${i * 0.6}s` }}
              />
            ))}
          </div>
          {/* workers moving around the factory */}
          <div className="absolute bottom-[3%] left-0 h-[10%] w-full overflow-hidden">
            {[
              { d: "0s", dur: "9s", s: 1 },
              { d: "2.4s", dur: "11s", s: 0.85 },
              { d: "5.2s", dur: "8s", s: 0.92 },
            ].map((w, i) => (
              <span
                key={i}
                className="worker"
                style={{
                  animationDelay: w.d,
                  animationDuration: w.dur,
                  transform: `scale(${w.s})`,
                }}
              >
                <span className="worker-head" />
                <span className="worker-body" />
                <span className="worker-leg worker-leg-a" />
                <span className="worker-leg worker-leg-b" />
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* floating stones */}
      <div
        aria-hidden
        className={`pointer-events-none absolute right-[-3%] top-1/2 z-30 hidden -translate-y-1/2 select-none transition-all duration-700 ease-out lg:block ${
          stonesVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
        }`}
      >
        <img
          src={stonesAsset.url}
          alt=""
          className="stones-float w-[34vw] max-w-[460px]"
        />
      </div>
      {/* faded background lattice */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.05]"
      >
        <div className="spin-slow h-[1200px] w-[1200px]">
          <svg viewBox="0 0 600 600" className="h-full w-full">
            {Array.from({ length: 8 }).map((_, i) => (
              <polygon
                key={i}
                points="300,80 480,180 480,420 300,520 120,420 120,180"
                fill="none"
                stroke="#1A1A1A"
                strokeWidth="0.6"
                transform={`rotate(${i * 7.5} 300 300) scale(${1 - i * 0.07})`}
                style={{ transformOrigin: "300px 300px" }}
              />
            ))}
          </svg>
        </div>
      </div>

      <div className="container-cura relative z-10 flex flex-col items-center text-center">
        <span
          className="hero-anim mb-6 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[13px] font-medium text-primary"
          style={{ animationDelay: "0ms" }}
        >
          Decarbonized Cement Technology
        </span>

        <h1
          className="hero-anim max-w-[900px] text-balance text-[42px] font-semibold leading-[1.05] tracking-[-0.03em] text-foreground md:text-[64px] lg:text-[76px]"
          style={{ animationDelay: "150ms" }}
        >
          Cement production is responsible for 8% of global CO₂ emissions.
        </h1>

        <p
          className="hero-anim mt-5 max-w-[640px] text-[18px] leading-[1.6] text-muted-foreground md:text-[20px]"
          style={{ animationDelay: "300ms" }}
        >
          That's as many as all cars and trucks combined globally.
        </p>

        <p
          className="hero-anim mt-5 max-w-[680px] text-[17px] leading-[1.65] text-muted-foreground md:text-[18px]"
          style={{ animationDelay: "400ms" }}
        >
          CURA's technology is cost-effective, retrofit-ready, low-energy and
          reduces the carbon emissions that come from cement manufacturing by
          85%.
        </p>

        <a
          href="#technology"
          className="hero-anim mt-10 inline-flex items-center gap-2 rounded-md bg-primary px-8 py-3.5 text-[15px] font-semibold uppercase tracking-[0.03em] text-primary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-hover)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          style={{ animationDelay: "550ms" }}
        >
          Explore Technology <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}

/* ---------- Marquee ---------- */
function Marquee() {
  const phrase = "Decarbonizing cement at the source.";
  const items = Array.from({ length: 10 });
  return (
    <div className="marquee-wrap h-20 overflow-hidden bg-[var(--dark)]">
      <div className="marquee-track flex h-full w-max items-center whitespace-nowrap">
        {[0, 1].map((dup) => (
          <div key={dup} className="flex items-center">
            {items.map((_, i) => (
              <span
                key={i}
                className="flex items-center text-[32px] font-medium tracking-[-0.02em] text-white md:text-[44px]"
              >
                <span className="px-6">{phrase}</span>
                <span className="text-primary">◆</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Technology ---------- */
function Technology() {
  useReveal();
  return (
    <section id="technology" className="bg-background py-[100px] md:py-[140px]">
      <div className="container-cura grid items-center gap-16 lg:grid-cols-[55%_45%]">
        <div className="reveal">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
            Our Approach
          </div>
          <h2 className="max-w-[560px] text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-[48px] lg:text-[52px]">
            CURA separates process CO₂ at its source — before it enters the
            kiln system.
          </h2>
          <p className="mt-6 max-w-[500px] text-[17px] leading-[1.65] text-muted-foreground">
            This upstream approach enables substantial emissions reduction while
            preserving core plant configuration and material performance.
          </p>
          <p className="mt-5 max-w-[500px] text-[17px] leading-[1.65] text-muted-foreground">
            By upgrading production rather than replacing it, CURA supports
            practical deployment within existing cement facilities without
            adding a green premium.
          </p>
        </div>

        <div
          className="reveal aspect-[4/3] rounded-xl border border-border bg-secondary p-8"
          style={{ transitionDelay: "100ms" }}
        >
          <FlowDiagram />
        </div>
      </div>
    </section>
  );
}

function FlowDiagram() {
  const steps = [
    "Limestone",
    "CURA Electrolyzer",
    "Zero-Carbon Lime",
    "Cement Kiln",
    "Low-Carbon Cement",
  ];
  return (
    <div className="flex h-full flex-col justify-between">
      <div className="text-[11px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        Process Flow
      </div>
      <div className="flex flex-1 flex-col justify-center gap-4 py-6">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-3">
            <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border-[1.5px] border-foreground text-[11px] font-semibold">
              {i + 1}
            </div>
            <div className="h-px flex-shrink-0" />
            <span className="text-[13px] font-medium uppercase tracking-[0.06em] text-foreground">
              {s}
            </span>
            {i < steps.length - 1 && (
              <span className="ml-auto text-primary">↓</span>
            )}
          </div>
        ))}
      </div>
      <div className="border-t border-border pt-3 text-[11px] uppercase tracking-[0.08em] text-muted-foreground">
        Pure CO₂ stream captured upstream
      </div>
    </div>
  );
}

/* ---------- Value Props ---------- */
function ValueProps() {
  useReveal();
  const cards = [
    {
      icon: Settings2,
      title: "Supply chain ready",
      body: "By starting with limestone and producing industry-standard Ordinary Portland Cement, CURA delivers full compatibility with today's infrastructure.",
    },
    {
      icon: Crosshair,
      title: "Targets the source",
      body: "Cement's biggest emissions come from the chemical reaction that creates clinker. This approach goes straight to that source, rather than focusing only on fuel or efficiency improvements.",
    },
    {
      icon: Plug,
      title: "Retrofit-ready integration",
      body: "Our technology integrates with cement plant operations for precalcination carbon capture of the CO₂ emissions from limestone.",
    },
  ];
  return (
    <section id="about" className="bg-secondary py-[100px] md:py-[140px]">
      <div className="container-cura">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
            Why CURA
          </div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-[48px]">
            A practical path to deep decarbonization
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="reveal rounded-xl border border-border bg-background p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <c.icon className="h-10 w-10 text-primary" strokeWidth={1.5} />
              <h3 className="mt-6 text-[22px] font-semibold leading-[1.2] tracking-[-0.015em] text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-[16px] leading-[1.65] text-muted-foreground">
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Stats ---------- */
function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (e) => e[0].isIntersecting && setStart(true),
      { threshold: 0.3 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const stats = [
    { value: 85, suffix: "%", label: "Reduction in CO₂ emissions" },
    { value: 8, suffix: "%", label: "Of global emissions from cement" },
    { value: 100, suffix: " TPA", label: "Pilot plant in development" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[var(--dark)] py-[100px] md:py-[120px]"
    >
      {mounted && start && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="aspect-square h-[160%] max-h-none opacity-70">
            <StatsGlobe />
          </div>
        </div>
      )}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(26,26,26,0.15) 0%, rgba(26,26,26,0.75) 55%, var(--dark) 100%)",
        }}
      />
      <div className="container-cura relative z-10">
        <div className="grid divide-y divide-white/15 md:grid-cols-3 md:divide-x md:divide-y-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`flex flex-col items-center text-center ${
                i === 0 ? "pb-8 md:pb-0 md:pr-8" : ""
              } ${i === stats.length - 1 ? "pt-8 md:pl-8 md:pt-0" : "py-8 md:px-8 md:py-0"}`}
            >
              <div className="text-[56px] font-bold leading-none tracking-[-0.03em] text-white md:text-[76px]">
                <Counter to={s.value} start={start} />
                {s.suffix}
              </div>
              <div className="mt-3 h-[3px] w-10 bg-primary" />
              <div className="mt-4 text-[13px] font-medium uppercase tracking-[0.06em] text-white/60">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ to, start }: { to: number; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 2000;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, to]);
  return <>{n}</>;
}

/* ---------- Partners ---------- */
function Partners() {
  useReveal();
  const partners = [
    { name: "NorthX Climate Tech", img: partnerNorthx },
    { name: "Cemex Ventures", img: partnerCemex },
    { name: "TITAN Group", img: partnerTitan },
    { name: "ACCIONA", img: partnerAcciona },
    { name: "Creative Destruction Lab", img: partnerCdl },
    { name: "UBC", img: partnerUbc },
    { name: "Amplify Capital", img: partnerAmplify },
    { name: "Zacua Ventures", img: partnerZacua },
  ];
  return (
    <section id="partners" className="bg-background py-[100px] md:py-[120px]">
      <div className="container-cura">
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
            Collaborators
          </div>
          <h2 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-[48px]">
            Validating and scaling with industry leaders
          </h2>
          <p className="mt-6 text-[17px] leading-[1.65] text-muted-foreground">
            CURA works alongside industrial operators, academic institutions,
            and strategic collaborators to validate and scale its upstream
            approach. Our focus is disciplined progress from laboratory
            validation through pilot deployment.
          </p>
        </div>

        <div className="reveal mt-16 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {partners.map((p) => (
            <div
              key={p.name}
              className="group relative text-[16px] font-semibold uppercase tracking-[0.08em] text-muted-foreground opacity-60 transition-all duration-300 hover:text-foreground hover:opacity-100"
            >
              {p.name}
              <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-3 w-[260px] -translate-x-1/2 translate-y-2 scale-95 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100">
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-[150px] w-full object-cover"
                  />
                  <div className="px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-foreground">
                    {p.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Press ---------- */
function Press() {
  useReveal();
  const items = [
    {
      date: "November 2025",
      title:
        "CURA Emerges from Stealth with Breakthrough Tech to Slash Cement Emissions",
      image: newsStealth,
    },
    {
      date: "November 2025",
      title: "CURA Awarded Non-Dilutive Funds from NorthX Climate Tech",
      image: newsFunding,
    },
    {
      date: "2026",
      title: "CURA Named to Cemex Ventures Cleantech Construction Map 2026",
      image: newsMap,
    },
  ];
  return (
    <section id="press" className="bg-secondary py-[100px] md:py-[140px]">
      <div className="container-cura">
        <div className="reveal max-w-2xl">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
            In the News
          </div>
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-[48px]">
            Latest from CURA
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <a
              key={it.title}
              href="#"
              className="reveal group block overflow-hidden rounded-xl bg-background transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="aspect-[16/9] overflow-hidden bg-border">
                <img
                  src={it.image}
                  alt={it.title}
                  loading="lazy"
                  width={1280}
                  height={720}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-7">
                <div className="text-[13px] uppercase tracking-[0.04em] text-muted-foreground">
                  {it.date}
                </div>
                <h3 className="mt-2 text-[20px] font-semibold leading-[1.3] text-foreground">
                  {it.title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1 text-[14px] font-semibold text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Mission ---------- */
function Mission() {
  useReveal();
  return (
    <section className="bg-[var(--dark)] py-[120px] md:py-[160px]">
      <div className="container-cura">
        <p
          className="reveal mx-auto max-w-[800px] text-balance text-center text-[28px] font-medium leading-[1.3] text-white md:text-[40px]"
        >
          CURA is building a practical pathway for producers to reduce process
          emissions this decade — without replacing their plants.
        </p>
      </div>
    </section>
  );
}

/* ---------- Team ---------- */
function Team() {
  useReveal();
  const members = [
    { name: "Erin Bobicki", title: "CEO", img: teamErin },
    { name: "Phil De Luna", title: "CTO", img: teamPhil },
    { name: "Sabrina Scott", title: "COO", img: teamSabrina },
    { name: "Curtis Berlinguette", title: "Science Advisor", img: teamCurtis },
  ];
  return (
    <section className="bg-background py-[100px] md:py-[140px]">
      <div className="container-cura">
        <div className="reveal max-w-2xl">
          <div className="mb-4 text-[13px] font-semibold uppercase tracking-[0.1em] text-primary">
            Our Team
          </div>
          <h2 className="text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-foreground md:text-[48px]">
            Seasoned climatetech leaders
          </h2>
        </div>

        <div className="mt-14 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => {
            return (
              <div
                key={m.name}
                className="reveal group flex flex-col items-center text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative h-[180px] w-[180px] overflow-hidden rounded-full bg-secondary grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0">
                  <img
                    src={m.img}
                    alt={`${m.name}, ${m.title} at CURA Climate`}
                    loading="lazy"
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 text-[20px] font-semibold text-foreground">
                  {m.name}
                </div>
                <div className="mt-1 text-[14px] font-medium text-muted-foreground">
                  {m.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => setShown(e.isIntersecting),
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <section ref={ref} id="contact" className="relative overflow-hidden bg-background pb-10">
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 z-20 select-none transition-all duration-[900ms] ease-out ${
          shown
            ? "translate-y-0 opacity-100 stones-bounce"
            : "translate-y-40 opacity-0"
        }`}
      >
        <img src={stonesBounce.url} alt="" className="w-full" />
      </div>
      <div className="mx-5 rounded-[20px] bg-primary px-6 py-20 md:mx-10 md:py-[100px]">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[36px] font-semibold leading-[1.1] tracking-[-0.025em] text-primary-foreground md:text-[48px]">
            Let's decarbonize cement together.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-white/85 md:text-[18px]">
            Get in touch to learn how CURA's technology can integrate with your
            operations.
          </p>
          <a
            href="mailto:hello@curaclimate.com"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-10 py-4 text-[15px] font-semibold uppercase tracking-[0.03em] text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-secondary hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]"
          >
            Contact Us <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    {
      title: "Company",
      links: ["Technology", "About", "Team", "Careers"],
    },
    {
      title: "Resources",
      links: ["Press", "Blog", "Contact"],
    },
  ];
  return (
    <footer className="bg-[var(--dark)] pt-20 pb-10 text-white">
      <div className="container-cura">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="group flex items-center gap-2.5">
              <img
                src={curaLogo}
                alt="CURA Climate logo"
                loading="lazy"
                width={32}
                height={32}
                className="h-8 w-8 object-contain transition-transform duration-500 ease-out group-hover:rotate-[60deg]"
              />
              <span className="text-[20px] font-semibold tracking-[0.08em]">
                CURA
              </span>
            </div>
            <p className="mt-4 text-[14px] text-white/50">
              Electrochemical cement decarbonization.
            </p>
            <p className="mt-2 text-[14px] text-white/50">Vancouver, Canada</p>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[13px] font-semibold uppercase tracking-[0.08em]">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[15px] text-white/60 transition-colors hover:text-white"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <div className="text-[13px] font-semibold uppercase tracking-[0.08em]">
              Connect
            </div>
            <ul className="mt-5 space-y-3">
              {[
                { label: "LinkedIn", Icon: Linkedin },
                { label: "Twitter / X", Icon: Twitter },
                { label: "Email", Icon: Mail },
              ].map(({ label, Icon }) => (
                <li key={label}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[15px] text-white/60 transition-colors hover:text-white"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 md:flex-row md:items-center">
          <div className="text-[13px] text-white/40">
            © 2025 CURA Climate Inc. All rights reserved.
          </div>
          <div className="flex gap-6 text-[13px] text-white/40">
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
