// src/components/Navbar.tsx
import Link from "next/link";
import { useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <button
          className="text-xs font-mono tracking-[0.35em] text-gray-300"
          onClick={() => handleScroll("home")}
        >
          KOSTAS.NO
        </button>

        {/* Desktop nav */}
        <nav className="hidden gap-6 text-xs font-medium uppercase tracking-[0.25em] text-gray-300 md:flex">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => handleScroll(s.id)}
              className="relative transition hover:text-kostas-blue"
            >
              {s.label}
              <span className="absolute inset-x-0 -bottom-1 mx-auto h-px w-0 bg-kostas-blue transition-all duration-200 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button
          className="text-xs font-mono tracking-[0.25em] text-gray-300 md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          MENU
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="border-t border-white/10 bg-black/95 px-4 pb-4 pt-2 md:hidden">
          <nav className="flex flex-col gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gray-200">
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => handleScroll(s.id)}
                className="text-left py-1 hover:text-kostas-blue"
              >
                {s.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}