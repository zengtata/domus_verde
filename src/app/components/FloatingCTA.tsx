'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function FloatingCTA() {
    const pathname = usePathname();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // 1. Hide immediately on Home Page ('/')
        if (pathname === '/') {
            // We wrap this in a timeout to avoid the "synchronous setState" warning
            // This pushes the update to the next tick, which is safe.
            const timer = setTimeout(() => setIsVisible(false), 0);
            return () => clearTimeout(timer);
        } else {
            // 2. On other pages, show it with a slight delay for a smooth entrance
            const timer = setTimeout(() => setIsVisible(true), 500);
            return () => clearTimeout(timer);
        }
    }, [pathname]);

    // Don't render anything if on home page or not yet visible
    if (!isVisible) return null;

    return (
        <div className={`fixed bottom-8 right-8 z-[90] transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Link
                href="/#contact" // Redirects to Home Page -> #contact section
                className="group flex items-center gap-3"
            >
                {/* Text Bubble - "Interested?" */}
                <div className="bg-white text-primary-green px-5 py-3 rounded-full shadow-xl border border-primary-green/10 transition-transform duration-300 origin-right group-hover:scale-105">
                    <span className="font-heading font-bold text-sm uppercase tracking-widest">
                        Érdekli?
                    </span>
                </div>

                {/* Icon Container */}
                <div className="relative flex h-16 w-16">

                    {/* 1. THE PULSE EFFECT (Draws attention) */}
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-gold opacity-40"></span>

                    {/* 2. The Actual Button */}
                    <div className="relative inline-flex h-16 w-16 bg-accent-gold rounded-full items-center justify-center shadow-2xl text-white transition-all duration-300 group-hover:bg-[#a18a5e] group-hover:scale-110 group-hover:rotate-12 border-2 border-white/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </div>
                </div>
            </Link>
        </div>
    );
}