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
            containScroll: false // Ensures seamless infinite scrolling
        },
        [
            AutoScroll({
                playOnInit: true,
                speed: 1,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            })
        ]
    );

    return (
        <div className="py-12 bg-transparent">
            <div className="overflow-hidden" ref={emblaRef}>
                {/* 1. Removed 'gap-6' here */}
                <div className="flex touch-pan-y -ml-6">
                    {projects.map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            // 2. Added 'pl-6' here to create the gap on the slide itself
                            className="relative flex-none pl-6 w-[300px] h-[400px] md:w-[350px] md:h-[450px] select-none"
                        >
                            {/* Inner container for rounding/shadow (so padding doesn't break border-radius) */}
                            <div className="relative w-full h-full rounded-xl overflow-hidden shadow-lg">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 350px"
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                                <div className="absolute bottom-8 left-6 pointer-events-none">
                                    <div className="flex items-center">
                                        <div className="h-8 w-[3px] bg-[#B49B6C] mr-3"></div>
                                        <span className="text-white font-heading text-xl tracking-wide">
                                            {project.title}
                                        </span>
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