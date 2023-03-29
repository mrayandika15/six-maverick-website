import { Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { ICustomInput } from "./CustomInput.type";

const CustomInput: React.FC<ICustomInput> = ({
  number,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <Flex direction="column">
      <Text>{number}</Text>
      <Input
        variant="unstyled"
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        _placeholder={{
          fontSize: ["24px", "36px"],
          color: "black",
          fontWeight: "400",
        }}
        fontSize="36px"
        _focusVisible={{
          outline: "none",
        }}
        borderBottom="1px solid black"
        rounded="none"
      />
    </Flex>
  );
};

export default CustomInput;
