import StatCard from "@/components/ui/StatCard";
import WelcomeCard from "@/components/ui/WelcomeCard";
import CircularProgress from "@/components/ui/CircularProgress";
import ReferralCard from "@/components/ui/ReferralCard";
import SalesChart from "@/components/ui/SalesChart";
import ActiveUsersChart from "@/components/ui/ActiveUsersChart";
import ProjectsTable from "@/components/ui/ProjectsTable";
import OrdersOverview from "@/components/ui/OrdersOverview";
import { statCards } from "@/lib/data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* সারি ১: ৪টা স্ট্যাট কার্ড */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <StatCard key={card.title} {...card} />
        ))}
      </div>

      {/* সারি ২: Welcome / Satisfaction / Referral */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1">
          <WelcomeCard />
        </div>

        <div className="rounded-vision-lg bg-vision-card p-4 flex flex-col items-center justify-center relative">
          <h3 className="text-sm font-semibold self-start">Satisfaction Rate</h3>
          <p className="text-xs text-vision-text-muted self-start">From all projects</p>
          <div className="relative mt-4">
            <CircularProgress percentage={95} label="Based on likes" />
          </div>
        </div>

        <ReferralCard />
      </div>

      {/* সারি ৩: Sales chart + Active users chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <SalesChart />
        </div>
        <ActiveUsersChart />
      </div>

      {/* সারি ৪: Projects table + Orders overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2">
          <ProjectsTable />
        </div>
        <OrdersOverview />
      </div>
    </div>
  );
}
