import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo_pill.svg";

interface LogoProps extends React.HTMLAttributes<HTMLAnchorElement> {
  href: string;
}
export default function Logo({ href, ...props }: LogoProps) {
  return (
    <Link
      href={href}
      className="flex items-center ml-4 lg:w-fit mb-6"
      {...props}
    >
      <Image
        src={logo}
        alt="logo"
        width={50}
        height={50}
        priority
        className="size-14"
      />
      <h1 className={`text-2xl font-semibold ml-2`}>Smart Pill</h1>
    </Link>
  );
}
