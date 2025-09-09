// src/app/page.tsx
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import News from "@/components/News";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <section className="section container-xxl">
        <Programs />
      </section>
      <section className="section bg-slate-50">
        <div className="container-xxl">
          <News />
        </div>
      </section>
      <Footer />
       <WhatsAppFloat phone="57XXXXXXXXXX" message="Hola, quiero información sobre admisiones." />
    </main>
  );
}
