import { BrowserRouter, Route, Routes } from "react-router-dom";

import { useAuthContext } from "@context/AuthContext/context";

import Home from "@components/screens/Home";
import Login from "@components/screens/Login";
import AccountProfile from "@components/screens/AccountProfile";
import AccountValidation from "@components/screens/AccountValidation";

const RouterPage = () => {
  const { isAuthenticated, isLoading } = useAuthContext();

  if (isLoading) {
    return null;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/:id" element={<AccountProfile />} />
      </Routes>
      {!isAuthenticated && (
        <Routes>
          <Route path="account" element={<Login />} />
          <Route path="account-activate" element={<AccountValidation />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default RouterPage;
