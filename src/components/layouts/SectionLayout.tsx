import { Box, Container } from "@chakra-ui/react";
import React from "react";

type ISectionLayout = {
  children: React.ReactNode;
};

const SectionLayout: React.FC<ISectionLayout> = ({ children }) => {
  return (
    <Container maxW={["full", "1640px"]} h="100vh" px="25px">
      {children}
    </Container>
  );
};

export default SectionLayout;
