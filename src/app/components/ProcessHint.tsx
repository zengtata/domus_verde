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
                            <Reveal>
                <span className="text-accent-gold uppercase tracking-[3px] text-xs font-bold mb-4 block">
                   Lépésről Lépésre
                </span>
                                <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight">
                                    Így válik a látványterv élő természetté.
                                </h2>
                                <p className="text-white/80 mb-8 leading-relaxed">
                                    Átlátható, 4 lépéses folyamatunk garancia a minőségre. Ismerje meg, hogyan vezetjük végig Önt a tervezőasztaltól az első kerti partiig.
                                </p>

                                {/* Simplified Steps List */}
                                <ul className="grid grid-cols-2 gap-4 mb-10">
                                    {['Konzultáció', 'Tervezés', 'Kivitelezés', 'Átadás'].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm font-medium text-white/90">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <Link
                                    href="/process"
                                    className="inline-block bg-white text-primary-green px-8 py-3 rounded-full uppercase tracking-wider text-xs font-bold hover:bg-accent-gold hover:text-white transition-all duration-300 w-fit"
                                >
                                    Részletek
                                </Link>
                            </Reveal>
                        </div>

                        {/* Right: Image */}
                        <div className="relative h-[400px] md:h-auto min-h-full">
                            <Image
                                src="/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg" // Use a process-related image (e.g. planning or planting)
                                alt="Process"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                            {/* Gradient Overlay to blend image with text area */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary-green via-transparent to-transparent md:hidden"></div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}