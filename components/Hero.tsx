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
        { text: "animarValor", color: "text-red-400" },
        { text: ": (v) => {", color: "text-white" },
        { text: "\n        motor.iniciar({", color: "text-gray-300" },
        { text: "\n            hacia: v,", color: "text-gray-300" },
        { text: "\n            suavizado: 'rapido'", color: "text-gray-300" },
        { text: "\n        });", color: "text-gray-300" },
        { text: "\n    }", color: "text-white" }
    ];

    const fullText = tokens.map(t => t.text).join("");

    React.useEffect(() => {
        const handleTyping = () => {
            setTextIndex((prev) => {
                if (!isDeleting && prev < fullText.length) return prev + 1;
                if (isDeleting && prev > 0) return prev - 1;
                return prev;
            });
        };

        let timer: NodeJS.Timeout;
        if (!isDeleting && textIndex === fullText.length) {
            timer = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && textIndex === 0) {
            timer = setTimeout(() => setIsDeleting(false), 1000);
        } else {
            const speed = isDeleting ? 20 : 40;
            timer = setTimeout(handleTyping, speed + Math.random() * 20);
        }
        return () => clearTimeout(timer);
    }, [textIndex, isDeleting, fullText.length]);

    const renderContent = () => {
        let currentLength = 0;
        const result = [];
        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (textIndex >= currentLength + token.text.length) {
                result.push(<span key={i} className={token.color} style={{ whiteSpace: 'pre-wrap' }}>{token.text}</span>);
                currentLength += token.text.length;
            } else if (textIndex > currentLength) {
                const slice = token.text.slice(0, textIndex - currentLength);
                result.push(<span key={i} className={token.color} style={{ whiteSpace: 'pre-wrap' }}>{slice}</span>);
                break;
            } else break;
        }
        return result;
    };

    return (
        <div className="min-h-[120px] font-mono text-xs md:text-sm leading-relaxed">
            {renderContent()}
            <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="inline-block w-2 h-4 align-middle bg-red-400 ml-1" />
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
        </motion.div>
    </div>
);

export default function Hero() {
    return (
        <section id="inicio" className="relative w-full min-h-screen text-white flex items-center overflow-hidden pt-32 lg:pt-0">
            <div className="container mx-auto px-4 md:px-8 relative z-10 w-full mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-center">

                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <h1 className="font-black tracking-tighter leading-[0.85] uppercase flex flex-col items-center lg:items-start select-none">
                                <span className="text-3xl md:text-2xl lg:text-3xl text-white/90 mb-4">Jhon Gonzalez.</span>
                                <span className="text-5xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-white/30">Desarrollador</span>
                                <span className="text-6xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-white">Full Stack</span>
                                <span className="text-6xl md:text-5xl lg:text-[3.5rem] xl:text-[4.5rem] text-white">& IA.</span>
                            </h1>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                                className="text-lg md:text-xl text-gray-400 max-w-lg lg:max-w-md mx-auto lg:mx-0 leading-snug"
                            >
                                Transformo ideas en ecosistemas digitales. Especialista en <span className="text-white font-bold">Arquitecturas Full Stack, Agentes de IA y Automatizaciones inteligentes</span> que escalan operaciones sin límites.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                                className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start items-center"
                            >
                                <Link
                                    href="#proyectos"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white/20 text-white font-bold rounded-sm hover:bg-white hover:text-black transition-all hover:scale-105 active:scale-95 text-lg min-w-[220px] tracking-tight uppercase"
                                >
                                    Ver Portafolio
                                </Link>

                                <Link
                                    href="https://wa.me/573004435894"
                                    className="inline-flex items-center justify-center px-10 py-4 bg-white text-black font-bold rounded-sm hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 text-lg min-w-[220px] tracking-tight uppercase"
                                >
                                    Hablemos
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="flex items-center justify-center lg:mt-0 mt-12 w-full"
                    >
                        <VisualMockup />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
