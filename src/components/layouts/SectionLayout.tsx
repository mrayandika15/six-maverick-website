import { Container } from '@chakra-ui/react';
import React from 'react';

type ISectionLayout = {
  children: React.ReactNode;
  height?: string;
};

const SectionLayout: React.FC<ISectionLayout> = ({ height = '100vh', children }) => {
  return (
    <Container
      maxW={['full', '1640px']}
      h={height}
      px="25px"
    >
      {children}
    </Container>
  );
};

export default SectionLayout;
