import React from "react";
import Navbar from "../core/Navbar";
import { Flex } from "@chakra-ui/react";
import Footer from "../core/Footer";

type IMainLayout = {
  children: React.ReactNode;
};

const MainLayout: React.FC<IMainLayout> = ({ children }) => {
  return (
    <Flex w="full" h="full" alignItems="center" direction="column">
      <Navbar />
      {children}
      <Footer />
    </Flex>
  );
};

export default MainLayout;
