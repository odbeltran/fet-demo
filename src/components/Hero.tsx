"use client";
import { useEffect, useState } from "react";
import { getConfig } from "@/lib/cms";

const INTERVAL_MS = 5000; // 5s

export default function Hero() {
  const { heroImages } = getConfig();
  const slides = heroImages && heroImages.length > 0 ? heroImages : ["/hero.jpg"];
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, INTERVAL_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative">
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        {slides.map((src, i) => (
          <img
            key={src + i}
            src={src}
            alt="Banner"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700
              ${i === active ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10 pointer-events-none" />
      </div>

      <div className="container-xxl absolute inset-0 flex items-center">
        <div className="max-w-2xl text-white space-y-6 fade-up">
          <h1 className="h1">Impulsa tu futuro con una educación de calidad</h1>
          <p className="p text-white/90">
            Programas técnicos, tecnológicos y profesionales con enfoque práctico,
            innovación y bienestar estudiantil.
          </p>
          <div className="flex gap-3">
            <a href="#programas" className="btn-primary">Ver Programas</a>
            <a href="#contacto" className="btn-ghost text-white border-white/40 hover:bg-white/10">Contáctanos</a>
          </div>
        </div>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-4 left-0 right-0">
          <div className="container-xxl flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition
                  ${i === active ? "bg-white" : "bg-white/50 hover:bg-white/80"}`}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
