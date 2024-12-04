"use client";
import React, { useRef, useState } from "react";
import Logo from "@/public/logo_pill.svg";
import Image from "next/image";
import { links } from "@/models/links-configure";
import LinksProp from "./links-prop";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/ganerate-breadcrumbs";
import BreadCrumbs from "../ui/beardcrumbs";

const LinksMenu = () => {
  const pathname = usePathname();

  const menuRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = (e: any) => {
    if (!isOpen && !menuRef.current?.contains(e.target)) {
      setIsOpen(true);
    }
  };

  document.addEventListener("mousedown", toggleMenu);

  const breadcrumbs = generateBreadcrumbs({ links, pathname });

  return (
    <div className="flex w-full items-center">
      <Icon
        icon="mingcute:menu-fill"
        className="cursor-pointer rounded-full p-2 h-10 w-10 text-foreground lg:hidden"
        onClick={() => setIsOpen(false)}
      />
      <aside
        ref={menuRef}
        className={cn(
          `fixed px-5 h-full py-4 bg-white/10 backdrop-blur-sm shadow-xl z-50 left-0 lg:left-auto inset-y-0 w-navwidth transition-all duration-300 ease-in`,
          { "-left-96": isOpen }
        )}
      >
        <Link
          href={"/dashboard"}
          className="flex items-center ml-4 lg:w-fit mb-6"
        >
          <Image
            src={Logo}
            alt="logo"
            width={50}
            height={50}
            priority
            className="size-13"
          />
          <h1 className={`text-2xl font-semibold ml-2`}>Smart Pill</h1>
        </Link>
        <LinksProp links={links} pathname={pathname} />
      </aside>
      <BreadCrumbs breadcrumbs={breadcrumbs} className="lg:pl-navpadding " />
    </div>
  );
};

export default LinksMenu;
