import React from 'react';
import { Flex, Heading, Image, Stack, Card, CardBody } from '@chakra-ui/react';
import { AiOutlineTwitter, AiOutlineGithub, AiOutlineLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import IListCardTeam from './CardTeam.data';

const CardTeam = () => {
  return (
    <Card
      maxW="sm"
      bg={'black'}
    >
      <CardBody>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          height="325px"
          width="325px"
        />
        <Stack
          mt="3"
          spacing="3"
        >
          <Heading
            size="md"
            fontFamily={'Red Hat Display'}
            fontWeight="700"
            color="white"
            fontSize="24px"
          >
            Ismail Rohaga
          </Heading>
          <Flex>
            <AiOutlineTwitter
              style={{ fontSize: '20px', marginRight: '5px' }}
              color="white"
            />
            <AiOutlineGithub
              style={{ fontSize: '20px', marginRight: '5px' }}
              color="white"
            />
            <AiOutlineLinkedin
              style={{ fontSize: '20px', marginRight: '5px' }}
              color="white"
            />
            <AiOutlineInstagram
              style={{ fontSize: '20px', marginRight: '5px' }}
              color="white"
            />
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardTeam;
