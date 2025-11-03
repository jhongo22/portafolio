import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Sidebar } from '@/components/sidebar'
import { SidebarContent } from '@/components/sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio - Full Stack Developer & AI Specialist',
  description: 'Professional portfolio specialized in AI automation and web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className + " bg-black antialiased"}>
        <div className="flex min-h-screen w-full bg-black">
          {/* Sidebar Component (handles both mobile and desktop) */}
          <Sidebar />

          {/* Mobile Header */}
          <header className="md:hidden fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Sidebar />
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600">
                  <span className="text-sm font-bold text-white">P</span>
                </div>
                <h1 className="text-lg font-semibold text-white">Portfolio</h1>
              </div>
            </div>
          </header>

          {/* Main Content with Sidebar Offset */}
          <div className="flex-1 w-full md:ml-64 lg:ml-72">
            <div className="flex flex-col bg-black min-h-screen pt-16 md:pt-0">
              {/* Desktop Header */}
              <header className="hidden md:flex h-16 items-center gap-4 border-b border-zinc-800 bg-black/95 px-6 backdrop-blur-sm">
                <div className="w-full flex-1">
                  <h1 className="text-lg font-semibold md:text-2xl text-white">Portfolio</h1>
                </div>
              </header>

              {/* Main Content */}
              <main className="flex flex-1 flex-col gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-8 bg-black overflow-x-hidden">
                {children}
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}