import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { LinksDetails } from "@/lib/types/definitions";
import SignoutForm from "../auth/signout-fom";

export function LinksProp({
  links,
  pathname,
}: {
  links: LinksDetails[];
  pathname: string;
}) {
  return (
    <>
      <nav className="flex flex-col items-center gap-2">
        {links.map(({ link, label, icon }) => (
          <Link
            key={link}
            href={link}
            className={cn(
              "flex min-h-11 w-full items-center rounded-xl pl-4 hover:bg-accent",
              {
                "bg-black/10 font-medium dark:bg-white/10": pathname === link,
              },
            )}
          >
            <Icon
              icon={icon}
              className="mr-2 box-content rounded-lg bg-primary/10 p-1 text-2xl"
            />
            {label}
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </nav>
      <SignoutForm />
    </>
  );
}
