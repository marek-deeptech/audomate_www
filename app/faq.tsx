"use client";

import { useRef, useState } from "react";

const ITEMS = [
  {
    q: "Where is my data processed?",
    a: "Exclusively within the EU. Our stack runs on EU-based infrastructure, and on-premise deployment keeps everything inside your own environment. No transfers to third countries, no Schrems II risk — a claim US-based platforms cannot make.",
  },
  {
    q: "Which regulations does Audomate cover?",
    a: "DORA, MiCA, NIS2, GDPR, ISO 27001/27002 and PSD2/PSD3/PSR out of the box — plus custom frameworks built from your own internal policies. EU AI Act coverage is on the roadmap.",
  },
  {
    q: "How does Audomate prevent AI hallucinations?",
    a: "Every output is generated within a verification framework that grounds answers in the source regulation and your uploaded evidence. Expert-validated templates and automated cross-checks make findings and documents supervisor-grade.",
  },
  {
    q: "How long does implementation take?",
    a: "Most teams run their first automated audit within days. Onboarding is guided — online or live, depending on your plan.",
  },
  {
    q: "Can we deploy on-premise?",
    a: "Yes. Choose an on-premise LLM stack, a portable hardware box, or classic SaaS — including white-label for consulting and audit firms.",
  },
  {
    q: "Which languages does Audomate support?",
    a: "Audomate is multilanguage — including document generation and regulatory sources in each supported language, with Polish and English fully covered.",
  },
  {
    q: "We're a consulting or audit firm — can we use Audomate for clients?",
    a: "Yes. White-label and multi-client setups are available, and several audit firms already run client engagements on Audomate.",
  },
];

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-q" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span>
        <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <div className="faq-a" style={{ maxHeight: open ? ref.current?.scrollHeight ?? 400 : 0 }}>
        <div className="faq-a-inner" ref={ref}>{a}</div>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <div>
      {ITEMS.map((it) => (
        <Item key={it.q} {...it} />
      ))}
    </div>
  );
}
