import Nav from "@/Components/NavBar/nav";
import LinksMenu from "@/Components/SideMenu/links-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div>
        <Nav></Nav>
      </div>
      <div>{children}</div>
    </div>
  );
}
