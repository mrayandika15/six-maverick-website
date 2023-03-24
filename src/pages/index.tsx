import { HeroSection, MainLayout } from "@/components";
import AboutSection from "@/components/AboutSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  );
}
