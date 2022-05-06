import { Badge } from "@chakra-ui/react";
import { FC, PropsWithChildren } from "react";

const CategoryBox: FC<PropsWithChildren<{}>> = ({ children }) => (
  <Badge variant="outline" colorScheme="blue">
    {children}
  </Badge>
);

export default CategoryBox;
