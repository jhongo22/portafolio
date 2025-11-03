"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import {
  Terminal,
  Code,
  Zap,
  Database,
  Cloud,
  Shield,
  Bot,
  Cpu,
  Palette,
  Globe,
  GitBranch,
  Package
} from "lucide-react"

const techCategories = {
  frontend: [
    { name: "React", icon: Zap, level: 95, description: "Hooks, Context, Performance" },
    { name: "TypeScript", icon: Code, level: 90, description: "Advanced types, generics" },
    { name: "Next.js", icon: Globe, level: 88, description: "SSR, API routes, middleware" },
    { name: "Tailwind CSS", icon: Palette, level: 92, description: "Custom themes, animations" }
  ],
  backend: [
    { name: "Node.js", icon: Cpu, level: 85, description: "Express, NestJS, microservices" },
    { name: "Python", icon: Terminal, level: 95, description: "FastAPI, Django, async" },
    { name: "Database", icon: Database, level: 80, description: "PostgreSQL, MongoDB, Redis" },
    { name: "Cloud", icon: Cloud, level: 75, description: "AWS, Docker, Kubernetes" }
  ],
  ai: [
    { name: "Machine Learning", icon: Bot, level: 92, description: "TensorFlow, PyTorch, scikit-learn" },
    { name: "NLP", icon: Code, level: 88, description: "Transformers, spaCy, OpenAI" },
    { name: "Computer Vision", icon: Shield, level: 75, description: "OpenCV, YOLO, PIL" },
    { name: "Data Analysis", icon: Database, level: 85, description: "Pandas, NumPy, Matplotlib" }
  ],
  tools: [
    { name: "Git", icon: GitBranch, level: 90, description: "Advanced workflows, CI/CD" },
    { name: "Testing", icon: Shield, level: 85, description: "Jest, Cypress, TDD" },
    { name: "DevOps", icon: Cloud, level: 70, description: "CI/CD, monitoring, IaC" },
    { name: "Package Manager", icon: Package, level: 95, description: "npm, yarn, pnpm" }
  ]
}

export function TechStackSection() {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Tecnologías</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Tecnologías y herramientas con las que trabajo diariamente para construir productos increíbles
        </p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="ai">IA & ML</TabsTrigger>
          <TabsTrigger value="tools">Herramientas</TabsTrigger>
        </TabsList>

        {Object.entries(techCategories).map(([category, technologies]) => (
          <TabsContent key={category} value={category} className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle className="capitalize">
                  {category === 'ai' ? 'IA & Machine Learning' : category === 'tools' ? 'Herramientas' : category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-8 md:grid-cols-2">
                  {technologies.map((tech) => (
                    <HoverCard key={tech.name}>
                      <HoverCardTrigger asChild>
                        <div className="space-y-4 cursor-pointer group">
                          <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                              <tech.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-2">
                                <span className="text-lg font-medium">{tech.name}</span>
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">{tech.level}%</span>
                                  <Badge variant="secondary" className="text-xs">
                                    {tech.level >= 90 ? 'Expert' : tech.level >= 80 ? 'Advanced' : 'Intermediate'}
                                  </Badge>
                                </div>
                              </div>
                              <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-700 ease-out"
                                  style={{ width: `${tech.level}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-80" side="right">
                        <div className="space-y-2">
                          <h4 className="font-semibold">{tech.name}</h4>
                          <p className="text-sm text-muted-foreground">{tech.description}</p>
                          <div className="text-xs text-primary">
                            Proficiency: {tech.level}%
                          </div>
                        </div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}