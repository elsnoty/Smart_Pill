"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Checkbox, Input, Label } from "../ui";
import { BaseForm } from "./base-form";
import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { register, registerActionState } from "@/lib/server/actions";
import SubmitButton from "./submit-button";
import { useToast } from "@/lib/context/toast-context";

export function RegisterForm() {
  const { addToast } = useToast();

  const router = useRouter();

  const [fileds, setFields] = useState({ userName: "", email: "" });
  const [isSuccessful, setIsSuccessful] = useState(false);

  const initialState: registerActionState = {
    status: "idle",
    errors: undefined,
  };
  const [state, formAction, isPending] = useActionState<
    registerActionState,
    FormData
  >(register, initialState);

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
      case "user_exists":
        addToast({
          message: "User already exists",
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
    setFields({
      userName: formData.get("username") as string,
      email: formData.get("email") as string,
    });
    formAction(formData);
  };

  return (
    <BaseForm title="Welcome" subtitle="Please Sign up to your account">
      <form action={handleSubmit} className="space-y-2">
        <div>
          <Label htmlFor="username">UserName</Label>
          <div className="relative">
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="Enter your Username"
              className="peer h-12"
              autoFocus
              autoComplete="username"
              defaultValue={fileds.userName}
            />
          </div>
          {state.errors?.userName && (
            <div>
              {state.errors.userName.map((error, index) => (
                <p
                  className="text-xs font-thin text-red-500"
                  key={index + error}
                >
                  {error}
                </p>
              ))}
            </div>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              className="peer h-12"
              autoFocus
              autoComplete="email"
              defaultValue={fileds.email}
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
                  className="text-xs font-thin text-red-500"
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
                  className="text-xs font-thin text-red-500"
                  key={index + error}
                >
                  {error}
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
            Sign Up
          </SubmitButton>
        </div>
        <div className="flex items-center gap-2 text-sm font-medium leading-none">
          {`Already have an accoutn ? `}
          <Link
            href={"/login"}
            className="text-muted-foreground transition-colors hover:text-accent-foreground"
          >
            Sign In
          </Link>
        </div>
      </form>
    </BaseForm>
  );
}
