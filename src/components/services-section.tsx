"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Bot,
  Code,
  Globe,
  ArrowRight,
  CheckCircle,
  Clock,
  Zap,
  Shield,
  Database,
  Cloud,
  Cpu,
  Eye,
  Lightbulb,
  Target
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "Agentes IA",
    description: "Desarrollo de agentes inteligentes autónomos para automatización de procesos y toma de decisiones.",
    icon: Bot,
    color: "from-blue-500 to-purple-600",
    features: [
      { name: "Machine Learning", description: "Modelos predictivos y clasificación" },
      { name: "NLP", description: "Procesamiento de lenguaje natural" },
      { name: "Computer Vision", description: "Reconocimiento de imágenes y video" },
      { name: "Predictive Analytics", description: "Análisis predictivo y forecasting" }
    ],
    projects: ["Chatbot Customer Service", "AI Content Generator", "Predictive Maintenance System"],
    deliveryTime: "2-4 semanas",
    complexity: "Alto"
  },
  {
    title: "Scripts & APIs",
    description: "Scripts personalizados e integración de APIs para optimizar flujos de trabajo y conectar sistemas.",
    icon: Code,
    color: "from-blue-600 to-blue-400",
    features: [
      { name: "REST APIs", description: "APIs RESTful robustas y escalables" },
      { name: "GraphQL", description: "APIs GraphQL flexibles" },
      { name: "Web Scraping", description: "Extracción de datos automatizada" },
      { name: "Process Automation", description: "Automatización de procesos repetitivos" }
    ],
    projects: ["Inventory Management API", "Data Pipeline Automation", "E-commerce Integration"],
    deliveryTime: "1-3 semanas",
    complexity: "Medio"
  },
  {
    title: "Desarrollo Web",
    description: "Aplicaciones web modernas y responsivas con las últimas tecnologías y mejores prácticas.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    features: [
      { name: "Full Stack", description: "Desarrollo end-to-end" },
      { name: "Responsive Design", description: "Diseño adaptativo" },
      { name: "Performance", description: "Optimización de rendimiento" },
      { name: "Security", description: "Seguridad y mejores prácticas" }
    ],
    projects: ["E-commerce Platform", "SaaS Dashboard", "Real-time Analytics"],
    deliveryTime: "3-6 semanas",
    complexity: "Medio-Alto"
  }
]

export function ServicesSection() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Servicios</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          En qué puedo ayudarte - Soluciones integrales para tus necesidades digitales
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-1">
        {services.map((service) => (
          <Card key={service.title} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
            {/* Header with gradient */}
            <div className={`h-2 bg-gradient-to-r ${service.color}`} />

            <CardHeader className="space-y-6">
              <div className="flex items-start gap-4">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg`}>
                  <service.icon className="h-7 w-7" />
                </div>
                <div className="flex-1 space-y-2">
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Quick info badges */}
              <div className="flex flex-wrap gap-3">
                <Badge variant="outline" className="border-primary/20">
                  <Clock className="mr-2 h-3 w-3" />
                  {service.deliveryTime}
                </Badge>
                <Badge variant="outline" className="border-primary/20">
                  <Target className="mr-2 h-3 w-3" />
                  {service.complexity}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="space-y-8">
              {/* Features Accordion */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="features">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span className="font-medium">Características Principales</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 mt-4">
                      {service.features.map((feature) => (
                        <div key={feature.name} className="flex items-start gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="h-2 w-2 rounded-full bg-primary" />
                          </div>
                          <div className="space-y-1">
                            <div className="font-medium text-sm">{feature.name}</div>
                            <div className="text-xs text-muted-foreground">{feature.description}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="projects">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <div className="flex items-center gap-3">
                      <Eye className="h-5 w-5 text-primary" />
                      <span className="font-medium">Proyectos Recientes</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 mt-4">
                      {service.projects.map((project) => (
                        <div key={project} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                          <div className="flex items-center gap-3">
                            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                              <service.icon className="h-4 w-4 text-primary" />
                            </div>
                            <span className="font-medium">{project}</span>
                          </div>
                          <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                            <ArrowRight className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* CTA */}
              <div className="flex gap-4 pt-4 border-t">
                <Button asChild className="flex-1">
                  <Link href={`/contacto?service=${service.title.toLowerCase()}`}>
                    Discutir Proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href={`/proyectos?category=${service.title.toLowerCase()}`}>
                    Ver Ejemplos
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}