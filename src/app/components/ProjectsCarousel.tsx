'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Image from 'next/image';

const projects = [
    { id: 1, img: "/images/0d366649-83cb-4f65-abe8-aadb6d3cca61.jpg", title: "Kert 1." },
    { id: 2, img: "/images/1c40a67a-cd12-4797-86f2-9742ba97a2e8.jpg", title: "Kert 2." },
    { id: 3, img: "/images/4f50f071-0bc7-4b7a-928e-4538c438ed49.jpg", title: "Kert 3." },
    { id: 4, img: "/images/5ec93c46-30c1-495b-ad0b-f0fac59d59aa.jpg", title: "Kert 4." },
    { id: 5, img: "/images/7a58a5c7-c634-4314-a2dc-2851125af4a4.jpg", title: "Kert 5." },
    { id: 6, img: "/images/175f5b46-0d36-4830-b1d9-6a8d6e7a1539.jpg", title: "Kert 6." },
];

export default function ProjectsCarousel() {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            dragFree: true,
            align: 'start',
            containScroll: false
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1, // Slightly slower speed usually looks better for wide images
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            })
        ]
    );

    return (
        <div className="py-12 bg-transparent">
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex touch-pan-y -ml-6">
                    {projects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            // CHANGED: Dimensions are now wider than they are tall (Landscape)
                            // Mobile: 300px wide, 220px tall
                            // Desktop: 500px wide, 350px tall
                            className="relative flex-none pl-6 w-[300px] h-[220px] md:w-[500px] md:h-[350px] select-none"
                        >
                            <div className="group relative w-full h-full rounded-xl overflow-hidden shadow-lg cursor-pointer">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    // Updated sizes prop to match new width
                                    sizes="(max-width: 768px) 100vw, 500px"
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay - Matches references/page.tsx style */}
                                <div className="absolute inset-0 bg-primary-green/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <p className="font-heading text-2xl text-white">
                                            {project.title}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}