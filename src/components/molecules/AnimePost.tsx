import { FC, memo } from "react";
import { Box, Flex, Grid, Image, Text, Badge } from "@chakra-ui/react";

import HeadingTitle from "@components/atoms/HeadingTitle";
import HeadingLightText from "@components/atoms/HeadingLightText";
import CategoryBox from "@components/atoms/CategoryBox";

type Props = {
  title: string;
  poster: string;
  username: string;
  description: string;
};

const AnimePost: FC<Props> = ({ title, poster, description, username }) => (
  <Flex
    py="4"
    px="3"
    gap="4"
    alignItems="center"
    cursor="pointer"
    bg="blackAlpha.500"
    borderColor="gray.800"
    borderBottomWidth="1px"
    _hover={{
      bg: "blackAlpha.400",
    }}
  >
    <Image w="48" h="48" src={poster} flexShrink={0} objectFit="cover" />
    <Grid rowGap={4}>
      <Box>
        <HeadingLightText>{username}</HeadingLightText>
        <HeadingTitle>{title}</HeadingTitle>
      </Box>
      <Text color="gray.600">{description}</Text>
      <Flex gap={1} flexFlow="wrap" alignItems="center">
        <CategoryBox>Comedia</CategoryBox>
        <CategoryBox>Romance</CategoryBox>
      </Flex>
    </Grid>
  </Flex>
);

export default memo(AnimePost);
