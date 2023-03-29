import {
  HeroSection,
  MainLayout,
  AboutSection,
  InnovativeSection,
  OurTeamSection,
  FormSection,
} from "@/components";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <AboutSection />
      <InnovativeSection />
      <OurTeamSection />
      <FormSection />
    </MainLayout>
  );
}
