"use client";

import { useState } from "react";

type Persona = {
  key: string;
  name: string;
  tagline: string;
  points: string[];
  mock: React.ReactNode;
};

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="icon-tile-sm" style={{ flex: "none", marginTop: 2 }}>
      <circle cx="12" cy="12" r="11" fill="rgba(0,216,120,0.14)" />
      <path d="M8 12.4l2.6 2.6L16 9.5" stroke="#05633f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Bar({ w, label, val, tone = "green" }: { w: string; label: string; val: string; tone?: "green" | "amber" | "ink" }) {
  const color = tone === "green" ? "var(--color-green)" : tone === "amber" ? "#ffb020" : "#c3cec8";
  return (
    <div style={{ marginBottom: 12 }}>
      <div className="flex justify-between" style={{ fontSize: 12.5, color: "var(--color-muted)", marginBottom: 6 }}>
        <span>{label}</span>
        <span style={{ color: "var(--color-ink)", fontWeight: 600 }}>{val}</span>
      </div>
      <div style={{ height: 7, borderRadius: 999, background: "rgba(8,19,15,0.07)" }}>
        <div style={{ width: w, height: "100%", borderRadius: 999, background: color }} />
      </div>
    </div>
  );
}

function Row({ label, status }: { label: string; status: "pass" | "gap" | "review" }) {
  const map = {
    pass: { t: "Compliant", c: "#05633f", bg: "rgba(0,216,120,0.14)" },
    gap: { t: "Gap", c: "#a3400f", bg: "rgba(255,120,40,0.14)" },
    review: { t: "Review", c: "#5b6b64", bg: "rgba(8,19,15,0.07)" },
  }[status];
  return (
    <div className="flex items-center justify-between" style={{ padding: "11px 0", borderBottom: "1px solid var(--color-line-soft)" }}>
      <span style={{ fontSize: 13.5, color: "var(--color-ink)" }}>{label}</span>
      <span style={{ fontSize: 12, fontWeight: 600, color: map.c, background: map.bg, padding: "3px 10px", borderRadius: 999 }}>{map.t}</span>
    </div>
  );
}

const PERSONAS: Persona[] = [
  {
    key: "auditor",
    name: "Auditor",
    tagline: "Run a full framework audit from checklist to signed-off report.",
    points: [
      "Compliance checklists auto-selected for your profile",
      "AI-automated verification against every control",
      "A complete, prioritised gap list in hours",
      "One-click audit report for management",
    ],
    mock: (
      <div>
        <div className="flex items-center justify-between" style={{ marginBottom: 16 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)" }}>DORA · ICT risk audit</span>
          <span className="pill-soft" style={{ padding: "4px 11px", fontSize: 12 }}>82% complete</span>
        </div>
        <Row label="ICT risk management framework" status="pass" />
        <Row label="Register of information" status="pass" />
        <Row label="Third-party monitoring" status="gap" />
        <Row label="Incident reporting process" status="review" />
        <Row label="Digital resilience testing" status="pass" />
      </div>
    ),
  },
  {
    key: "risk",
    name: "Risk Manager",
    tagline: "A living risk registry with scoring and continuous monitoring.",
    points: [
      "Risk list & assessment across the organisation",
      "Automated risk scoring and prioritisation",
      "Vendor and third-party risk in one view",
      "Continuous monitoring with alerts on change",
    ],
    mock: (
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Risk posture</div>
        <Bar w="88%" label="Operational resilience" val="Low" />
        <Bar w="54%" label="Third-party / vendor" val="Medium" tone="amber" />
        <Bar w="72%" label="Data protection" val="Low" />
        <Bar w="40%" label="ICT change" val="Elevated" tone="amber" />
      </div>
    ),
  },
  {
    key: "vendor",
    name: "Vendor Manager",
    tagline: "Define requirements, audit vendors and monitor them over time.",
    points: [
      "Define vendor requirements per framework",
      "Customised audit checklists per supplier",
      "Automated contract verification",
      "Ongoing vendor monitoring and re-assessment",
    ],
    mock: (
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Vendor register · 24 suppliers</div>
        <Row label="Cloud infrastructure provider" status="pass" />
        <Row label="Payment processor" status="pass" />
        <Row label="KYC / identity vendor" status="review" />
        <Row label="Analytics sub-processor" status="gap" />
        <Row label="Email & comms provider" status="pass" />
      </div>
    ),
  },
  {
    key: "docs",
    name: "Documentation Manager",
    tagline: "Generate audit-grade policies, whitepapers and reports.",
    points: [
      "AI-generated document proposals, grounded in the regulation",
      "Ready-made, expert-validated templates",
      "MiCA whitepaper & DORA report generators",
      "Every output cross-checked against your evidence",
    ],
    mock: (
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Document generator</div>
        {["ICT Risk Management Policy", "Register of Information", "MiCA Whitepaper — draft", "Incident Response Plan"].map((d, i) => (
          <div key={d} className="flex items-center justify-between" style={{ padding: "11px 0", borderBottom: "1px solid var(--color-line-soft)" }}>
            <span style={{ fontSize: 13.5, color: "var(--color-ink)" }}>{d}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: i === 2 ? "#5b6b64" : "#05633f" }}>{i === 2 ? "Generating…" : "Ready"}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    key: "continuous",
    name: "Continuous Compliance",
    tagline: "Stay audit-ready as regulations and your business change.",
    points: [
      "Recurring regulatory tasks generated automatically",
      "Execution tracking across your team",
      "Ad-hoc verification whenever rules change",
      "Regulatory monitoring across your frameworks",
    ],
    mock: (
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--color-ink)", marginBottom: 16 }}>Upcoming & triggered tasks</div>
        <Row label="Quarterly DORA resilience review" status="review" />
        <Row label="MiCA disclosure — updated guidance" status="gap" />
        <Row label="Annual ISO 27001 internal audit" status="pass" />
        <Row label="Vendor re-assessment (2 due)" status="review" />
      </div>
    ),
  },
];

export function Personas() {
  const [active, setActive] = useState(PERSONAS[0].key);
  const p = PERSONAS.find((x) => x.key === active)!;

  return (
    <div>
      <div className="flex flex-wrap gap-2.5 pill-row" style={{ marginBottom: 36 }}>
        {PERSONAS.map((x) => (
          <button
            key={x.key}
            className={`tab ${x.key === active ? "active" : ""}`}
            onClick={() => setActive(x.key)}
          >
            {x.name}
          </button>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div>
          <h3 className="h-display" style={{ fontSize: 26, marginBottom: 20, maxWidth: "16ch" }}>
            {p.tagline}
          </h3>
          <ul className="flex flex-col gap-3.5">
            {p.points.map((pt) => (
              <li key={pt} className="flex gap-3" style={{ color: "var(--color-body)", fontSize: 15.5, lineHeight: 1.5 }}>
                <Check />
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card" style={{ padding: 24, background: "linear-gradient(180deg, #fff, #fafcfb)" }}>
          <div className="flex items-center gap-2" style={{ marginBottom: 18 }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#ff5f57" }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#febc2e" }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28c840" }} />
            <span style={{ marginLeft: 10, fontSize: 12, color: "var(--color-faint)" }}>audomate · {p.name.toLowerCase()}</span>
          </div>
          {p.mock}
        </div>
      </div>

      <p style={{ marginTop: 28, fontSize: 14.5, color: "var(--color-muted)" }}>
        …plus dedicated workspaces for IT, Implementation and Contributor roles — each accessible via web, chatbot or voice assistant.
      </p>
    </div>
  );
}
