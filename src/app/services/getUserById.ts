import { User } from "@app/types/User";
import { API_URL } from "@config/http";

export const getUserById = async (id: number): Promise<User> => {
  const request = await fetch(`${API_URL}/users/${id}`);
  const requestData = await request.json();

  return requestData;
};
