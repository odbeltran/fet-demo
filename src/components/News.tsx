// src/components/News.tsx
const news = [
  {
    title: "Convocatoria de becas 2025-2",
    date: "Sep 01, 2025",
    excerpt:
      "Aplica a becas de excelencia académica y liderazgo estudiantil.",
  },
  {
    title: "Semana de Innovación y Emprendimiento",
    date: "Ago 28, 2025",
    excerpt:
      "Charlas, workshops y una feria de startups estudiantiles.",
  },
  {
    title: "Nuevos convenios internacionales",
    date: "Ago 15, 2025",
    excerpt:
      "Intercambios con universidades en México, España y Argentina.",
  },
];

export default function News() {
  return (
    <div id="noticias" className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="h2">Noticias & Eventos</h2>
          <p className="p mt-1">Lo más reciente de la vida universitaria.</p>
        </div>
        <a href="#" className="hidden md:inline-flex btn-ghost">
          Ver todo
        </a>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {news.map((n) => (
          <article key={n.title} className="card p-5">
            <time className="text-xs text-slate-500">{n.date}</time>
            <h3 className="mt-2 text-lg font-semibold">{n.title}</h3>
            <p className="p mt-1">{n.excerpt}</p>
            <a
              href="#"
              className="mt-4 inline-block text-brand-700 font-medium"
            >
              Leer más →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
