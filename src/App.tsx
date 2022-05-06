import { SWRConfig } from "swr";
import { ChakraProvider } from "@chakra-ui/react";

import RouterPage from "@router";
import AppLayout from "@components/templates/AppLayout";
import AuthProvider from "@context/AuthContext/provider";

const App = () => (
  <SWRConfig value={{ suspense: true }}>
    <ChakraProvider>
      <AuthProvider>
        <AppLayout>
          <RouterPage />
        </AppLayout>
      </AuthProvider>
    </ChakraProvider>
  </SWRConfig>
);

export default App;
