"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Heart, Bookmark, Share2, ExternalLink, MessageCircle, Repeat2, X, ChevronLeft, ChevronRight, Sparkle } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import Image from "next/image";
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
        id: 1,
        title: "Alquiler de Ecógrafos",
        category: "web",
        images: [
            "/projects/ecografos.webp",
            "/projects/ecografos-1.webp",
            "/projects/ecografos-2.webp",
            "/projects/ecografos-3.webp",
            "/projects/ecografos-4.webp",
            "/projects/ecografos-5.webp",
            "/projects/ecografos-6.webp"
        ],
        description: "🩺 Aplicacion web para alquiler de ecografos médicos. \n\n✅ Full Stack: TypeScript, Node.js y Supabase para gestión de datos en tiempo real. \n✅ Panel Administrativo: Control de stock y disponibilidad mediante calendario interactivo. \n✅ Formulario de Reservas: Validación de disponibilidad y registro automatizado. \n✅ Responsive, optimizado para personas que navegan desde móvil. \n✅ Rendimiento: Optimización total para motores de búsqueda y rastreo de conversiones avanzado.",
        stack: ["TypeScript", "Node.js", "Supabase"],
        link: "https://alquilerdeecografos.com/",
        likes: 184,
        comments: 32,
        shares: 76
    },
    {
        id: 10,
        title: "Ecosistema IA Medicina Regenerativa",
        category: "automation",
        images: [
            "/projects/ai-regenerativa.webp",
            "/projects/subflow-escalado.webp",
            "/projects/follow-up-descuentos.webp",
            "/projects/extraccion-crm.webp"
        ],
        description: "🚀 Automatización CRM para clínica medica. \n\n✅ Agente IA: Procesa texto, audio y comprobantes de pago automáticamente. \n✅ Gestión de Memoria: Resume y mantiene el contexto relevante, integrando incluso charlas de agentes humanos. \n✅ Escalacion a humano: Transición inmediata a humanos con notificaciones vía WhatsApp. \n✅ Marketing : Seguimiento que filtra prospectos interesados y ofrece descuentos \n✅ Extracción de Datos: Procesa conversaciones para extraer automáticamente nombre, email, teléfono y genera biografías en el CRM. \n✅ Omnicanal & RAG: Integrado en WhatsApp, IG, FB y CRM Chatwoot.",
        stack: ["OpenAI", "Redis", "n8n", "Chatwoot", "WhatsApp API"],
        likes: 412,
        comments: 64,
        shares: 128
    },
    {
        id: 20,
        title: "Dashboard de Analíticas IA - Fábrica de Winners",
        category: "web",
        images: [
            "/projects/dashboard-winners-6.webp",
            "/projects/dashboard-winners-7.webp",
            "/projects/dashboard-winners-5.webp",
            "/projects/dashboard-winners-1.webp",
            "/projects/dashboard-winners-2.webp",
            "/projects/dashboard-winners-3.webp",
            "/projects/dashboard-winners-4.webp"
        ],
        description: "📊 Aplicación web para monitoreo y gestión de agentes IA. \n\n✅ Dashboard Analítico: Visualización en tiempo real de métricas (conversaciones, mensajes, escaladas, tiempo de respuesta promedio). \n✅ Análisis de Sentimiento.  \n✅ Panel de Ajustes: Configuración completa del agente IA (personalidad, nombre, tono de comunicación, expresiones). \n✅ Respuestas Personalizadas: Plantillas de mensajes automáticos (confirmación, recordatorio, escalación) editables desde la interfaz. \n✅  Full Stack: TypeScript, Node.js y conexión vía webhooks con n8n para sincronización de datos y configuraciones.",
        stack: ["Next.js", "TypeScript", "n8n Webhooks", "Chart.js"],
        likes: 342,
        comments: 56,
        shares: 89
    },
    {
        id: 17,
        title: "La Juana de Cerro Tusa",
        category: "web",
        images: [
            "/projects/lajuana-1.webp",
            "/projects/lajuana-2.webp",
            "/projects/lajuana-3.webp",
            "/projects/lajuana-4.webp",
            "/projects/lajuana-5.webp",
            "/projects/lajuana-admin-1.webp",
            "/projects/lajuana-admin-2.webp"
        ],
        description: "🏡 Landing page para finca con integracion a plataformas de reservas. \n\n✅ Experiencia Inmersiva: Diseño visual con enfoque en fotografía de gran formato y estética colonial. \n✅ Integración airbnb, booking, vrbo: Sistema de reservas sincronizado directamente con airbnb, booking, vrbo para evitar duplicidades.  \n✅ Deploy en Hostinger: Optimizado para carga ultra rápida y SEO local en Fredonia, Antioquia., \n✅ Stack: Next.js, Tailwind CSS, Airbnb API",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "Airbnb API"],
        link: "https://lajuanacerrotusa.com/",
        likes: 315,
        comments: 48,
        shares: 92
    },
    {
        id: 21,
        title: "Toxxic - Tienda de Ropa Urbana",
        category: "web",
        images: [
            "/projects/toxxic-main.webp",
            "/projects/toxxic-1.webp",
            "/projects/toxxic-2.webp",
            "/projects/toxxic-3.webp",
            "/projects/toxxic-4.webp"
        ],
        description: "👕 Tienda de ropa urbana en Medellín desarrollada con Laravel. \n\n✅ Full Stack: PHP y Laravel para un backend robusto y escalable. \n✅ Carrito de Compras: Sistema completo de gestión de pedidos y pagos. \n✅ Panel Administrativo: Gestión integral de productos, usuarios y mensajes de clientes. \n✅ Responsive: Optimizado para una experiencia de compra fluida en móviles.",
        stack: ["Laravel", "PHP", "MySQL", "Vercel"],
        link: "https://toxxic.vercel.app/",
        likes: 256,
        comments: 42,
        shares: 78
    },
    {
        id: 18,
        title: "Telocalizo MX - Rastreadores GPS",
        category: "web",
        images: [
            "/projects/telocalizo-1.webp",
            "/projects/telocalizo-2.webp",
            "/projects/telocalizo-3.webp",
            "/projects/telocalizo-4.webp"
        ],
        description: "📍 Landing page para distribuidores mayoristas de rastreadores GPS en México. \n\n✅ Diseño Moderno \n✅ Catálogo de Productos: 5+ modelos GPS con especificaciones técnicas, precios mayoristas. \n✅ Formulario de cotización.  \n✅ En Construcción: Proyecto activo en desarrollo con Next.js y optimización SEO para el mercado mexicano.",
        stack: ["Next.js", "Tailwind CSS", "TypeScript"],
        link: "https://telocalizo.mx/",
        likes: 198,
        comments: 28,
        shares: 64
    },
    {
        id: 22,
        title: "Villa Grande - La Misía",
        category: "web",
        images: [
            "/projects/lamisia-1.webp",
            "/projects/lamisia-2.webp",
            "/projects/lamisia-3.webp",
            "/projects/lamisia-4.webp",
            "/projects/lamisia-5.webp",
            "/projects/lamisia-6.webp",
            "/projects/lamisia-7.webp",
            "/projects/lamisia-8.webp"
        ],
        description: "🏡 Landing page para finca con integracion a plataformas de reservas. \n\n✅ Experiencia Inmersiva: Diseño visual con enfoque en fotografía de gran formato y estética colonial. \n✅ Integración airbnb, booking, vrbo: Sistema de reservas sincronizado directamente con airbnb, booking, vrbo para evitar duplicidades.  \n✅ Deploy en Hostinger: Optimizado para carga ultra rápida y SEO local en Llanogrande, Rionegro. \n\n✅ Stack: Next.js, Tailwind CSS, Airbnb API",
        stack: ["Next.js", "Supabase", "Tailwind CSS", "Airbnb API"],
        likes: 284,
        comments: 36,
        shares: 62
    },
    {
        id: 14,
        title: "Sistema Automatizado de Prospección y Cualificación de Leads",
        category: "automation",
        images: ["/projects/lead-gen-main.webp", "/projects/lead-gen-insta.webp", "/projects/lead-gen-email.webp"],
        description: "🚀 Automatización prospectos a gran escala. \n\n✅ Extracción Inteligente: Busca prospectos por ejecución (ej: 'Gimnasios Medellín') usando Apify. \n✅ Scraping Avanzado: Recopila datos profundos de sitios web mediante Firecrawl. \n✅ Cualificación con IA: Analiza la información extraída para identificar leads calificados automáticamente. \n✅ Mensajes Personalizado: Genera 3 variantes de mensajes únicos para Instagram y Email basados en el perfil de cada empresa. \n✅ Contacto: Ejecuta envíos de correos programados durante 7 días y gestiona el seguimiento.",
        stack: ["Apify", "Firecrawl", "OpenAI", "Google Sheets", "n8n"],
        likes: 487,
        comments: 92,
        shares: 156
    },
    {
        id: 12,
        title: "Agente IA Restaurante Mexicano",
        category: "automation",
        images: ["/projects/restaurante-mexicano.webp", "/projects/restaurante-subflow.webp"],
        description: "🌮 Agente IA para restaurante de comida mexicana. \n\n✅ Multimodal: Procesa pedidos por voz e interpreta comprobantes de pago. \n✅ Gestión Interactiva (Telegram): El personal recibe el comprobante y detalles del pedido con botones de acción (Aceptar/Rechazar) directamente en Telegram. \n✅ Notifica automáticamente al cliente si su pedido fue confirmado o si hay algún inconveniente. \n✅ Menu con SQL: Acceso inteligente al menú mediante base de datos SQL para recomendaciones y disponibilidad en tiempo real. \n✅ Pagos Automatizados: Genera links de pago para que el cliente haga el pago.",
        stack: ["WhatsApp API", "OpenAI Vision", "Postgres SQL", "Telegram API"],
        likes: 524,
        comments: 78,
        shares: 112
    },
    {
        id: 11,
        title: "Sistema RAG de Conocimiento Empresarial",
        category: "automation",
        images: ["/projects/rag-system.webp"],
        description: "🧠 Sistema de Recuperación Aumentada (RAG) para base de conocimiento dinámica. \n\n✅ Sincronización con Drive: Monitorea carpetas corporativas y activa el flujo ante nuevos documentos o actualizaciones. \n✅ Indexación Inteligente: Clasifica y asigna metadata detallada a cada fragmento (chunk) para trazabilidad total de la fuente. \n✅ Vectorización Automática: Procesa y transforma documentos en vectores usando Embeddings de OpenAI. \n✅ Resúmenes Contextuales: Cada chunk incluye un resumen del contexto global del documento para mejorar la precisión de las respuestas. \n✅ Base de Datos Vectorial: Actualización en tiempo real de Postgres (Supabase Vector) para consultas ultra-rápidas del Agente IA.",
        stack: ["OpenAI Embeddings", "n8n", "Postgres Vector", "Google Drive API"],
        likes: 358,
        comments: 42,
        shares: 85
    },
    {
        id: 19,
        title: "Hot Cheese - Hamburguesas y Perros",
        category: "web",
        images: [
            "/projects/hotcheese-1.webp",
            "/projects/hotcheese-2.webp",
            "/projects/hotcheese-3.webp"
        ],
        description: "🍔 Landing page sencilla y efectiva para negocio de comida rápida en Colombia. \n\n✅ Diseño: Interfaz minimalista. \n✅ Menú Digital: Catálogo completo de hamburguesas, perros, perras y bebidas con precios y descripciones. \n✅ Selector de Sedes: Widget interactivo para elegir entre 5 ubicaciones. \n✅ Integración WhatsApp: Botón de pedido directo que redirige a WhatsApp de la sede seleccionada. \n✅ Responsive: Optimizado para personas que navegan desde móvil.",
        stack: ["Next.js", "Tailwind CSS", "WhatsApp API"],
        link: "https://www.hotcheese.com.co/",
        likes: 167,
        comments: 21,
        shares: 48
    },
    {
        id: 13,
        title: "Agente IA Fast Food (Burgers & Dogs)",
        category: "automation",
        images: ["/projects/restaurante-fastfood.webp", "/projects/restaurante-fastfood-subflow.webp"],
        description: "🍔 Agente IA especializado para negocios de comida rápida (Hamburguesas y Perros). \n\n✅ Multimodal: Procesa pedidos por voz e interpreta comprobantes de pago. \n✅ Gestión Interactiva (Telegram): El personal recibe el comprobante y detalles del pedido con botones de acción (Aceptar/Rechazar) directamente en Telegram. \n✅ Notifica automáticamente al cliente si su pedido fue confirmado o si hay algún inconveniente. \n✅ Menu con SQL: Acceso inteligente al menú mediante base de datos SQL para recomendaciones y disponibilidad en tiempo real. \n✅ Pagos Automatizados: Genera links de pago para que el cliente haga el pago.",
        stack: ["WhatsApp API", "n8n", "OpenAI Vision", "Telegram DB"],
        likes: 412,
        comments: 65,
        shares: 98
    },
    {
        id: 2,
        title: "Vive Feliz Sin Dolor",
        category: "web",
        images: ["/projects/vivefeliz.webp"],
        description: "🏥 Sitio web integral para consultorio de medicina regenerativa. \n\n✅ Desarrollado en WordPress con enfoque en conversión. \n✅ SEO local avanzado y Analytics para rastreo de pacientes. \n✅ Integración de Agente IA de texto y Voz (vía ElevenLabs) para atención 24/7. \n✅ Optimizado en Google Search Console para máxima visibilidad.",
        stack: ["WordPress", "ElevenLabs AI", "SEO / Analytics"],
        link: "https://vivefelizsindolor.com/",
        likes: 145,
        comments: 24,
        shares: 56
    },
    {
        id: 15,
        title: "Generación Automática de Contratos Digitales",
        category: "automation",
        images: ["/projects/contract-automation.webp"],
        description: "📝 Flujo integral para la creación y despacho de documentación legal. \n\n✅ Datos Dinámicos: Recibe información vía Webhook y autocompleta contratos legales de forma instantánea. \n✅ Notificación Multi-canal: Envía el contrato generado directamente al WhatsApp del cliente y por correo electrónico. \n✅ Despacho de Políticas: Adjunta automáticamente las políticas de la empresa y términos de servicio a cada envío. \n✅ Gestión Centralizada: Registra cada contrato generado en Google Sheets para control administrativo.",
        stack: ["n8n", "Gmail API", "WhatsApp API", "Google Sheets"],
        likes: 245,
        comments: 32,
        shares: 54
    },
    {
        id: 16,
        title: "Sistema de Backup Cloud (Dual n8n)",
        category: "automation",
        images: ["/projects/backup-n8n.webp"],
        description: "☁️ Automatización de backups para flujos críticos en múltiples instancias. \n\n✅ Sincronización Dual: Monitorea y extrae flujos de dos instancias independientes de n8n (Hostinger y ViveFeliz). \n✅ Almacenamiento Seguro: Empaqueta y sube automáticamente copias de seguridad a Google Drive de forma programada. \n✅ Continuidad de Negocio: Garantiza la recuperación rápida ante cualquier fallo en el servidor mediante backups dinámicos.",
        stack: ["n8n", "Google Drive API", "Cloud"],
        likes: 124,
        comments: 15,
        shares: 28
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
        <section id="proyectos" className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8">

                <SectionHeader
                    title="Proyectos"
                    description="Una selección de mis últimos trabajos, desde aplicaciones web completas hasta automatizaciones avanzadas."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onImageClick={() => {
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
                            className="absolute top-4 right-4 md:top-8 md:right-8 p-2.5 rounded-full bg-black/40 text-white hover:bg-white/20 transition-all border border-white/10 z-[100001] cursor-pointer shadow-lg active:scale-95 backdrop-blur-md"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                                setActiveImageIndex(0);
                            }}
                        >
                            <X className="w-5 h-5 md:w-6 md:h-6" />
                        </motion.button>

                        {/* Carousel Controls */}
                        {selectedProject.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-8 p-2.5 rounded-full bg-black/40 text-white hover:bg-white/15 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90 backdrop-blur-md"
                                >
                                    <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-8 p-2.5 rounded-full bg-black/40 text-white hover:bg-white/15 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90 backdrop-blur-md"
                                >
                                    <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                                </button>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex gap-2 z-[100001]" onClick={(e) => e.stopPropagation()}>
                                    {selectedProject.images.map((_: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full transition-all cursor-pointer ${idx === activeImageIndex ? "bg-white scale-125" : "bg-white/30"}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <div
                            key={activeImageIndex}
                            className="relative w-[90%] h-[85vh] z-[100000]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedProject.images[activeImageIndex]}
                                alt={`Project view ${activeImageIndex + 1}`}
                                fill
                                className="object-contain rounded-xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10"
                                sizes="90vw"
                                priority
                            />
                        </div>
                    </motion.div>
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
}

// --- NEW PREMIUM DESIGN (3D FLIP) ---
function ProjectCard({ project, onImageClick }: { project: Project, onImageClick: () => void }) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardImageIndex, setCardImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isAutoplayDisabled, setIsAutoplayDisabled] = useState(false);
    useEffect(() => {
        let timeout: NodeJS.Timeout;
        let interval: NodeJS.Timeout;
        const isDesktop = window.matchMedia("(min-width: 768px)").matches;

        if (isHovered && isDesktop && project.images.length > 1 && !isFlipped && !isAutoplayDisabled) {
            // First transition after 2s
            timeout = setTimeout(() => {
                setCardImageIndex((prev) => (prev + 1) % project.images.length);

                // Subsequent transitions every 3s
                interval = setInterval(() => {
                    setCardImageIndex((prev) => (prev + 1) % project.images.length);
                }, 3000);
            }, 2000);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
            if (interval) clearInterval(interval);
        };
    }, [isHovered, project.images.length, isFlipped, isAutoplayDisabled]);

    const nextCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAutoplayDisabled(true);
        setCardImageIndex((prev) => (prev + 1) % project.images.length);
    };

    const prevCardImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsAutoplayDisabled(true);
        setCardImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
    };

    const toggleFlip = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="relative h-[440px] w-full [perspective:1500px] group">
            <style jsx>{`
                .custom-red-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-red-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-red-scrollbar::-webkit-scrollbar-thumb {
                    background: #ef4444;
                    border-radius: 10px;
                }
                .custom-red-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: #dc2626;
                }
            `}</style>
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                    setIsAutoplayDisabled(false);
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
                className="relative w-full h-full"
            >
                {/* FRONT SIDE */}
                <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] bg-zinc-900/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden flex flex-col shadow-2xl"
                >
                    {/* Image Container */}
                    <div
                        className="relative h-[220px] overflow-hidden cursor-zoom-in"
                        onClick={onImageClick}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={cardImageIndex}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4 }}
                                className="absolute inset-0"
                            >
                                <Image
                                    src={project.images[cardImageIndex]}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </motion.div>
                        </AnimatePresence>

                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />

                        {/* Tech Badges */}
                        <div className="absolute top-5 left-5 flex flex-wrap gap-2 z-10">
                            {project.stack.slice(0, 3).map((tech, i) => (
                                <span key={i} className="px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-wider text-zinc-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-3">
                                <button onClick={prevCardImage} className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all">
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <button onClick={nextCardImage} className="p-2 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/10 hover:bg-white hover:text-black transition-all">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Content Brief */}
                    <div className="flex flex-col flex-grow p-5 md:p-6 text-left">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-white tracking-tight leading-tight group-hover:text-red-500 transition-colors">
                                {project.title}
                            </h3>
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    onClick={(e) => e.stopPropagation()}
                                    className="text-zinc-500 hover:text-white transition-colors"
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </Link>
                            )}
                        </div>

                        <p className="text-zinc-400 text-[13px] leading-relaxed mb-4 line-clamp-2">
                            {project.description.split('\n')[0].replace(/🩺|🚀|📊|🏡|👕|📍|🌮|🧠|🍔|🏥|📝|☁️|📍|🧠|📝|☁️/g, "").trim()}
                        </p>

                        <button
                            onClick={toggleFlip}
                            onMouseEnter={() => setIsHovered(false)} // Pause carousel when focusing on the button
                            onMouseLeave={() => setIsHovered(true)}
                            className="mt-auto w-full group/btn flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded-lg font-bold uppercase tracking-widest text-[10px] transition-all"
                        >
                            Ver Detalles
                            <motion.div animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                                <ChevronRight className="w-4 h-4" />
                            </motion.div>
                        </button>
                    </div>
                </div>

                {/* BACK SIDE */}
                <div
                    className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-zinc-900 border border-red-500/20 rounded-2xl overflow-hidden flex flex-col p-6 shadow-[0_0_50px_rgba(239,68,68,0.1)]"
                >
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-white uppercase tracking-tighter">
                            Detalles
                        </h3>
                        <button
                            onClick={toggleFlip}
                            className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors"
                        >
                            <Repeat2 className="w-4 h-4" />
                        </button>
                    </div>

                    <div className="flex-grow overflow-y-auto pr-2 custom-red-scrollbar">
                        <div className="space-y-4 mb-8">
                            {project.description.split('\n').map((line, i) => {
                                if (line.trim().startsWith('✅')) {
                                    return (
                                        <div key={i} className="flex gap-3 items-start group/line">
                                            <Sparkle className="w-4 h-4 mt-1 text-red-500 shrink-0" />
                                            <span className="text-zinc-300 text-sm leading-relaxed">{line.replace('✅', '').trim()}</span>
                                        </div>
                                    );
                                }
                                if (line.trim() === '') return <div key={i} className="h-2" />;
                                return <p key={i} className="text-zinc-400 text-sm leading-relaxed">{line}</p>;
                            })}
                        </div>

                        <div className="space-y-3">
                            <span className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.3em] block mb-2">Tecnologías Estructurales</span>
                            <div className="flex flex-wrap gap-2">
                                {project.stack.map((tech, i) => (
                                    <span key={i} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-md text-[11px] font-bold border border-white/5 uppercase">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex gap-4">
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="flex-grow flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-red-400 transition-colors"
                            >
                                <ExternalLink className="w-4 h-4" />
                                Visitar Sitio
                            </Link>
                        )}
                        <button
                            onClick={toggleFlip}
                            className="flex-grow flex items-center justify-center gap-2 bg-white/5 text-zinc-300 py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-colors border border-white/5"
                        >
                            Volver
                        </button>
                    </div>
                </div>
            </motion.div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-red-500/5 rounded-[40px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -z-20 pointer-events-none" />
        </div>
    );
}


// --- LEGACY DESIGN (Preserved) ---
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
                        <div className="w-10 h-10 rounded-full bg-white/10 overflow-hidden border border-white/5 relative">
                            <Image
                                src="/ai-avatar.png"
                                alt="Jhon Gonzalez"
                                fill
                                className="object-cover"
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
                    <div className="text-zinc-300 text-[15px] leading-relaxed space-y-1">
                        {project.description.split('\n').map((line, i) => {
                            if (line.trim().startsWith('✅')) {
                                return (
                                    <div key={i} className="flex gap-2 items-start group/line">
                                        <Sparkle className="w-3.5 h-3.5 mt-1 text-white/50 shrink-0 group-hover/line:text-white/80 transition-colors" />
                                        <span>{line.replace('✅', '').trim()}</span>
                                    </div>
                                );
                            }
                            return <p key={i} className={line.trim() === '' ? 'h-2' : ''}>{line}</p>;
                        })}
                    </div>
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
                    <div
                        key={cardImageIndex}
                        className="absolute inset-0"
                    >
                        <Image
                            src={project.images[cardImageIndex]}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>

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