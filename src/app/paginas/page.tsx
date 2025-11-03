import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Globe,
  Zap,
  Database,
  Cloud,
  Code,
  Smartphone,
  Monitor,
  ShoppingCart,
  Users,
  BarChart,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Star,
  Clock,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const webProjects = [
  {
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con panel de administración",
    image: "/projects/ecommerce.jpg",
    category: "E-commerce",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL", "Redis"],
    features: ["Carrito de Compras", "Pasarela de Pago", "Panel Admin", "Analytics"],
    completion: 100,
    status: "Producción",
    url: "https://ejemplo-ecommerce.com",
    client: "TechStore",
    timeline: "3 meses"
  },
  {
    name: "SaaS Dashboard",
    description: "Dashboard analítico para gestión empresarial con gráficos en tiempo real",
    image: "/projects/dashboard.jpg",
    category: "SaaS",
    technologies: ["TypeScript", "React", "D3.js", "Node.js", "MongoDB"],
    features: ["Analytics en Tiempo Real", "Reportes Personalizados", "Multi-tenant", "API REST"],
    completion: 95,
    status: "Producción",
    url: "https://dashboard-analytics.com",
    client: "DataCorp",
    timeline: "4 meses"
  },
  {
    name: "Portal de Educación",
    description: "Plataforma de cursos online con video streaming y evaluaciones",
    image: "/projects/education.jpg",
    category: "Education",
    technologies: ["Next.js", "AWS S3", "WebRTC", "Express", "MySQL"],
    features: ["Video Streaming", "Sistema de Evaluaciones", "Certificados", "Progreso Tracking"],
    completion: 90,
    status: "Beta",
    url: "https://edu-platform.com",
    client: "EduTech",
    timeline: "5 meses"
  },
  {
    name: "App de Delivery",
    description: "Aplicación móvil y web para servicio de delivery con tracking en tiempo real",
    image: "/projects/delivery.jpg",
    category: "Mobile",
    technologies: ["React Native", "Node.js", "Google Maps", "PostgreSQL", "WebSocket"],
    features: ["Tracking GPS", "Pagos Móviles", "Notificaciones Push", "Chat Integrado"],
    completion: 85,
    status: "Beta",
    url: "https://food-delivery.app",
    client: "QuickEats",
    timeline: "6 meses"
  }
]

const techStack = [
  { name: "Frontend", level: 95, description: "React, Next.js, TypeScript, Tailwind CSS" },
  { name: "Backend", level: 88, description: "Node.js, Express, Python, Django" },
  { name: "Database", level: 85, description: "PostgreSQL, MongoDB, Redis, MySQL" },
  { name: "Cloud & DevOps", level: 80, description: "AWS, Vercel, Docker, CI/CD" }
]

const services = [
  {
    title: "Desarrollo Full Stack",
    description: "Aplicaciones web completas desde diseño hasta despliegue",
    icon: Code,
    features: ["UI/UX Design", "Frontend", "Backend", "Database", "DevOps"],
    startingPrice: "$5,000"
  },
  {
    title: "Aplicaciones E-commerce",
    description: "Tiendas online con todas las funcionalidades necesarias",
    icon: ShoppingCart,
    features: ["Product Catalog", "Shopping Cart", "Payment Gateway", "Order Management"],
    startingPrice: "$7,000"
  },
  {
    title: "Dashboards & Analytics",
    description: "Plataformas de datos con visualizaciones interactivas",
    icon: BarChart,
    features: ["Real-time Data", "Custom Charts", "Report Generation", "Data Visualization"],
    startingPrice: "$4,000"
  },
  {
    title: "Aplicaciones PWA",
    description: "Apps web progresivas con experiencia nativa",
    icon: Smartphone,
    features: ["Offline Support", "Push Notifications", "App-like Experience", "Fast Loading"],
    startingPrice: "$3,000"
  }
]

export default function PaginasPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Globe className="mr-2 h-5 w-5" />
            Desarrollo Web
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
            Creando Experiencias Web{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Modernas
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Desarrollo de aplicaciones web completas con las últimas tecnologías,
            enfocadas en rendimiento, UX y escalabilidad.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos Destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aplicaciones web recientes con impacto real
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {webProjects.map((project) => (
            <Card key={project.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-br from-blue-600 to-cyan-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Monitor className="h-12 w-12 mx-auto mb-2" />
                    <span className="text-sm font-medium">Live Preview</span>
                  </div>
                </div>
              </div>

              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{project.name}</CardTitle>
                      <Badge
                        variant={project.status === "Producción" ? "default" : "secondary"}
                        className={project.status === "Producción"
                          ? "bg-green-600 text-white"
                          : "bg-blue-600/20 text-blue-300 border-blue-600/30"
                        }
                      >
                        {project.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {project.description}
                    </CardDescription>
                  </div>
                  <Button size="icon" variant="outline" asChild>
                    <Link href={project.url} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Meta info */}
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {project.client}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {project.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {project.category}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Completado</span>
                    <span className="text-muted-foreground">{project.completion}%</span>
                  </div>
                  <Progress value={project.completion} className="h-2" />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium">Características</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    Ver Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <Star className="h-4 w-4 mr-2" />
                    Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Tech Stack */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Stack Web</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías modernas para desarrollo web completo
          </p>
        </div>

        <Card className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((tech) => (
              <div key={tech.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Code className="h-5 w-5 text-primary" />
                    <span className="font-medium">{tech.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                </div>
                <Progress value={tech.level} className="h-2" />
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Separator className="my-16" />

      {/* Services */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Servicios Web</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones web completas adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                    <service.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <Badge key={feature} variant="secondary" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                </div>
                <div className="text-2xl font-bold text-primary">
                  Desde {service.startingPrice}
                </div>
                <Button size="sm" className="w-full">
                  Cotizar Proyecto
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-8 w-8 animate-pulse text-cyan-400" />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold">¿Lista para Digitalizar tu Negocio?</h2>
              <p className="text-lg text-blue-100">
                Desarrollamos aplicaciones web modernas que impulsan el crecimiento
                y mejoran la experiencia de tus clientes
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8"
              asChild
            >
              <Link href="/contacto">
                Iniciar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}