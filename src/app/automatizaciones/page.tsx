import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Zap,
  Cpu,
  Database,
  Cloud,
  Settings,
  Play,
  Pause,
  RotateCcw,
  BarChart,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Shield,
  Activity,
  Globe,
  Terminal,
  Calendar
} from "lucide-react"
import Link from "next/link"

const automationProjects = [
  {
    name: "Automatización de E-commerce",
    description: "Sistema completo de automatización para procesamiento de pedidos y gestión de inventario",
    category: "Retail Automation",
    status: "Producción",
    completion: 100,
    impact: "95% reducción tiempo procesamiento",
    technologies: ["Python", "RPA", "APIs", "Webhooks", "MongoDB"],
    features: ["Order Processing", "Inventory Sync", "Email Notifications", "Report Generation"],
    savings: "$15,000/mes",
    timeSaved: "40h/semana"
  },
  {
    name: "Pipeline de Datos Masivo",
    description: "Automatización ETL que procesa 10TB de datos diariamente desde múltiples fuentes",
    category: "Data Pipeline",
    status: "Producción",
    completion: 95,
    impact: "99.9% precisión datos",
    technologies: ["Apache Airflow", "Python", "AWS", "Spark", "Redshift"],
    features: ["Scheduled Jobs", "Error Handling", "Data Validation", "Quality Checks"],
    savings: "$25,000/mes",
    timeSaved: "60h/semana"
  },
  {
    name: "Automatización DevOps",
    description: "CI/CD automatizado con testing, despliegue y monitoreo automático",
    category: "DevOps Automation",
    status: "Producción",
    completion: 100,
    impact: "90% reducción errores humanos",
    technologies: ["Jenkins", "Docker", "Kubernetes", "Terraform", "GitHub Actions"],
    features: ["Auto Testing", "Auto Deployment", "Rollback", "Monitoring"],
    savings: "$20,000/mes",
    timeSaved: "30h/semana"
  },
  {
    name: "Automatización Financiera",
    description: "Sistema automatizado para reconciliación bancaria y generación de informes financieros",
    category: "Financial Automation",
    status: "Beta",
    completion: 80,
    impact: "99.99% precisión en reconciliación",
    technologies: ["Python", "Plaid API", "Excel Automation", "PostgreSQL"],
    features: ["Bank Reconciliation", "Report Generation", "Anomaly Detection", "Audit Trail"],
    savings: "$30,000/mes",
    timeSaved: "50h/semana"
  }
]

const automationCategories = [
  {
    title: "RPA - Robotic Process Automation",
    description: "Automatización de procesos manuales repetitivos",
    icon: Zap,
    benefits: ["Reducción de errores", "Disponibilidad 24/7", "Procesamiento rápido", "ROI rápido"],
    examples: ["Data Entry", "Form Processing", "Report Generation", "File Migration"],
    complexity: "Medio"
  },
  {
    title: "API Integration",
    description: "Conexión automatizada entre sistemas y servicios",
    icon: Globe,
    benefits: ["Integración en tiempo real", "Sincronización datos", "Procesamiento masivo", "Alertas automáticas"],
    examples: ["Payment Gateways", "CRM Integration", "Email Services", "Social Media APIs"],
    complexity: "Alto"
  },
  {
    title: "Workflow Automation",
    description: "Automatización de flujos de trabajo complejos",
    icon: Activity,
    benefits: ["Gestión de procesos", "Seguimiento audit", "Asignación automática", "SLA compliance"],
    examples: ["Approval Workflows", "Document Processing", "Task Assignment", "Escalation Rules"],
    complexity: "Alto"
  },
  {
    title: "Scheduled Tasks",
    description: "Ejecución programada de tareas administrativas",
    icon: Calendar,
    benefits: ["Consistencia", "Ejecución confiable", "Logging completo", "Notificaciones"],
    examples: ["Backups", "Data Cleanup", "Report Generation", "System Maintenance"],
    complexity: "Bajo"
  }
]

const automationTools = [
  { name: "Python", level: 95, description: "Selenium, Beautiful Soup, Requests, Pandas" },
  { name: "JavaScript", level: 88, description: "Puppeteer, Playwright, Node.js automation" },
  { name: "Shell Scripting", level: 85, description: "Bash, PowerShell, Cron jobs" },
  { name: "RPA Tools", level: 75, description: "UiPath, Automation Anywhere, Blue Prism" }
]

export default function AutomatizacionesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Zap className="mr-2 h-5 w-5" />
            Automatización Inteligente
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
            Automatizando{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Procesos
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Desarrollo de soluciones de automatización que eliminan trabajo manual,
            reducen errores y aumentan la eficiencia operativa significativamente.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured Automation Projects */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Proyectos de Automatización</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones reales con impacto medible en productividad
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {automationProjects.map((project) => (
            <Card key={project.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Impact bar */}
              <div className="h-1 bg-gradient-to-r from-green-500 to-emerald-500" />

              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg">
                    <Zap className="h-6 w-6" />
                  </div>
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
                </div>

                {/* Impact metrics */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-green-600/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400">{project.impact}</div>
                    <div className="text-xs text-muted-foreground">Impacto Medido</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400">{project.completion}%</div>
                    <div className="text-xs text-muted-foreground">Completado</div>
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
                <Progress value={project.completion} className="h-2" />

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

                {/* ROI metrics */}
                <div className="grid grid-cols-2 gap-4 p-3 bg-blue-600/10 rounded-lg">
                  <div className="text-center">
                    <div className="text-xl font-bold text-blue-400">{project.savings}</div>
                    <div className="text-xs text-muted-foreground">Ahorro Mensual</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-cyan-400">{project.timeSaved}</div>
                    <div className="text-xs text-muted-foreground">Tiempo Ahorrado</div>
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-3">
                  <Button size="sm" className="flex-1">
                    <Play className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <TrendingUp className="h-4 w-4 mr-2" />
                    Métricas
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Separator className="my-16" />

      {/* Automation Categories */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Tipos de Automatización</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Diferentes enfoques para automatizar tus procesos
          </p>
        </div>

        <Tabs defaultValue="rpa" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="rpa">RPA</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="workflow">Workflow</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled</TabsTrigger>
          </TabsList>

          {automationCategories.map((category) => (
            <TabsContent key={category.title} value={category.title.toLowerCase().split(' ')[0]} className="mt-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
                      <category.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{category.title}</CardTitle>
                      <CardDescription>{category.description}</CardDescription>
                      <Badge variant="outline" className="w-fit mt-2">
                        Complejidad: {category.complexity}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h4 className="font-medium mb-3">Ventajas</h4>
                      <div className="space-y-2">
                        {category.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2 text-sm">
                            <CheckCircle className="h-3 w-3 text-green-500" />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Ejemplos</h4>
                      <div className="space-y-2">
                        {category.examples.map((example) => (
                          <div key={example} className="text-sm text-muted-foreground">
                            • {example}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      <Separator className="my-16" />

      {/* Automation Tools */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Herramientas de Automatización</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías especializadas en automatización de procesos
          </p>
        </div>

        <Card className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {automationTools.map((tool) => (
              <div key={tool.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Terminal className="h-5 w-5 text-primary" />
                    <span className="font-medium">{tool.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{tool.level}%</span>
                </div>
                <Progress value={tool.level} className="h-2" />
                <p className="text-sm text-muted-foreground">{tool.description}</p>
              </div>
            ))}
          </div>
        </Card>
      </section>

      {/* CTA */}
      <section>
        <Card className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
          <CardContent className="flex flex-col items-center gap-6 p-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-8 w-8 animate-pulse text-cyan-400" />
            </div>
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold">¿Procesos Manuales que Automatizar?</h2>
              <p className="text-lg text-blue-100">
                Identifico oportunidades de automatización y desarrollo soluciones
                que ahorran tiempo, reducen errores y mejoran la eficiencia
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8"
              asChild
            >
              <Link href="/contacto">
                Análisis Gratuito
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}