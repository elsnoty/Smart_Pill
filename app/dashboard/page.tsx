import BreadCrumbs from "@/Components/ui/beardcrumbs";
export default async function Home() {
  return (
    <div className="">
      <BreadCrumbs
        breadcrumbs={[{ label: "Dashboard", href: "/dashboard", active: true }]}
      />
      hello world
    </div>
  );
}
