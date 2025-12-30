"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Globe,
    Layers,
    Sparkles,
    Zap
} from "lucide-react";

const services = [
    {
        title: "Desarrollo Web Full Stack",
        description: "Creación de aplicaciones web modernas, rápidas y escalables utilizando React, Next.js y el ecosistema de Node.js.",
        icon: Globe,
        color: "text-blue-400"
    },
    {
        title: "Inteligencia Artificial",
        description: "Integración de LLMs, agentes de IA y automatizaciones inteligentes para potenciar los procesos de negocio.",
        icon: Cpu,
        color: "text-purple-400"
    },
    {
        title: "Arquitectura de Software",
        description: "Diseño de sistemas robustos y mantenibles siguiendo los mejores patrones y principios de ingeniería.",
        icon: Layers,
        color: "text-pink-400"
    },
    {
        title: "Automatización de Workflows",
        description: "Optimización de tareas mediante flujos automáticos conectando diferentes herramientas y APIs.",
        icon: Zap,
        color: "text-yellow-400"
    },
    {
        title: "Optimización de Performance",
        description: "Análisis y mejora del rendimiento de aplicaciones existentes para garantizar una experiencia de usuario fluida.",
        icon: Sparkles,
        color: "text-green-400"
    },
    {
        title: "Desarrollo de APIs",
        description: "Diseño e implementación de APIs REST y GraphQL seguras y bien documentadas.",
        icon: Code2,
        color: "text-orange-400"
    }
];

export default function Services() {
    return (
        <section id="servicios" className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400"
                    >
                        Lo que ofrezco
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-medium text-white tracking-tight"
                    >
                        Servicios Especializados
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl text-lg"
                    >
                        Soluciones tecnológicas a medida, enfocadas en la calidad del código,
                        la escalabilidad y la experiencia del usuario final.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-[2rem] bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start gap-4"
                        >
                            <div className={`p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 ${service.color}`}>
                                <service.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mt-2">{service.title}</h3>
                            <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
