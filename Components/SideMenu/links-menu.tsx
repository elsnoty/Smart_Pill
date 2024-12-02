"use client";
import React, { useState } from "react";
import Logo from "../../public/logo_pill.svg";
import Image from "next/image";
import { Links } from "@/models/links-configure";
import LinksProp from "./links-prop";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";

const LinksMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <Icon
        icon="mingcute:menu-fill"
        className="cursor-pointer rounded-full p-2 h-10 w-10 text-foreground lg:hidden"
        onClick={toggleMenu}
      />
      <aside
        className={cn(
          `fixed px-5 h-full py-4 bg-white/10 backdrop-blur-sm z-50 left-0 inset-y-0 w-[320px] transition-all`,
          { "-left-96": isOpen }
        )}
      >
        <Icon
          icon="material-symbols:close"
          width="24"
          height="24"
          className="cursor-pointer lg:hidden absolute right-8 top-8 "
          onClick={toggleMenu}
        />
        <Link href={"/dashboard"} className="block w-fit">
          <Image src={Logo} alt="logo" width={60} height={60} />
        </Link>
        <LinksProp links={Links} />
      </aside>
    </>
  );
};

export default LinksMenu;
