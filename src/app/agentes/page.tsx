import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  Bot,
  Brain,
  Zap,
  Target,
  Code,
  Database,
  Cloud,
  TrendingUp,
  Clock,
  CheckCircle,
  ArrowRight,
  Sparkles,
  MessageSquare,
  BarChart,
  Shield,
  Eye,
  GitBranch,
  Cpu
} from "lucide-react"
import Link from "next/link"

const aiAgents = [
  {
    name: "ChatBot Empresarial",
    description: "Asistente virtual inteligente para atención al cliente 24/7",
    icon: MessageSquare,
    category: "Chatbots",
    technologies: ["Python", "NLP", "Machine Learning", "FastAPI"],
    features: ["NLP Avanzado", "Multi-idioma", "Integración APIs", "Análisis de Sentimientos"],
    completion: 95,
    status: "Producción"
  },
  {
    name: "Agente de Análisis Predictivo",
    description: "Sistema automatizado que predice tendencias y toma decisiones basadas en datos",
    icon: BarChart,
    category: "Analytics",
    technologies: ["Python", "TensorFlow", "Pandas", "NumPy"],
    features: ["Predicción en Tiempo Real", "Dashboard Interactivo", "Alertas Automáticas", "Exportación Datos"],
    completion: 85,
    status: "En Desarrollo"
  },
  {
    name: "Automatizador de Procesos",
    description: "Agente que automatiza tareas repetitivas y flujos de trabajo complejos",
    icon: Zap,
    category: "Automation",
    technologies: ["Python", "Selenium", "BeautifulSoup", "APIs"],
    features: ["Web Scraping", "RPA", "Programación de Tareas", "Reportes Automáticos"],
    completion: 90,
    status: "Beta"
  },
  {
    name: "Clasificador de Documentos",
    description: "IA que clasifica y extrae información de documentos automáticamente",
    icon: Brain,
    category: "Document AI",
    technologies: ["Python", "OpenCV", "spaCy", "scikit-learn"],
    features: ["OCR Avanzado", "Clasificación Inteligente", "Extracción de Datos", "Validación Automática"],
    completion: 75,
    status: "Prototipo"
  }
]

const techStack = [
  { name: "Machine Learning", level: 92, description: "TensorFlow, PyTorch, scikit-learn" },
  { name: "Procesamiento Lenguaje Natural", level: 88, description: "spaCy, NLTK, Transformers" },
  { name: "Computer Vision", level: 75, description: "OpenCV, PIL, YOLO" },
  { name: "Cloud Computing", level: 80, description: "AWS, Google Cloud, Docker" }
]

const useCases = [
  {
    title: "Atención al Cliente",
    description: "Chatbots que responden preguntas y resuelven problemas automáticamente",
    icon: MessageSquare,
    stats: "95% de satisfacción"
  },
  {
    title: "Análisis de Datos",
    description: "Agentes que procesan grandes volúmenes de datos y generan insights",
    icon: BarChart,
    stats: "2TB procesados diariamente"
  },
  {
    title: "Automatización Industrial",
    description: "Sistemas de IA que optimizan procesos de fabricación",
    icon: Cpu,
    stats: "30% de eficiencia mejorada"
  },
  {
    title: "Seguridad Cibernética",
    description: "Agentes que detectan y responden a amenazas en tiempo real",
    icon: Shield,
    stats: "99.9% detección precisa"
  }
]

export default function AgentesPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="space-y-6">
        <div className="space-y-4">
          <Badge className="text-lg px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
            <Bot className="mr-2 h-5 w-5" />
            Agentes de Inteligencia Artificial
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl text-white">
            Creando Agentes{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Inteligentes
            </span>
          </h1>
          <p className="text-xl text-zinc-300 max-w-3xl leading-relaxed">
            Desarrollo de agentes autónomos que aprenden, se adaptan y automatizan tareas complejas
            utilizando las últimas tecnologías de Machine Learning y procesamiento de lenguaje natural.
          </p>
        </div>
      </section>

      <Separator className="my-16" />

      {/* Featured Agents */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Agentes Destacados</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Conoce mis proyectos más recientes de inteligencia artificial
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {aiAgents.map((agent) => (
            <Card key={agent.name} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              {/* Status bar */}
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />

              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white shadow-lg">
                    <agent.icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-xl">{agent.name}</CardTitle>
                      <Badge
                        variant={agent.status === "Producción" ? "default" : "secondary"}
                        className={agent.status === "Producción"
                          ? "bg-green-600 text-white"
                          : "bg-blue-600/20 text-blue-300 border-blue-600/30"
                        }
                      >
                        {agent.status}
                      </Badge>
                    </div>
                    <CardDescription className="text-base leading-relaxed">
                      {agent.description}
                    </CardDescription>
                  </div>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {agent.technologies.map((tech) => (
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
                    <span className="text-muted-foreground">{agent.completion}%</span>
                  </div>
                  <Progress value={agent.completion} className="h-2" />
                </div>

                {/* Features */}
                <div className="space-y-3">
                  <h4 className="font-medium">Características</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {agent.features.map((feature) => (
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
                    <Eye className="h-4 w-4 mr-2" />
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
          <h2 className="text-3xl font-bold tracking-tight">Stack Tecnológico</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas especializadas en desarrollo de agentes IA
          </p>
        </div>

        <Card className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            {techStack.map((tech) => (
              <div key={tech.name} className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-primary" />
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

      {/* Use Cases */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tight">Casos de Uso</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Aplicaciones prácticas donde mis agentes de IA generan valor real
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase) => (
            <Card key={useCase.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 text-white mx-auto">
                  <useCase.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-lg">{useCase.title}</CardTitle>
                <CardDescription>{useCase.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{useCase.stats}</div>
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
              <h2 className="text-3xl font-bold">¿Necesitas un Agente IA para tu Negocio?</h2>
              <p className="text-lg text-blue-100">
                Desarrollamos soluciones personalizadas de inteligencia artificial
                que automatizan procesos y mejoran la eficiencia operativa
              </p>
            </div>
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8"
              asChild
            >
              <Link href="/contacto">
                Consultar Proyecto
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}