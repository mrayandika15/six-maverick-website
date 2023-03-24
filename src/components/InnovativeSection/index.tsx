import React from 'react';
import { Box, Heading, AspectRatio, Text, Divider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { OutlineButton, SectionLayout } from '@/components';

const InnovativeSection = () => {
  return (
    <Box
      bg="white"
      w="100%"
      px={8}
      pb={10}
      justifyContent="center"
    >
      <SectionLayout height="100%">
        <Heading
          as="h1"
          fontSize={128}
          color="black"
          fontFamily="Red Hat Display"
          fontWeight="400"
          textTransform="uppercase"
          pt={10}
        >
          Innovative
        </Heading>
        <Heading
          as="h1"
          fontSize={128}
          color="black"
          fontFamily="Red Hat Display"
          fontWeight="600"
          textTransform="uppercase"
        >
          <Box display="flex">
            <Text>development</Text>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            >
              _
            </motion.div>
          </Box>
        </Heading>
        <AspectRatio
          ratio={16 / 9}
          height={443}
          mt={10}
        >
          <video
            src="./assets/video/team.mp4"
            width="100%"
            autoPlay
            muted
            loop
            style={{ borderRadius: '100px' }}
          />
        </AspectRatio>
        <Divider
          orientation="horizontal"
          my={10}
          borderColor="black"
          borderWidth={2}
        />

        <Flex
          align="flex-start"
          justify="space-between"
          direction={['column', 'column', 'row', 'row']}
        >
          <Box w="100%">
            <Heading
              as="h2"
              fontSize={48}
              color="black"
              fontFamily="Red Hat Display"
              fontWeight="400"
              textTransform="uppercase"
              lineHeight={1.5}
            >
              Where creativity and <br /> smart development
              <br /> collide
            </Heading>
            <Text
              mt={10}
              mr={10}
              fontSize={24}
              fontFamily="Red Hat Display"
              fontWeight="300"
              lineHeight={1.5}
              color="black"
            >
              independent developers with a passion for creative innovation, we are dedicated to delivering exceptional value to our clients through
              cutting-edge technologies, memorable user experiences, and expertly crafted software solutions.
            </Text>
          </Box>
          <Box w="100%">
            <Heading
              fontSize={24}
              color="black"
              fontFamily="Red Hat Display"
              fontWeight="400"
              textTransform="uppercase"
              letterSpacing={2}
              mb={5}
            >
              OUR SERVICES
            </Heading>

            <OutlineButton>Branding</OutlineButton>
            <OutlineButton>Development</OutlineButton>
            <OutlineButton>SOcial</OutlineButton>
            <br />
            <OutlineButton>USer experience</OutlineButton>
            <OutlineButton>USer interface</OutlineButton>
            <OutlineButton>Entertainment</OutlineButton>
          </Box>
        </Flex>
      </SectionLayout>
    </Box>
  );
};

export default InnovativeSection;
