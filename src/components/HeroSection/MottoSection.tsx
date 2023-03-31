import { AspectRatio, Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const MottoSection: React.FC = () => {
  return (
    <Flex w="full" position="relative" direction="column">
      <Flex direction="column" gap="10px">
        <Heading fontSize="clamp(250% , 10vw , 140px)" fontWeight="300">
          WE CREATE
        </Heading>
        <Heading fontSize="clamp(250% , 10vw  , 140px)" fontWeight="300">
          CREATIVE
        </Heading>
        <Heading fontSize="clamp(250% , 10vw  , 140px)" fontStyle="italic">
          INOVATIONS
        </Heading>
      </Flex>

      <AspectRatio
        w={["full", "540px"]}
        h={["355px", "540px"]}
        bg="gray.300"
        position={["relative", "absolute"]}
        right={["0", "120px"]}
        zIndex="hide"
        bottom={["25px", "12"]}
      >
        <video loop autoPlay={true} muted playsInline>
          <source src="./assets/video/Hero.mp4" type="video/mp4" />
        </video>
      </AspectRatio>
    </Flex>
  );
};

export default MottoSection;
