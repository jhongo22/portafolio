"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Sparkles,
  Zap
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export function HeroSection() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-cyan-600/5 rounded-3xl" />

      <div className="relative grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 items-center">
        {/* Content */}
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <Badge className="text-xs sm:text-sm px-3 sm:px-4 py-2 bg-blue-600/20 text-blue-300 border-blue-600/30">
                <Sparkles className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Desarrollador Full Stack</span>
                <span className="xs:hidden">Full Stack</span>
              </Badge>
              <Badge variant="outline" className="text-xs sm:text-sm px-3 sm:px-4 py-2 border-cyan-600/30 text-cyan-300">
                <Zap className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                <span className="hidden xs:inline">Especialista en IA</span>
                <span className="xs:hidden">IA</span>
              </Badge>
            </div>

            {/* Main heading */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold tracking-tight text-white">
                Hola, soy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Jhon</span> 👋
              </h1>
              <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl leading-relaxed">
                Creo soluciones inteligentes que combinan automatización con IA y desarrollo web moderno.
                Especializado en crear aplicaciones escalables que resuelven problemas del mundo real.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
              <Button
                asChild
                size="lg"
                className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Link href="/proyectos" className="flex items-center justify-center">
                  Ver Proyectos
                  <ArrowRight className={`ml-2 h-4 w-4 sm:h-5 sm:w-5 transition-transform ${isHovered ? 'translate-x-1' : ''}`} />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-sm sm:text-base px-6 sm:px-8 py-4 sm:py-6 border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white group" asChild>
                <Link href="/contacto" className="flex items-center justify-center">
                  Descargar CV
                  <Download className="ml-2 h-4 w-4 sm:h-5 sm:w-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </Button>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-400">
                <span>Conecta:</span>
              </div>
              <div className="flex gap-2 sm:gap-3">
                <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white" asChild>
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white" asChild>
                  <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
                <Button size="icon" variant="ghost" className="h-10 w-10 rounded-full hover:bg-zinc-800 text-zinc-400 hover:text-white" asChild>
                  <Link href="mailto:john@example.com">
                    <Mail className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Avatar/Card section */}
        <div className="flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative w-full max-w-xs sm:max-w-sm">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl sm:rounded-3xl blur-2xl sm:blur-3xl" />

            {/* Main card */}
            <div className="relative bg-card/80 backdrop-blur-sm border rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl sm:shadow-2xl">
              <div className="flex flex-col items-center space-y-4 sm:space-y-6">
                <Avatar className="h-24 w-24 sm:h-32 sm:w-32 rounded-2xl">
                  <AvatarImage src="/avatar.jpg" alt="Jhon Gonzalez" />
                  <AvatarFallback className="text-2xl sm:text-3xl rounded-2xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground">
                    JG
                  </AvatarFallback>
                </Avatar>

                <div className="text-center space-y-1 sm:space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold">Jhon Gonzalez</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">Senior Full Stack Developer</p>
                </div>

                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 text-xs">
                  <Badge variant="secondary" className="text-xs px-2 py-1">React</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">TypeScript</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">Python</Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-1">AI/ML</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}