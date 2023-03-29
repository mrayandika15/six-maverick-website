import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import ScrolldownButton from "../core/ScrolldownButton";

const FooterHero: React.FC = () => {
  return (
    <Flex
      position="absolute"
      bottom="0"
      left="0"
      right="0"
      w="full"
      overflow="hidden"
      justify="space-between"
      alignItems="end"
      py="10px"
      px="25px"
      zIndex="hide"
    >
      <Text fontWeight="300">EST 2022</Text>
      <Text fontWeight="300">SIX-MAVERICKS</Text>
      <ScrolldownButton />
    </Flex>
  );
};

export default FooterHero;
