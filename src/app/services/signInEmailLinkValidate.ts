import { signInWithEmailLink } from "firebase/auth";

import { auth } from "@config/firebase";

const signInEmailLinkValidate = async (email: string, location: string) => {
  const result = await signInWithEmailLink(auth, email, location);
  return result;
};

export default signInEmailLinkValidate;
