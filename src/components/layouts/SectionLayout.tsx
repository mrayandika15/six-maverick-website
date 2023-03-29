import { Container } from "@chakra-ui/react";
import React from "react";

type ISectionLayout = {
  children: React.ReactNode;
  height?: string;
  props?: {};
};

const SectionLayout: React.FC<ISectionLayout> = ({
  height = "100vh",
  children,
  props,
}) => {
  return (
    <Container maxW={["full", "1640px"]} h={height} px="25px" {...props}>
      {children}
    </Container>
  );
};

export default SectionLayout;
