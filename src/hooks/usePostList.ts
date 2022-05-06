import useSWR, { Fetcher } from "swr";

import { PostDetail } from "@app/types/Post";

import { getPostList } from "@app/services/getPostList";
import { getUserById } from "@app/services/getUserById";

const fetcher: Fetcher<PostDetail[]> = async () => {
  const postList = await getPostList();

  const detailListPromises = postList.map((post) => {
    const userId = post.userId;

    return getUserById(userId).then((user) => {
      const details: PostDetail = {
        user,
        id: post.id,
        body: post.body,
        title: post.title,
      };

      return details;
    });
  });

  return await Promise.all(detailListPromises);
};

const usePostList = () => {
  const { data } = useSWR("<post-list>", fetcher);

  return {
    data,
  };
};

export default usePostList;
