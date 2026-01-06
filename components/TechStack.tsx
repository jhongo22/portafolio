"use client";

import { motion } from "framer-motion";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";

export default function TechStack() {
  const techLogos: LogoItem[] = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      title: "React"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      title: "Next.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      alt: "TypeScript",
      title: "TypeScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      alt: "JavaScript",
      title: "JavaScript"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      title: "Python"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      alt: "HTML5",
      title: "HTML5"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      alt: "CSS3",
      title: "CSS3"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      title: "Tailwind CSS"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      alt: "Git",
      title: "Git"
    },
    {
      src: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
      alt: "n8n",
      title: "n8n"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      alt: "Laravel",
      title: "Laravel"
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      title: "PostgreSQL"
    }
  ];

  return (
    <section className="relative w-full py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase mb-4"
          >
            Stack Tecnológico
          </motion.h2>
          <div className="w-20 h-1 bg-red-500 rounded-full" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={65}
            gap={50}
            pauseOnHover={true}
            fadeOut={true}
            fadeOutColor="transparent"
            scaleOnHover={true}
            ariaLabel="Tecnologías y herramientas"
            className=""
          />
        </motion.div>
      </div>
    </section>
  );
}
