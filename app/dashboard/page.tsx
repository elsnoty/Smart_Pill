import DashboardCharts from "@/Components/moderator/UserCharts";

export default async function Home() {
  return (
    <div className="flex flex-col">
      <div><DashboardCharts /></div>
    </div>
  );
}
