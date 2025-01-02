import { ImageSlider } from "@/Components/auth/image-slider";
import { LoginForm } from "@/Components/auth/login-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};

export default function Page() {
  return (
    <>
      <LoginForm />
      <ImageSlider />
    </>
  );
}
