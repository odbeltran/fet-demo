"use client";
import { useEffect, useState } from "react";
import { getConfig, saveConfig, getPrograms, savePrograms } from "@/lib/cms";

type Program = { title: string; desc: string; tag?: string };

export default function AdminPage() {
  // CONFIG (Hero + Oferta Académica)
  const [hero1, setHero1] = useState("/hero.jpg");
  const [hero2, setHero2] = useState("/hero2.jpg");
  const [hero3, setHero3] = useState("/hero3.jpg");
  const [ofertaTitle, setOfertaTitle] = useState("Oferta Académica");
  const [ofertaSubtitle, setOfertaSubtitle] = useState("Explora programas diseñados para el mundo real.");

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
    const next = {
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
    setPrograms((prev) => [
      ...prev,
      { title: "Nuevo Programa", desc: "Descripción breve.", tag: "Técnico" },
    ]);
  };

  const removeProgram = (idx: number) => {
    setPrograms((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSavePrograms = () => {
    savePrograms(programs);
    alert("Programas guardados. Refresca la Home para ver cambios.");
  };

  return (
    <div className="container-xxl section">
      <h1 className="h1">Admin – Demo tipo CMS</h1>
      <p className="p mt-2">Edita contenido mediante formularios. Se guarda en <b>localStorage</b>.</p>

      {/* ===== CONFIG ===== */}
      <section className="mt-10 card p-6">
        <h2 className="h2 mb-4">Hero & Oferta Académica</h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Imagen Hero 1 (URL o /hero.jpg)</label>
            <input value={hero1} onChange={(e) => setHero1(e.target.value)} className="w-full border rounded-xl p-2" />
            <p className="text-xs text-slate-500 mt-1">Ej: /hero.jpg ó https://…</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Imagen Hero 2</label>
            <input value={hero2} onChange={(e) => setHero2(e.target.value)} className="w-full border rounded-xl p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Imagen Hero 3</label>
            <input value={hero3} onChange={(e) => setHero3(e.target.value)} className="w-full border rounded-xl p-2" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium mb-1">Título “Oferta Académica”</label>
            <input value={ofertaTitle} onChange={(e) => setOfertaTitle(e.target.value)} className="w-full border rounded-xl p-2" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Subtítulo</label>
            <input value={ofertaSubtitle} onChange={(e) => setOfertaSubtitle(e.target.value)} className="w-full border rounded-xl p-2" />
          </div>
        </div>

        <div className="mt-4">
          <button className="btn-primary" onClick={handleSaveConfig}>Guardar configuración</button>
        </div>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section className="mt-10 card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="h2">Programas</h2>
          <button className="btn-ghost" onClick={addProgram}>+ Agregar programa</button>
        </div>

        <div className="space-y-6">
          {programs.map((p, idx) => (
            <div key={idx} className="border rounded-2xl p-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Título</label>
                  <input
                    value={p.title}
                    onChange={(e) => updateProgram(idx, "title", e.target.value)}
                    className="w-full border rounded-xl p-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Etiqueta (tag)</label>
                  <input
                    value={p.tag ?? ""}
                    onChange={(e) => updateProgram(idx, "tag", e.target.value)}
                    className="w-full border rounded-xl p-2"
                    placeholder="Técnico / Tecnológico / Profesional"
                  />
                </div>
                <div className="flex items-end">
                  <button className="btn-ghost" onClick={() => removeProgram(idx)}>Eliminar</button>
                </div>
              </div>
              <div className="mt-3">
                <label className="block text-sm font-medium mb-1">Descripción</label>
                <textarea
                  value={p.desc}
                  onChange={(e) => updateProgram(idx, "desc", e.target.value)}
                  className="w-full border rounded-xl p-2"
                  rows={3}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <button className="btn-primary" onClick={handleSavePrograms}>Guardar programas</button>
        </div>
      </section>

      <p className="text-sm text-slate-500 mt-6">
        Tip: para “resetear” la demo, borra el localStorage del sitio.
      </p>
    </div>
  );
}
