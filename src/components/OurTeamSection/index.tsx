import React from 'react';
import { Container, Heading, Flex } from '@chakra-ui/react';
import CardTeam from '@/components/core/cards/CardTeam';
import { ListCardTeam } from '../core/cards/CardTeam.data';
import Marquee from 'react-fast-marquee';

const OurTeamSection = () => {
  return (
    <Container
      maxW="1640px"
      px={8}
      py={10}
    >
      <Heading
        as="h2"
        fontSize={[42, 128]}
        transform="uppercase"
        fontFamily={'Red Hat Display'}
        fontWeight="600"
      >
        OUR <i>TEAM</i>
      </Heading>
      <Marquee
        speed={50}
        gradient={false}
      >
        <Flex>
          {ListCardTeam.map((item, index) => {
            return (
              <CardTeam
                key={index}
                data={item}
              />
            );
          })}
        </Flex>
      </Marquee>
    </Container>
  );
};

export default OurTeamSection;
