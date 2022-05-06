import { FC, PropsWithChildren } from "react";
import { Flex } from "@chakra-ui/react";

const CenterContent: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Flex justifyContent="center">{children}</Flex>
);

export default CenterContent;
