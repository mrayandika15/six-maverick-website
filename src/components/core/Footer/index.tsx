import { Flex, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { SocialMedia } from "./Footer.data";

const Footer = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  return (
    <Flex
      position="absolute"
      bottom="0"
      w="full"
      h="100px"
      color="black"
      justifyContent={["center", "space-between"]}
      alignItems="center"
      px="25px"
      bg="white"
    >
      {isDesktop ? (
        <Flex gap="5px" fontSize="xl">
          {SocialMedia.map((item) => {
            return <item.icon style={{ cursor: "pointer" }} />;
          })}
        </Flex>
      ) : null}

      <Text>© 2023 Copyright: Six-Mavericks</Text>

      {isDesktop ? <Text>Back to Top ↑</Text> : null}
    </Flex>
  );
};

export default Footer;
