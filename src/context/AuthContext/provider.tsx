import { FC, PropsWithChildren, useEffect, useState } from "react";

import { auth } from "@config/firebase";
import { onAuthStateChanged } from "firebase/auth";

import { AuthContext } from "./context";

const AuthProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [userId, setUserId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const isAuthenticated = userId !== null;

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserId(null);
        setIsLoading(false);
        return;
      }

      setIsLoading(false);
      setUserId(() => user.uid);
    });

    return () => unSubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userId,
        isLoading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
