'use client';
import React from 'react';
import { motion, Variants } from 'framer-motion'; // 1. Import Variants type
import {
    ClipboardList,
    PenTool,
    Ruler,
    Compass,
    Shovel,
    BrickWall,
    Sprout,
    Infinity as InfinityIcon,
    Droplets
} from 'lucide-react';

const StepVisual = ({ type }: { type: string }) => {

    // 2. Explicitly type these objects as 'Variants' to fix the Red Squiggly line
    const drawVariant: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.5, ease: "easeInOut" }
        }
    };

    const floatVariant: Variants = {
        animate: {
            y: [0, -10, 0],
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }
    };

    return (
        <div className="w-full h-full bg-[#F4F3EF] border border-[#E0DED5] p-8 relative overflow-hidden group flex flex-col items-center justify-center">

            {/* Architectural Grid Background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none"
                 style={{ backgroundImage: 'linear-gradient(#2C3D33 0.5px, transparent 0.5px), linear-gradient(90deg, #2C3D33 0.5px, transparent 0.5px)', backgroundSize: '30px 30px' }}>
            </div>

            {/* Corner Accents */}
            <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-primary-green"></div>
            <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-primary-green"></div>
            <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-primary-green"></div>
            <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-primary-green"></div>

            {/* CENTER CONTENT */}
            <div className="relative z-10">

                {/* --- CONSULTATION --- */}
                {type === 'consultation' && (
                    <motion.div initial="hidden" whileInView="visible" className="relative">
                        <motion.div variants={floatVariant} animate="animate" className="relative z-10">
                            <ClipboardList strokeWidth={1} className="w-24 h-24 text-primary-green" />
                        </motion.div>
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="absolute -bottom-2 -right-4 bg-accent-gold/10 p-2 rounded-full backdrop-blur-sm"
                        >
                            <PenTool strokeWidth={1.5} className="w-10 h-10 text-accent-gold" />
                        </motion.div>
                        <p className="mt-8 text-xs uppercase tracking-[3px] text-accent-gold font-bold text-center">Igényfelmérés</p>
                    </motion.div>
                )}

                {/* --- DESIGN --- */}
                {type === 'design' && (
                    <motion.div initial="hidden" whileInView="visible" className="relative">
                        <div className="flex items-center justify-center gap-2">
                            <motion.div
                                initial={{ rotate: -45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <Ruler strokeWidth={1} className="w-20 h-20 text-primary-green/80" />
                            </motion.div>
                            <motion.div
                                initial={{ rotate: 45, opacity: 0 }}
                                whileInView={{ rotate: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <Compass strokeWidth={1} className="w-20 h-20 text-accent-gold" />
                            </motion.div>
                        </div>
                        {/* Blueprint Lines */}
                        <svg className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 opacity-20">
                            <motion.circle cx="80" cy="80" r="30" stroke="#2C3D33" strokeWidth="1" fill="none" variants={drawVariant} />
                            <motion.rect x="40" y="40" width="80" height="80" stroke="#2C3D33" strokeWidth="1" fill="none" variants={drawVariant} />
                        </svg>
                        <p className="mt-6 text-xs uppercase tracking-[3px] text-accent-gold font-bold text-center">Tervezés & Vázlat</p>
                    </motion.div>
                )}

                {/* --- BUILD --- */}
                {type === 'build' && (
                    <motion.div initial="hidden" whileInView="visible" className="relative">
                        <motion.div variants={floatVariant} animate="animate" className="flex flex-col items-center">
                            <BrickWall strokeWidth={1} className="w-20 h-20 text-primary-green" />
                            <motion.div
                                className="absolute -right-6 top-1/2"
                                initial={{ rotate: 0, y: 10 }}
                                whileInView={{ rotate: -20, y: 0 }}
                                transition={{ type: "spring", stiffness: 100 }}
                            >
                                <Shovel strokeWidth={1.5} className="w-12 h-12 text-accent-gold fill-accent-gold/10" />
                            </motion.div>
                        </motion.div>
                        <p className="mt-8 text-xs uppercase tracking-[3px] text-accent-gold font-bold text-center">Kivitelezés</p>
                    </motion.div>
                )}

                {/* --- CARE --- */}
                {type === 'care' && (
                    <motion.div initial="hidden" whileInView="visible" className="relative flex flex-col items-center">
                        <div className="relative">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 4, repeat: Infinity }}
                            >
                                <Sprout strokeWidth={1} className="w-24 h-24 text-primary-green" />
                            </motion.div>

                            <motion.div
                                className="absolute -top-2 -right-4"
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Droplets strokeWidth={1.5} className="w-8 h-8 text-blue-400/60" />
                            </motion.div>
                        </div>

                        <div className="flex items-center gap-2 mt-6 text-accent-gold/80">
                            <InfinityIcon strokeWidth={1.5} className="w-5 h-5" />
                            <span className="text-xs uppercase tracking-[3px] font-bold">Gondoskodás</span>
                        </div>
                    </motion.div>
                )}

            </div>
        </div>
    );
};

export default StepVisual;