"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Table2,
  CreditCard,
  Globe2,
  User,
  LogIn,
  UserPlus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainMenu = [
  { label: "لوحة التحكم", icon: LayoutDashboard, href: "/dashboard" },
  { label: "الجدول", icon: Table2, href: "/tables" },
  { label: "الفواتير", icon: CreditCard, href: "/billing" },
  { label: "RTL", icon: Globe2, href: "/rtl" },
];

const accountMenu = [
  { label: "الملف الشخصي", icon: User, href: "/profile" },
  { label: "تسجيل الدخول", icon: LogIn, href: "/signin" },
  { label: "اشتراك", icon: UserPlus, href: "/signup" },
];

export default function SidebarRTL() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-vision-card/60 border-l border-white/5 p-4">
      <div className="px-2 py-4 text-lg font-bold tracking-wide text-right">
        <span className="text-vision-blue">مجاني</span> فيجن UI
      </div>

      <nav className="flex-1 mt-4 space-y-1">
        {mainMenu.map((item) => (
          <SidebarLinkRTL key={item.href} item={item} active={pathname === item.href} />
        ))}

        <p className="px-3 pt-6 pb-2 text-xs uppercase text-vision-text-muted text-right">
          صفحات الحساب
        </p>

        {accountMenu.map((item) => (
          <SidebarLinkRTL key={item.href} item={item} active={pathname === item.href} />
        ))}
      </nav>

      <div className="mt-auto rounded-vision-lg bg-gradient-to-bl from-vision-blue to-purple-600 p-4 text-right">
        <p className="text-sm font-semibold">تحتاج مساعدة؟</p>
        <p className="text-xs text-white/80 mt-1">يرجى مراجعة وثائقنا</p>
        <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-medium hover:bg-white/20 transition">
          الوثائق
        </button>
      </div>
    </aside>
  );
}

function SidebarLinkRTL({ item, active }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center justify-end gap-3 rounded-lg px-3 py-2.5 text-sm transition flex-row-reverse",
        active
          ? "bg-vision-blue text-white"
          : "text-vision-text-muted hover:bg-white/5 hover:text-white"
      )}
    >
      <Icon size={18} />
      {item.label}
    </Link>
  );
}
