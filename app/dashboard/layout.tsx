import LinksMenu from "@/Components/SideMenu/links-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <LinksMenu></LinksMenu>
      <div className="flex flex-col">
        <header></header>
        <div className="flex-grow lg:pl-[340px]">{children}</div>
      </div>
    </main>
  );
}
