'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from './Reveal';

export default function ProcessBanner() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <div className="relative rounded-2xl overflow-hidden bg-primary-green text-white shadow-2xl">

                    <div className="grid md:grid-cols-2">

                        {/* Left: Text Content */}
                        <div className="p-12 md:p-16 flex flex-col justify-center z-10 relative">
                            {/* ... (Your existing text content remains exactly the same) ... */}
                            <Reveal>
                                <span className="text-accent-gold uppercase tracking-[3px] text-xs font-bold mb-4 block">
                                    Lépésről Lépésre
                                </span>
                                <p className="font-heading text-4xl md:text-5xl mb-6 leading-tight">
                                    Így válik a látványterv élő természetté.
                                </p>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    Átlátható, 4 lépéses folyamatunk garancia a minőségre. Ismerje meg, hogyan vezetjük végig Önt a tervezőasztaltól az első kerti partiig.
                                </p>

                                <ul className="grid grid-cols-2 gap-4 mb-10">
                                    {['Konzultáció', 'Tervezés', 'Kivitelezés', 'Átadás'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link href="/process" className="group relative inline-block w-fit overflow-hidden rounded-full bg-white px-8 py-3 text-xs font-bold uppercase tracking-wider text-primary-green shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-105 hover:bg-accent-gold hover:text-white hover:shadow-2xl active:translate-y-0 active:scale-95">
                                    <span className="relative z-10">Részletek</span>
                                    <div className="absolute inset-0 -z-10 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-500 ease-out group-hover:scale-x-100" />
                                </Link>
                            </Reveal>
                        </div>

                        {/* Right: Image */}
                        <div className="relative h-[300px] md:h-auto min-h-full overflow-hidden group">

                            {/* --- GRADIENT OVERLAY --- */}
                            {/* Mobile: Top-to-Bottom fade (bg-gradient-to-b) */}
                            {/* Desktop: Left-to-Right fade (bg-gradient-to-r) */}
                            <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-primary-green to-transparent md:bg-gradient-to-r md:from-primary-green md:to-transparent" style={{ backgroundSize: '100% 100%' }}></div>
                            <Image
                                src="/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg"
                                alt="Process"
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}