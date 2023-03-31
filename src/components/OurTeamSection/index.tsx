import React from "react";
import { Container, Heading, Flex, Box } from "@chakra-ui/react";
import CardTeam from "@/components/core/cards/CardTeam";
import { ListCardTeam } from "../core/cards/CardTeam.data";
import Marquee from "react-fast-marquee";
import style from "./bgGradient.module.css";

const OurTeamSection = () => {
  return (
    <Container maxW="1640px" px={8} py={10}>
      <Heading
        as="h2"
        fontSize={[42, 128]}
        transform="uppercase"
        fontFamily={"Red Hat Display"}
        fontWeight="600"
      >
        OUR <i>TEAM</i>
      </Heading>

      <Box w="full" h="full" position="relative">
        <Box
          w="100px"
          h="full"
          position="absolute"
          left="-1"
          bgGradient="linear(to-r, black, transparent)"
          zIndex="popover"
        ></Box>

        <Marquee speed={50} gradient={false}>
          <Flex>
            {ListCardTeam.map((item, index) => {
              return <CardTeam key={index} data={item} />;
            })}
          </Flex>
        </Marquee>

        <Box
          w="100px"
          h="full"
          position="absolute"
          right="-1"
          top="0"
          bottom="0"
          bgGradient="linear(to-l, black, transparent)"
          zIndex="popover"
        ></Box>
      </Box>
    </Container>
  );
};

export default OurTeamSection;
