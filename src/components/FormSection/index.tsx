import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import SectionLayout from "../layouts/SectionLayout";
import ListForm from "./ListForm";

const FormSection: React.FC = () => {
  return (
    <SectionLayout
      height="100%"
      props={{ bg: "white", pb: "50px", mb: "100px", pt: ["50px", "0px"] }}
    >
      <Flex w="full" h="full" direction="column" color="black">
        <Flex fontSize={[42, 128]} gap="15px">
          <Text fontWeight="400">HAVE AN </Text>
          <Text fontWeight="600" fontStyle="italic">
            IDEA ?
          </Text>
        </Flex>

        <ListForm />
      </Flex>
    </SectionLayout>
  );
};

export default FormSection;
