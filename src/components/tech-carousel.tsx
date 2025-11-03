"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  Bot,
  Code2,
  Database,
  Globe,
  Cloud,
  Shield,
  Cpu,
  Terminal,
  GitBranch,
  Palette,
  Zap
} from "lucide-react"

const technologies = [
  { name: "Python", icon: Brain, color: "text-blue-400" },
  { name: "TypeScript", icon: Code2, color: "text-blue-500" },
  { name: "React", icon: Zap, color: "text-cyan-400" },
  { name: "Next.js", icon: Globe, color: "text-blue-600" },
  { name: "Node.js", icon: Terminal, color: "text-green-400" },
  { name: "AI/ML", icon: Bot, color: "text-purple-400" },
  { name: "Database", icon: Database, color: "text-orange-400" },
  { name: "Cloud", icon: Cloud, color: "text-gray-400" },
  { name: "Security", icon: Shield, color: "text-red-400" },
  { name: "DevOps", icon: Cpu, color: "text-yellow-400" },
  { name: "Git", icon: GitBranch, color: "text-pink-400" },
  { name: "UI/UX", icon: Palette, color: "text-indigo-400" }
]

export function TechCarousel() {
  const [rotation, setRotation] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setRotation(prev => prev + 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  // Static server-side rendering version
  if (!isMounted) {
    return (
      <div className="relative w-96 h-96 mx-auto">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="grid grid-cols-4 gap-4">
            {technologies.slice(0, 8).map((tech) => (
              <Card key={tech.name} className="bg-zinc-800 border-zinc-700 p-3">
                <CardContent className="p-3 flex flex-col items-center space-y-2">
                  <tech.icon className={`h-8 w-8 ${tech.color}`} />
                  <span className="text-xs text-zinc-300 font-medium">
                    {tech.name}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Animated client-side version
  return (
    <div className="relative w-96 h-96 mx-auto">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative w-full h-full"
          style={{ transform: `rotateY(${rotation}deg)` }}
        >
          {technologies.map((tech, index) => {
            const angle = (index * 360) / technologies.length
            const radius = 150
            const x = Math.cos((angle * Math.PI) / 180) * radius
            const z = Math.sin((angle * Math.PI) / 180) * radius
            const opacity = (z + radius) / (radius * 2)
            const scale = 0.8 + (opacity * 0.4)

            return (
              <div
                key={tech.name}
                className="absolute top-1/2 left-1/2 transition-all duration-300"
                style={{
                  transform: `translate(-50%, -50%) translateX(${x}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: Math.floor(opacity * 10)
                }}
              >
                <Card className="bg-zinc-800 border-zinc-700 p-3 backdrop-blur-sm">
                  <CardContent className="p-2 flex flex-col items-center space-y-2">
                    <tech.icon className={`h-8 w-8 ${tech.color}`} />
                    <span className="text-xs text-zinc-300 font-medium">
                      {tech.name}
                    </span>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}