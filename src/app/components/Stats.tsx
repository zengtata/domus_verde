'use client';
import React from 'react';
import Image from 'next/image';
import Reveal from './Reveal';

const statBlocks = [
    {
        id: 1,
        type: 'intro',
        image: "/images/0d366649-83cb-4f65-abe8-aadb6d3cca61.jpg",
        title: "Számok, melyek mögött",
        highlight: "kertek élnek.",
        desc: "Az elmúlt évtized eredményei nem csak statisztikák, hanem megvalósult álmok."
    },
    {
        id: 2,
        type: 'stat-icon',
        image: "/images/175f5b46-0d36-4830-b1d9-6a8d6e7a1539.jpg",
        value: "100%",
        label: "Ügyfél Elégedettség"
    },
    {
        id: 3,
        type: 'stat',
        image: "/images/4f50f071-0bc7-4b7a-928e-4538c438ed49.jpg",
        value: "140+",
        label: "Megvalósult Kert"
    },
    {
        id: 4,
        type: 'stat',
        image: "/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg",
        value: "5000+",
        label: "Elültetett Növény"
    },
    {
        id: 5,
        type: 'stat',
        image: "/images/7a58a5c7-c634-4314-a2dc-2851125af4a4.jpg",
        value: "12",
        label: "Év Tapasztalat"
    },
    {
        id: 6,
        type: 'stat',
        image: "/images/31b151ba-ee87-4f54-8789-d81c0d61fdef.jpg",
        value: "0",
        label: "Rizikós Projekt"
    },
];

export default function StatsMosaic() {
    return (
        <section className="py-16 bg-primary-green">
            <div className="max-w-[1000px] mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">

                    {statBlocks.map((block, index) => (
                        <Reveal
                            key={block.id}
                            delay={index * 100}
                            className="relative h-full rounded-xl overflow-hidden shadow-xl group border border-white/5 cursor-pointer"
                        >
                            {/* BACKGROUND IMAGE */}
                            <Image
                                src={block.image}
                                alt="Background"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                // Start BLURRED, unblur on hover
                                className="object-cover transition-all duration-700 scale-110 blur-[4px] group-hover:scale-100 group-hover:blur-0"
                            />

                            {/* DARK GRADIENT OVERLAY - FIXED READABILITY */}
                            {/* This gradient ensures text is always readable. It lightens slightly on hover but stays dark. */}
                            <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/80 group-hover:via-black/50 transition-colors duration-500" />

                            {/* CONTENT LAYER */}
                            <div className="relative z-10 h-full p-6 flex flex-col justify-center items-center text-center">

                                {/* TYPE: INTRO TEXT */}
                                {block.type === 'intro' && (
                                    <div className="text-left w-full h-full flex flex-col justify-between">
                                        <div>
                                            <h3 className="font-heading text-2xl text-white leading-tight mb-3 drop-shadow-lg">
                                                {block.title} <br/> <span className="text-accent-gold italic">{block.highlight}</span>
                                            </h3>
                                            <p className="text-white/90 text-xs leading-relaxed max-w-[250px] drop-shadow-md font-medium">
                                                {block.desc}
                                            </p>
                                        </div>
                                        <div className="w-8 h-[2px] bg-accent-gold mt-4 shadow-lg"></div>
                                    </div>
                                )}

                                {/* TYPE: PURE IMAGE (Icon reveal) */}
                                {block.type === 'image-only' && (
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                                        <span className="text-white text-xs tracking-[3px] uppercase border border-white/30 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md shadow-lg">
                                            Galéria
                                        </span>
                                    </div>
                                )}

                                {/* TYPE: STANDARD STAT */}
                                {block.type === 'stat' && (
                                    <>
                                        {/* Added drop-shadow-xl to separate text from busy backgrounds */}
                                        <span className="font-heading text-5xl md:text-6xl text-accent-gold mb-1 drop-shadow-xl">
                                            {block.value}
                                        </span>
                                        <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-white font-bold drop-shadow-md">
                                            {block.label}
                                        </p>
                                    </>
                                )}

                                {/* TYPE: STAT WITH ICON */}
                                {block.type === 'stat-icon' && (
                                    <>
                                        <div className="relative">
                                            <span className="font-heading text-5xl md:text-6xl text-white drop-shadow-xl">
                                                {block.value}
                                            </span>
                                            {/* Heart Icon */}
                                            <svg className="absolute -top-2 -right-6 w-5 h-5 text-red-600 animate-pulse drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                                            </svg>
                                        </div>
                                        <p className="text-[10px] md:text-xs uppercase tracking-[2px] text-white/90 font-bold mt-1 drop-shadow-md">
                                            {block.label}
                                        </p>
                                    </>
                                )}
                            </div>
                        </Reveal>
                    ))}

                </div>
            </div>
        </section>
    );
}