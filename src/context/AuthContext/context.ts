import { createContext, useContext } from "react";

type State = {
  isLoading: boolean;
  userId: string | null;
  isAuthenticated: boolean;
};

export const AuthContext = createContext<Partial<State>>({});

export const useAuthContext = () => useContext(AuthContext) as Required<State>;
