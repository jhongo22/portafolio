"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Heart, Bookmark, Share2, ExternalLink, MessageCircle, Repeat2, X, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type ProjectCategory = "web" | "automation";

interface Project {
    id: number;
    title: string;
    category: ProjectCategory;
    images: string[];
    description: string;
    stack: string[];
    link?: string;
    likes: number;
    comments: number;
    shares: number;
}

const projects: Project[] = [
    {
        id: 16,
        title: "Sistema de Backup Cloud (Dual n8n)",
        category: "automation",
        images: ["/projects/backup-n8n.png"],
        description: "☁️ Automatización de backups para flujos críticos en múltiples instancias. \n\n✅ Sincronización Dual: Monitorea y extrae flujos de dos instancias independientes de n8n (Hostinger y ViveFeliz). \n✅ Almacenamiento Seguro: Empaqueta y sube automáticamente copias de seguridad a Google Drive de forma programada. \n✅ Continuidad de Negocio: Garantiza la recuperación rápida ante cualquier fallo en el servidor mediante backups dinámicos. \n\n#n8n #Backup #Automation #CloudStorage #DevOps",
        stack: ["n8n", "Google Drive API", "Cloud"],
        likes: 124,
        comments: 15,
        shares: 28
    },
    {
        id: 15,
        title: "Generación Automática de Contratos Digitales",
        category: "automation",
        images: ["/projects/contract-automation.png"],
        description: "📝 Flujo integral para la creación y despacho de documentación legal. \n\n✅ Datos Dinámicos: Recibe información vía Webhook y autocompleta contratos legales de forma instantánea. \n✅ Notificación Multi-canal: Envía el contrato generado directamente al WhatsApp del cliente y por correo electrónico. \n✅ Despacho de Políticas: Adjunta automáticamente las políticas de la empresa y términos de servicio a cada envío. \n✅ Gestión Centralizada: Registra cada contrato generado en Google Sheets para control administrativo. \n\n#LegalTech #Automation #Gmail #WhatsApp #n8n",
        stack: ["n8n", "Gmail API", "WhatsApp API", "Google Sheets"],
        likes: 245,
        comments: 32,
        shares: 54
    },
    {
        id: 14,
        title: "Sistema Automatizado de Prospección y Cualificación de Leads",
        category: "automation",
        images: ["/projects/lead-gen-main.png", "/projects/lead-gen-insta.png", "/projects/lead-gen-email.png"],
        description: "🚀 Automatización end-to-end para extracción y nutrición de prospectos a gran escala. \n\n✅ Extracción Inteligente: Busca hasta 50 prospectos por ejecución (ej: 'Gimnasios Medellín') usando Apify. \n✅ Scraping Avanzado: Recopila datos profundos de sitios web mediante Firecrawl para una cualificación precisa. \n✅ Cualificación con IA: Analiza la información extraída para identificar leads calificados automáticamente. \n✅ Outreach Personalizado: Genera 3 variantes de mensajes únicos para Instagram y Email basados en el perfil de cada empresa. \n✅ Secuencia de Nutrición: Ejecuta envíos de correos programados durante 7 días y gestiona el seguimiento en Google Sheets sin duplicados. \n\n#LeadGen #Automation #ColdOutreach #AI #Apify #n8n",
        stack: ["Apify", "Firecrawl", "OpenAI", "Google Sheets", "n8n"],
        likes: 487,
        comments: 92,
        shares: 156
    },
    {
        id: 13,
        title: "Agente IA Fast Food (Burgers & Dogs)",
        category: "automation",
        images: ["/projects/restaurante-fastfood.png", "/projects/restaurante-fastfood-subflow.png"],
        description: "🍔 Agente IA especializado para negocios de comida rápida (Hamburguesas y Perros). \n\n✅ Gestión de Pedidos Multimodal: Recepción de pedidos mediante voz y texto vía WhatsApp con entendimiento de lenguaje natural. \n✅ Validación de Comprobantes: Visión artificial para detectar y procesar imágenes de pagos transferidos. \n✅ Hub de Control (Telegram): Panel interactivo para el equipo de cocina donde aceptan o rechazan pedidos con un toque. \n✅ Notificaciones en Tiempo Real: El cliente recibe el estatus de su pedido ('en preparación', 'en camino') de forma automática. \n✅ Menú Inteligente: Sugerencias automáticas de combos y adicionales basadas en el pedido del cliente. \n\n#FastFood #AI #Automation #WhatsApp #CustomerExperience",
        stack: ["WhatsApp API", "n8n", "OpenAI Vision", "Telegram DB"],
        likes: 412,
        comments: 65,
        shares: 98
    },
    {
        id: 12,
        title: "Agente IA Restaurante Mexicano",
        category: "automation",
        images: ["/projects/restaurante-mexicano.png", "/projects/restaurante-subflow.png"],
        description: " taco Agente IA especializado para restaurantes con gestión total vía WhatsApp. \n\n✅ Multimodal: Procesa pedidos por voz e interpreta comprobantes de pago mediante visión artificial. \n✅ Gestión Interactiva (Telegram): El personal recibe el comprobante y detalles del pedido con botones de acción (Aceptar/Rechazar) directamente en Telegram. \n✅ Feedback en Tiempo Real: Notifica automáticamente al cliente si su pedido fue confirmado o si hay algún inconveniente, manteniendo una comunicación fluida. \n✅ Consulta SQL Dinámica: Acceso inteligente al menú mediante base de datos SQL para recomendaciones y disponibilidad en tiempo real. \n✅ Pagos Automatizados: Genera links de pago integrados para que el cliente finalice su pedido de forma segura y rápida. \n\n#Restaurante #AI #WhatsApp #Automation #Telegram #SQL",
        stack: ["WhatsApp API", "OpenAI Vision", "Postgres SQL", "Telegram API"],
        likes: 524,
        comments: 78,
        shares: 112
    },
    {
        id: 11,
        title: "Sistema RAG de Conocimiento Empresarial",
        category: "automation",
        images: ["/projects/rag-system.png"],
        description: "🧠 Sistema de Recuperación Aumentada (RAG) para base de conocimiento dinámica. \n\n✅ Sincronización con Drive: Monitorea carpetas corporativas y activa el flujo ante nuevos documentos o actualizaciones. \n✅ Indexación Inteligente: Clasifica y asigna metadata detallada a cada fragmento (chunk) para trazabilidad total de la fuente. \n✅ Vectorización Automática: Procesa y transforma documentos en vectores usando Embeddings de OpenAI. \n✅ Resúmenes Contextuales: Cada chunk incluye un resumen del contexto global del documento para mejorar la precisión de las respuestas. \n✅ Base de Datos Vectorial: Actualización en tiempo real de Postgres (Supabase Vector) para consultas ultra-rápidas del Agente IA. \n\n#RAG #AI #VectorDB #Automation #Postgres",
        stack: ["OpenAI Embeddings", "n8n", "Postgres Vector", "Google Drive API"],
        likes: 358,
        comments: 42,
        shares: 85
    },
    {
        id: 10,
        title: "Ecosistema IA Medicina Regenerativa",
        category: "automation",
        images: [
            "/projects/ai-regenerativa.png",
            "/projects/subflow-escalado.png",
            "/projects/follow-up-descuentos.png",
            "/projects/extraccion-crm.png"
        ],
        description: "🚀 Ecosistema de automatización de grado empresarial para clínicas médicas. \n\n✅ Agente IA Multimodal: Procesa texto, audio y comprobantes de pago automáticamente. \n✅ Gestión de Memoria con Redis: Sistema inteligente que resume y mantiene el contexto relevante, integrando incluso charlas de agentes humanos. \n✅ Escalamiento Inteligente: Sub-flujo de transición inmediata a humanos con notificaciones push vía WhatsApp. \n✅ Retargeting Automático: Bot de seguimiento que filtra prospectos interesados y ofrece descuentos personalizados cada 24h. \n✅ Extracción de Datos CRM: Procesa conversaciones para extraer automáticamente nombre, email, teléfono y genera biografías detalladas en el CRM. \n✅ Omnicanal & RAG: Integrado en WhatsApp, IG, FB y CRM Chatwoot. \n\n#EnterpriseAI #Automation #Healthcare #n8n #CRM",
        stack: ["OpenAI", "Redis", "n8n", "Chatwoot", "WhatsApp API"],
        likes: 412,
        comments: 64,
        shares: 128
    },
    {
        id: 1,
        title: "Alquiler de Ecógrafos",
        category: "web",
        images: ["/projects/ecografos.png"],
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
        images: ["/projects/vivefeliz.png"],
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
        images: ["https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1633526543814-9718c8922b7a?q=80&w=2070&auto=format&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop"],
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
        images: ["https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=2070&auto=format&fit=crop"],
        description: "📊 Moviendo 1M+ de registros diarios. Pipeline ETL robusto para transformar datos crudos de ventas en reportes accionables en BigQuery.",
        stack: ["Airflow", "SQL", "BigQuery"],
        likes: 65,
        comments: 5,
        shares: 10
    },
];

export default function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedProject]);

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setActiveImageIndex((prev: number) => (prev + 1) % selectedProject.images.length);
        }
    };

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedProject) {
            setActiveImageIndex((prev: number) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

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
                        <ProjectPostCard key={project.id} project={project} onImageClick={() => {
                            setSelectedProject(project);
                            setActiveImageIndex(0);
                        }} />
                    ))}
                </div>
            </div>

            {mounted && selectedProject && createPortal(
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => {
                            setSelectedProject(null);
                            setActiveImageIndex(0);
                        }}
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/98 backdrop-blur-2xl p-4 cursor-zoom-out"
                    >
                        <motion.button
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="absolute top-6 right-6 p-4 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all border border-white/10 z-[100001] cursor-pointer shadow-lg active:scale-95"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                                setActiveImageIndex(0);
                            }}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        {/* Carousel Controls */}
                        {selectedProject.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-6 p-4 rounded-full bg-white/5 text-white hover:bg-white/15 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-6 p-4 rounded-full bg-white/5 text-white hover:bg-white/15 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-[100001]" onClick={(e) => e.stopPropagation()}>
                                    {selectedProject.images.map((_: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${idx === activeImageIndex ? "bg-white scale-125" : "bg-white/30"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <AnimatePresence mode="wait">
                            <motion.img
                                key={activeImageIndex}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                src={selectedProject.images[activeImageIndex]}
                                alt={`Project view ${activeImageIndex + 1}`}
                                className="max-w-[90%] max-h-[85vh] object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 cursor-default relative z-[100000]"
                                onClick={(e) => e.stopPropagation()}
                            />
                        </AnimatePresence>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}

function ProjectPostCard({ project, onImageClick }: { project: Project, onImageClick: () => void }) {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);
    const [cardImageIndex, setCardImageIndex] = useState(0);

    const nextCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCardImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCardImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

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

                {/* Main Image Carousel on Card */}
                <div
                    className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] border border-white/5 mb-4 aspect-video cursor-zoom-in group/img"
                    onClick={() => onImageClick()}
                >
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={cardImageIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            src={project.images[cardImageIndex]}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {/* Card Arrows (Always visible) */}
                    {project.images.length > 1 && (
                        <>
                            <button
                                onClick={prevCardImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white transition-all hover:bg-black/60 backdrop-blur-sm border border-white/10 z-10"
                            >
                                <ChevronLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={nextCardImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white transition-all hover:bg-black/60 backdrop-blur-sm border border-white/10 z-10"
                            >
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </>
                    )}

                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover/img:opacity-100 pointer-events-none">
                        <div className="flex flex-col items-center gap-2">
                            <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-medium px-2.5 py-1 rounded-full border border-white/10">
                                Expandir
                            </span>
                            {project.images.length > 1 && (
                                <div className="flex gap-1">
                                    {project.images.map((_, idx) => (
                                        <div
                                            key={idx}
                                            className={`w-1 h-1 rounded-full transition-all ${idx === cardImageIndex ? "bg-white w-2" : "bg-white/30"}`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
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
