import Nav from "@/Components/NavBar/Nav";
import LinksMenu from "@/Components/SideMenu/LinksMenu";

export default function Home() {
  return (
      <div className="">
        <Nav />
        <LinksMenu className="max-lg:hidden"/>
      </div>
  );
}
