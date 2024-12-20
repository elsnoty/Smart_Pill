import { ImageSlider } from "@/Components/auth/image-slider";
import { LoginForm } from "@/Components/auth/login-form";

export default function Page() {
  return (
    <section className="h-screen md:p-8 lg:p-12 flex justify-between items-center bg-gradient-to-tr from-secondary via-background to-secondary">
      <LoginForm />
      <ImageSlider />
    </section>
  );
}