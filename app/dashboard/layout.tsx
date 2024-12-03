import LinksMenu from "@/Components/header/links-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen w-full">
      <LinksMenu></LinksMenu>

      <header className=""></header>
      <div className="flex-1 lg:pl-[340px]">{children}</div>
    </main>
  );
}
