import { FC, PropsWithChildren } from "react";
import { Text } from "@chakra-ui/react";

const HeadingLightText: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Text fontWeight="light" color="gray.500" fontSize="sm">
    {children}
  </Text>
);

export default HeadingLightText;
