import { Header } from "./header";
import { Reveal } from "./reveal";
import { Wordmark } from "./brand";
import { Personas } from "./personas";
import { Faq } from "./faq";
import { DemoForm } from "./demo-form";
import { HeroVideo } from "./hero-video";

/* ----------------------------- tiny icons ----------------------------- */
function I({ d, size = 22 }: { d: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      {d.split("|").map((p, i) => (
        <path key={i} d={p} />
      ))}
    </svg>
  );
}
const ICON = {
  docs: "M7 3h7l5 5v13a0 0 0 0 1 0 0H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z|M14 3v5h5|M9 13h6|M9 17h4",
  brain: "M12 5a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 4 3 3 3 0 0 0 6 0 3 3 0 0 0 1-5 3 3 0 0 0-3-4|M12 5a3 3 0 0 1 3 3",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z|M12 7v5l3 2",
  shield: "M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z|M9 12l2 2 4-4",
  eu: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z|M12 3v18|M3 12h18",
  layers: "M12 3l9 5-9 5-9-5 9-5z|M3 13l9 5 9-5|M3 17l9 5 9-5",
  scan: "M4 8V5a1 1 0 0 1 1-1h3|M16 4h3a1 1 0 0 1 1 1v3|M20 16v3a1 1 0 0 1-1 1h-3|M8 20H5a1 1 0 0 1-1-1v-3|M7 12h10",
  crypto: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z|M9.5 9h4a2 2 0 1 1 0 4h-4zm0 4h4.5a2 2 0 1 1 0 4H9.5zM11 6v2m0 8v2",
  bank: "M4 10h16|M4 10l8-6 8 6|M6 10v7m4-7v7m4-7v7m4-7v7|M3 21h18",
  umbrella: "M12 3a9 7 0 0 1 9 7H3a9 7 0 0 1 9-7z|M12 3v0M12 10v8a2 2 0 0 0 4 0",
  bolt: "M13 3L4 14h6l-1 7 9-11h-6z",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z|M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z|M12 12h0",
};

function ArrowR({ size = 16 }: { size?: number }) {
  return <I d="M5 12h14|M13 6l6 6-6 6" size={size} />;
}

/* ----------------------------- data ----------------------------- */
const STEPS = [
  { n: "01", t: "Choose your framework", d: "DORA, MiCA, NIS2, GDPR, ISO 27001, PSD/PSR — or a custom checklist built from your policies." },
  { n: "02", t: "Upload your documentation", d: "Audomate ingests, structures and verifies your policies, contracts and evidence." },
  { n: "03", t: "AI runs the audit", d: "Automated verification against every control. A complete, prioritised gap list in hours, not weeks." },
  { n: "04", t: "Close the gaps", d: "AI-generated document proposals, ready-made templates and tasks assigned to your team." },
  { n: "05", t: "Stay compliant, continuously", d: "Regulatory monitoring, recurring tasks and ad-hoc checks whenever the rules change." },
];

const FRAMEWORKS = [
  { abbr: "DORA", t: "Digital operational resilience for financial entities.", soon: false },
  { abbr: "MiCA", t: "Whitepapers, CASP licensing and ongoing obligations.", soon: false },
  { abbr: "NIS2", t: "Cybersecurity compliance for essential entities.", soon: false },
  { abbr: "ISO 27001", t: "Information security management (27001 / 27002).", soon: false },
  { abbr: "GDPR", t: "Data protection, documented and monitored.", soon: false },
  { abbr: "PSD / PSR", t: "Payment services compliance — PSD2, PSD3, PSR.", soon: false },
  { abbr: "EU AI Act", t: "High-risk AI system obligations.", soon: true },
  { abbr: "Custom", t: "Your internal policies, audited the same way.", soon: false },
];

const USP = [
  { icon: ICON.eu, t: "EU data sovereignty, by design", d: "100% EU-based stack with on-premise LLM options. Zero data transfer outside the EU. No Schrems II exposure — a claim US-based platforms cannot make." },
  { icon: ICON.brain, t: "Expert knowledge, encoded", d: "Our AI agents are built and continuously validated by auditors and regulatory experts who consult for the EU Commission, CEN and the Polish Bank Association." },
  { icon: ICON.shield, t: "Hallucination-proof output", d: "A verification framework grounds every generated document and finding in the actual regulation and your actual evidence — supervisor-grade quality." },
  { icon: ICON.layers, t: "Deploy your way", d: "SaaS, on-premise, portable hardware box or white-label. Pay-per-use, subscription or licence. Enterprise-grade security at every tier." },
];

const SOLUTIONS = [
  { icon: ICON.crypto, img: "/solutions/crypto.jpg", t: "Crypto & CASPs", d: "MiCA whitepaper generation and assessment, licensing support, and real-time adverse-media and website-content monitoring.", tags: ["MiCA", "DORA", "Travel Rule"] },
  { icon: ICON.umbrella, img: "/solutions/insurance.jpg", t: "Insurance", d: "DORA, Solvency II, GDPR and AI Act compliance for insurers — from vendor risk to supervisory reporting.", tags: ["DORA", "Solvency II", "GDPR"] },
  { icon: ICON.bank, img: "/solutions/banking.jpg", t: "Banking & Fintech", d: "DORA, NIS2, PSD/PSR and ISO 27001 in one workflow — for banks, payment institutions and the vendors who serve them.", tags: ["DORA", "NIS2", "PSD/PSR"] },
];

const PROBLEMS = [
  { t: "Hundreds of pages, by hand", d: "Questionnaires filled manually. Audit answers buried in documentation. Every regulatory update means another round of tedious edits." },
  { t: "Expertise is scarce & costly", d: "Trustworthy checklists, gap lists and risk assessments need experts your organisation can't hire fast enough — or afford full-time." },
  { t: "Deadlines don't wait", d: "DORA, MiCA and NIS2 enforcement is live. Missed reports to supervisors mean fines, licence delays and reputational damage." },
];

const TESTIMONIALS = [
  { q: "Thanks to Audomate our auditing processes have been reduced by up to 80%, and our team's efficiency increased radically.", who: "Senior Auditor", co: "Identonic" },
  { q: "Audomate is revolutionising our MiCA and DORA readiness. Its AI-driven assessments and continuous monitoring cut compliance time by over 70%.", who: "Senior Manager", co: "VNW" },
  { q: "Integrating Audomate transformed our consulting — document verification and adverse-media tracking give us proactive, defensible risk management.", who: "Compliance Officer", co: "Legal, Warsaw" },
];

const PRICING: {
  name: string; badge: boolean; spec: [string, string][]; feats: string[];
}[] = [
  {
    name: "Basic", badge: false,
    spec: [["Users", "1 · Auditor / Manager"], ["Volume", "~5,000 pages"], ["Tokens", "3M per cycle"]],
    feats: ["Standard AI models", "Personalized online onboarding", "AI tuned to your data", "Security & privacy compliance", "Digital asset management API", "Standard customer support"],
  },
  {
    name: "Pro", badge: true,
    spec: [["Users", "2 · Auditor + Manager"], ["Volume", "~20,000 pages"], ["Tokens", "15M per cycle"]],
    feats: ["Advanced AI models", "Custom model training", "Personalized live onboarding", "Exclusive / dedicated features", "AI tuned to your data", "Dedicated account manager", "Extended customer support"],
  },
  {
    name: "Enterprise", badge: false,
    spec: [["Users", "Unlimited"], ["Volume", "~100,000 pages"], ["Tokens", "100M per cycle"]],
    feats: ["Custom AI models", "Personalized live onboarding", "Custom features", "AI tuned to your data", "Dedicated account manager", "24/7 technical support + SLA", "On-premise deployment"],
  },
];

const CREDENTIALS = [
  "Advisory to the EU Commission on Digital Identity Wallets",
  "CEN & PKN standardisation committee membership",
  "Advisory to the Polish Bank Association — AML, eIDAS, PSD",
  "EU Digital Wallet pilot programmes",
];

/* ----------------------------- page ----------------------------- */
export default function Home() {
  return (
    <>
      <Header />
      <main id="top">
        {/* ---------------- HERO ---------------- */}
        <section className="hero">
          <HeroVideo />
          <div className="hero-overlay" />
          <div className="wrap hero-content" style={{ paddingTop: 96, paddingBottom: 64 }}>
            <div style={{ maxWidth: 780 }}>
              <div className="fade-up eyebrow" style={{ animationDelay: "0.05s" }}>
                <span className="dot" /> AI compliance platform for regulated Europe
              </div>
              <h1 className="h-display fade-up" style={{ animationDelay: "0.12s", fontSize: "clamp(38px, 6.6vw, 68px)", marginTop: 22 }}>
                Audit-ready in days,<br />
                not <span className="accent">months.</span>
              </h1>
              <p className="lead fade-up" style={{ animationDelay: "0.2s", marginTop: 22, maxWidth: 620, fontSize: 19 }}>
                Audomate automates compliance audits, gap analysis, documentation and continuous
                monitoring across DORA, MiCA, NIS2, GDPR and ISO&nbsp;27001 — with AI agents built by
                EU compliance experts, run on 100% EU infrastructure.
              </p>
              <div className="fade-up flex flex-wrap gap-3" style={{ animationDelay: "0.28s", marginTop: 32 }}>
                <a href="#demo" className="btn btn-green">Book a demo</a>
                <a href="#how" className="btn btn-ghost">See how it works <ArrowR /></a>
              </div>
              <div className="fade-up flex flex-wrap gap-2.5 pill-row" style={{ animationDelay: "0.36s", marginTop: 28 }}>
                <span className="chip"><span className="dot" /> 100% EU infrastructure</span>
                <span className="chip"><span className="dot" /> Zero Schrems II risk</span>
                <span className="chip"><span className="dot" /> On-premise available</span>
              </div>
              <p className="fade-up" style={{ animationDelay: "0.44s", marginTop: 30, fontSize: 13.5, color: "var(--color-muted)", lineHeight: 1.6 }}>
                Built by <a href="https://deeptech.pl" target="_blank" rel="noopener" style={{ color: "var(--color-ink)", fontWeight: 600 }}>DeepTech</a> — an applied-AI studio from Warsaw.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- SOCIAL PROOF ---------------- */}
        <section className="section" style={{ paddingBlock: 64, background: "var(--color-bg)" }}>
          <div className="wrap">
            <Reveal>
              <p style={{ textAlign: "center", fontSize: 13.5, letterSpacing: "0.02em", color: "var(--color-muted)", marginBottom: 26 }}>
                Trusted by regulated teams across finance, insurance and crypto
              </p>
              <div className="flex items-center justify-center gap-x-10 pill-row trust-logos" style={{ fontFamily: "var(--font-grotesk)", fontWeight: 600, fontSize: 19, color: "var(--color-ink)", opacity: 0.72 }}>
                <span>TU&nbsp;Europa</span>
                <span style={{ color: "var(--color-line)" }}>·</span>
                <span>Identonic</span>
                <span style={{ color: "var(--color-line)" }}>·</span>
                <span>VNW</span>
                <span style={{ color: "var(--color-line)" }}>·</span>
                <span>Expotential&nbsp;Science</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="card" style={{ marginTop: 44, padding: "40px 32px", background: "linear-gradient(180deg,#fff,var(--color-bg2))", textAlign: "center" }}>
                <div className="stat-num" style={{ fontSize: "clamp(52px, 9vw, 88px)" }}>85–90%</div>
                <p className="lead" style={{ marginTop: 10, maxWidth: 560, marginInline: "auto" }}>
                  less time and cost on audits and compliance — measured across completed
                  implementations.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- PRODUCT SHOWCASE ---------------- */}
        <section className="section" style={{ background: "var(--color-bg)", paddingTop: 24, overflow: "hidden" }}>
          <div className="wrap">
            <Reveal className="text-center">
              <div className="eyebrow" style={{ justifyContent: "center" }}><span className="dot" /> The product</div>
              <h2 className="h-display" style={{ fontSize: "clamp(28px,4vw,42px)", marginTop: 16, marginInline: "auto", maxWidth: "18ch" }}>
                Your entire audit, in <span className="accent">one workspace.</span>
              </h2>
              <p className="lead" style={{ marginTop: 16, marginInline: "auto", maxWidth: "56ch" }}>
                A guided audit chat that reads your evidence and returns grounded, cited answers —
                on web, chatbot or voice assistant. Multilanguage.
              </p>
            </Reveal>

            <Reveal delay={90}>
              <div style={{ position: "relative", marginTop: 36 }}>
                <div className="glow" aria-hidden style={{ position: "absolute", left: "50%", top: "16%", width: "52%", height: "64%", transform: "translateX(-50%)", background: "radial-gradient(closest-side, rgba(0,216,120,0.32), transparent)", filter: "blur(72px)" }} />
                <img
                  src="/product-mockup.png"
                  alt="Audomate app — audit chat interface on laptop, tablet and phone, showing a compliance checklist with grounded, cited answers"
                  width={1440}
                  height={754}
                  style={{ position: "relative", width: "100%", maxWidth: 720, height: "auto", display: "block", marginInline: "auto", filter: "drop-shadow(0 34px 60px rgba(8,19,15,0.20))" }}
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="flex flex-wrap items-center justify-center gap-2.5 pill-row" style={{ marginTop: 28 }}>
                {["Web · Chatbot · Voice", "Grounded, cited answers", "Checklists per framework", "Multilanguage"].map((c) => (
                  <span key={c} className="chip"><span className="dot" /> {c}</span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- PROBLEM ---------------- */}
        <section className="section" style={{ background: "var(--color-bg2)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> The problem</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "18ch" }}>
                Compliance is a full-time job your team <span className="accent">doesn&rsquo;t have.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5" style={{ marginTop: 44 }}>
              {PROBLEMS.map((p, i) => (
                <Reveal key={p.t} delay={i * 90} className="card card-hover" >
                  <div style={{ padding: 28, height: "100%" }}>
                    <div style={{ fontFamily: "var(--font-grotesk)", fontSize: 15, fontWeight: 600, color: "var(--color-green-ink)" }}>0{i + 1}</div>
                    <h3 className="h-display" style={{ fontSize: 21, marginTop: 14 }}>{p.t}</h3>
                    <p style={{ marginTop: 12, color: "var(--color-body)", lineHeight: 1.6, fontSize: 15 }}>{p.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <p className="lead" style={{ marginTop: 40, fontSize: 20, color: "var(--color-ink)", fontWeight: 500 }}>
                Audomate turns all of this into a guided, automated workflow.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- HOW IT WORKS ---------------- */}
        <section id="how" className="section" style={{ background: "var(--color-bg)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Verify · Implement · Monitor</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "20ch" }}>
                From framework to audit-ready in <span className="accent">five steps.</span>
              </h2>
              <p className="lead" style={{ marginTop: 18, maxWidth: 620 }}>
                Audomate replaces manual, scattered compliance with one AI-driven cycle — verify,
                implement, monitor — that keeps every obligation evidenced and audit-ready, continuously.
              </p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4" style={{ marginTop: 48 }}>
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 70} className="card" >
                  <div style={{ padding: 24, height: "100%", position: "relative" }}>
                    <div style={{ fontFamily: "var(--font-grotesk)", fontSize: 30, fontWeight: 700, color: "var(--color-green-ink)", lineHeight: 1 }}>{s.n}</div>
                    <h3 className="h-display" style={{ fontSize: 17.5, marginTop: 16 }}>{s.t}</h3>
                    <p style={{ marginTop: 10, color: "var(--color-body)", lineHeight: 1.55, fontSize: 14 }}>{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- PLATFORM / PERSONAS ---------------- */}
        <section id="platform" className="section" style={{ background: "var(--color-bg2)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> The platform</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "20ch" }}>
                One platform. Every compliance <span className="accent">role covered.</span>
              </h2>
              <p className="lead" style={{ marginTop: 18, maxWidth: 640 }}>
                Audomate&rsquo;s modular architecture gives each member of your compliance team a dedicated
                workspace — with AI verification, generation and monitoring underneath.
              </p>
            </Reveal>
            <div style={{ marginTop: 44 }}>
              <Reveal delay={80}><Personas /></Reveal>
            </div>
          </div>
        </section>

        {/* ---------------- FRAMEWORKS ---------------- */}
        <section id="frameworks" className="section" style={{ background: "var(--color-bg)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Coverage</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "16ch" }}>
                Built for the EU <span className="accent">regulatory wave.</span>
              </h2>
              <p className="lead" style={{ marginTop: 18, maxWidth: 620 }}>
                Out-of-the-box coverage for the regulations reshaping European finance, insurance and crypto.
              </p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4" style={{ marginTop: 44 }}>
              {FRAMEWORKS.map((f, i) => (
                <Reveal key={f.abbr} delay={(i % 4) * 70} className="card card-hover">
                  <div style={{ padding: 24, height: "100%" }}>
                    <div className="flex items-center justify-between">
                      <div style={{ fontFamily: "var(--font-grotesk)", fontWeight: 700, fontSize: 20, color: "var(--color-ink)" }}>{f.abbr}</div>
                      {f.soon && <span className="pill-soft" style={{ fontSize: 11, padding: "3px 9px" }}>Coming soon</span>}
                    </div>
                    <p style={{ marginTop: 12, color: "var(--color-body)", lineHeight: 1.55, fontSize: 14.5 }}>{f.t}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- WHY ---------------- */}
        <section id="why" className="section" style={{ background: "var(--color-bg2)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Why Audomate</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "18ch" }}>
                Why regulated companies <span className="accent">choose Audomate.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-5" style={{ marginTop: 44 }}>
              {USP.map((u, i) => (
                <Reveal key={u.t} delay={(i % 2) * 90} className="card card-hover">
                  <div style={{ padding: 30, height: "100%" }}>
                    <span className="icon-tile"><I d={u.icon} size={22} /></span>
                    <h3 className="h-display" style={{ fontSize: 22, marginTop: 18 }}>{u.t}</h3>
                    <p style={{ marginTop: 12, color: "var(--color-body)", lineHeight: 1.6, fontSize: 15.5 }}>{u.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* credentials / DeepTech strip */}
            <Reveal delay={100}>
              <div className="card" style={{ marginTop: 24, padding: 30, background: "linear-gradient(120deg,#fff,var(--color-bg3))" }}>
                <div className="grid lg:grid-cols-3 gap-8 items-center">
                  <div>
                    <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 8 }}>The expertise behind the platform</p>
                    <div className="flex items-center gap-2.5">
                      <Wordmark size={22} />
                      <span style={{ color: "var(--color-faint)" }}>by</span>
                      <a href="https://deeptech.pl" target="_blank" rel="noopener" style={{ fontFamily: "var(--font-grotesk)", fontWeight: 700, letterSpacing: "0.02em", color: "var(--color-ink)" }}>DEEPTECH</a>
                    </div>
                    <p style={{ marginTop: 14, color: "var(--color-body)", fontSize: 14.5, lineHeight: 1.6, maxWidth: "36ch" }}>
                      Audomate is developed by DeepTech, an applied-AI studio whose experts advise
                      European regulators and standards bodies.
                    </p>
                  </div>
                  <ul className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {CREDENTIALS.map((c) => (
                      <li key={c} className="flex gap-3" style={{ fontSize: 14.5, color: "var(--color-ink)", lineHeight: 1.45 }}>
                        <span style={{ color: "var(--color-green-ink)", marginTop: 2, flex: "none" }}><I d="M20 6L9 17l-5-5" size={18} /></span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- SOLUTIONS ---------------- */}
        <section id="solutions" className="section" style={{ background: "var(--color-bg)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Solutions</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "16ch" }}>
                Purpose-built for <span className="accent">your sector.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5" style={{ marginTop: 44 }}>
              {SOLUTIONS.map((s, i) => (
                <Reveal key={s.t} delay={i * 90} className="card card-hover overflow-hidden">
                  <div style={{ position: "relative", height: 96 }}>
                    <img src={s.img} alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(1) contrast(1.15) brightness(0.9)" }} />
                    <div style={{ position: "absolute", inset: 0, background: "var(--color-green)", mixBlendMode: "color" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(4,19,12,0.15), rgba(4,19,12,0.35))" }} />
                  </div>
                  <div style={{ padding: 30, height: "100%" }}>
                    <span className="icon-tile"><I d={s.icon} size={22} /></span>
                    <h3 className="h-display" style={{ fontSize: 22, marginTop: 18 }}>{s.t}</h3>
                    <p style={{ marginTop: 12, color: "var(--color-body)", lineHeight: 1.6, fontSize: 15 }}>{s.d}</p>
                    <div className="flex flex-wrap gap-2" style={{ marginTop: 18 }}>
                      {s.tags.map((t) => <span key={t} className="pill-soft" style={{ fontSize: 12 }}>{t}</span>)}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------------- RESULTS ---------------- */}
        <section className="section" style={{ background: "var(--color-bg2)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Results</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "16ch" }}>
                Measured results, <span className="accent">not promises.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5" style={{ marginTop: 44 }}>
              {TESTIMONIALS.map((t, i) => (
                <Reveal key={t.co} delay={i * 90} className="card">
                  <div style={{ padding: 30, height: "100%", display: "flex", flexDirection: "column" }}>
                    <div style={{ color: "var(--color-green)", fontFamily: "var(--font-serif)", fontSize: 44, lineHeight: 0.6, height: 22 }}>&ldquo;</div>
                    <p style={{ color: "var(--color-ink)", fontSize: 16.5, lineHeight: 1.55, marginTop: 10, flex: 1 }}>{t.q}</p>
                    <div style={{ marginTop: 22, paddingTop: 18, borderTop: "1px solid var(--color-line)" }}>
                      <div style={{ fontWeight: 600, fontSize: 14.5, color: "var(--color-ink)" }}>{t.who}</div>
                      <div style={{ fontSize: 13.5, color: "var(--color-muted)" }}>{t.co}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <div className="card" style={{ marginTop: 20, padding: "26px 30px", display: "flex", flexWrap: "wrap", gap: 16, alignItems: "center", justifyContent: "space-between", background: "linear-gradient(120deg,#fff,var(--color-bg3))" }}>
                <p style={{ fontSize: 15.5, color: "var(--color-ink)", maxWidth: "62ch", lineHeight: 1.55 }}>
                  <strong style={{ fontWeight: 600 }}>TU&nbsp;Europa</strong> — one of Poland&rsquo;s leading insurers — runs
                  Audomate&rsquo;s <em>Vendor Assistant</em> for DORA third-party risk and supervisory readiness.
                </p>
                <a href="#demo" className="btn btn-ghost" style={{ height: 44 }}>Talk to us <ArrowR /></a>
              </div>
            </Reveal>

            {/* proof / in production band */}
            <Reveal delay={80}>
              <div className="card" style={{ marginTop: 20, padding: "34px 32px", background: "linear-gradient(120deg,#fff,var(--color-bg2))" }}>
                <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 items-center">
                  <div>
                    <span className="pill-soft" style={{ fontSize: 12 }}><span style={{ width: 7, height: 7, borderRadius: 999, background: "var(--color-green)", display: "inline-block" }} /> In production</span>
                    <p style={{ marginTop: 14, fontSize: 16.5, color: "var(--color-ink)", lineHeight: 1.55, maxWidth: "34ch" }}>
                      Audomate is live at a major European insurer, automating third-party and ICT
                      vendor compliance — with commercial roll-out underway.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {[["85–90%", "less audit & compliance effort"], ["15+ yrs", "regulatory & cyber advisory in-team"]].map(([n, l]) => (
                      <div key={n} style={{ textAlign: "center" }}>
                        <div className="stat-num" style={{ fontSize: "clamp(24px,3.4vw,34px)" }}>{n}</div>
                        <p style={{ marginTop: 8, fontSize: 12.5, color: "var(--color-muted)", lineHeight: 1.4 }}>{l}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ---------------- PRICING ---------------- */}
        <section id="pricing" className="section" style={{ background: "var(--color-bg)" }}>
          <div className="wrap">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> Pricing</div>
              <h2 className="h-display" style={{ fontSize: "clamp(30px,4.4vw,46px)", marginTop: 18, maxWidth: "20ch" }}>
                Plans that scale with your <span className="accent">compliance programme.</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-5" style={{ marginTop: 44 }}>
              {PRICING.map((p, i) => (
                <Reveal key={p.name} delay={i * 90} className={`card ${p.badge ? "" : "card-hover"}`}>
                  <div style={{
                    padding: 30, height: "100%", display: "flex", flexDirection: "column",
                    border: p.badge ? "1.5px solid var(--color-green)" : undefined,
                    borderRadius: 18,
                    background: p.badge ? "linear-gradient(180deg,#fff,rgba(0,216,120,0.05))" : undefined,
                  }}>
                    <div className="flex items-center justify-between">
                      <span style={{ fontFamily: "var(--font-grotesk)", fontWeight: 600, fontSize: 18, color: "var(--color-ink)" }}>{p.name}</span>
                      {p.badge && <span className="pill-soft" style={{ fontSize: 11.5 }}>Most popular</span>}
                    </div>
                    <div style={{ marginTop: 18, borderTop: "1px solid var(--color-line)", borderBottom: "1px solid var(--color-line)", paddingBlock: 6 }}>
                      {p.spec.map(([k, v]) => (
                        <div key={k} className="flex items-center justify-between" style={{ paddingBlock: 8 }}>
                          <span style={{ fontSize: 13, color: "var(--color-muted)" }}>{k}</span>
                          <span style={{ fontSize: 13.5, fontWeight: 600, color: "var(--color-ink)" }}>{v}</span>
                        </div>
                      ))}
                    </div>
                    <ul className="flex flex-col gap-2.5" style={{ marginTop: 20, flex: 1 }}>
                      {p.feats.map((f) => (
                        <li key={f} className="flex gap-2.5" style={{ fontSize: 14, color: "var(--color-ink)" }}>
                          <span style={{ color: "var(--color-green-ink)", flex: "none", marginTop: 1 }}><I d="M20 6L9 17l-5-5" size={16} /></span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#demo" className={`btn ${p.badge ? "btn-green" : "btn-ghost"}`} style={{ marginTop: 24, width: "100%" }}>
                      {p.name === "Enterprise" ? "Contact sales" : "Book a demo"}
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={80}>
              <p style={{ marginTop: 22, fontSize: 13.5, color: "var(--color-muted)", textAlign: "center" }}>
                Available as <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>pay-per-use</strong>, <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>subscription</strong> or on-premise <strong style={{ color: "var(--color-ink)", fontWeight: 600 }}>licence</strong> — final pricing is tailored on your demo call.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ---------------- FAQ ---------------- */}
        <section className="section" style={{ background: "var(--color-bg2)" }}>
          <div className="wrap grid lg:grid-cols-[0.8fr_1.2fr] gap-10">
            <Reveal>
              <div className="eyebrow"><span className="dot" /> FAQ</div>
              <h2 className="h-display" style={{ fontSize: "clamp(28px,4vw,40px)", marginTop: 18, maxWidth: "12ch" }}>
                Questions, <span className="accent">answered.</span>
              </h2>
              <p className="lead" style={{ marginTop: 16, maxWidth: "34ch" }}>
                Still unsure? Bring a real compliance document to your demo and we&rsquo;ll audit it live.
              </p>
            </Reveal>
            <Reveal delay={80}><Faq /></Reveal>
          </div>
        </section>

        {/* ---------------- FINAL CTA ---------------- */}
        <section id="demo" className="section section-dark">
          <div className="wrap grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="eyebrow" style={{ color: "var(--color-green)" }}><span className="dot" /> Book a demo</div>
              <h2 className="h-display" style={{ fontSize: "clamp(32px,4.6vw,50px)", marginTop: 18, maxWidth: "14ch" }}>
                Start with a <span className="accent" style={{ color: "var(--color-green)" }}>4-week pilot.</span>
              </h2>
              <p className="lead" style={{ marginTop: 18, maxWidth: "46ch" }}>
                Pick one framework. In four weeks, on your own data, you get a full gap analysis, a
                scored compliance posture and a board-ready report. All we need: one framework in scope,
                access to current evidence, and one point of contact.
              </p>
              <div className="flex flex-col gap-3" style={{ marginTop: 28 }}>
                {["A full gap analysis on your own data", "A scored compliance posture — one number", "A board-ready report in days, not weeks"].map((x) => (
                  <div key={x} className="flex gap-3" style={{ color: "rgba(234,243,238,0.9)", fontSize: 15.5 }}>
                    <span style={{ color: "var(--color-green)", flex: "none" }}><I d="M20 6L9 17l-5-5" size={19} /></span>
                    <span>{x}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card" style={{ padding: 30, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.14)" }}>
              <DemoForm />
            </div>
          </div>
        </section>

        {/* ---------------- FOOTER ---------------- */}
        <footer style={{ background: "var(--color-green-deep)", color: "rgba(234,243,238,0.7)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <div className="wrap" style={{ paddingBlock: 56 }}>
            <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10">
              <div>
                <Wordmark size={24} onDark />
                <p style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, maxWidth: "34ch" }}>
                  AI-powered RegTech compliance — verification, implementation and continuous
                  monitoring, on 100% EU infrastructure.
                </p>
              </div>
              <FooterCol title="Platform" links={[["How it works", "#how"], ["The platform", "#platform"], ["Frameworks", "#frameworks"], ["Pricing", "#pricing"]]} />
              <FooterCol title="Solutions" links={[["Crypto & CASPs", "#solutions"], ["Insurance", "#solutions"], ["Banking & Fintech", "#solutions"], ["Why Audomate", "#why"]]} />
              <FooterCol title="Company" links={[["DeepTech ↗", "https://deeptech.pl"], ["Book a demo", "#demo"], ["sales@deeptech.pl", "mailto:sales@deeptech.pl"], ["+48 608 499 442", "tel:+48608499442"]]} />
            </div>
            <div className="hairline" style={{ marginBlock: 32, background: "linear-gradient(90deg,transparent,rgba(255,255,255,0.12),transparent)" }} />
            <div className="flex flex-wrap items-center justify-between gap-4" style={{ fontSize: 13 }}>
              <span>© {new Date().getFullYear()} DeepTech Sp. z o.o. · Chmielna 132/134, Warsaw · All rights reserved.</span>
              <span className="flex gap-5">
                <a href="#" style={{ color: "rgba(234,243,238,0.7)" }}>Privacy Policy</a>
                <a href="#" style={{ color: "rgba(234,243,238,0.7)" }}>Terms</a>
              </span>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function FooterCol({ title, links }: { title: string; links: [string, string][] }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--font-grotesk)", fontWeight: 600, fontSize: 13, letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff", marginBottom: 16 }}>{title}</div>
      <ul className="flex flex-col gap-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener" : undefined} style={{ fontSize: 14, color: "rgba(234,243,238,0.7)", transition: "color .2s ease" }}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
