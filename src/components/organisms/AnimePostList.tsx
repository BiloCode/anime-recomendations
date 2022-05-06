import { Grid } from "@chakra-ui/react";

import usePost from "@hooks/usePostList";

import Post from "@components/molecules/AnimePost";

const AnimePostList = () => {
  const { data } = usePost();

  return (
    <Grid>
      {data?.map((v) => (
        <Post
          key={v.id}
          poster="https://img1.ak.crunchyroll.com/i/spire1/cfaaa751ce731f3abecca872ddc9e7ac1649904522_full.jpg"
          title={v.title}
          description={v.body}
          username={`${v.user.name} (${v.user.username})`}
        />
      ))}
    </Grid>
  );
};

export default AnimePostList;
