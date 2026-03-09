"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight, LayoutGrid, List } from "lucide-react";
import SectionHeader from "./SectionHeader";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, Project } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGallery() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [activeImageIndex, setActiveImageIndex] = useState(0);
    const [viewMode, setViewMode] = useState<"grid" | "list">("list");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const projectCards = React.useMemo(() => projects.map((project, index) => (
        <motion.div
            key={project.id}
            layout
            className={viewMode === "list" ? "max-w-7xl mx-auto w-full" : "w-full"}
        >
            <ProjectCard
                project={project}
                index={index}
                viewMode={viewMode}
                onImageClick={() => {
                    setSelectedProject(project);
                    setActiveImageIndex(0);
                }}
            />
        </motion.div>
    )), [viewMode]);

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
            <GlobalScrollbarStyles />
            <div className="container mx-auto px-4 md:px-8 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
                <SectionHeader
                    title="Proyectos"
                    description="Una selección de mis últimos trabajos, desde aplicaciones web completas hasta automatizaciones avanzadas."
                />

                {/* View Toggle - Desktop Only, Centered */}
                <div className="hidden lg:flex justify-center mb-16">
                    <div className="flex items-center bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-xl">
                        <button
                            onClick={() => setViewMode("list")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${viewMode === "list" ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]" : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                            <List className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Filas</span>
                        </button>
                        <button
                            onClick={() => setViewMode("grid")}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all ${viewMode === "grid" ? "bg-red-500 text-white shadow-[0_0_20px_rgba(239,68,68,0.4)]" : "text-zinc-500 hover:text-zinc-300"}`}
                        >
                            <LayoutGrid className="w-4 h-4" />
                            <span className="text-[10px] font-black uppercase tracking-[0.2em]">Cuadrícula</span>
                        </button>
                    </div>
                </div>

                <motion.div
                    layout
                    className={`grid ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" : "grid-cols-1 gap-48"}`}
                >
                    <AnimatePresence mode="popLayout">
                        {projectCards}
                    </AnimatePresence>
                </motion.div>
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
                        className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out"
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.5, opacity: 0 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 p-4 rounded-full bg-white/10 text-white hover:bg-red-600 transition-all border border-white/10 z-[100005] cursor-pointer shadow-2xl backdrop-blur-xl group"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedProject(null);
                                setActiveImageIndex(0);
                            }}
                        >
                            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
                        </motion.button>

                        {/* Carousel Controls */}
                        {selectedProject.images.length > 1 && (
                            <>
                                <button
                                    onClick={handlePrev}
                                    className="absolute left-4 md:left-10 p-4 rounded-full bg-black/40 text-white hover:bg-red-600 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90 backdrop-blur-md"
                                >
                                    <ChevronLeft className="w-8 h-8" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="absolute right-4 md:right-10 p-4 rounded-full bg-black/40 text-white hover:bg-red-600 transition-all border border-white/10 z-[100001] cursor-pointer active:scale-90 backdrop-blur-md"
                                >
                                    <ChevronRight className="w-8 h-8" />
                                </button>

                                {/* Pagination Dots */}
                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-[100001]" onClick={(e) => e.stopPropagation()}>
                                    {selectedProject.images.map((_: string, idx: number) => (
                                        <button
                                            key={idx}
                                            onClick={() => setActiveImageIndex(idx)}
                                            className={`h-1.5 rounded-full transition-all cursor-pointer ${idx === activeImageIndex ? 'bg-red-600 w-8' : 'bg-white/20 w-4 hover:bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            </>
                        )}

                        <div className="relative w-full max-w-6xl h-[80vh] z-[100000]" onClick={(e) => e.stopPropagation()}>
                            <Image
                                src={selectedProject.images[activeImageIndex]}
                                alt={`Project view ${activeImageIndex + 1}`}
                                fill
                                className="object-contain"
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

// --- STYLES ---
const GlobalScrollbarStyles = () => (
    <style jsx global>{`
        .custom-red-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-red-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
            border-radius: 10px;
        }
        .custom-red-scrollbar::-webkit-scrollbar-thumb {
            background: #ef4444 !important;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(239, 68, 68, 0.5);
        }
        .custom-red-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #ff5555 !important;
        }
        /* For Firefox */
        .custom-red-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: #ef4444 rgba(255, 255, 255, 0.05);
        }
    `}</style>
);
