"use client";

import React from "react";
import {
    Play,
    Code,
    Terminal,
    Github,
    Linkedin,
    Twitter,
    ArrowUpRight,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import Link from "next/link";

export default function FeaturedWork() {
    return (
        <section className="w-full bg-transparent text-zinc-300 py-20 relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

                    {/* Left Column: Featured Image Card (Spans 5 cols on large) */}
                    <div className="lg:col-span-5 relative rounded-[2rem] overflow-hidden h-[600px] lg:h-auto group border border-white/5">
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop"
                            alt="Futuristic Portrait"
                            className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] group-hover:scale-105 transition-transform duration-700 ease-out"
                        />

                        {/* Orange overlay tint to match style */}
                        <div className="absolute inset-0 bg-orange-500/20 mix-blend-overlay"></div>

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
                        <div className="bg-[#0c0c0c]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                            <div className="flex items-center gap-5">
                                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/10 shrink-0">
                                    <img
                                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
                                        alt="Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div>
                                    <h1 className="text-3xl text-white font-medium tracking-tight mb-1">Alex Dev</h1>
                                    <p className="text-base text-zinc-500">Senior Full-Stack Engineer - Remote</p>
                                </div>
                            </div>

                            <div className="flex flex-col items-end gap-4 w-full md:w-auto">
                                <div className="flex gap-8 text-sm">
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5">PROJECTS</span>
                                        <span className="text-white font-medium text-base">50+</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5">YEARS</span>
                                        <span className="text-white font-medium text-base">7+</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="block text-zinc-500 text-xs mb-0.5">STACK</span>
                                        <span className="text-white font-medium text-base">12+</span>
                                    </div>
                                </div>
                                <button className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#222] border border-white/10 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors w-full md:w-auto justify-center">
                                    <Github className="w-3 h-3 fill-current" />
                                    View GitHub
                                </button>
                            </div>
                        </div>

                        {/* Row 2: Bio & Socials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Bio Card */}
                            <div className="bg-[#0c0c0c]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between h-full min-h-[320px]">
                                <p className="text-lg text-zinc-400 leading-relaxed">
                                    Architecting scalable digital solutions with clean code and modern tech stacks. I specialize in building high-performance web applications that deliver exceptional user experiences.
                                </p>
                                <div className="flex flex-col gap-3 mt-8">
                                    <div className="flex items-center gap-3 text-zinc-500 text-sm">
                                        <Terminal className="w-4 h-4" />
                                        <span>Clean Architecture & Patterns</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-zinc-500 text-sm">
                                        <Code className="w-4 h-4" />
                                        <span>Full-Stack Development</span>
                                    </div>
                                </div>
                            </div>

                            {/* Socials Card */}
                            <div className="bg-[#0c0c0c]/80 backdrop-blur-md border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between h-full min-h-[320px]">
                                <div className="space-y-3">
                                    {/* LinkedIn */}
                                    <div className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer">
                                        <span className="text-sm font-medium text-zinc-300">LinkedIn</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-xs">Connect</span>
                                            <Linkedin className="w-4 h-4 group-hover:text-blue-400 transition-colors" />
                                        </div>
                                    </div>
                                    {/* Twitter */}
                                    <div className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer">
                                        <span className="text-sm font-medium text-zinc-300">Twitter / X</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-xs">Follow</span>
                                            <Twitter className="w-4 h-4 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                    {/* Github */}
                                    <div className="group flex items-center justify-between bg-[#151515] hover:bg-[#1a1a1a] border border-white/5 rounded-full px-5 py-3 transition-colors cursor-pointer">
                                        <span className="text-sm font-medium text-zinc-300">Github</span>
                                        <div className="flex items-center gap-2 text-zinc-500">
                                            <span className="text-xs">Explore</span>
                                            <Github className="w-4 h-4 group-hover:text-white transition-colors" />
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full mt-4 bg-zinc-300 hover:bg-white text-black font-medium text-base py-3 px-6 rounded-full flex items-center justify-between group transition-colors">
                                    <span>Schedule a call</span>
                                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </button>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
