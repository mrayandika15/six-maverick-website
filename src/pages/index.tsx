import { MainLayout } from '@/components';
import { Box, Heading, AspectRatio, Text, Divider, Flex, Container, Image, Stack, Card, CardBody, CardFooter } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { OutlineButton } from '@/components';
import { CardTeam } from '@/components';
import { InnovativeSection } from '@/components';

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
    </MainLayout>
  );
}
