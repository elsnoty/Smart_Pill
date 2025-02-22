"use server";
import { signIn, signOut } from "@/auth";
import { signInValidation, signUpValidation } from "../types/zod";
import { AuthError } from "next-auth";
import { createUser } from "./queries";

export interface errors {
  errors?: {
    userName?: string[];
    email?: string[];
    password?: string[];
    general?: string[];
  };
}
export interface loginActionState extends errors {
  status: "idle" | "in_progress" | "success" | "failed" | "invalid_data";
}

export async function login(
  prevState: loginActionState,
  formData: FormData,
): Promise<loginActionState> {
  try {
    const validateFields = signInValidation.safeParse({
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validateFields.success) {
      return {
        status: "invalid_data",
        errors: validateFields.error.flatten().fieldErrors,
      };
    }
    const { email, password } = validateFields.data;

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return { status: "success" };
  } catch (err) {
    return {
      status: "failed",
      errors: {
        general: [err instanceof AuthError ? err.type : "Failed to sign in"],
      },
    };
  }
}

export interface registerActionState extends errors {
  status:
    | "idle"
    | "in_progress"
    | "success"
    | "failed"
    | "invalid_data"
    | "user_exists";
}

export const register = async (
  prevState: registerActionState,
  formData: FormData,
): Promise<registerActionState> => {
  try {
    const validateFields = signUpValidation.safeParse({
      userName: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    });

    if (!validateFields.success) {
      return {
        status: "invalid_data",
        errors: validateFields.error.flatten().fieldErrors,
      };
    }

    const { userName, email, password } = validateFields.data;

    const user = await createUser({ userName, email, password });

    if (user) return { status: "user_exists" };

    await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });

    return {
      status: "success",
    };
  } catch (err) {
    return {
      status: "failed",
      errors: {
        general: [
          err instanceof AuthError ? err.type : (err as string),
          "Failed to sign up",
        ],
      },
    };
  }
};

export const signout = async () => {
  await signOut();
};
