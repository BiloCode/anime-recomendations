import { FC, PropsWithChildren } from "react";

import NavigationBar from "@components/organisms/NavigationBar";

const ScreenLayout: FC<PropsWithChildren<{}>> = ({ children }) => (
  <>
    <NavigationBar />
    {children}
  </>
);

export default ScreenLayout;
