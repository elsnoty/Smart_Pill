import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { Button, Checkbox, Input, Label } from "../ui";
import { BaseForm } from "./base-form";

export function RegisterForm() {
  return (
    <BaseForm title="Welcome" subtitle="Please Sign up to your account">
      <form className="space-y-2 md:space-y-4">
        <div className="flex justify-between w-full gap-4">
          <div className="w-full">
            <Label htmlFor="first-name">First Name</Label>
            <div className="relative ">
              <Input
                autoComplete="first-name"
                id="first-name"
                name="first-name"
                type="text"
                placeholder="Enter your first name"
                required
                className="peer h-12"
              />
            </div>
          </div>
          <div className="w-full">
            <Label htmlFor="second-name">Second Name</Label>
            <div className="relative">
              <Input
                autoComplete="second-name"
                id="second-name"
                name="second-name"
                type="text"
                placeholder="Enter your second name"
                required
                className="peer h-12"
              />
            </div>
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email address</Label>
          <div className="relative">
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              className="peer h-12"
            />
            <Icon
              icon="ic:twotone-email"
              className="size-6 absolute top-1/2 right-3 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
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
              required
            />
            <Icon
              icon="solar:lock-password-bold-duotone"
              className="size-6 absolute top-1/2 right-3 -translate-y-1/2 transition-colors peer-focus:text-muted-foreground"
            />
          </div>
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
          <Button className="w-full justify-center mt-5 h-11">Sign Up</Button>
        </div>
        <div className="flex items-center gap-2 leading-none text-sm font-medium">
          {`Already have an accoutn ? `}
          <Link
            href={"/login"}
            className="text-muted-foreground hover:text-accent-foreground transition-colors"
          >
            Sign In
          </Link>
        </div>
      </form>
    </BaseForm>
  );
}
