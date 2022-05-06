import { auth } from "@config/firebase";
import { signOut } from "firebase/auth";

const authenticationSignOut = async () => {
  await signOut(auth);
};

export default authenticationSignOut;
