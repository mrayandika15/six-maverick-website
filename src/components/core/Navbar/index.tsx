import { Box, Heading, IconButton } from "@chakra-ui/react";
import React from "react";

import { RxHamburgerMenu } from "react-icons/rx";
import CustomDrawer from "./CustomDrawer";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      w="full"
      h="80px"
      px="25px"
      py="10px"
      position="absolute"
      zIndex="dropdown"
    >
      <Heading fontFamily="Red Hat Display" fontSize="xl">
        Mavericks
      </Heading>

      <IconButton
        aria-label="hamburger-icon"
        size="lg"
        bg="transparent"
        _hover={{ bg: "none" }}
        onClick={() => setIsOpen(true)}
        icon={<RxHamburgerMenu style={{ fontSize: "25px" }} />}
      />

      <CustomDrawer isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </Box>
  );
};

export default Navbar;
