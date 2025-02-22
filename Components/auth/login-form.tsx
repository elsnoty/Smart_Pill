"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Checkbox, Input, Label } from "../ui";
import { BaseForm } from "./base-form";
import { useActionState, useEffect, useState } from "react";
import { login, loginActionState } from "@/lib/server/actions";
import { useRouter } from "next/navigation";
import SubmitButton from "./submit-button";
import { useToast } from "@/lib/context/toast-context";

export function LoginForm() {
  const { addToast } = useToast();

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
    switch (state.status) {
      case "failed":
        addToast({
          message: "Invalid credentials please try again!",
          type: "error",
        });
        break;
      case "invalid_data":
        addToast({
          message: "Invalid data please try again!",
          type: "warning",
        });
        break;
      case "success":
        addToast({
          message: "Successfully logged in!",
          type: "success",
        });
        setIsSuccessful(true);
        router.push("/dashboard");
        break;
      default:
        break;
    }
  }, [router, state.errors, state.status, addToast]);

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
              className="absolute right-3 top-1/2 size-6 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
          {state.errors?.email && (
            <div>
              {state.errors.email.map((error, index) => (
                <p
                  className="m-1 text-xs font-thin text-red-500"
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
              className="absolute right-3 top-1/2 size-6 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
          {state.errors?.password && (
            <div>
              {state.errors.password.map((error, index) => (
                <p
                  className="m-1 text-xs font-thin text-red-500"
                  key={index + error}
                >
                  {error}.
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm">
                Remember me
              </Label>
            </div>
            <Link
              href="/forgot-password"
              className="text-sm font-medium leading-none text-muted-foreground transition-colors hover:text-accent-foreground"
            >
              Forgot password
            </Link>
          </div>
          <SubmitButton isSuccessful={isSuccessful} isPending={isPending}>
            Sign In
          </SubmitButton>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium leading-none">
          {`Don't have an account? `}
          <Link
            href={"/register"}
            className="text-muted-foreground transition-colors hover:text-accent-foreground"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </BaseForm>
  );
}
