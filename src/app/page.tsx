import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <HeroSection />

      <Separator className="my-16" />

      {/* Stats Section */}
      <StatsSection />

      <Separator className="my-16" />

      {/* Tech Stack Section */}
      <TechStackSection />

      <Separator className="my-16" />

      {/* Services Section */}
      <ServicesSection />

      <Separator className="my-16" />

      {/* Enhanced CTA Section */}
      <section className="relative">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5 rounded-3xl" />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-blue-400/10 rounded-3xl blur-3xl" />

        <Card className="relative overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
          {/* Animated gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-cyan-600/20 animate-pulse" />

          <CardContent className="relative flex flex-col items-center gap-8 p-16 text-center text-white">
            {/* Animated icon */}
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="h-8 w-8 animate-pulse text-cyan-400" />
            </div>

            <div className="space-y-4 max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                ¿Listo para construir algo increíble?
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Transformemos tus ideas en realidad con soluciones inteligentes y eficientes.
                Desde automatización con IA hasta aplicaciones web modernas, estoy aquí para dar vida a tu visión.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
              <Button
                size="lg"
                className="text-base px-8 py-6 bg-white text-blue-900 hover:bg-blue-50 group font-semibold"
                asChild
              >
                <Link href="/contacto" className="flex items-center">
                  Comenzar Proyecto
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 border-white/30 text-white hover:bg-white/10 font-semibold"
                asChild
              >
                <Link href="/proyectos">
                  Ver Mis Trabajos
                </Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-12 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">24h</div>
                <div className="text-sm text-blue-200">Tiempo de Respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-blue-200">Satisfacción</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400">Gratis</div>
                <div className="text-sm text-blue-200">Consulta Inicial</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}