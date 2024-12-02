import Nav from "@/Components/NavBar/nav";

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
