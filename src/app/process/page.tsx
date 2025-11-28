'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Reveal from '../components/Reveal';
import StepVisual from "@/app/components/StepVisual";

// --- MOCK DATA: STEPS ---
const steps = [
    {
        id: 1,
        num: "1",
        title: "Találkozás és Inspiráció",
        desc: "A helyszíni konzultáció során megismerjük az Ön elképzeléseit, életstílusát és az adott terület lehetőségeit. Figyelünk a részletekre, mert a valódi prémium élmény ott kezdődik, ahol mások megállnak.",
        quote: "Egy jó design a hallgatással kezdődik.",
        type: 'consultation'
    },
    {
        id: 2,
        num: "2",
        title: "Koncepció és Forma",
        desc: "Belső építész csapatunk fotorealisztikus 3D látványterveket készít, hogy Ön pontosan lássa, hogyan fog festeni kertje a valóságban. Ebben a fázisban választjuk ki a burkolatokat, a növényzet típusait és a kerti építmények stílusát.",
        quote: "Nem csak rajzolunk, álmokat vizualizálunk.",
        type: 'design'
    },
    {
        id: 3,
        num: "3",
        title: "Megvalósítás Mesterszinten",
        desc: "Precíz kivitelezés, összehangolt csapatmunka és kompromisszummentes minőség – minden mozdulat a tökéletesség irányába vezet.",
        quote: "A minőség az apró részletekben rejlik.",
        type: 'build'
    },
    {
        id: 4,
        num: "4",
        title: "Átadás és Folyamatos Gondoskodás",
        desc: "A kert életre kel, de a kapcsolat nem ér véget. Átadjuk, majd igény szerint segítünk megőrizni gondozást végző partnereink segítségével azt a szépséget, amelyet megalkottuk.",
        quote: "A kert egy élő organizmus, amely gondoskodást igényel.",
        type: 'care'
    },
];

// --- MOCK DATA: FAQ ---
const faqs = [
    { q: "Mennyi ideig tart a tervezési folyamat?", a: "Általában 2-4 hetet vesz igénybe a terület méretétől és a koncepció összetettségétől függően." },
    { q: "Vállalnak kisebb kerteket is?", a: "Igen, hiszünk abban, hogy kis térben is lehet nagyot alkotni. Teraszok és kisvárosi kertek tervezését is vállaljuk." },
    { q: "Milyen garanciát vállalnak?", a: "Az általunk ültetett növényekre 1 év eredési garanciát, az épített elemekre és öntözőrendszerekre pedig 3 év teljeskörű garanciát biztosítunk." },
    { q: "Mennyibe kerül egy átlagos kivitelezés?", a: "Minden projekt egyedi. Az árat befolyásolja a terület mérete, a választott anyagok és növények minősége. Kérjen ingyenes konzultációt pontos árajánlatért." },
];

export default function ProcessPage() {
    // State for Accordion
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <main className="bg-white min-h-screen">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/process.jpg" // Use a "Work in progress" or sketching image
                    alt="Process Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 text-center px-6 pt-16">
                    <Reveal>
                        <span className="block text-accent-gold uppercase tracking-[3px] text-sm font-bold mb-4">
                            A kert születése – ahogyan mi dolgozunk

                        </span>
                        <h3 className="font-heading text-5xl md:text-6xl text-white mb-6">
                            A Tervezéstől a Valóságig
                        </h3>
                    </Reveal>
                </div>
            </section>

            {/* --- DETAILED STEPS (ZIG-ZAG LAYOUT) --- */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6 relative">

                    {/* Center Vertical Line (Desktop Only) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-primary-green/10 -translate-x-1/2 hidden md:block z-0"></div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={step.id} className={`relative flex flex-col md:flex-row items-center gap-12 md:gap-0 mb-24 last:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                {/* Text Side */}
                                <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'} text-center relative z-10`}>
                                    <Reveal>
                                        <span className="font-heading text-8xl text-primary-green/5 absolute top-[-40px] left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:static block leading-none select-none">
                                            {step.num}
                                        </span>
                                        <p className="font-heading text-3xl md:text-4xl text-primary-green mb-4 relative">
                                            {step.title}
                                        </p>
                                        <div className={`w-12 h-[2px] bg-accent-gold mb-6 mx-auto ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}></div>
                                        <p className="text-text-muted leading-relaxed text-lg mb-6">
                                            {step.desc}
                                        </p>
                                        <p className="font-serif italic text-primary-green/60 text-sm">
                                            {step.quote}
                                        </p>
                                    </Reveal>
                                </div>

                                {/* Center Dot (Desktop Only) */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#F4F3EF] border-2 border-accent-gold items-center justify-center z-20 shadow-sm">
                                    <div className="w-3 h-3 bg-primary-green rounded-full"></div>
                                </div>

                                <div className="w-full md:w-1/2 px-4 md:px-16 order-first md:order-none">
                                    <Reveal delay={200} className="w-full aspect-square md:aspect-[4/3] shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                        <StepVisual type={step.type} />
                                    </Reveal>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* --- SIGNATURE STYLE --- */}
                <Reveal className="mt-32 flex flex-col items-center justify-center text-center">


                    <p className="font-heading text-3xl md:text-4xl text-primary-green mb-6 px-4">
                        “A Domus Verde-nél a kert nem projekt. Hanem örökség.”
                    </p>
                </Reveal>

            </section>

            {/* --- FAQ SECTION --- */}
            <section className="py-24 bg-[#F4F3EF]">
                <div className="container max-w-3xl mx-auto px-6">
                    <Reveal className="text-center mb-16">
                        <span className="text-accent-gold uppercase tracking-[2px] text-sm font-bold">Gyakori Kérdések</span>
                        <p className="font-heading text-4xl text-primary-green mt-2">Miben segíthetünk?</p>
                    </Reveal>

                    <div className="space-y-4">
                        {faqs.map((item, index) => (
                            <Reveal key={index} delay={index * 100}>
                                <div
                                    className={`border rounded-lg overflow-hidden transition-all duration-300 ${openFaq === index ? 'border-accent-gold bg-primary-green text-white' : 'border-gray-200 bg-white text-primary-green'}`}
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                                    >
                                        <span className="font-heading text-xl font-medium">{item.q}</span>
                                        <span className={`text-2xl transition-transform duration-300 ${openFaq === index ? 'rotate-45 text-accent-gold' : 'text-accent-gold'}`}>
                                            +
                                        </span>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openFaq === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                                        <p className={`p-6 pt-0 leading-relaxed ${openFaq === index ? 'text-white/80' : 'text-text-muted'}`}>
                                            {item.a}
                                        </p>
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