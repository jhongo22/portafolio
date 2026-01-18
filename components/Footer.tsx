"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contacto" className="w-full pt-20 pb-10 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* CTA Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 mb-20 gap-10">
                    <div className="max-w-2xl text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-[0.9]">
                            ¿Tienes un proyecto <br />
                            <span className="text-white/30">en mente?</span>
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg leading-snug">
                            Estoy disponible para nuevos proyectos y colaboraciones interesantes.
                            Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                        </p>
                    </div>
                    <Link
                        href="https://wa.me/573004435894"
                        className="group relative inline-flex items-center justify-center overflow-hidden transition-transform hover:scale-105 active:scale-95"
                    >
                        <span className="relative px-10 py-5 bg-white text-black font-black uppercase tracking-tighter text-xl rounded-sm hover:bg-gray-200 transition-all flex items-center gap-3">
                            Hablemos hoy
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-bold text-white tracking-tighter">
                            Jhon.dev
                        </div>
                        <p className="text-zinc-500 leading-relaxed">
                            Creando productos digitales de alto impacto con pasión por los detalles
                            y la excelencia técnica.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, link: "https://github.com/jhongo22/" },
                                { icon: Linkedin, link: "#" },
                                { icon: Mail, link: "mailto:jhonneider1234567@gmail.com" }
                            ].map((social, i) => (
                                <Link
                                    key={i}
                                    href={social.link}
                                    className="p-3 rounded-full bg-white/5 border border-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                                >
                                    <social.icon className="w-5 h-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Navegación</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Inicio", href: "#inicio" },
                                { name: "Stack", href: "#stack" },
                                { name: "Habilidades", href: "#habilidades" },
                                { name: "Sobre Mí", href: "#sobre-mi" },
                                { name: "Proyectos", href: "#proyectos" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-zinc-500 hover:text-white transition-colors uppercase text-xs font-bold tracking-widest">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Ubicación</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            Medellin <br />
                            Colombia <br />

                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
                    <p className="text-zinc-600 text-sm">
                        © {currentYear} Jhon Gonzalez. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-8 text-sm text-zinc-600">
                        <Link href="#" className="hover:text-zinc-400">Políticas de Privacidad</Link>
                        <Link href="#" className="hover:text-zinc-400">Términos y Condiciones</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default React.memo(Footer);
