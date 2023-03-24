import { HeroSection, MainLayout, AboutSection, InnovativeSection, OurTeamSection } from '@/components';

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <InnovativeSection />
      <OurTeamSection />
    </MainLayout>
  );
}
