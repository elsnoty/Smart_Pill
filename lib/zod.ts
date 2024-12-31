import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
export const signInValidation = z.object({
  email: z.string({ required_error: "Email is requeired" }).email().trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "passowrd is required")
    .regex(
      passwordValidation,
      "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number"
    )
    .trim(),
});

export const signUpValidation = z.object({
  userName: z
    .string({})
    .min(2, "username must be at least 2 characters")
    .trim(),
  email: z.string({ required_error: "Email is requeired" }).email().trim(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "password is required")
    .regex(
      passwordValidation,
      "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number"
    )
    .trim(),
  role: z.enum(["USER", "ADMIN"]).nullish(),
});
