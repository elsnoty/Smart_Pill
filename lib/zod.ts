import { z } from "zod";

const passwordValidation = new RegExp(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);
export const signInValidation = z.object({
  email: z.string({ required_error: "Email is requeired" }).email(),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, "password must be more than 8 numbers")
    .regex(
      passwordValidation,
      "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number"
    ),
});
