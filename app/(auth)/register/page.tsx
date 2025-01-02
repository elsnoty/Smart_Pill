import { RegisterForm } from "@/Components/auth/register-form";
import { ImageSlider } from "@/Components/auth/image-slider";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register",
};

export default function Page() {
  return (
    <>
      <RegisterForm />
      <ImageSlider />
    </>
  );
}
