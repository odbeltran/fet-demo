// src/components/NavBar.tsx
"use client";
import { useState } from "react";

const links = [
  { href: "#programas", label: "Programas" },
  { href: "#noticias", label: "Noticias" },
  { href: "#admisiones", label: "Admisiones" },
  { href: "#contacto", label: "Contacto" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-100">
      <nav className="container-xxl flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-3">
          <img src="/logo-demo.JPG" alt="Logo" className="h-8 w-8" />
          <span className="font-bold">Universidad Demo</span>
        </a>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <span>☰</span>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-slate-600 hover:text-slate-900">
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#admisiones" className="btn-primary">
              Inscríbete
            </a>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-100">
          <ul className="container-xxl py-3 space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block py-2"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#admisiones" className="btn-primary">
                Inscríbete
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
