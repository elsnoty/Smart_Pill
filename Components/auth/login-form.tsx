"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Checkbox, Input, Label } from "../ui";
import { BaseForm } from "./base-form";
import { useActionState, useEffect, useState } from "react";
import { login, loginActionState } from "@/lib/actions";
import { useRouter } from "next/navigation";
import SubmitButton from "./submit-button";

export function LoginForm() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [isSuccessful, setIsSuccessful] = useState(false);

  const initialState: loginActionState = {
    status: "idle",
    errors: undefined,
  };

  const [state, formAction, isPending] = useActionState<
    loginActionState,
    FormData
  >(login, initialState);

  // handle form state
  useEffect(() => {
    if (state.status === "failed") {
      console.error("Invalid credentials!", state.errors);
    } else if (state.status === "invalid_data") {
      console.error("Failed validating your submission!", state.errors);
    } else if (state.status === "success") {
      setIsSuccessful(true);
      router.push("/dashboard");
    }
  }, [state.status, router]);

  const handleSubmit = (formData: FormData) => {
    setEmail(formData.get("email") as string);
    formAction(formData);
  };

  return (
    <BaseForm title="Welcome back" subtitle="Please sign in to your account">
      <form className="space-y-2 md:space-y-4" action={handleSubmit}>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              autoFocus
              autoComplete="email"
              className="peer h-12"
              defaultValue={email}
            />
            <Icon
              icon="ic:twotone-email"
              className="size-6 absolute top-1/2 right-3 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
          {state.errors?.email && (
            <div>
              {state.errors.email.map((error, index) => (
                <p
                  className="text-xs font-thin text-red-500 m-1"
                  key={index + error}
                >
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="peer h-12"
            />
            <Icon
              icon="solar:lock-password-bold-duotone"
              className="size-6 absolute top-1/2 right-3 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
          {state.errors?.password && (
            <div>
              {state.errors.password.map((error, index) => (
                <p
                  className="text-xs font-thin text-red-500 m-1"
                  key={index + error}
                >
                  {error}.
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3 ">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium leading-none text-muted-foreground hover:text-accent-foreground transition-colors"
            >
              Forgot password
            </Link>
          </div>
          <SubmitButton isSuccessful={isSuccessful} isPending={isPending}>
            Sign In
          </SubmitButton>
        </div>
        <div className="flex items-center gap-2 leading-none text-sm font-medium">
          {`Don't have an account? `}
          <Link
            href={"/register"}
            className="text-muted-foreground hover:text-accent-foreground transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </BaseForm>
  );
}
