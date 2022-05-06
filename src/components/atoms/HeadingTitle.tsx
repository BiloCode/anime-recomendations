import { Text } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

type Props = {
  white?: boolean;
};

const HeadingTitle: FC<PropsWithChildren<Props>> = ({ children, white }) => {
  return (
    <Text color={white ? "white" : "gray.500"} fontWeight="bold">
      {children}
    </Text>
  );
};

export default HeadingTitle;
