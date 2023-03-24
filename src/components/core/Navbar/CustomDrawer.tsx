import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Flex,
  Text,
  Heading,
  Link,
  CloseButton,
  useMediaQuery,
} from "@chakra-ui/react";
import { INavbar } from "./Navbar.type";
import { ListNavLink } from "./Navbar.data";

import { BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";

const CustomDrawer: React.FC<INavbar> = ({ isOpen, onClose }) => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
      <DrawerOverlay />
      <DrawerContent>
        <Flex
          justify="center"
          alignItems={["start", "end"]}
          direction="column"
          color="black"
          bg="white"
          w="full"
          h="full"
          p="70px"
          gap="25px"
        >
          <Flex justify={["space-between", "end"]} w="full">
            <Text fontSize="xl" fontWeight="300" fontFamily="Red Hat Display">
              Menu
            </Text>

            {isDesktop ? null : <CloseButton onClick={() => onClose()} />}
          </Flex>

          {ListNavLink.map((item, index) => {
            return (
              <Link
                fontSize={["4xl", "7xl"]}
                key={`nav-link${index}`}
                fontWeight="400"
                fontFamily="Red Hat Display"
                _hover={{
                  underline: "none",
                }}
                role="group"
                display="flex"
                gap="15px"
                transition="all"
                transitionDuration="0.2s"
                transitionTimingFunction="ease-in-out"
              >
                <Text>{item.name}</Text>
                <Text
                  _groupHover={{
                    fontWeight: "700",
                    transitionDuration: "0.2s",
                    transitionTimingFunction: "ease-in-out",
                  }}
                  transition="all"
                >
                  {item.hoverText}
                </Text>
              </Link>
            );
          })}

          <Flex gap="20px" fontSize="2xl">
            <BsTwitter />
            <BsLinkedin />
            <BsInstagram />
          </Flex>
        </Flex>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
