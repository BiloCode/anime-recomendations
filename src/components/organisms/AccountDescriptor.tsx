import { FC } from "react";
import { Avatar } from "@chakra-ui/react";

import CenterContent from "@components/atoms/CenterContent";
import useAccountData from "@hooks/useAccountData";

const AccountDescriptor: FC = () => {
  const { account } = useAccountData();

  return (
    <CenterContent>
      <Avatar size="2xl" name={account?.fullname} />
    </CenterContent>
  );
};

export default AccountDescriptor;
