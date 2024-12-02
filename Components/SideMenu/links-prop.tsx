"use client";
import Link from "next/link";
import React from "react";
import { LinksMenuProps } from "@/models/links-configure";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";

const LinksProp = ({ links }: LinksMenuProps) => {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col items-center gap-2 ">
      {links.map(({ link, label, icon }, index) => (
        <Link
          key={link}
          href={link}
          className={cn(
            "flex w-full h-11 items-center justify-start rounded-xl hover:bg-accent px-4",
            {
              "dark:bg-white/10 bg-black/10  font-semibold": pathname === link,
            }
          )}
        >
          <Icon
            icon={icon}
            width="24"
            height="24"
            style={{ marginRight: "8px" }}
            className=""
          />
          {label}
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default LinksProp;
