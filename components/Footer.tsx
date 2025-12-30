"use client";

import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contacto" className="w-full pt-20 pb-10 relative z-10 border-t border-white/5">
            <div className="container mx-auto px-4 md:px-8">
                {/* CTA Section */}
                <div className="flex flex-col lg:flex-row justify-between items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 lg:p-12 mb-20 gap-10">
                    <div className="max-w-2xl text-center lg:text-left space-y-6">
                        <h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-tight">
                            ¿Tienes un proyecto <br />
                            <span className="text-zinc-500">en mente?</span>
                        </h2>
                        <p className="text-zinc-400 text-base md:text-lg">
                            Estoy disponible para nuevos proyectos y colaboraciones interesantes.
                            Hablemos sobre cómo puedo ayudarte a hacerlo realidad.
                        </p>
                    </div>
                    <Link
                        href="mailto:tuemail@ejemplo.com"
                        className="group relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-white rounded-[2rem] group"
                    >
                        <span className="relative px-8 py-4 transition-all ease-in duration-75 bg-white text-black font-bold text-lg rounded-[1.5rem] hover:bg-gray-200 flex items-center gap-3">
                            Empezar un proyecto
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </Link>
                </div>

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <div className="text-2xl font-bold text-white tracking-tighter">
                            Alex.dev
                        </div>
                        <p className="text-zinc-500 leading-relaxed">
                            Creando productos digitales de alto impacto con pasión por los detalles
                            y la excelencia técnica.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, link: "#" },
                                { icon: Linkedin, link: "#" },
                                { icon: Twitter, link: "#" },
                                { icon: Mail, link: "#" }
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
                                { name: "Servicios", href: "#servicios" },
                                { name: "Proyectos", href: "#proyectos" },
                                { name: "Sobre Mí", href: "#sobre-mi" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-zinc-500 hover:text-white transition-colors">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-6 uppercase text-xs tracking-widest">Ubicación</h3>
                        <p className="text-zinc-500 leading-relaxed">
                            Disponible remotamente <br />
                            para todo el mundo. <br />
                            GMT-5
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
