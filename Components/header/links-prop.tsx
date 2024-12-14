import Link from "next/link";
import React from "react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { LinksDetails } from "@/models/links-configure";
import { Button } from "../ui/button";

const LinksProp = ({
  links,
  pathname,
}: {
  links: LinksDetails[];
  pathname: string;
}) => {
  return (
    <>
      <nav className="flex flex-col items-center gap-2 ">
        {links.map(({ link, label, icon }) => (
          <Link
            key={link}
            href={link}
            className={cn(
              "flex w-full min-h-11 items-center rounded-xl hover:bg-accent pl-4",
              {
                "dark:bg-white/10 bg-black/10 font-medium": pathname === link,
              }
            )}
          >
            <Icon
              icon={icon}
              className="mr-2 bg-primary/10 p-1 box-content rounded-lg text-2xl"
            />
            {label}
            <span className="sr-only">{label}</span>
          </Link>
        ))}
      </nav>

      <Button className="group min-h-11 mt-auto ">
        <Icon
          icon="uim:signout"
          className="mr-2 bg-primary/10 p-1 box-content rounded-lg text-2xl group-hover:text-red-400 transition-colors"
        />
        Sign Out<span className="sr-only">sign out</span>
      </Button>
    </>
  );
};

export default LinksProp;
