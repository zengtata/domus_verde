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
        desc: "A tervezési fázisban megszületik a kert karaktere. Anyagok, formák, növények és funkciók harmonikus egységbe rendeződnek, hogy a kert valóban tükrözze az Ön személyiségét.",
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
                    src="/images/process.jpg"
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

            {/* --- DETAILED STEPS --- */}
            <section className="py-24 overflow-hidden">
                <div className="container mx-auto px-6 relative">

                    {/* CONTINUOUS VERTICAL LINE */}
                    {/* Fixed: Class string is now single-line to prevent hydration mismatch */}
                    <div className="absolute top-0 bottom-0 w-[1px] bg-primary-green/10 -translate-x-1/2 z-0 left-8 md:left-1/2"></div>

                    {steps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div key={step.id} className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 mb-20 last:mb-0 ${isEven ? '' : 'md:flex-row-reverse'}`}>

                                {/* TEXT CONTAINER */}
                                <div className={`w-full md:w-1/2 relative z-10 pl-20 md:pl-0 text-left ${isEven ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'}`}>

                                    <Reveal>
                                        {/* Title */}
                                        <p className="font-heading text-2xl md:text-4xl text-primary-green mb-4 relative z-10">
                                            {step.title}
                                        </p>

                                        {/* Divider Line */}
                                        <div className={`w-12 h-[2px] bg-accent-gold mb-6 mr-auto ml-0 ${isEven ? 'md:ml-auto md:mr-0' : 'md:mr-auto md:ml-0'}`}></div>

                                        {/* Description */}
                                        <p className="text-text-muted leading-relaxed text-lg mb-4 relative z-10">
                                            {step.desc}
                                        </p>

                                        {/* Quote */}
                                        <p className="font-serif italic text-primary-green/60 text-sm relative z-10">
                                            {step.quote}
                                        </p>
                                    </Reveal>
                                </div>

                                {/* CENTER NUMBER BADGE */}
                                {/* Fixed: Mobile 'top-0' aligns it with the Title (top of content), 'left-2' centers it on the line. */}
                                <div className="absolute left-2 top-0 -translate-x-1/2 md:static md:flex md:left-auto md:top-auto md:translate-x-0 md:translate-y-0 w-12 h-12 rounded-full bg-white border-2 border-accent-gold flex items-center justify-center z-20 shadow-md">
                                     <span className="font-heading text-xl font-bold text-primary-green">
                                         {step.num}
                                     </span>
                                </div>

                                {/* IMAGE SIDE (HIDDEN ON MOBILE) */}
                                <div className="hidden md:block w-full md:w-1/2 px-4 md:px-16 order-first md:order-none">
                                    <Reveal delay={200} className="w-full aspect-square md:aspect-[4/3] shadow-xl hover:shadow-2xl transition-shadow duration-500">
                                        <StepVisual type={step.type} />
                                    </Reveal>
                                </div>
                            </div>
                        );
                    })}
                </div>

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