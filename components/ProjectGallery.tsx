"use client";

import React, { useState } from "react";
import { Heart, Bookmark, Share2, ExternalLink, MessageCircle, Repeat2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCategory = "web" | "automation";

interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    image: string;
    description: string;
    stack: string[];
    link?: string;
    likes: number;
    comments: number;
    shares: number;
}

const projects: Project[] = [
    {
        id: 1,
        title: "Alquiler de Ecógrafos",
        category: "web",
        image: "/projects/ecografos.png",
        description: "🩺 Plataforma SaaS robusta para el alquiler de equipos médicos de alta gama. \n\n✅ Full Stack: TypeScript, Node.js y Supabase para gestión de datos en tiempo real. \n✅ Panel Administrativo: Control de stock y disponibilidad mediante calendario interactivo. \n✅ Wizard de Reservas: Formulario inteligente con validación de disponibilidad y registro automatizado. \n✅ SEO & Analytics: Optimización total para motores de búsqueda y rastreo de conversiones avanzado. \n\n#Salud #TypeScript #SaaS #MedicalTech",
        stack: ["TypeScript", "Node.js", "Supabase"],
        link: "https://alquilerdeecografos.com/",
        likes: 184,
        comments: 32,
        shares: 76
    },
    {
        id: 2,
        title: "Vive Feliz Sin Dolor",
        category: "web",
        image: "/projects/vivefeliz.png",
        description: "🏥 Sitio web integral para consultorio de medicina regenerativa. \n\n✅ Desarrollado en WordPress con enfoque en conversión. \n✅ SEO local avanzado y Analytics para rastreo de pacientes. \n✅ Integración de Agente IA de texto y Voz (vía ElevenLabs) para atención 24/7. \n✅ Optimizado en Google Search Console para máxima visibilidad. \n\n#Salud #AI #SEO #WordPress",
        stack: ["WordPress", "ElevenLabs AI", "SEO / Analytics"],
        link: "https://vivefelizsindolor.com/",
        likes: 145,
        comments: 24,
        shares: 56
    },
    {
        id: 3,
        title: "SaaS Dashboard AI",
        category: "web",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
        description: "✨ Visualización de datos llevada al siguiente nivel. Este dashboard usa IA para predecir tendencias financieras en tiempo real. ¿Qué opinan del modo oscuro? \n\n#Dashboard #AI #DataViz",
        stack: ["React", "Tremor", "Python API"],
        link: "https://example.com",
        likes: 89,
        comments: 12,
        shares: 32
    },
    {
        id: 4,
        title: "Booking System",
        category: "web",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        description: "📅 Sistema de reservas minimalista. Sincronización bidireccional con Google Calendar y notificaciones por WhatsApp. La eficiencia primero.",
        stack: ["Supabase", "Prisma", "Tailwind"],
        link: "https://example.com",
        likes: 230,
        comments: 45,
        shares: 89
    },
    {
        id: 5,
        title: "Auto-CRM Sync Bot",
        category: "automation",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
        description: "🤖 Adiós al ingreso manual de datos. Este bot sincroniza leads desde formularios web directamente a Salesforce y notifica al equipo en Slack en <1 segundo.",
        stack: ["n8n", "Webhooks", "Salesforce"],
        likes: 92,
        comments: 8,
        shares: 15
    },
    {
        id: 6,
        title: "Bot de Facturación PDF",
        category: "automation",
        image: "https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2070&auto=format&fit=crop",
        description: "📄 Automaticé el 100% del procesamiento de facturas. El bot lee correos, extrae datos con OCR y carga todo al sistema contable sin intervención humana.",
        stack: ["Python", "OCR", "Gmail API"],
        likes: 78,
        comments: 14,
        shares: 22
    },
    {
        id: 7,
        title: "Content Generator AI",
        category: "automation",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
        description: "⚡ Creación de contenido automatizada. Analiza tendencias, genera copys con GPT-4 y programa posts en Twitter/X y LinkedIn.",
        stack: ["OpenAI API", "Make", "Twitter API"],
        likes: 340,
        comments: 56,
        shares: 120
    },
    {
        id: 8,
        title: "Data Pipeline ETL",
        category: "automation",
        image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070&auto=format&fit=crop",
        description: "📊 Moviendo 1M+ de registros diarios. Pipeline ETL robusto para transformar datos crudos de ventas en reportes accionables en BigQuery.",
        stack: ["Airflow", "SQL", "BigQuery"],
        likes: 65,
        comments: 5,
        shares: 10
    },
];

export default function ProjectGallery() {
    return (
        <section className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8">

                <div className="flex flex-col items-center text-center mb-16 space-y-4">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-zinc-400"
                    >
                        Mi Trabajo
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-medium text-white tracking-tight"
                    >
                        Proyectos Recientes
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-zinc-400 max-w-2xl text-lg"
                    >
                        Una selección de mis últimos trabajos, desde aplicaciones web completas
                        hasta automatizaciones avanzadas.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <ProjectPostCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectPostCard({ project }: { project: Project }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    return (
        <div className="h-full">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-full h-full flex flex-col rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-5 hover:border-white/20 transition-colors"
            >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/5">
                            <img
                                src="/ai-avatar.png"
                                alt="Jhon Gonzalez"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col leading-tight">
                            <div className="flex items-center gap-1.5">
                                <span className="font-semibold text-white text-[15px]">Jhon Gonzalez</span>
                                <span className="text-zinc-500 text-xs text-[13px]">@jhongo</span>
                            </div>
                            <span className="text-zinc-500 text-xs">Full Stack Developer</span>
                        </div>
                    </div>
                    <button className="text-zinc-500 hover:text-white transition-colors">
                        <span className="sr-only">More options</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1" /><circle cx="19" cy="12" r="1" /><circle cx="5" cy="12" r="1" /></svg>
                    </button>
                </div>

                {/* Content Text */}
                <div className="mb-4 flex-grow">
                    <p className="text-zinc-300 text-[15px] leading-relaxed whitespace-pre-wrap">
                        {project.description}
                    </p>
                    {project.link && (
                        <Link
                            href={project.link}
                            target="_blank"
                            className="inline-flex items-center gap-1 mt-2 text-blue-400 hover:text-blue-300 text-sm font-medium hover:underline"
                        >
                            <ExternalLink className="w-3.5 h-3.5" />
                            {project.link.replace('https://', '')}
                        </Link>
                    )}
                </div>

                {/* Main Image */}
                <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 mb-4 aspect-video">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-2 border-t border-white/5 mt-auto">
                    <button
                        onClick={() => setLiked(!liked)}
                        className={`flex items-center gap-2 text-sm group transition-colors ${liked ? "text-pink-500" : "text-zinc-500 hover:text-pink-500"}`}
                    >
                        <div className={`p-2 rounded-full group-hover:bg-pink-500/10 transition-colors ${liked ? "bg-pink-500/10" : ""}`}>
                            <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                        </div>
                        <span className="text-xs font-medium">{project.likes + (liked ? 1 : 0)}</span>
                    </button>

                    <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-blue-400 group transition-colors">
                        <div className="p-2 rounded-full group-hover:bg-blue-400/10 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium">{project.comments}</span>
                    </button>

                    <button className="flex items-center gap-2 text-sm text-zinc-500 hover:text-green-400 group transition-colors">
                        <div className="p-2 rounded-full group-hover:bg-green-400/10 transition-colors">
                            <Repeat2 className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-medium">{project.shares}</span>
                    </button>

                    <button
                        onClick={() => setSaved(!saved)}
                        className={`flex items-center gap-2 text-sm group transition-colors ${saved ? "text-blue-500" : "text-zinc-500 hover:text-blue-500"}`}
                    >
                        <div className={`p-2 rounded-full group-hover:bg-blue-500/10 transition-colors ${saved ? "bg-blue-500/10" : ""}`}>
                            {saved ? <Bookmark className="w-5 h-5 fill-current" /> : <Bookmark className="w-5 h-5" />}
                        </div>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
