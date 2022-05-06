import { doc, getDoc } from "firebase/firestore";

import { Account } from "@app/types/Account";
import { accountRef } from "@config/firebase/collections";

type Response = Omit<Account, "id">;

const getAccountById = async (authId: string): Promise<Account> => {
  const docRef = doc(accountRef, authId);
  const docRequest = await getDoc(docRef);

  if (!docRequest.exists()) {
    throw new Error("Document not found");
  }

  const docData = docRequest.data() as Response;

  return {
    id: docRequest.id,
    ...docData,
  };
};

export default getAccountById;
