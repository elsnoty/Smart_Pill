import { LinksMenu } from "@/Components/header/links-menu";
import { ToggleTheme } from "@/Components/header/toggle-theme";
import { Icon } from "@iconify/react/dist/iconify.js";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="flex min-h-16 items-center">
        <LinksMenu></LinksMenu>
        <div className="flex gap-5 pr-2 lg:pr-8">
          {/* search  */}
          <div>Search</div>
          {/* Profile */}
          <Icon icon="iconamoon:profile-circle-duotone" className="text-2xl" />
          <ToggleTheme />
        </div>
      </header>
      <main className="flex-1 lg:pl-navpadding">{children}</main>
    </div>
  );
}
