import { z } from "zod";
import { user } from "../types/definitions";
import { signInValidation, signUpValidation } from "../types/zod";

type loginUser = z.infer<typeof signInValidation>;
export const getUser = async ({
  email,
  password,
}: loginUser): Promise<user | undefined> => {
  try {
    const response = await fetch(
      `http://loginregister.runasp.net/api/Account/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, password }),
      },
    );

    if (!response.ok) {
      console.error(response.status);
      return undefined;
    }
    const data: user = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch user.");
  }
};

type registerUser = z.infer<typeof signUpValidation>;
export const createUser = async ({
  userName,
  email,
  password,
  role = "USER",
}: registerUser): Promise<user | undefined> => {
  try {
    const response = await fetch(
      "http://loginregister.runasp.net/api/Account/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include", // Include credentials if needed
        body: JSON.stringify({ userName, email, password, role }),
      },
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: user = await response.json();
    return data;
  } catch (err) {
    console.error("Failed to create new user:", err);
    throw err; // Re-throw the error for proper error handling
  }
};
