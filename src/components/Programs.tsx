import { getConfig, getPrograms } from "@/lib/cms";

export default function Programs() {
  const { ofertaAcademicaTitle, ofertaAcademicaSubtitle } = getConfig();
  const data = getPrograms();

  return (
    <div id="programas" className="space-y-6">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="h2">{ofertaAcademicaTitle}</h2>
          <p className="p mt-1">{ofertaAcademicaSubtitle}</p>
        </div>
        <a href="#admisiones" className="hidden md:inline-flex btn-ghost">
          Proceso de Admisión
        </a>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((p) => (
          <article key={p.title} className="card p-5">
            {p.tag && (
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2 py-1 rounded-full">
                {p.tag}
              </span>
            )}
            <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
            <p className="p mt-1">{p.desc}</p>
            <a href="#" className="mt-4 inline-block text-blue-700 font-medium">
              Ver plan de estudios →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}
