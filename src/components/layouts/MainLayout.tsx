import React from "react";
import Navbar from "../core/Navbar";
import { Flex } from "@chakra-ui/react";

type IMainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Flex w="full" h="full" alignItems="center" direction="column">
      <Navbar />
      {children}
    </Flex>
  );
};

export default MainLayout;
