import { HeroSection, MainLayout } from '@/components';
import AboutSection from '@/components/AboutSection';

export default function Home() {
  return (
    <MainLayout>
      <InnovativeSection />
      <Container
        maxW="1640px"
        px={8}
        py={10}
      >
        <Heading
          as="h2"
          fontSize={128}
          transform="uppercase"
          fontFamily={'Red Hat Display'}
          fontWeight="600"
        >
          OUR <i>TEAM</i>
        </Heading>
        <CardTeam></CardTeam>
      </Container>
      <HeroSection />
      <AboutSection />
    </MainLayout>
  );
}
