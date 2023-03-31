import { Flex, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import MottoSection from "./MottoSection";
import FooterHero from "./FooterHero";

const HeroSection: React.FC = () => {
  const [isDesktop] = useMediaQuery("(min-width: 800px)");

  return (
    <SectionLayout props={{ height: ["full", "100vh"] }}>
      <Flex
        w="full"
        h="full"
        justify={["start", "center"]}
        position="relative"
        direction="column"
        pt={["80px", "0px"]}
      >
        <MottoSection />

        {isDesktop ? <FooterHero /> : null}
      </Flex>
    </SectionLayout>
  );
};

export default HeroSection;
