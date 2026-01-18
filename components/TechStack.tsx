"use client";

import React from "react";
import LogoLoop, { LogoItem } from "@/components/ui/LogoLoop";
import SectionHeader from "./SectionHeader";

function TechStack() {
  const techLogos: LogoItem[] = [
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      alt: "React",
      title: "React",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      alt: "Next.js",
      title: "Next.js",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
      alt: "TypeScript",
      title: "TypeScript",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
      alt: "JavaScript",
      title: "JavaScript",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      alt: "Node.js",
      title: "Node.js",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      alt: "Python",
      title: "Python",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
      alt: "HTML5",
      title: "HTML5",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
      alt: "CSS3",
      title: "CSS3",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      alt: "Tailwind CSS",
      title: "Tailwind CSS",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg",
      alt: "Git",
      title: "Git",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.raiolanetworks.com/blog/wp-content/uploads/n8n.png",
      alt: "n8n",
      title: "n8n",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      alt: "Laravel",
      title: "Laravel",
      width: 48,
      height: 48
    },
    {
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      alt: "PostgreSQL",
      title: "PostgreSQL",
      width: 48,
      height: 48
    }
  ];

  return (
    <section id="stack" className="relative w-full py-24">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader title="Stack Tecnológico" />

        <div className="relative">
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
        </div>
      </div>
    </section>
  );
}

export default TechStack;
