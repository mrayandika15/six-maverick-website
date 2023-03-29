import React from 'react';
import { Container, Heading, Flex } from '@chakra-ui/react';
import CardTeam from '@/components/core/cards/CardTeam';
import { ListCardTeam } from '../core/cards/CardTeam.data';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OurTeamSection = () => {
  return (
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
      <Flex
        whiteSpace={'nowrap'}
        as={motion.div}
        animate={{
          x: '-100%',
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 5,
              ease: 'linear',
            },
          },
        }}
      >
        {ListCardTeam.map((item, index) => {
          return (
            <CardTeam
              key={index}
              data={item}
            />
          );
        })}
      </Flex>
    </Container>
  );
};

export default OurTeamSection;
