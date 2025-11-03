import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Code,
  Zap,
  Database,
  Cloud,
  Terminal,
  FileText,
  Globe,
  Download,
  Play,
  Settings,
  CheckCircle,
  ArrowRight,
  Sparkles,
  GitBranch,
  Shield,
  Clock,
  Target,
  BarChart,
  Mail
} from "lucide-react"
import Link from "next/link"

const scripts = [
  {
    name: "Web Scraper Avanzado",
    description: "Sistema automatizado para extracción de datos de sitios web complejos",
    icon: Globe,
    category: "Web Scraping",
    technologies: ["Python", "Selenium", "BeautifulSoup", "Scrapy"],
    features: ["Evasión Anti-Bot", "Proxy Rotation", "Data Cleaning", "Export CSV/JSON"],
    completion: 100,
    status: "Producción",
    language: "Python",
    lines: 2500
  },
  {
    name: "Automatización API REST",
    description: "Orquestrador de llamadas API automáticas con reintentos y logging",
    icon: Cloud,
    category: "API Integration",
    technologies: ["Node.js", "Axios", "Rate Limiting", "Webhooks"],
    features: ["Retry Logic", "Error Handling", "Rate Limiting", "Webhook Integration"],
    completion: 90,
    status: "Beta",
    language: "JavaScript",
    lines: 1800
  },
  {
    name: "Procesador de CSV Masivo",
    description: "Script para procesar archivos CSV de gigabytes con análisis en paralelo",
    icon: Database,
    category: "Data Processing",
    technologies: ["Python", "Pandas", "Multiprocessing", "Memory Optimization"],
    features: ["Parallel Processing", "Memory Efficient", "Data Validation", "Progress Tracking"],
    completion: 85,
    status: "En Desarrollo",
    language: "Python",
    lines: 3200
  },
  {
    name: "Generador de Reportes Automático",
    description: "Sistema que genera informes personalizados desde múltiples fuentes de datos",
    icon: FileText,
    category: "Reporting",
    technologies: ["Python", "Matplotlib", "Jinja2", "Pandas"],
    features: ["PDF Generation", "Chart Creation", "Template Engine", "Email Delivery"],
    completion: 95,
    status: "Producción",
    language: "Python",
    lines: 2100
  }
]

const techStack = [
  { name: "Python", level: 95, description: "Selenium, Pandas, Requests, BeautifulSoup" },
  { name: "JavaScript/Node.js", level: 88, description: "Axios, Cheerio, Puppeteer, Playwright" },
  { name: "Shell Scripting", level: 85, description: "Bash, PowerShell, Cron Jobs" },
  { name: "DevOps Tools", level: 75, description: "Docker, GitHub Actions, CI/CD" }
]

const automationCategories = [
  {
    title: "Web Automation",
    description: "Scripts que automatizan tareas web y navegación",
    icon: Globe,
    count: 15,
    examples: ["Form filling", "Data extraction", "Social media automation"]
  },
  {
    title: "API Integration",
    description: "Conectores automáticos entre sistemas y servicios",
    icon: Cloud,
    count: 12,
    examples: ["REST APIs", "GraphQL", "Webhooks", "Batch processing"]
  },
  {
    title: "Data Processing",
    description: "Procesamiento masivo de datos y transformaciones",
    icon: Database,
    count: 18,
    examples: ["ETL pipelines", "Data cleaning", "File conversion", "Analysis"]
  },
  {
    title: "System Administration",
    description: "Automatización de tareas administrativas y mantenimiento",
    icon: Settings,
    count: 10,
    examples: ["Backup automation", "Log analysis", "System monitoring", "Deployment"]
  }
]

export default function ScriptsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Code className="mr-2 h-5 w-5" />
            Scripts y Automatización
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
            Automatización con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Scripts Inteligentes
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Desarrollo de scripts personalizados que automatizan tareas repetitivas,
            integran sistemas y procesan datos masivamente con alta eficiencia.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured Scripts */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Scripts Destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones de automatización listas para producción
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {scripts.map((script) => (
            <Card key={script.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Status bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg">
                    <script.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{script.name}</CardTitle>
                      <Badge
                        variant={script.status === "Producción" ? "default" : "secondary"}
                        className={script.status === "Producción"
                          ? "bg-green-600 text-white"
                          : "bg-blue-600/20 text-blue-300 border-blue-600/30"
                        }
                      >
                        {script.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {script.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Meta info */}
                <div className="flex gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Terminal className="h-4 w-4" />
                    {script.language}
                  </div>
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {script.lines.toLocaleString()} líneas
                  </div>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    {script.category}
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {script.technologies.map((tech) => (
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
                    <span className="text-muted-foreground">{script.completion}%</span>
                  </div>
                  <Progress value={script.completion} className="h-2" />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium">Características</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {script.features.map((feature) => (
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
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                  <Button size="sm" variant="outline">
                    <Play className="h-4 w-4 mr-2" />
                    Demo
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
          <h2 className="text-3xl font-bold tracking-tight">Stack de Automatización</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías especializadas en desarrollo de scripts y automatización
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

      {/* Automation Categories */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Categorías de Automatización</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tipos de automatización que desarrollo para diferentes necesidades
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {automationCategories.map((category) => (
            <Card key={category.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white mx-auto">
                  <category.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="text-2xl font-bold text-primary">{category.count}</div>
                  <div className="text-sm text-muted-foreground"> Scripts desarrollados</div>
                  <div className="space-y-1">
                    {category.examples.map((example) => (
                      <div key={example} className="text-xs text-muted-foreground">
                        • {example}
                      </div>
                    ))}
                  </div>
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
              <Zap className="h-8 w-8 animate-pulse text-cyan-400" />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold">¿Tareas Repetitivas que Automatizar?</h2>
              <p className="text-lg text-blue-100">
                Desarrollo scripts personalizados para automatizar cualquier proceso manual
                y mejorar la productividad de tu equipo
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8"
              asChild
            >
              <Link href="/contacto">
                Solicitar Script
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}