import { Box, Image, Text, keyframes, usePrefersReducedMotion } from '@chakra-ui/react';
import React from 'react';

const spin = keyframes`from { transform: rotate(0deg); }
to { transform: rotate(360deg); }`;

type IScrolldownButton = {
  size?: 'base' | 'large';
  color?: 'white' | 'black';
};

const ScrolldownButton: React.FC<IScrolldownButton> = ({ size = 'base', color }) => {
  const scrollDownText = '- SCROLL DOWN - SCROLL DOWN - SCROLL DOWN';

  const width = size === 'base' ? 133.1 : 261;

  const prefersReducedMotion = usePrefersReducedMotion();

  const animation = prefersReducedMotion ? undefined : `${spin} infinite 20s linear`;

  return (
    <Box
      w={`${width}px`}
      h={size === 'base' ? '132.96px' : '260.71px'}
      display="flex"
      rounded="full"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        src="/assets/icon/scroll-down.svg"
        w={size === 'base' ? '44.19px' : '86.64px'}
        h={size === 'base' ? '61.34px' : '120.28px'}
      />
      <Box
        position="absolute"
        w="full"
        h="full"
        inset="0"
        animation={animation}
      >
        {scrollDownText.split('').map((item, index) => (
          <Text
            position="absolute"
            key={`circle-text-${index}`}
            left="50%"
            fontSize={size === 'base' ? 'xs' : 'md'}
            transform={`rotate(${index * 8.6}deg)`}
            transformOrigin={`0 ${width / 2}px`}
            color={color}
          >
            {item}
          </Text>
        ))}
      </Box>
    </Box>
  );
};

export default ScrolldownButton;
