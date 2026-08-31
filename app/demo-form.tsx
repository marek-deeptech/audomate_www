"use client";

import { useState } from "react";

const FRAMEWORKS = ["DORA", "MiCA", "NIS2", "GDPR", "ISO 27001", "PSD/PSR", "Custom"];

export function DemoForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [picked, setPicked] = useState<string[]>([]);

  function toggle(f: string) {
    setPicked((p) => (p.includes(f) ? p.filter((x) => x !== f) : [...p, f]));
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    const fd = new FormData(e.currentTarget);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      company: String(fd.get("company") || ""),
      message: String(fd.get("message") || ""),
      frameworks: picked,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("bad status");
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  if (status === "ok") {
    return (
      <div className="card" style={{ padding: 32, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.16)", textAlign: "center" }}>
        <div style={{ width: 52, height: 52, borderRadius: 999, background: "var(--color-green)", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M6 12.5l4 4L18 8" stroke="#04130c" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
        <h3 style={{ fontFamily: "var(--font-grotesk)", fontSize: 22, fontWeight: 600, color: "#fff", marginBottom: 8 }}>Request received</h3>
        <p style={{ color: "rgba(234,243,238,0.72)", lineHeight: 1.6 }}>
          Thank you — a compliance specialist from the Audomate team will reach out within one business day to scope your 4-week pilot.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-3.5">
      <div className="grid sm:grid-cols-2 gap-3.5">
        <input className="field" name="name" placeholder="Full name" required autoComplete="name" />
        <input className="field" name="email" type="email" placeholder="Work email" required autoComplete="email" />
      </div>
      <input className="field" name="company" placeholder="Company" autoComplete="organization" />

      <div>
        <div style={{ fontSize: 13, color: "rgba(234,243,238,0.7)", marginBottom: 10 }}>Which frameworks matter most?</div>
        <div className="flex flex-wrap gap-2">
          {FRAMEWORKS.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => toggle(f)}
              style={{
                padding: "7px 14px", borderRadius: 999, fontSize: 13, fontWeight: 500, cursor: "pointer",
                transition: "all .2s ease",
                border: picked.includes(f) ? "1px solid var(--color-green)" : "1px solid rgba(255,255,255,0.18)",
                background: picked.includes(f) ? "var(--color-green)" : "rgba(255,255,255,0.05)",
                color: picked.includes(f) ? "#04130c" : "rgba(234,243,238,0.85)",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <textarea className="field" name="message" placeholder="Anything we should know? (optional)" rows={3} />

      <button type="submit" className="btn btn-green" style={{ height: 52 }} disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Book my 4-week pilot"}
      </button>

      {status === "error" && (
        <p style={{ fontSize: 13.5, color: "#ffd7c2" }}>
          Something went wrong. Please email <a href="mailto:sales@deeptech.pl" style={{ color: "#fff", textDecoration: "underline" }}>sales@deeptech.pl</a> and we&rsquo;ll set it up.
        </p>
      )}
      <p style={{ fontSize: 12.5, color: "rgba(234,243,238,0.5)" }}>
        By submitting you agree to be contacted about Audomate. No spam — we respect the GDPR we help you comply with.
      </p>
    </form>
  );
}
