'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Reveal from '../components/Reveal';

// --- MOCK DATA ---
const projects = [
    { id: 1, src: "/images/0d366649-83cb-4f65-abe8-aadb6d3cca61.jpg", title: "Hillside Residence" },
    { id: 2, src: "/images/4f50f071-0bc7-4b7a-928e-4538c438ed49.jpg", title: "Tuscan Villa Garden" },
    { id: 3, src: "/images/1c40a67a-cd12-4797-86f2-9742ba97a2e8.jpg", title: "Penthouse Oasis" },
    { id: 4, src: "/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg", title: "Zen Harmony" },
    { id: 5, src: "/images/7a58a5c7-c634-4314-a2dc-2851125af4a4.jpg", title: "Stone Pathway" },
    { id: 6, src: "/images/175f5b46-0d36-4830-b1d9-6a8d6e7a1539.jpg", title: "Urban Minimalist" },
    { id: 7, src: "/images/0d366649-83cb-4f65-abe8-aadb6d3cca61.jpg", title: "Olive Grove" },
    { id: 8, src: "/images/4f50f071-0bc7-4b7a-928e-4538c438ed49.jpg", title: "Rooftop Lounge" },
    { id: 9, src: "/images/1c40a67a-cd12-4797-86f2-9742ba97a2e8.jpg", title: "Water Feature" },
];

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <main className="bg-[#F4F3EF] min-h-screen">
            <Header />

            {/* --- HERO SECTION --- */}
            <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <Image
                    src="/images/gallery.jpg"
                    alt="Gallery Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
                    <Reveal>
                        <span className="block text-accent-gold uppercase tracking-[3px] text-sm font-bold mb-4">
                            Referenciák
                        </span>
                        <h3 className="font-heading text-5xl md:text-6xl text-white mb-6">
                            Kertjeink Galériája
                        </h3>
                    </Reveal>
                </div>
            </section>

            {/* --- UNIFORM GRID --- */}
            <section className="py-24 px-4 md:px-8 max-w-[1400px] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Reveal key={project.id}>
                            <div
                                className="group relative overflow-hidden rounded-xl cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                                onClick={() => setSelectedImage(project.src)}
                            >
                                {/* IMAGE WRAPPER */}
                                <div className="relative w-full aspect-[4/3]">
                                    <Image
                                        src={project.src}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>

                                {/* OVERLAY CONTAINER - FIX: Combined into one line */}
                                <div className="absolute inset-0 transition-all duration-300 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-100 flex items-end justify-start p-6 md:bg-none md:bg-primary-green/60 md:opacity-0 md:group-hover:opacity-100 md:items-center md:justify-center">

                                    {/* TEXT CONTENT */}
                                    <div className="text-left translate-y-0 md:text-center md:translate-y-4 md:group-hover:translate-y-0 md:transition-transform md:duration-500">
                                        <p className="font-heading text-2xl text-white drop-shadow-md md:drop-shadow-none">
                                            {project.title}
                                        </p>
                                        <span className="text-accent-gold text-xs uppercase tracking-widest block mt-2 drop-shadow-md md:drop-shadow-none">
                                            Megtekintés
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </Reveal>
                    ))}
                </div>
            </section>

            {/* --- LIGHTBOX MODAL --- */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setSelectedImage(null)}
                >
                    <div className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center">
                        <button className="absolute -top-12 right-0 text-white hover:text-accent-gold text-4xl font-light">
                            &times;
                        </button>

                        <Image
                            src={selectedImage}
                            alt="Selected Project"
                            width={1200}
                            height={900}
                            className="object-contain max-h-[85vh] rounded-md shadow-2xl"
                        />
                    </div>
                </div>
            )}

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