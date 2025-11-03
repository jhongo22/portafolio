import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Globe,
  Bot,
  Code,
  Zap,
  BarChart,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  ExternalLink,
  Star,
  Clock,
  Users,
  Target,
  TrendingUp
} from "lucide-react"
import Link from "next/link"

const allProjects = [
  {
    name: "ChatBot Empresarial",
    description: "Asistente virtual inteligente para atención al cliente 24/7",
    category: "Agentes IA",
    type: "ia",
    icon: "🤖",
    status: "Producción",
    completion: 95,
    url: "https://chatbot-demo.com",
    technologies: ["Python", "NLP", "Machine Learning", "FastAPI"],
    image: "/projects/chatbot.jpg",
    client: "TechCorp"
  },
  {
    name: "Agente de Análisis Predictivo",
    description: "Sistema automatizado que predice tendencias y toma decisiones",
    category: "Agentes IA",
    type: "ia",
    icon: "📊",
    status: "Beta",
    completion: 85,
    url: "https://analytics-ai.com",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    image: "/projects/analytics-ai.jpg",
    client: "DataDrive"
  },

  // Scripts
  {
    name: "Web Scraper Avanzado",
    description: "Sistema automatizado para extracción de datos de sitios web complejos",
    category: "Scripts",
    type: "scripts",
    icon: "🕷️",
    status: "Producción",
    completion: 100,
    url: "https://scraper-tool.com",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Scrapy"],
    image: "/projects/scraper.jpg",
    client: "DataMining Corp"
  },
  {
    name: "Procesador CSV Masivo",
    description: "Script para procesar archivos CSV de gigabytes con análisis en paralelo",
    category: "Scripts",
    type: "scripts",
    icon: "📋",
    status: "En Desarrollo",
    completion: 80,
    url: null,
    technologies: ["Python", "Pandas", "Multiprocessing", "Memory Optimization"],
    image: "/projects/csv-processor.jpg",
    client: "BigData Inc"
  },

  // Páginas Web
  {
    name: "E-commerce Platform",
    description: "Plataforma de comercio electrónico completa con panel de administración",
    category: "Páginas Web",
    type: "web",
    icon: "🛍️",
    status: "Producción",
    completion: 100,
    url: "https://ecommerce-demo.com",
    technologies: ["React", "Next.js", "Stripe", "PostgreSQL"],
    image: "/projects/ecommerce.jpg",
    client: "RetailTech"
  },
  {
    name: "SaaS Dashboard",
    description: "Dashboard analítico para gestión empresarial con gráficos en tiempo real",
    category: "Páginas Web",
    type: "web",
    icon: "📈",
    status: "Producción",
    completion: 95,
    url: "https://dashboard-analytics.com",
    technologies: ["TypeScript", "React", "D3.js", "Node.js"],
    image: "/projects/dashboard.jpg",
    client: "Business Intelligence Pro"
  },

  // APIs
  {
    name: "API de Pagos Segura",
    description: "REST API para procesamiento de pagos con encriptación y validación",
    category: "APIs",
    type: "apis",
    icon: "💳",
    status: "Producción",
    completion: 100,
    url: "https://api.payments.com",
    technologies: ["Node.js", "Express", "Stripe", "JWT"],
    image: "/projects/payment-api.jpg",
    client: "FinTech Solutions"
  },
  {
    name: "Analytics API",
    description: "GraphQL API para análisis de datos con consultas personalizadas",
    category: "APIs",
    type: "apis",
    icon: "🔄",
    status: "Producción",
    completion: 95,
    url: "https://graphql.analytics.com",
    technologies: ["Node.js", "Apollo", "MongoDB", "Redis"],
    image: "/projects/analytics-api.jpg",
    client: "DataSync Corp"
  },

  // Automatizaciones
  {
    name: "Automatización de E-commerce",
    description: "Sistema completo para procesamiento de pedidos y gestión de inventario",
    category: "Automatizaciones",
    type: "automation",
    icon: "⚡",
    status: "Producción",
    completion: 100,
    url: null,
    technologies: ["Python", "RPA", "APIs", "MongoDB"],
    image: "/projects/ecommerce-automation.jpg",
    client: "SmartCommerce"
  },
  {
    name: "Pipeline de Datos Masivo",
    description: "Automatización ETL que procesa 10TB de datos diariamente",
    category: "Automatizaciones",
    type: "automation",
    icon: "🔧",
    status: "Producción",
    completion: 95,
    url: null,
    technologies: ["Apache Airflow", "Python", "AWS", "Spark"],
    image: "/projects/data-pipeline.jpg",
    client: "DataLake Pro"
  }
]

const stats = {
  total: allProjects.length,
  completed: allProjects.filter(p => p.completion === 100).length,
  inProgress: allProjects.filter(p => p.completion > 0 && p.completion < 100).length,
  planning: allProjects.filter(p => p.completion === 0).length,
  categories: {
    "Agentes IA": allProjects.filter(p => p.type === "ia").length,
    "Scripts": allProjects.filter(p => p.type === "scripts").length,
    "Páginas Web": allProjects.filter(p => p.type === "web").length,
    "APIs": allProjects.filter(p => p.type === "apis").length,
    "Automatizaciones": allProjects.filter(p => p.type === "automation").length
  }
}

export default function ProyectosPage() {
  return (
    <div className="space-y-8 sm:space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Target className="mr-2 h-5 w-5" />
            Portafolio Completo
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Todos Mis{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Proyectos
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Un portfolio completo de proyectos de inteligencia artificial, desarrollo web,
            APIs y automatización que demuestran mi experiencia y capacidad técnica.
          </p>
        </div>
      </section>

      <Separator className="my-8 sm:my-16" />

      {/* Stats Overview */}
      <section className="space-y-8">
        <div className="grid gap-4 sm:gap-6 grid-cols-2 lg:grid-cols-5">
          <Card className="text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-primary">{stats.total}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Proyectos Totales</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-green-500">{stats.completed}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Completados</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-blue-500">{stats.inProgress}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">En Progreso</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-cyan-500">{stats.planning}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Planificando</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-purple-500">100%</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Tasa Éxito</div>
            </CardContent>
          </Card>
        </div>

        {/* Category Distribution */}
        <Card className="p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Distribución por Categoría</h3>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-5">
            {Object.entries(stats.categories).map(([category, count]) => (
              <div key={category} className="flex items-center justify-between p-3 rounded-lg bg-card">
                <span className="text-xs sm:text-sm font-medium truncate">{category}</span>
                <Badge variant="secondary" className="flex-shrink-0">{count}</Badge>
              </div>
            ))}
          </div>
        </Card>
      </section>

      <Separator className="my-8 sm:my-16" />

      {/* Projects Grid */}
      <section className="space-y-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Todos los Proyectos</h2>
          <p className="text-muted-foreground">
            Explora mi portfolio completo
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6 h-auto p-1">
            <TabsTrigger value="all" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Todos</TabsTrigger>
            <TabsTrigger value="ia" className="text-xs sm:text-sm py-2 px-2 sm:px-3">IA</TabsTrigger>
            <TabsTrigger value="scripts" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Scripts</TabsTrigger>
            <TabsTrigger value="web" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Web</TabsTrigger>
            <TabsTrigger value="apis" className="text-xs sm:text-sm py-2 px-2 sm:px-3">APIs</TabsTrigger>
            <TabsTrigger value="automation" className="text-xs sm:text-sm py-2 px-2 sm:px-3">Auto</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
              {allProjects.map((project) => (
                <Card key={project.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  {/* Project Header */}
                  <div className="h-16 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 relative flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl">{project.icon}</span>
                  </div>

                  <CardHeader className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                        <CardTitle className="text-base sm:text-lg">{project.name}</CardTitle>
                        <Badge
                          variant={project.status === "Producción" ? "default" : "secondary"}
                          className={project.status === "Producción"
                            ? "bg-green-600 text-white text-xs"
                            : "bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs"
                          }
                        >
                          {project.status}
                        </Badge>
                      </div>
                      <CardDescription className="text-xs sm:text-sm">
                        {project.description}
                      </CardDescription>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm text-muted-foreground gap-2">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                        {project.client}
                      </div>
                      <div className="flex items-center gap-1">
                        <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                        {project.category}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Progress */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Completado</span>
                        <span className="text-muted-foreground">{project.completion}%</span>
                      </div>
                      <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                          style={{ width: `${project.completion}%` }}
                        />
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      {project.url && (
                        <Button size="sm" variant="outline" className="flex-1">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      )}
                      <Button size="sm" className="flex-1">
                        <Target className="h-4 w-4 mr-2" />
                        Detalles
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Category tabs */}
          {["ia", "scripts", "web", "apis", "automation"].map((type) => (
            <TabsContent key={type} value={type} className="mt-8">
              <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {allProjects
                  .filter(project => project.type === type)
                  .map((project) => (
                    <Card key={project.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                      <div className="h-16 sm:h-12 bg-gradient-to-r from-blue-500 to-cyan-500 relative flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl">{project.icon}</span>
                      </div>

                      <CardHeader className="space-y-3">
                        <div className="space-y-2">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                            <CardTitle className="text-base sm:text-lg">{project.name}</CardTitle>
                            <Badge
                              variant={project.status === "Producción" ? "default" : "secondary"}
                              className={project.status === "Producción"
                                ? "bg-green-600 text-white text-xs"
                                : "bg-blue-600/20 text-blue-300 border-blue-600/30 text-xs"
                              }
                            >
                              {project.status}
                            </Badge>
                          </div>
                          <CardDescription className="text-xs sm:text-sm">
                            {project.description}
                          </CardDescription>
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-xs sm:text-sm text-muted-foreground gap-2">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3 sm:h-4 sm:w-4" />
                            {project.client}
                          </div>
                          <div className="flex items-center gap-1">
                            <Target className="h-3 w-3 sm:h-4 sm:w-4" />
                            {project.category}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-muted-foreground">Completado</span>
                            <span className="text-muted-foreground">{project.completion}%</span>
                          </div>
                          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                            <div
                              className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all"
                              style={{ width: `${project.completion}%` }}
                            />
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                          {project.url && (
                            <Button size="sm" variant="outline" className="flex-1">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Demo
                            </Button>
                          )}
                          <Button size="sm" className="flex-1">
                            <Target className="h-4 w-4 mr-2" />
                            Detalles
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <CardContent className="flex flex-col items-center gap-6 p-8 sm:p-12 text-center">
            <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-6 w-6 sm:h-8 sm:w-8 animate-pulse text-cyan-400" />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-2xl sm:text-3xl font-bold">¿Interesado en Colaborar?</h2>
              <p className="text-base sm:text-lg text-blue-100">
                Todos estos proyectos demuestran mi capacidad para entregarte soluciones
                de alta calidad en cualquier área tecnológica
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-6 sm:px-8 text-sm sm:text-base"
              asChild
            >
              <Link href="/contacto">
                Discutir Proyecto
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}