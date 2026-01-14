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
    index: number;
}

export default function ServiceCard({ title, description, iconName, color, index }: ServiceCardProps) {
    const Icon = IconMap[iconName] || Globe;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group p-8 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col items-start gap-4"
        >
            <div className={`p-3 rounded-xl bg-white/5 border border-white/5 group-hover:scale-110 transition-transform duration-300 ${color}`}>
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold uppercase tracking-tighter text-white mt-2">{title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm lg:text-base">
                {description}
            </p>
        </motion.div>
    );
}
