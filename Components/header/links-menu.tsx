"use client";
import React, { useRef, useState, useEffect } from "react";
import Logo from "@/Components/ui/logo";
import { links } from "@/models/links-configure";
import { LinksProp } from "./links-prop";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import { generateBreadcrumbs } from "@/lib/ganerate-breadcrumbs";
import BreadCrumbs from "../ui/beardcrumbs";

export function LinksMenu() {
  const pathname = usePathname();

  const menuRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const toggleMenu = (e: MouseEvent) => {
      if (
        !isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as HTMLElement)
      ) {
        setIsOpen(true);
      }
    };

    // Add event listener only on client-side
    document.addEventListener("mousedown", toggleMenu);

    // Cleanup event listener
    return () => {
      document.removeEventListener("mousedown", toggleMenu);
    };
  }, [isOpen]); // Depend on isOpen to ensure the event listener uses the latest state

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
          `fixed px-5 py-4 bg-white/10 backdrop-blur-md shadow-xl z-50 left-0 lg:left-auto inset-y-0 w-navwidth transition-all duration-300 ease-in flex flex-col`,
          { "-left-96": isOpen }
        )}
      >
        <Logo href="/dashboard" className="ml-4 lg:w-fit mb-6 " />
        <LinksProp links={links} pathname={pathname} />
      </aside>
      <BreadCrumbs breadcrumbs={breadcrumbs} className="lg:pl-navpadding " />
    </div>
  );
}
