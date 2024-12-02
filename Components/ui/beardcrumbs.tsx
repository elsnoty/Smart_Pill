import { cn } from "@/lib/utils";
import Link from "next/link";

interface breadcrumbs {
  label: string;
  href: string;
  active?: boolean;
}

export default function ({ breadcrumbs }: { breadcrumbs: breadcrumbs[] }) {
  return (
    <nav aria-label="breadCrumbs" className="mb-6">
      <ol className="flex">
        {breadcrumbs.map(({ label, href, active }, index) => (
          <li
            aria-current={active}
            key={href}
            className={cn(active ? "text-gray-900" : "text-gray-500")}
          >
            <Link href={href}>{label}</Link>
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
