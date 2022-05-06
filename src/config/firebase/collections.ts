import { firestore } from ".";
import { collection } from "firebase/firestore";

export const accountRef = collection(firestore, "account");
