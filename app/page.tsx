import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TechStack from "@/components/TechStack";
import LightPillar from "@/components/ui/light-pillar";
import FeaturedWork from "@/components/FeaturedWork";
import ProjectGallery from "@/components/ProjectGallery";

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
        <FeaturedWork />
        <TechStack />
        <ProjectGallery />
      </div>
    </main>
  );
}
