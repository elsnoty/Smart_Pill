"use client";
import React, { useRef, useState, useEffect } from "react";
import Logo from "@/Components/ui/logo";
import { links } from "@/models/links-configure";
import { LinksProp } from "./links-prop";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { usePathname } from "next/navigation";
import { useBreadcrumbs } from "@/lib/usebreadcrumbs";
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

  const breadcrumbs = useBreadcrumbs({ links, pathname });

  return (
    <div className="flex w-full items-center">
      <Icon
        icon="mingcute:menu-fill"
        className="h-10 w-10 cursor-pointer rounded-full p-2 text-foreground lg:hidden"
        onClick={() => setIsOpen(false)}
      />
      <aside
        ref={menuRef}
        className={cn(
          `fixed inset-y-0 left-0 z-50 flex w-navwidth flex-col bg-white/10 px-5 py-4 shadow-xl backdrop-blur-md transition-all duration-300 ease-in lg:left-auto`,
          { "-left-96": isOpen },
        )}
      >
        <Logo href="/dashboard" className="mb-6 ml-4 lg:w-fit" />
        <LinksProp links={links} pathname={pathname} />
      </aside>
      <BreadCrumbs breadcrumbs={breadcrumbs} className="lg:pl-navpadding" />
    </div>
  );
}
