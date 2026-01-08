"use client";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectGallery from "@/components/ProjectGallery";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

// Dynamically import LightPillar to improve initial load performance
const LightPillar = dynamic(() => import("@/components/ui/light-pillar"), {
  ssr: false,
  loading: () => <div className="fixed inset-0 bg-black z-0" />,
});

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
      {/* LightPillar Background Layer */}
      <div className="fixed inset-0 z-0">
        <LightPillar
          topColor="#FF0000"
          bottomColor="#752ACB"
          intensity={1.5}
          rotationSpeed={0.6}
          glowAmount={0.0015}
          pillarWidth={2}
          pillarHeight={1}
          noiseIntensity={0.3}
          pillarRotation={45}
          interactive={false}
          mixBlendMode="normal"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Services />
        <div id="sobre-mi">
          <FeaturedWork />
        </div>
        <div id="proyectos">
          <ProjectGallery />
        </div>
        <Footer />
      </div>
    </main>
  );
}
