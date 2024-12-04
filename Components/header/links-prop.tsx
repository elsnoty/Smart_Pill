import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { LinksDetails } from "@/models/links-configure";

const LinksProp = ({
  links,
  pathname,
}: {
  links: LinksDetails[];
  pathname: string;
}) => {
  return (
    <nav className="flex flex-col items-center gap-2">
      {links.map(({ link, label, icon }) => (
        <Link
          key={link}
          href={link}
          className={cn(
            "flex w-full h-11 items-center justify-start rounded-xl hover:bg-accent pl-4",
            {
              "dark:bg-white/10 bg-black/10 font-medium": pathname === link,
            }
          )}
        >
          <Icon
            icon={icon}
            width="24"
            height="24"
            className="mr-2 bg-primary/10 p-1 box-content rounded-lg"
          />
          {label}
          <span className="sr-only">{label}</span>
        </Link>
      ))}
    </nav>
  );
};

export default LinksProp;
