import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";

const MottoSection: React.FC = () => {
  return (
    <Flex w="full" position="relative" direction="column">
      <Flex direction="column" gap="10px">
        <Heading fontSize={["58px", "140px"]} fontWeight="300">
          WE CREATE
        </Heading>
        <Heading fontSize={["58px", "140px"]} fontWeight="300">
          CREATIVE
        </Heading>
        <Heading fontSize={["58px", "140px"]} fontStyle="italic">
          INOVATIONS
        </Heading>
      </Flex>

      <Box
        w={["full", "540px"]}
        h={["355px", "540px"]}
        bg="gray.300"
        position={["absolute", "absolute"]}
        right={["0", "32"]}
        zIndex="hide"
        bottom={["-320px", "12"]}
      >
        <video
          src="/assets/video/hero.mp4"
          loop
          autoPlay={true}
          muted
          style={{
            minHeight: "100%",
            minWidth: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Flex>
  );
};

export default MottoSection;
