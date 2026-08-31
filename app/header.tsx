"use client";

import { useEffect, useState } from "react";
import { Wordmark } from "./brand";

const LINKS = [
  { label: "Platform", href: "#platform" },
  { label: "Frameworks", href: "#frameworks" },
  { label: "Why Audomate", href: "#why" },
  { label: "Solutions", href: "#solutions" },
  { label: "Pricing", href: "#pricing" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`header ${scrolled || open ? "scrolled" : ""}`}>
      <div className="wrap flex items-center justify-between" style={{ height: 68 }}>
        <a href="#top" className="flex items-center" aria-label="Audomate home">
          <Wordmark size={22} />
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="nav-link">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="btn btn-green" style={{ height: 42 }}>
            Book a demo
          </a>
        </div>

        <button
          className="md:hidden inline-flex flex-col justify-center items-center"
          style={{ width: 44, height: 44, gap: 5 }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            style={{
              width: 22, height: 2, background: "var(--color-ink)", borderRadius: 2,
              transition: "transform .3s ease",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              width: 22, height: 2, background: "var(--color-ink)", borderRadius: 2,
              transition: "opacity .2s ease", opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              width: 22, height: 2, background: "var(--color-ink)", borderRadius: 2,
              transition: "transform .3s ease",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      {open && (
        <div className="md:hidden" style={{ background: "rgba(255,255,255,0.98)", borderTop: "1px solid var(--color-line)" }}>
          <div className="wrap flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="nav-link"
                style={{ padding: "12px 0", fontSize: 17 }}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#demo" className="btn btn-green mt-3" onClick={() => setOpen(false)}>
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
