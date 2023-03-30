import React from 'react';
import { Flex, Heading, Image, Stack, Card, CardBody, Link } from '@chakra-ui/react';
import { IListCardTeam } from './CardTeam.type';

type ICardTeam = {
  data: IListCardTeam;
};

const CardTeam: React.FC<ICardTeam> = ({ data }) => {
  return (
    <Card
      maxW="sm"
      bg={'black'}
      flexGrow={0}
      flexShrink={0}
    >
      <CardBody>
        <Image
          src={data?.image}
          alt="team"
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
            {data?.name}
          </Heading>
          <Flex>
            {data?.socialmedia.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  isExternal
                >
                  <item.icon
                    style={{ fontSize: '20px', marginRight: '5px' }}
                    color="white"
                  />
                </Link>
              );
            })}

            {/* <Link
              href={twitter}
              isExternal
            >
              <AiOutlineTwitter
                style={{ fontSize: '20px', marginRight: '5px' }}
                color="white"
              />
            </Link>

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
            /> */}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CardTeam;
