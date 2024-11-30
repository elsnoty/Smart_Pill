"use client";
import React, { useState } from "react";
import Logo from "../../public/logo_pill.svg";
import Image from "next/image";
import { Links } from "@/models/LinksConfigure";
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
        className="cursor-pointer rounded-full p-2 h-10 w-10 text-foreground md:hidden"
        onClick={toggleMenu}
      />
      <div
        className={cn(
          `fixed px-5 h-full py-3 dark:bg-background bg-white z-50 top-0 left-0 w-[350px] transition-all`,
          { "-left-96": isOpen }
        )}
      >
        <Icon
          icon="material-symbols:close"
          width="24"
          height="24"
          className="cursor-pointer md:hidden absolute right-8 top-8 "
          onClick={toggleMenu}
        />
        <Link href={"/dashboard"} className="block w-fit">
          <Image src={Logo} alt="logo" width={60} height={60} />
        </Link>
        <LinksProp links={Links} />
      </div>
    </>
  );
};

export default LinksMenu;
