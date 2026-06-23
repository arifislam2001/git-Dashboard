import { Search, Bell, Settings } from "lucide-react";

export default function TopbarRTL() {
  return (
    <header className="flex items-center justify-between px-4 md:px-6 py-4 flex-row-reverse">
      <div className="text-right">
        <p className="text-xs text-vision-text-muted">لوحة التحكم / الصفحات</p>
        <h1 className="text-lg font-semibold">لوحة التحكم</h1>
      </div>

      <div className="flex items-center gap-4 flex-row-reverse">
        <div className="hidden md:flex items-center gap-2 rounded-lg bg-vision-card px-3 py-2 flex-row-reverse">
          <Search size={16} className="text-vision-text-muted" />
          <input
            placeholder="اكتب هنا..."
            dir="rtl"
            className="bg-transparent text-sm outline-none placeholder:text-vision-text-muted text-right"
          />
        </div>
        <Bell size={18} className="text-vision-text-muted cursor-pointer" />
        <Settings size={18} className="text-vision-text-muted cursor-pointer" />
        <div className="w-8 h-8 rounded-full bg-vision-blue" />
      </div>
    </header>
  );
}
