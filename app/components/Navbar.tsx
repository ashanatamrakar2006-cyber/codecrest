"use client";

import { useState } from "react";

const links = [
  { href: "#courses", label: "Courses" },
  { href: "#why", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#faq", label: "FAQ" },
];

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true"><rect width="40" height="40" rx="10" fill="#3B9BFF" /><polyline points="7,31 16,11 22,22 26,16 33,31" fill="none" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className="bg-li... from-brand-ink to-brand bg-clip-text text-2xl font-extrabold tracking-tight">Code<span className="text-[#3B9BFF]">crest</span></span>
    </span>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-brand-light bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" aria-label="Codecrest home">
          <Logo />
        </a>

        <div className="hidden gap-8 font-medium text-brand-muted md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-brand-dark">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-brand px-6 py-2.5 font-semibold text-white shadow-sm shadow-brand/30 transition hover:bg-brand-dark sm:block"
          >
            Talk to Expert
          </a>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="rounded-lg border border-brand-light px-3 py-2 text-brand-ink md:hidden"
          >
            {open ? "???" : "???"}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-brand-light bg-white px-6 py-5 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-medium text-brand-muted"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="rounded-full bg-brand px-5 py-3 text-center font-semibold text-white"
          >
            Talk to Expert
          </a>
        </div>
      )}
    </nav>
  );
}

