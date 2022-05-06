import { Button } from "@chakra-ui/react";
import { FC } from "react";

type Props = {
  onClick?(): void;
};

const FloatIndicator: FC<Props> = ({ onClick }) => (
  <Button
    right={3}
    bottom={3}
    position="fixed"
    colorScheme="red"
    onClick={onClick}
  >
    Subir
  </Button>
);

export default FloatIndicator;
