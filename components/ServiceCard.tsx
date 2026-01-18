"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Cpu,
    Globe,
    Layers,
    Zap,
    Search
} from "lucide-react";

import dynamic from 'next/dynamic';
import { useEffect, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const IconMap = {
    Globe,
    Cpu,
    Layers,
    Zap,
    Code2,
    Search
};

interface ServiceCardProps {
    title: string;
    description: string;
    iconName: keyof typeof IconMap;
    color: string;
    lottiePath: string;
    index: number;
}

export default function ServiceCard({ title, description, iconName, color, lottiePath, index }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Globe;
    const [animationData, setAnimationData] = useState<any>(null);

    useEffect(() => {
        if (lottiePath) {
            fetch(lottiePath)
                .then((res) => res.json())
                .then((data) => setAnimationData(data))
                .catch((err) => console.error("Error loading Lottie:", err));
        }
    }, [lottiePath]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start gap-4 relative overflow-hidden h-full min-h-[280px]"
        >
            <div className={`p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 ${color} relative z-10`}>
                <Icon className="w-6 h-6" />
            </div>

            <div className="relative z-10 flex flex-col gap-2 w-full pr-12">
                <h3 className="text-xl font-bold uppercase tracking-tighter text-white mt-2">{title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                    {description}
                </p>
            </div>

            {/* Lottie Animation at Bottom Right */}
            {animationData && (
                <div className="absolute -bottom-4 -right-4 w-40 h-40 opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none grayscale-[0.5] group-hover:grayscale-0">
                    <Lottie
                        animationData={animationData}
                        loop={true}
                    />
                </div>
            )}

            {/* Subtle Gradient to prevent text clash if needed */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/20 pointer-events-none" />
        </motion.div>
    );
}
