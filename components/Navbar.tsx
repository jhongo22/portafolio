"use client";

import * as React from "react";
import MegaMenu from "@/components/ui/mega-menu";
import type { MegaMenuItem } from "@/components/ui/mega-menu";
import {
    Cpu,
    Globe,
    Eye,
    Shield,
    Rocket,
    Box,
    Search,
    Palette,
    BookOpen,
    FileText,
    Newspaper,
} from "lucide-react";

export default function Navbar() {
    const NAV_ITEMS: MegaMenuItem[] = [
        { id: 1, label: "Inicio", link: "#inicio" },
        { id: 2, label: "Servicios", link: "#servicios" },
        { id: 3, label: "Proyectos", link: "#proyectos" },
        { id: 4, label: "Sobre Mí", link: "#sobre-mi" },
        { id: 5, label: "Contacto", link: "#contacto" },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-center p-4 bg-transparent">
            <MegaMenu items={NAV_ITEMS} />
        </nav>
    );
}
