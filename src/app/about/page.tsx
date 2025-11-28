'use client';
import React from 'react';
import Image from 'next/image';
import Reveal from '../components/Reveal'; // Adjust path if necessary
import Header from '../components/Header'; // Assuming you have this
import Link from 'next/link';

export default function AboutPage() {
    return (
        <main className="bg-[#F4F3EF] min-h-screen">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/about1.jpg" // Use a "Work in progress" or sketching image
                    alt="Garden Architecture"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 text-center px-6 pt-16">
                    <Reveal>
                        <span className="block text-accent-gold uppercase tracking-[3px] text-sm font-bold mb-4">
                            Kik Vagyunk?
                        </span>
                        <h3 className="font-heading text-5xl md:text-6xl text-white mb-6">
                            A Természet Építészei
                        </h3>
                    </Reveal>
                </div>
            </section>


            {/* --- PHILOSOPHY SECTION (Split Layout) --- */}
            <section className="py-24 bg-[#F4F3EF] overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left: The "Orangerie" Window Composition */}
                        <Reveal className="relative w-full flex justify-center md:justify-center">

                            {/* This wrapper constrains the window and the floating elements together */}
                            <div className="relative w-full max-w-[420px]">

                                {/* 1. Natural Shadow Layer (Soft Offset) */}
                                <div className="absolute top-6 -left-6 w-full h-full bg-[#E6E2D6] rounded-t-full z-0 hidden md:block"></div>

                                {/* 2. The Window Frame */}
                                <div className="relative w-full aspect-[3/4] border-[8px] border-primary-green rounded-t-full overflow-hidden shadow-2xl z-10 bg-primary-green group">

                                    {/* Image */}
                                    <div className="relative w-full h-full overflow-hidden">
                                        <Image
                                            src="/images/about3.jpg"
                                            alt="Domus Verde Philosophy"
                                            fill
                                            className="object-cover transition-transform duration-[1.5s] ease-in-out group-hover:scale-110"
                                        />
                                        {/* Glass Reflection */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10"></div>
                                    </div>

                                    {/* Window Mullions (Grid) */}
                                    <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-primary-green z-20 shadow-sm"></div>
                                    <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-primary-green z-20 shadow-sm"></div>
                                    <div className="absolute top-2/3 left-0 right-0 h-[2px] bg-primary-green z-20 shadow-sm"></div>
                                </div>

                                {/* 3. The Badge - Now anchored correctly to the window edge */}
                                <div className="absolute top-12 -right-6 z-20 bg-white p-2 rounded-full shadow-lg animate-float">
                                    <div className="w-20 h-20 rounded-full border border-accent-gold/30 flex flex-col items-center justify-center text-center">
                                        <span className="font-heading text-primary-green text-xs font-bold">EST.</span>
                                        <span className="font-heading text-accent-gold text-lg font-bold leading-none">2012</span>
                                    </div>
                                </div>

                            </div>
                        </Reveal>

                        {/* Right: Text Content */}
                        <Reveal delay={200} className="md:pl-6">
                            <p className="font-heading text-4xl md:text-5xl text-primary-green mb-8 leading-tight">
                                Nem kertet építünk, <br/> hanem <span className="text-accent-gold italic">otthont a szabadban.</span>
                            </p>

                            <p className="text-text-muted mb-6 leading-relaxed text-lg">
                                A Domus Verde 6 éve van jelen a prémium kertépítés világában. Stabil, 3–4 fős csapatunk tapasztalt szakmai partnerekkel, alvállalkozókkal és tervezőkkel dolgozik együtt, így nagyobb volumenű projekteket is magas minőségben, összehangoltan valósítunk meg.
                            </p>

                            <p className="text-text-muted mb-6 leading-relaxed text-lg">
                                Teljes körű kertépítésre specializálódtunk: a tereprendezéstől és öntözőrendszer-telepítéstől kezdve a kerti világításon és burkolatokon át az okoskertek kialakításáig minden munkafolyamatot precízen, egy kézben tartunk.
                            </p>

                            <p className="text-text-muted mb-6 leading-relaxed text-lg">
                                Célunk, hogy a kertépítésben végre valódi érték szülessen: tisztességes, lelkiismeretes és kompromisszummentesen precíz kivitelezéssel, amely hosszú távon is élményt és minőséget képvisel.
                            </p>

                            {/* Signature Block */}
                            <div className="flex items-center gap-5 border-t border-gray-200 pt-8 mt-8">
                                <div className="w-16 h-16 rounded-full p-1 border border-accent-gold/30">
                                    <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-200">
                                        <Image src="/images/175f5b46-0d36-4830-b1d9-6a8d6e7a1539.jpg" alt="Founder" fill className="object-cover" />
                                    </div>
                                </div>
                                <div>
                                    <p className="font-heading text-xl text-primary-green font-bold leading-none mb-1">Hatvány Bence</p>
                                    <p className="text-[10px] text-accent-gold uppercase tracking-[2px]">Alapító</p>
                                </div>
                            </div>
                        </Reveal>

                    </div>
                </div>
            </section>

            {/* --- VALUES GRID --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { title: "Kompromisszumok Nélkül", desc: "Csak a legkiválóbb anyagokkal és növényekkel dolgozunk. A minőségben nem ismerünk alkut." },
                            { title: "Fenntartható Luxus", desc: "Intelligens öntözőrendszerek és öko-tudatos megoldások, melyek tisztelik a természetet." },
                            { title: "Személyes Figyelem", desc: "Nem tömeggyártunk. Évente limitált számú projektet vállalunk, hogy garantáljuk a tökéletességet." }
                        ].map((value, i) => (
                            <Reveal key={i} delay={i * 100} className="text-center px-4 group">
                                <div className="w-16 h-16 mx-auto mb-6 border border-primary-green/20 rounded-full flex items-center justify-center group-hover:bg-primary-green group-hover:text-white transition-all duration-500">
                                    <span className="font-heading text-2xl italic">{i + 1}.</span>
                                </div>
                                <p className="font-heading text-2xl text-primary-green mb-4">{value.title}</p>
                                <p className="text-text-muted leading-relaxed">{value.desc}</p>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TEAM SECTION --- */}
            <section className="py-24 bg-primary-charcoal text-white">
                <div className="container mx-auto px-6">
                    <Reveal className="text-center mb-16">
                        <span className="text-accent-gold uppercase tracking-[3px] text-sm font-bold">Csapatunk</span>
                        <p className="font-heading text-4xl md:text-5xl mt-2">Akik a kerteket életre keltik</p>
                    </Reveal>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { name: "Nagy Eszter", role: "Vezető Tájépítész", img: "/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg" },
                            { name: "Varga Péter", role: "Kivitelezési Vezető", img: "/images/1c40a67a-cd12-4797-86f2-9742ba97a2e8.jpg" },
                            { name: "Szabó Lilla", role: "Növény Szakértő", img: "/images/7a58a5c7-c634-4314-a2dc-2851125af4a4.jpg" },
                        ].map((member, i) => (
                            <Reveal key={i} delay={i * 150} className="group relative">
                                <div className="relative h-[450px] w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={member.img}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                    <div className="absolute bottom-0 left-0 w-full p-8 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="font-heading text-2xl text-white mb-1">{member.name}</p>
                                        <p className="text-accent-gold text-xs uppercase tracking-widest">{member.role}</p>
                                    </div>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
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