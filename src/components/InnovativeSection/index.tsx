import React from 'react';
import { Box, Heading, AspectRatio, Text, Divider, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { OutlineButton, SectionLayout } from '@/components';
import ScrolldownButton from '../core/ScrolldownButton';

const InnovativeSection = () => {
  return (
    <Box
      bg="white"
      w="100%"
      px={[1, 8]}
      pb={10}
      justifyContent="center"
    >
      <SectionLayout height="100%">
        <Heading
          as="h1"
          fontSize={[42, 128]}
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
          fontSize={[42, 128]}
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
          overflow="hidden"
          borderRadius={[40, 100]}
        >
          <video
            src="./assets/video/team.mp4"
            width="100%"
            autoPlay
            muted
            loop
            style={{
              minHeight: '100%',
              minWidth: '100%',
              objectFit: 'cover',
            }}
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
              fontSize={[24, 48]}
              color="black"
              fontFamily="Red Hat Display"
              fontWeight={['700', '400']}
              textTransform="uppercase"
              lineHeight={1.5}
            >
              Where creativity and <br /> smart development
              <br /> collide
            </Heading>
            <Text
              mt={[5, 10]}
              mr={[0, 10]}
              fontSize={[18, 24]}
              fontFamily="Red Hat Display"
              fontWeight="300"
              lineHeight={1.5}
              wordBreak={['break-word', 'break-word', 'break-word', 'normal']}
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
            <Box
              position="absolute"
              top={2650}
              right={20}
            >
              <ScrolldownButton
                size="base"
                color="black"
              />
            </Box>
          </Box>
        </Flex>
      </SectionLayout>
    </Box>
  );
};

export default InnovativeSection;
