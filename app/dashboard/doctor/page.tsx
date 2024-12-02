import BreadCrumbs from "@/Components/ui/beardcrumbs";
export default async function Home() {
  return (
    <div className="">
      <BreadCrumbs
        breadcrumbs={[
          { label: "Dashboard", href: "/dashboard" },
          { label: "Doctor", href: "/dashboard/doctor", active: true },
        ]}
      />
      hello world
    </div>
  );
}
