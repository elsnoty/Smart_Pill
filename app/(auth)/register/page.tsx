import RegisterForm from "@/Components/auth/register-form";
import Image from "next/image";
import loginImage from "@/public/images/auth-image-1.jpg";
export default function Page() {
  return (
    <section className="h-screen flex justify-between items-center bg-gradient-to-tr from-secondary via-background to-secondary">
      <RegisterForm />
      <Image
        alt="pills within a pill container"
        src={loginImage}
        width={960}
        height={1200}
        className="h-screen w-[55%] object-cover "
      />
    </section>
  );
}
