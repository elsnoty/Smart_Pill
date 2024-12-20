import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_pill.svg";
import { cn } from "@/lib/utils";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
}
export default function Logo({ href, className, ...props }: LogoProps) {
  return (
    <Link href={href} className={cn("flex items-center", className)} {...props}>
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        priority
        className="size-14"
      />
      <h1 className={`text-2xl font-semibold ml-2 text-white`}>Smart Pill</h1>
    </Link>
  );
}
