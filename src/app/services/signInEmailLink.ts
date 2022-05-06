import { sendSignInLinkToEmail } from "firebase/auth";

import { auth } from "@config/firebase";
import { SERVER_URL } from "@config/http";

type Params = {
  email: string;
  redirectURL: string;
};

const signInEmailLink = async ({ email, redirectURL }: Params) => {
  const credential = await sendSignInLinkToEmail(auth, email, {
    url: `${SERVER_URL}${redirectURL}`,
    handleCodeInApp: true,
  });

  return credential;
};

export default signInEmailLink;
