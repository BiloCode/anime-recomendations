import { Avatar, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import useNavigation from "@hooks/useNavigation";
import useAccountData from "@hooks/useAccountData";
import authenticationSignOut from "@app/services/authenticationSignOut";

const CollapsableAccount = () => {
  const { push } = useNavigation();
  const { account } = useAccountData();

  const onLogout = () => authenticationSignOut();
  const onNavigateToProfile = () => push(`/account/${account?.id}`);

  return (
    <Menu>
      <MenuButton>
        <Avatar size="sm" name={account?.fullname} />
      </MenuButton>
      <MenuList>
        <MenuItem onClick={onNavigateToProfile}>Ver Perfil</MenuItem>
        <MenuItem onClick={onLogout}>Cerrar Sesión</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default CollapsableAccount;
