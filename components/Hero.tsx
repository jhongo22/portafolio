"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const TypewriterBlock = () => {
    const [textIndex, setTextIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);

    // Tokens for syntax highlighting
    const tokens = [
        { text: "\n    ", color: "text-white" },
        { text: "animarValor", color: "text-blue-400" },
        { text: ": (v) => {", color: "text-white" },
        { text: "\n        motor.iniciar({", color: "text-gray-300" },
        { text: "\n            hacia: v,", color: "text-gray-300" },
        { text: "\n            suavizado: 'calidad_maxima'", color: "text-gray-300" },
        { text: "\n        });", color: "text-gray-300" },
        { text: "\n    }", color: "text-white" }
    ];

    // Build the full string to calculate indices
    const fullText = tokens.map(t => t.text).join("");

    React.useEffect(() => {
        const handleTyping = () => {
            setTextIndex((prev) => {
                if (!isDeleting && prev < fullText.length) {
                    return prev + 1;
                } else if (isDeleting && prev > 0) {
                    return prev - 1;
                }
                return prev;
            });
        };

        let timer: NodeJS.Timeout;

        if (!isDeleting && textIndex === fullText.length) {
            // Finished typing, wait before deleting
            timer = setTimeout(() => setIsDeleting(true), 1000);
        } else if (isDeleting && textIndex === 0) {
            // Finished deleting, wait before typing
            timer = setTimeout(() => setIsDeleting(false), 1000);
        } else {
            // Typing or deleting speed
            const speed = isDeleting ? 30 : 50;
            // Add some randomness for realism
            const randomSpeed = speed + Math.random() * 20;
            timer = setTimeout(handleTyping, randomSpeed);
        }

        return () => clearTimeout(timer);
    }, [textIndex, isDeleting, fullText.length]);

    // Render logic: reconstruct the text with colors up to textIndex
    const renderContent = () => {
        let currentLength = 0;
        const result = [];

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            // If the cursor is past this token, render it fully
            if (textIndex >= currentLength + token.text.length) {
                result.push(
                    <span key={i} className={token.color} style={{ whiteSpace: 'pre-wrap' }}>{token.text}</span>
                );
                currentLength += token.text.length;
            }
            // If the cursor is within this token, render partial and stop
            else if (textIndex > currentLength) {
                const slice = token.text.slice(0, textIndex - currentLength);
                result.push(
                    <span key={i} className={token.color} style={{ whiteSpace: 'pre-wrap' }}>{slice}</span>
                );
                // We reached the cursor
                break;
            }
            // Logic implies we stop loop if we haven't reached token
            else {
                break;
            }
        }
        return result;
    };

    return (
        <div className="min-h-[120px] font-mono text-xs md:text-sm leading-relaxed">
            {renderContent()}
            <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="inline-block w-2 h-4 align-middle bg-blue-400 ml-1"
            />
        </div>
    );
};

const VisualMockup = () => (
    <div className="relative w-full max-w-[500px] lg:max-w-none">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-red-500/20 to-purple-500/20 blur-[100px] rounded-full" />

        {/* Main Card */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col pt-4 px-6 pb-20 gap-6"
        >
            {/* Window Controls */}
            <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>

            {/* Code Content Simulation */}
            <div className="space-y-3 font-mono text-xs md:text-sm overflow-hidden">
                <div className="flex gap-4">
                    <span className="text-purple-400">const</span>
                    <span className="text-blue-400">desarrollador</span>
                    <span className="text-white">=</span>
                    <span className="text-yellow-400">{`{`}</span>
                </div>
                <div className="pl-6 space-y-1.5">
                    <div>
                        <span className="text-gray-400 font-bold italic mr-2">// Apasionado por la automatización inteligente</span>
                    </div>
                    <div>
                        <span className="text-pink-400">rol:</span>
                        <span className="text-green-400"> "Desarrollador Full Stack & IA"</span>,
                    </div>
                    <div>
                        <span className="text-pink-400">especialidad:</span>
                        <span className="text-green-400"> ["Desarrollo web", "Agentes de IA", "n8n"]</span>,
                    </div>
                    <div>
                        <span className="text-pink-400">enfoque:</span>
                        <span className="text-green-400"> "Soluciones digitales"</span>,
                    </div>

                    {/* Animated Typewriter Block */}
                    <TypewriterBlock />

                </div>
                <div className="text-yellow-400">{`};`}</div>

                <div className="pt-2 text-gray-500 italic">
                    {`// Optimizado para escalabilidad`} <br />
                    <span className="text-blue-400">export default</span> construir(desarrollador);
                </div>
            </div>

            {/* Floating Stats UI */}
            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-3 rounded-xl shadow-xl flex items-center gap-3"
            >
                <div className="bg-green-500/20 p-2 rounded-lg text-green-400 font-bold text-sm">
                    99.9%
                </div>
                <div className="text-[10px] text-white/70 uppercase tracking-tighter">
                    Rendimiento <br />
                </div>
            </motion.div>
        </motion.div>
    </div>
);

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full min-h-screen text-white flex items-center overflow-hidden pt-24 lg:pt-0">
            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Column - Content */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="space-y-6"
                        >
                            <h1 className="text-6xl md:text-7xl font-black tracking-tighter leading-[1.1]">
                                Desarrollador <br />
                                <span className="text-white">Full Stack & AI</span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                                className="text-base md:text-lg text-gray-400 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed"
                            >
                                Enfocado en crear soluciones digitales escalables integrando inteligencia artificial para optimizar la operación sin intervención humana.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start items-center"
                            >
                                <Link
                                    href="#proyectos"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 text-lg min-w-[180px]"
                                >
                                    Ver Proyectos
                                </Link>

                                <Link
                                    href="https://wa.me/573004435894"
                                    className="inline-flex items-center justify-center px-8 py-3.5 bg-transparent text-white font-bold rounded-full hover:bg-white/10 transition-all hover:scale-105 active:scale-95 text-lg border-2 border-white/20 min-w-[180px]"
                                >
                                    Hablemos
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column - Visual Mockup */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex items-center justify-center lg:mt-0 mt-8"
                    >
                        <VisualMockup />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
