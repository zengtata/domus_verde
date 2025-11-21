'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { label: 'Rólunk', href: '/about' },
        { label: 'Galéria', href: '/references' },
        { label: 'Folyamat', href: '/process' },
        { label: 'Kapcsolat', href: '/#contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        // 1. Removed background classes (backdrop-blur, bg-white) from the parent Header
        // Only keeping layout classes here.
        <header className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>

            {/* 2. NEW: Background Layer */}
            {/* We move the styles here. Since this is an absolute child, it won't constrain the 'fixed' menu. */}
            <div className={`absolute inset-0 -z-10 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}></div>

            <div className="max-w-[1200px] mx-auto px-5 flex justify-between items-center">

                {/* LOGO */}
                <Link href="/" className={`relative z-[110] font-heading font-bold text-2xl tracking-wider transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : (scrolled ? 'text-primary-green' : 'text-white')}`}>
                    DOMUS VERDE
                </Link>

                {/* DESKTOP NAV */}
                <nav className="hidden md:block">
                    <ul className="flex gap-8">
                        {navItems.map((item) => (
                            <li key={item.label}>
                                <Link
                                    href={item.href}
                                    className={`font-medium text-sm hover:text-accent-gold transition-colors relative group ${scrolled ? 'text-primary-charcoal' : 'text-white'}`}
                                >
                                    {item.label}
                                    <span className="absolute bottom-[-5px] left-0 w-0 h-[1px] bg-accent-gold transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* MOBILE HAMBURGER BUTTON */}
                <button
                    className="md:hidden relative z-[110] p-2 focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-white rotate-45 translate-y-2.5' : (scrolled ? 'bg-[#2C3D33]' : 'bg-white')}`}></span>
                        <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : (scrolled ? 'bg-[#2C3D33]' : 'bg-white')}`}></span>
                        <span className={`w-full h-0.5 rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'bg-white -rotate-45 -translate-y-2' : (scrolled ? 'bg-[#2C3D33]' : 'bg-white')}`}></span>
                    </div>
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            {/* Now that the parent header has no backdrop-filter, this 'fixed inset-0' will correctly cover the whole screen */}
            <div className={`fixed inset-0 bg-[#2C3D33] z-[100] flex flex-col items-center justify-center transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <nav>
                    <ul className="flex flex-col items-center gap-8">
                        {navItems.map((item, idx) => (
                            <li key={item.label} style={{ transitionDelay: `${idx * 100}ms` }} className={`transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
                                <Link
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="font-heading text-3xl text-white hover:text-accent-gold transition-colors"
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="absolute bottom-10 text-white/30 text-xs tracking-[3px] uppercase">
                    Domus Verde Design
                </div>
            </div>
        </header>
    );
}