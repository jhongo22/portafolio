import React from "react";
import {
    Code2,
    Cpu,
    Globe,
    Layers,
    Zap
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import SectionHeader from "./SectionHeader";

const services = [
    {
        title: "Desarrollo Web Full Stack",
        description: "Creación de aplicaciones web modernas, rápidas y escalables.",
        iconName: "Globe",
        color: "text-blue-400"
    },
    {
        title: "Inteligencia Artificial",
        description: "Integración de LLMs, agentes de IA y automatizaciones inteligentes para potenciar los procesos de negocio.",
        iconName: "Cpu",
        color: "text-purple-400"
    },
    {
        title: "Implementación de MCP",
        description: "Uso del Model Context Protocol para integrar herramientas, servicios y datos, optimizando la arquitectura y seguridad de aplicaciones inteligentes.",
        iconName: "Layers",
        color: "text-pink-400"
    },
    {
        title: "Automatización de Workflows",
        description: "Optimización de tareas mediante flujos automáticos conectando diferentes herramientas.",
        iconName: "Zap",
        color: "text-yellow-400"
    },
    {
        title: "Administración de base de datos",
        description: "Diseño, optimización y gestión de bases de datos relacionales y no relacionales para garantizar la integridad y escala de los datos.",
        iconName: "Layers",
        color: "text-green-400"
    },
    {
        title: "Integraciónes",
        description: "Conexión y sincronización de servicios externos para unificar datos y automatizar procesos entre múltiples plataformas.",
        iconName: "Code2",
        color: "text-orange-400"
    }
] as const;

export default function Services() {
    return (
        <section id="servicios" className="w-full py-24 relative z-10">
            <div className="container mx-auto px-4 md:px-8">
                <SectionHeader
                    subtitle="Lo que ofrezco"
                    title={"QUE PUEDO\nHACER"}
                    description="Soluciones tecnológicas a medida, enfocadas en la calidad del código, la escalabilidad y la experiencia del usuario final."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            iconName={service.iconName}
                            color={service.color}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
