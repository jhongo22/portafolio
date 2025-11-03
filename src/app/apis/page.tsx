import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Database,
  Cloud,
  Shield,
  Zap,
  Globe,
  Code,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Clock,
  Target,
  BarChart,
  Key,
  Activity,
  Lock
} from "lucide-react"
import Link from "next/link"

const apiProjects = [
  {
    name: "API de Pagos Segura",
    description: "REST API para procesamiento de pagos con encriptación y validación",
    category: "Financial",
    version: "v2.1",
    status: "Producción",
    completion: 100,
    endpoint: "https://api.payments.com/v2",
    technologies: ["Node.js", "Express", "Stripe", "JWT", "PostgreSQL"],
    features: ["PCI Compliant", "Multi-currency", "Recurring Billing", "Webhooks"],
    requests: "10M+ mensuales",
    uptime: "99.9%"
  },
  {
    name: "Analytics API",
    description: "GraphQL API para análisis de datos con consultas personalizadas",
    category: "Analytics",
    version: "v3.0",
    status: "Producción",
    completion: 95,
    endpoint: "https://graphql.analytics.com",
    technologies: ["Node.js", "Apollo", "MongoDB", "Redis", "Docker"],
    features: ["Real-time Data", "Custom Queries", "Rate Limiting", "Caching"],
    requests: "5M+ mensuales",
    uptime: "99.5%"
  },
  {
    name: "IoT Data Gateway",
    description: "API para recepción y procesamiento de datos de dispositivos IoT",
    category: "IoT",
    version: "v1.5",
    status: "Beta",
    completion: 80,
    endpoint: "https://gateway.iotdata.com",
    technologies: ["Python", "FastAPI", "MQTT", "InfluxDB", "WebSocket"],
    features: ["MQTT Support", "Stream Processing", "Data Validation", "Alerts"],
    requests: "1M+ diarios",
    uptime: "98.5%"
  },
  {
    name: "Microservicio de Autenticación",
    description: "API centralizada para gestión de usuarios y autenticación",
    category: "Authentication",
    version: "v4.0",
    status: "Producción",
    completion: 100,
    endpoint: "https://auth.myservice.com",
    technologies: ["Go", "Gin", "JWT", "Redis", "PostgreSQL"],
    features: ["OAuth 2.0", "2FA", "Session Management", "RBAC"],
    requests: "50M+ mensuales",
    uptime: "99.99%"
  }
]

const apiServices = [
  {
    title: "API Design & Development",
    description: "Diseño e implementación de REST/GraphQL APIs robustas",
    icon: Code,
    deliverables: ["API Documentation", "Testing Suite", "Monitoring", "Deployment"],
    timeline: "4-6 semanas"
  },
  {
    title: "API Integration",
    description: "Integración con servicios de tercereros y sistemas existentes",
    icon: Database,
    deliverables: ["Custom Connectors", "Data Mapping", "Error Handling", "Monitoring"],
    timeline: "2-4 semanas"
  },
  {
    title: "API Security",
    description: "Hardening y protección de APIs contra ataques comunes",
    icon: Shield,
    deliverables: ["Security Audit", "Rate Limiting", "Authentication", "Encryption"],
    timeline: "3-5 semanas"
  },
  {
    title: "API Migration",
    description: "Migración de legacy APIs a arquitecturas modernas",
    icon: Cloud,
    deliverables: ["Migration Strategy", "Parallel Systems", "Gradual Rollout", "Testing"],
    timeline: "6-8 semanas"
  }
]

const apiTypes = [
  {
    type: "REST APIs",
    description: "APIs RESTful tradicionales con HTTP estándar",
    icon: Globe,
    benefits: ["Stateless", "Cacheable", "Scalable", "Easy to Debug"],
    useCase: "CRUD operations, mobile apps, web applications"
  },
  {
    type: "GraphQL",
    description: "APIs GraphQL para consultas flexibles y eficientes",
    icon: Target,
    benefits: ["Flexible Queries", "Single Endpoint", "Strong Typing", "No Over-fetching"],
    useCase: "Complex data requirements, mobile optimization"
  },
  {
    type: "WebSocket APIs",
    description: "APIs en tiempo real con comunicación bidireccional",
    icon: Activity,
    benefits: ["Real-time", "Low Latency", "Full Duplex", "Event-driven"],
    useCase: "Live updates, notifications, collaboration tools"
  },
  {
    type: "gRPC",
    description: "APIs de alto rendimiento con Protocol Buffers",
    icon: Zap,
    benefits: ["High Performance", "Type-safe", "Binary Protocol", "Streaming"],
    useCase: "Microservices, high-throughput systems"
  }
]

export default function APIsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Database className="mr-2 h-5 w-5" />
            APIs & Integraciones
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
            Construyendo{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              APIs Escalables
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Desarrollo de APIs robustas, seguras y eficientes que conectan sistemas
            y permiten la integración sin fisuras entre diferentes plataformas.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured APIs */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">APIs Desarrolladas</h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            APIs en producción con alto rendimiento y fiabilidad
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
          {apiProjects.map((api) => (
            <Card key={api.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Status bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{api.name}</CardTitle>
                      <Badge variant="secondary">{api.version}</Badge>
                      <Badge
                        variant={api.status === "Producción" ? "default" : "secondary"}
                        className={api.status === "Producción"
                          ? "bg-green-600 text-white"
                          : "bg-blue-600/20 text-blue-300 border-blue-600/30"
                        }
                      >
                        {api.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {api.description}
                    </CardDescription>
                  </div>
                  <Button size="icon" variant="outline" asChild>
                    <Link href={api.endpoint} target="_blank">
                      <ExternalLink className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>

                {/* Meta info */}
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {api.category}
                  </div>
                  <div className="flex items-center gap-1">
                    <BarChart className="h-4 w-4" />
                    {api.requests}
                  </div>
                  <div className="flex items-center gap-1">
                    <Activity className="h-4 w-4" />
                    {api.uptime}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {api.technologies.map((tech) => (
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
                    <span className="text-muted-foreground">{api.completion}%</span>
                  </div>
                  <Progress value={api.completion} className="h-2" />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium">Características</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {api.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 text-green-500" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Endpoint info */}
                <div className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <code className="text-sm font-mono">{api.endpoint}</code>
                  </div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* API Types */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Tipos de APIs</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferentes arquitecturas para diferentes necesidades
          </p>
        </div>

        <Tabs defaultValue="rest" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="rest">REST</TabsTrigger>
            <TabsTrigger value="graphql">GraphQL</TabsTrigger>
            <TabsTrigger value="websocket">WebSocket</TabsTrigger>
            <TabsTrigger value="grpc">gRPC</TabsTrigger>
          </TabsList>

          {apiTypes.map((apiType) => (
            <TabsContent key={apiType.type} value={apiType.type.toLowerCase()} className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                      <apiType.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{apiType.type}</CardTitle>
                      <CardDescription>{apiType.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-3">Ventajas</h4>
                      <div className="space-y-2">
                        {apiType.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Uso Recomendado</h4>
                      <p className="text-sm text-muted-foreground">{apiType.useCase}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Separator className="my-16" />

      {/* API Services */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Servicios de API</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones completas para desarrollo e integración de APIs
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {apiServices.map((service) => (
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
                <div className="space-y-2">
                  <h4 className="font-medium">Entregables</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.deliverables.map((deliverable) => (
                      <Badge key={deliverable} variant="secondary" className="text-xs">
                        {deliverable}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {service.timeline}
                  </div>
                  <Button size="sm">
                    Cotizar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
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
              <h2 className="text-3xl font-bold">¿Necesitas Conectar tus Sistemas?</h2>
              <p className="text-lg text-blue-100">
                Desarrollo APIs personalizadas que integran tus aplicaciones
                y permiten compartir datos de forma segura y eficiente
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8"
              asChild
            >
              <Link href="/contacto">
                Consultar API
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}