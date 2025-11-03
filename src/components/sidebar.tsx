"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Home,
  Bot,
  Code,
  Globe,
  Settings,
  Cpu,
  FileCode,
  Network,
  Menu,
  Github,
  Linkedin,
  Mail
} from "lucide-react"
import { useState } from "react"

const navigation = [
  { name: "Inicio", href: "/", icon: Home, description: "Página principal" },
  { name: "Agentes IA", href: "/agentes", icon: Bot, description: "IA y Machine Learning" },
  { name: "Scripts", href: "/scripts", icon: Code, description: "Automatización y código" },
  { name: "Páginas Web", href: "/paginas", icon: Globe, description: "Desarrollo web" },
  { name: "APIs", href: "/apis", icon: Network, description: "Integraciones" },
  { name: "Automatizaciones", href: "/automatizaciones", icon: Cpu, description: "Procesos automáticos" },
  { name: "Proyectos", href: "/proyectos", icon: FileCode, description: "Portafolio completo" },
]

export function SidebarContent({ mobile = false }: { mobile?: boolean }) {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-full flex-col bg-black">
      {/* Header */}
      {!mobile && (
        <div className="flex h-16 shrink-0 items-center border-b border-zinc-800 px-6">
          <Link href="/" className="flex items-center gap-3 font-semibold text-white hover:text-blue-400 transition-colors">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
              <span className="text-sm font-bold text-white">P</span>
            </div>
            <span className="text-lg">Portfolio</span>
          </Link>
        </div>
      )}

      {/* Navigation - with proper scroll area */}
      <ScrollArea className="flex-1 px-3 py-4 sidebar-scroll">
        <nav className="space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                  "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                  isActive && "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-400 border border-blue-600/30",
                  "min-h-[48px] group"
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0 transition-transform group-hover:scale-110" />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-sm font-medium leading-tight">{item.name}</span>
                  <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                    {item.description}
                  </span>
                </div>
                {isActive && (
                  <div className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                )}
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* User Profile - Fixed at bottom */}
      <div className="shrink-0 border-t border-zinc-800 bg-zinc-950/50 p-4">
        <div className="space-y-4">
          {/* User info */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Avatar className="h-10 w-10 ring-2 ring-zinc-700">
                <AvatarImage src="/avatars/jhon.png" alt="Jhon Gonzalez" />
                <AvatarFallback className="bg-gradient-to-br from-blue-600 to-cyan-600 text-white font-semibold">
                  JG
                </AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full bg-green-500 ring-2 ring-zinc-800" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm font-medium text-white truncate">Jhon Gonzalez</div>
              <div className="text-xs text-zinc-400 truncate">Full Stack Developer</div>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-1">
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                asChild
              >
                <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                asChild
              >
                <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
                asChild
              >
                <Link href="mailto:contacto@jhon.dev">
                  <Mail className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="h-8 w-8 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
              asChild
            >
              <Link href="/settings">
                <Settings className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            variant="outline"
            size="icon"
            className="shrink-0 md:hidden h-10 w-10 border-zinc-700 bg-zinc-900/50 hover:bg-zinc-800 text-zinc-300 hover:text-white"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-80 p-0 border-zinc-800 bg-black data-[state=open]:slide-in-from-left data-[state=closed]:slide-out-to-left"
          style={{ boxShadow: 'none' }}
        >
          <div className="h-full sheet-content-scroll">
            <SidebarContent mobile={true} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar - Fixed positioning */}
      <div className="hidden md:flex md:w-64 lg:w-72 md:flex-col md:fixed md:inset-y-0 md:z-50">
        <SidebarContent />
      </div>
    </>
  )
}