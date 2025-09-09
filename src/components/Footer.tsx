// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer id="contacto" className="section border-t border-slate-100 bg-white">
      <div className="container-xxl grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold mb-2">Universidad Demo</h4>
          <p className="p">Formando profesionales para transformar su entorno.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contacto</h4>
          <ul className="space-y-1 text-slate-600">
            <li>Cl. 123 #45-67, Ciudad</li>
            <li>PBX: (608) 123 45 67</li>
            <li>admisiones@universidad.demo</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Redes</h4>
          <div className="flex gap-3 text-slate-600">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
      </div>
      <div className="container-xxl text-sm text-slate-500 mt-8">
        © {new Date().getFullYear()} Universidad Demo
      </div>
    </footer>
  );
}
