import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Stats from "./components/Stats";4
import ProcessHint from "./components/ProcessHint";
import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
      <main className="bg-[var(--background)] min-h-screen">
        <Header />

        {/* HERO SECTION */}
        <section className="relative h-screen flex items-center justify-center text-center text-white">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
                src="/hero1.jpg" // Ensure you put hero.jpg in the /public folder
                alt="Hero Background"
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/70" />
          </div>

          <div className="relative z-10 container px-4">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Ahol a Természet és a Luxus Találkozik
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Exkluzív kertek tervezése és teljeskörű kivitelezése.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a href="#contact" className="inline-block bg-accent-gold text-white mt-10 px-8 py-4 rounded-full uppercase tracking-wider font-medium text-sm hover:bg-[#a18a5e] transition-transform hover:-translate-y-1 shadow-lg">
                Ajánlatot Kérek
              </a>
            </Reveal>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-24 container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <Reveal className="text-left">
            <h3 className="text-4xl md:text-5xl font-bold text-primary-green mb-6">
              Több, mint kert. Élettér.
            </h3>
            <p className="text-text-muted text-lg leading-relaxed mb-8">
              Hiszünk abban, hogy a kert nem csupán növények összessége, hanem egy személyre szabott menedék, amely harmóniát teremt otthona és a természet között. Minden projektünk egy egyedi műalkotás.
            </p>
            <a href="/about" className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-[#a18a5e] transition-all shadow-md">
              Rólunk Bővebben
            </a>
          </Reveal>
          <Reveal delay={200} className="h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
                src="/images/company2.jpg"
                alt="Domus Verde"
                className="w-full h-full object-cover"
            />
          </Reveal>
        </section>

        {/* STATS SECTION */}
        <section>
          <Reveal delay={100}>
            <Stats />
          </Reveal>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-12 text-center">
          <div className="container mx-auto px-6">
            <Reveal>
              <h3 className="text-4xl md:text-5xl font-bold text-primary-green mb-4">Kiemelt Projektjeink</h3>
              <p className="text-text-muted mb-2">Büszkék vagyunk munkáinkra, melyek ügyfeleink álmait váltották valóra.</p>
            </Reveal>

            <Reveal delay={100}>
              <ProjectsCarousel />
            </Reveal>

            <Reveal delay={200}>
              <a href="/references" className="inline-block bg-accent-gold text-white px-8 py-3 rounded-full uppercase tracking-wider text-sm font-medium hover:bg-[#a18a5e] transition-all shadow-md mt-8">
                Összes Referencia
              </a>
            </Reveal>
          </div>
        </section>

        {/* PROCESS SECTION */}

        <section id="process">
          <Reveal delay={100}>
            <ProcessHint />
          </Reveal>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact">
          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer className="bg-primary-green text-white py-12 text-center">
          <div className="container mx-auto px-6">
            <p className="font-heading text-2xl font-bold mb-4">DOMUS VERDE</p>
            <p className="text-white/70 mb-8">kert@domusverde.hu</p>
            <p className="text-xs text-white/50">&copy; 2025 Domus Verde. Minden jog fenntartva.</p>
          </div>
        </footer>
      </main>
  );
}