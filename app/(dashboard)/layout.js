import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";

export default function DashboardGroupLayout({ children }) {
  return (
    <div className="min-h-screen bg-vision-gradient flex">
      {/* Sidebar — fixed width, ছবিতে যেমন আছে */}
      <Sidebar />

      {/* মূল কন্টেন্ট এরিয়া */}
      <div className="flex-1 flex flex-col min-h-screen">
        <Topbar />
        <main className="flex-1 p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
