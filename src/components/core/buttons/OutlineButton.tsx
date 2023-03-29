import React from 'react';
import { Text } from '@chakra-ui/react';

type IOutlineButton = {
  children: React.ReactNode;
};
const OutlineButton: React.FC<IOutlineButton> = ({ children }) => {
  return (
    <>
      <Text
        border="2px"
        borderColor="black"
        borderRadius="100px"
        color="black"
        fontWeight="400"
        fontSize={18}
        fontFamily="Red Hat Display"
        align="center"
        textTransform="uppercase"
        px={5}
        display="inline-block"
        m={1}
      >
        {children}
      </Text>
    </>
  );
};

export default OutlineButton;
