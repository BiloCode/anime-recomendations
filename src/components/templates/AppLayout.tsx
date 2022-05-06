import { Box } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const AppLayout: FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <Box minH="100vh" bg="blackAlpha.900">
      {children}
    </Box>
  );
};

export default AppLayout;
