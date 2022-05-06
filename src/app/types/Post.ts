import { User } from "@app/types/User";

type PostDefault = {
  id: number;
  body: string;
  title: string;
};

export type PostDetail = PostDefault & {
  user: User;
};

export type Post = PostDefault & {
  userId: number;
};
