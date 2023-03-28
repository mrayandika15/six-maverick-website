import React from "react";
import CustomInput from "../core/CustomInput";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

const ListForm = () => {
  return (
    <Flex direction="column" gap="50px">
      <Flex gap="30px" w="full" direction={["column", "row"]}>
        <Box w={["full", "50%"]}>
          <CustomInput placeholder="Your name ?" number="01" />
        </Box>
        <Box w={["full", "50%"]}>
          <CustomInput placeholder="Your email ?" number="02" />
        </Box>
      </Flex>

      <Box w="full">
        <CustomInput placeholder="Tell us about your project ?" number="03" />
      </Box>

      <Button variant="primary" w={["full", "211px"]}>
        Send message
      </Button>

      <Text
        fontWeight="400"
        fontSize={["14px", "24px"]}
        textAlign={["center", "left"]}
      >
        Not a fan of forms? Shoot us an email at six@mavericks.com
      </Text>
    </Flex>
  );
};

export default ListForm;
