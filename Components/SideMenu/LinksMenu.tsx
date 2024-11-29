"use client";
import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";
import { Links } from "@/models/LinksConfigure";
import LinksProp from "./LinksProp";
import Link from "next/link";

const LinksMenu = ({ className }: { className?: string }) => {
  return (
    <div
      className={`${className} px-5 h-full py-3 dark:bg-[#0f172a] bg-white z-50 lg:fixed top-0 left-0 lg:w-[350px] w-full`}
    >
      <Link href={"/"} className="block w-fit">
        <Image src={Logo} alt="logo" width={30} height={30} />
      </Link>
      <LinksProp links={Links} />
    </div>
  );
};

export default LinksMenu;
