import { Post } from "@app/types/Post";
import { API_URL } from "@config/http";

export const getPostList = async (): Promise<Post[]> => {
  const request = await fetch(`${API_URL}/posts`);
  const requestData = await request.json();

  return requestData;
};
