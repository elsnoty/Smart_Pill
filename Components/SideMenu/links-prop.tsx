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
    <div className="flex flex-col gap-y-2 pt-3">
      {links.map(({ link, linkName, icon }, index) => (
        <Link
          key={link}
          href={link}
          className={cn(
            "transition-colors duration-300 flex py-2 px-2 rounded border-blue-400 border-b-2 ",
            {
              "text-blue-700 bg-white hover:bg-blue-300": pathname === link,
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
          {linkName}
        </Link>
      ))}
    </div>
  );
};

export default LinksProp;
