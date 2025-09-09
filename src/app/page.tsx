"use client";
import { useEffect, useState } from "react";
import { getConfig, saveConfig, getPrograms, savePrograms, type Program, type Config } from "@/lib/cms";

export default function AdminPage() {
  // CONFIG
  const [hero1, setHero1] = useState<string>("/hero.jpg");
  const [hero2, setHero2] = useState<string>("/hero2.jpg");
  const [hero3, setHero3] = useState<string>("/hero3.jpg");
  const [ofertaTitle, setOfertaTitle] = useState<string>("Oferta Académica");
  const [ofertaSubtitle, setOfertaSubtitle] = useState<string>("Explora programas diseñados para el mundo real.");

  // PROGRAMS
  const [programs, setPrograms] = useState<Program[]>([]);

  useEffect(() => {
    const cfg = getConfig();
    setHero1(cfg.heroImages?.[0] ?? "/hero.jpg");
    setHero2(cfg.heroImages?.[1] ?? "/hero2.jpg");
    setHero3(cfg.heroImages?.[2] ?? "/hero3.jpg");
    setOfertaTitle(cfg.ofertaAcademicaTitle ?? ofertaTitle);
    setOfertaSubtitle(cfg.ofertaAcademicaSubtitle ?? ofertaSubtitle);

    setPrograms(getPrograms());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSaveConfig = () => {
    const next: Config = {
      heroImages: [hero1, hero2, hero3].filter(Boolean),
      ofertaAcademicaTitle: ofertaTitle,
      ofertaAcademicaSubtitle: ofertaSubtitle,
    };
    saveConfig(next);
    alert("Configuración guardada. Refresca la Home para ver cambios.");
  };

  const updateProgram = (idx: number, field: keyof Program, value: string) => {
    setPrograms((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: value };
      return copy;
    });
  };

  const addProgram = () => {
    setPrograms((prev) => [...prev, { title: "Nuevo Programa", desc: "Descripción breve.", tag: "Técnico" }]);
  };

  const removeProgram = (idx: number) => {
    setPrograms((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSavePrograms = () => {
    savePrograms(programs);
    alert("Programas guardados. Refresca la Home para ver cambios.");
  };

  // ... (el resto queda igual)
}
