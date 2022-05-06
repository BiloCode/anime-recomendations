import { Timestamp } from "firebase/firestore";

type AccountStatus = "verify" | "pending";
type AccountTemplate = {
  fullname: string;
  createdAt: Timestamp;
  status: AccountStatus;
  profileImage: {
    url: string;
    name: string;
  };
};

export type AccountCreate = AccountTemplate;

export type Account = AccountTemplate & {
  id: string;
};
