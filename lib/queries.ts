import { user } from "./definitions";

export const getUser = async (
  email: string,
  password: string
): Promise<user | undefined> => {
  try {
    const user = await fetch(
      `http://loginregister.runasp.net/api/Account/login`,
      {
        method: "POST",
        body: JSON.stringify({ email, password }),
      }
    );
    const data: user = await user.json();
    return data;
  } catch (err) {
    console.error("Failed to fetch user:", err);
    throw new Error("Failed to fetch user.");
  }
};
