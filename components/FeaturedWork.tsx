"use client";

import { motion } from "framer-motion";
import {
    Play,
    Code,
    Terminal,
    Github,
    Linkedin,
    Mail,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight,
    User
} from "lucide-react";
import Link from "next/link";

export default function FeaturedWork() {
    return (
        <section className="w-full bg-transparent text-zinc-300 py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400"
                    >
                        Conóceme
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase"
                    >
                        Sobre Mí
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl text-lg leading-snug"
                    >
                        Apasionado por los detalles y la excelencia técnica.
                        Mi objetivo es crear productos digitales que dejen huella.
                    </motion.p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column: Featured Image Card (Spans 5 cols on large) */}
                    <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-[600px] lg:h-auto group border border-white/5">
                        {/* Background Image */}
                        <img
                            src="/sobre-mi-futuristic-v2.png"
                            alt="Visionary Developer"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Orange overlay tint to match style */}
                        <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>

                        {/* Navigation Arrows */}
                        <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-colors border border-white/5">
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 backdrop-blur-sm text-white p-3 rounded-full transition-colors border border-white/5">
                            <ChevronRight className="w-6 h-6" />
                        </button>

                    </div>

                    {/* Right Column: Bento Grid (Spans 7 cols on large) */}
                    <div className="lg:col-span-7 flex flex-col gap-6">

                        {/* Row 1: Profile Header */}
                        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                                    <img
                                        src="/ai-avatar.png"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl text-white font-bold uppercase tracking-tighter mb-1">Jhon Gonzalez</h1>
                                    <p className="text-base text-zinc-500 font-mono uppercase tracking-widest text-[10px]">Desarrollador Full Stack & IA</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                                <div className="flex gap-8 text-sm">
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5 font-bold uppercase tracking-tighter">Proyectos</span>
                                        <span className="text-white font-black text-xl">10+</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5 font-bold uppercase tracking-tighter">Años</span>
                                        <span className="text-white font-black text-xl">1+</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5 font-bold uppercase tracking-tighter">STACK</span>
                                        <span className="text-white font-black text-xl">12+</span>
                                    </div>
                                </div>
                                <Link
                                    href="https://github.com/jhongo22/"
                                    className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-sm transition-colors w-full md:w-auto justify-center"
                                >
                                    <Github className="w-3 h-3 fill-current" />
                                    View GitHub
                                </Link>
                            </div>
                        </div>

                        {/* Row 2: Bio & Socials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Bio Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px]">
                                <p className="text-lg text-zinc-400 leading-snug">
                                    Experto en la arquitectura de soluciones digitales de alto rendimiento. Mi enfoque combina el desarrollo <span className="text-white font-bold">Full Stack</span> con la potencia de la <span className="text-white font-bold">Inteligencia Artificial</span> para automatizar operaciones complejas y escalar negocios.
                                </p>
                                <div className="flex flex-col gap-3 mt-8">
                                    <div className="flex items-center gap-3 text-zinc-500 text-sm font-bold uppercase tracking-tighter">
                                        <Terminal className="w-4 h-4" />
                                        <span>Custom MCP Servers & CLI Tools</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-500 text-sm font-bold uppercase tracking-tighter">
                                        <Code className="w-4 h-4" />
                                        <span>AI-Driven Automation</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials Card */}
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 flex flex-col justify-between h-full min-h-[320px]">
                                <div className="space-y-3">
                                    {/* LinkedIn */}
                                    <div className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer">
                                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">LinkedIn</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-[10px] uppercase font-bold tracking-widest">Connect</span>
                                            <Linkedin className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                        </div>
                                    </div>
                                    {/* Github */}
                                    <Link
                                        href="https://github.com/jhongo22/"
                                        className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Github</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-[10px] uppercase font-bold tracking-widest">Explore</span>
                                            <Github className="w-4 h-4 group-hover:text-white transition-colors" />
                                        </div>
                                    </Link>
                                    {/* Mail */}
                                    <Link
                                        href="mailto:jhonneider1234567@gmail.com"
                                        className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer"
                                    >
                                        <span className="text-xs font-bold uppercase tracking-widest text-zinc-300">Email</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-[10px] uppercase font-bold tracking-widest">Write</span>
                                            <Mail className="w-4 h-4 group-hover:text-white transition-colors" />
                                        </div>
                                    </Link>
                                </div>

                                <Link href="https://wa.me/573004435894" className="w-full mt-4 bg-zinc-300 hover:bg-white text-black font-black uppercase tracking-tighter text-lg py-3 px-6 rounded-sm flex items-center justify-between group transition-colors">
                                    <span>Contacto</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
