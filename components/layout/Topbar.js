import { Search, Bell, Settings } from "lucide-react";

export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 pl-16 md:pl-6">
      <div>
        <p className="text-xs text-vision-text-muted">Pages / Dashboard</p>
        <h1 className="text-lg font-semibold">Dashboard</h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden md:flex items-center gap-2 rounded-lg bg-vision-card px-3 py-2">
          <Search size={16} className="text-vision-text-muted" />
          <input
            placeholder="Type here..."
            className="bg-transparent text-sm outline-none placeholder:text-vision-text-muted"
          />
        </div>
        <Bell size={18} className="text-vision-text-muted cursor-pointer" />
        <Settings size={18} className="text-vision-text-muted cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-vision-blue" />
      </div>
    </header>
  );
}