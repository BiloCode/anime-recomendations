import { useRef, useState } from "react";

import signInEmailLink from "@app/services/signInEmailLink";
import { useBoolean } from "@chakra-ui/react";
import errorHandler from "@app/utils/errorHandler";

type Status = "success" | "error" | "default";

const useLoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const [loading, setLoading] = useBoolean();
  const [status, setStatus] = useState<Status>("default");

  const onSendConfirmationEmail = async () => {
    const email = emailRef.current?.value || "";

    setLoading.on();

    errorHandler(
      async () => {
        await signInEmailLink({
          email,
          redirectURL: "/account-activate",
        });

        setStatus("success");
      },
      () => {
        setStatus("error");
      }
    );

    setLoading.off();
  };

  return {
    status,
    loading,
    emailRef,
    passwordRef,
    onSendConfirmationEmail,
  };
};

export default useLoginPage;
