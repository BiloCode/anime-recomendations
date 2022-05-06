import { addDoc, doc, setDoc, Timestamp } from "firebase/firestore";

import { AccountCreate } from "@app/types/Account";
import { accountRef } from "@config/firebase/collections";

type Params = Omit<Omit<AccountCreate, "createdAt">, "status">;

const registerAccount = async (authId: string, params: Params) => {
  const docRef = doc(accountRef, authId);
  const docRequest = await setDoc(docRef, {
    ...params,
    status: "pending",
    createdAt: Timestamp.now(),
  });

  return docRequest;
};

export default registerAccount;
