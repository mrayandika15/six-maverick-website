import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ScrolldownButton from "../core/ScrolldownButton";

const AboutSection: React.FC = () => {
  return (
    <SectionLayout>
      <Flex w="full" h="full" direction="column" gap="25px" position="relative">
        <Box w="full" h="390px" position="relative">
          <video
            src="/assets/video/Empower.mp4"
            loop
            autoPlay={true}
            muted
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>

        <Flex w="full" position="relative">
          <Flex direction="column" w="889px" gap="15px">
            <Heading fontSize="48px" fontWeight="300">
              EMPOWER INNOVATION * CULTIVATE ENGAGEMENT * ACCELERATE GROWTH
            </Heading>
            <Text w="681px" fontWeight="300">
              independent developers with a passion for creative innovation, we
              are dedicated to delivering exceptional value to our clients
              through cutting-edge technologies, memorable user experiences, and
              expertly crafted software solutions.
            </Text>
          </Flex>
          <Box position="absolute" right="120px" top="25">
            <ScrolldownButton size="large" />
          </Box>
        </Flex>
      </Flex>
    </SectionLayout>
  );
};

export default AboutSection;
