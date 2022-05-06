import useSWR from "swr";

import { useAuthContext } from "@context/AuthContext/context";
import getAccountById from "@app/services/getAccountById";

const useAccountData = () => {
  const { userId } = useAuthContext();
  const { data, mutate } = useSWR("<account-data>", async () => {
    return await getAccountById(userId!);
  });

  return { account: data, mutate };
};

export default useAccountData;
