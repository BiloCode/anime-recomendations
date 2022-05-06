import { useEffect, useRef, useState } from "react";
import { isSignInWithEmailLink } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import { auth } from "@config/firebase";

import errorHandler from "@app/utils/errorHandler";
import registerAccount from "@app/services/registerAccount";
import signInEmailLinkValidate from "@app/services/signInEmailLinkValidate";
import getAccountById from "@app/services/getAccountById";

const useAccountValidation = () => {
  const navigate = useNavigate();
  const emailRef = useRef<HTMLInputElement>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isValidate, setIsValidate] = useState<boolean>(
    isSignInWithEmailLink(auth, window.location.href)
  );

  const _onExistAccount = async (authId: string) => {
    return errorHandler(
      async () => ((await getAccountById(authId)) ? true : false),
      () => false
    ) as boolean;
  };

  const _onValidateEmail = async (email: string, location: string) => {
    return errorHandler(async () => {
      const result = await signInEmailLinkValidate(email, location);
      const userId = result.user.uid;

      return userId;
    });
  };

  const _onRegisterNewAccount = async (authId: string, userNumber: number) => {
    return errorHandler(async () => {
      await registerAccount(authId, {
        fullname: `User ${userNumber}`,
        profileImage: {
          url: "",
          name: "",
        },
      });
    });
  };

  const onSendValidation = async () => {
    if (!emailRef.current?.value) {
      return;
    }

    setIsLoading(() => true);

    const email = emailRef.current.value;
    const location = window.location.href;
    const userNumber = Math.round(Math.random() * 100000);

    const authenticationId = await _onValidateEmail(email, location);

    if (authenticationId !== null) {
      const isExists = await _onExistAccount(authenticationId);
      !isExists && (await _onRegisterNewAccount(authenticationId, userNumber));
    }

    setIsLoading(() => false);
  };

  useEffect(() => {
    if (isValidate) return;

    navigate("/", { replace: true });
  }, []);

  return {
    emailRef,
    isLoading,
    onSendValidation,
  };
};

export default useAccountValidation;
