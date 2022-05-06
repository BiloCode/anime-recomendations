import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

import useHomePage from "@hooks/useHomePage";

import PostList from "@components/organisms/AnimePostList";
import SpinnerLoader from "@components/atoms/SpinnerLoader";
import CenterContent from "@components/atoms/CenterContent";
import FloatIndicator from "@components/atoms/FloatIndicator";
import ScreenLayout from "@components/templates/ScreenLayout";

const Home = () => {
  const { headerRef, onScrollTop, showUpIndicator } = useHomePage();

  return (
    <ScreenLayout>
      <Container maxW="4xl">
        <Box py="8" ref={headerRef}>
          <Heading color="white">Anime List</Heading>
          <Text color="white">
            Los usuarios dejaran sus recomendaciones animes aqui en esta pagina
          </Text>
        </Box>
        <div>
          <ErrorBoundary fallback={<span>ERROR...</span>}>
            <Suspense
              fallback={
                <CenterContent>
                  <SpinnerLoader />
                </CenterContent>
              }
            >
              <PostList />
            </Suspense>
          </ErrorBoundary>

          {showUpIndicator && <FloatIndicator onClick={onScrollTop} />}
        </div>
      </Container>
    </ScreenLayout>
  );
};

export default Home;
