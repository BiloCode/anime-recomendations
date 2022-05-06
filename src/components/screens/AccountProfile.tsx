import { Suspense } from "react";

import ScreenLayout from "@components/templates/ScreenLayout";
import AccountDescriptor from "@components/organisms/AccountDescriptor";

const AccountProfile = () => {
  return (
    <ScreenLayout>
      <Suspense fallback={null}>
        <AccountDescriptor />
      </Suspense>
    </ScreenLayout>
  );
};

export default AccountProfile;
