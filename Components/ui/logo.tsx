import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_pill.svg";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
}
export default function Logo({
  href = "dashboard",
  className,
  ...props
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn("flex h-fit items-center", className)}
      {...props}
      as={"image"}
    >
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        priority
        className="size-14"
      />
      <h1 className={`ml-2 text-2xl font-semibold text-foreground`}>
        Smart Pill
      </h1>
    </Link>
  );
}
