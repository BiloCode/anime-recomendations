import { FC, Suspense } from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

import { useAuthContext } from "@context/AuthContext/context";

import useNavigation from "@hooks/useNavigation";

import HeadingTitle from "@components/atoms/HeadingTitle";
import CollapsableAccount from "@components/molecules/CollapsableAccount";

const NavigationBar: FC = () => {
  const { push } = useNavigation();
  const { isAuthenticated, isLoading } = useAuthContext();

  const onNavigateToLogin = () => push("/account");

  return (
    <Box bg="black" position="sticky" top={0}>
      <Flex h={14} p={3} justifyContent="space-between" alignItems="center">
        <HeadingTitle white>Anime List</HeadingTitle>
        {!isLoading && (
          <Box>
            {isAuthenticated && (
              <Suspense fallback={null}>
                <CollapsableAccount />
              </Suspense>
            )}
            {!isAuthenticated && (
              <Button onClick={onNavigateToLogin}>Ingresar</Button>
            )}
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default NavigationBar;
