import Image from "next/image";
import Header from "./components/Header";
import Reveal from "./components/Reveal";
import ProjectsCarousel from "./components/ProjectsCarousel";
import Stats from "./components/Stats";
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
                Ahol a Természet <br/> és a Luxus Találkozik
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                Exkluzív kertek tervezése és teljeskörű kivitelezése.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <a
                  href="#contact"
                  className="group relative inline-block overflow-hidden rounded-full bg-accent-gold px-8 py-4 text-sm font-medium uppercase tracking-wider text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#bfa77a] hover:shadow-2xl active:translate-y-0 active:scale-95"
              >
                {/* Relative Z-Index to keep text above the shine effect */}
                <span className="relative z-10">Ajánlatot Kérek</span>

                {/* Shine Effect Overlay */}
                <div className="absolute inset-0 -z-10 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
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
            <a href="/about" className="group relative inline-block overflow-hidden rounded-full bg-accent-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#bfa77a] hover:shadow-2xl active:translate-y-0 active:scale-95">
              <span className="relative z-10">Rólunk Bővebben</span>
              <div className="absolute inset-0 -z-10 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
            </a>
          </Reveal>
          <Reveal delay={200} className="h-[500px] rounded-lg overflow-hidden shadow-xl">
            <img
                src="/images/home_about.jpg"
                alt="Domus Verde"
                className="w-full h-full object-cover object-center"
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
              <a href="/references" className="group relative inline-block overflow-hidden rounded-full bg-accent-gold px-8 py-3 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-[#bfa77a] hover:shadow-2xl active:translate-y-0 active:scale-95 mt-8">
                <span className="relative z-10">Összes Referencia</span>
                <div className="absolute inset-0 -z-10 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
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