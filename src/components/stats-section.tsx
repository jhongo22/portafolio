"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  Users,
  Star,
  Code,
  Award,
  Clock
} from "lucide-react"
import { Progress } from "@/components/ui/progress"

const stats = [
  {
    label: "Proyectos Completados",
    value: "50+",
    icon: TrendingUp,
    description: "Aplicaciones y soluciones entregadas",
    progress: 100
  },
  {
    label: "Clientes Satisfechos",
    value: "30+",
    icon: Users,
    description: "Empresas y proyectos personales",
    progress: 85
  },
  {
    label: "Años de Experiencia",
    value: "5+",
    icon: Clock,
    description: "Desarrollo profesional",
    progress: 75
  },
]

const achievements = [
  {
    label: "Líneas de Código",
    value: "500K+",
    icon: Code,
    color: "text-blue-500"
  },
  {
    label: "Premios Ganados",
    value: "12+",
    icon: Award,
    color: "text-blue-400"
  },
  {
    label: "Reseñas 5 Estrellas",
    value: "98%",
    icon: Star,
    color: "text-cyan-400"
  }
]

export function StatsSection() {
  return (
    <section className="space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold tracking-tight">Logros e Impacto</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Números que reflejan mi compromiso con la excelencia e innovación
        </p>
      </div>

      {/* Main Stats */}
      <div className="grid gap-8 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.label} className="relative overflow-hidden group">
            <CardContent className="p-8">
              <div className="space-y-6">
                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl font-bold text-primary">
                    {stat.value}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold">{stat.label}</h3>
                  <p className="text-muted-foreground">{stat.description}</p>
                </div>

                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Expertise Level</span>
                    <span className="text-muted-foreground">{stat.progress}%</span>
                  </div>
                  <Progress value={stat.progress} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Achievement Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        {achievements.map((achievement) => (
          <Card key={achievement.label} className="bg-gradient-to-br from-card to-muted/20 border-border/50">
            <CardContent className="p-6 text-center">
              <div className="space-y-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 mx-auto`}>
                  <achievement.icon className={`h-6 w-6 ${achievement.color}`} />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold">{achievement.value}</div>
                  <div className="text-sm text-muted-foreground">{achievement.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}