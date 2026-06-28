"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Table2,
  CreditCard,
  Globe2,
  User,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";

const mainMenu = [
  { label: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Tables", icon: Table2, href: "/tables" },
  { label: "Billing", icon: CreditCard, href: "/billing" },
  { label: "RTL", icon: Globe2, href: "/rtl" },
];

const accountMenu = [
  { label: "Profile", icon: User, href: "/profile" },
  { label: "Sign In", icon: LogIn, href: "/signin" },
  { label: "Sign Up", icon: UserPlus, href: "/signup" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <button
        onClick={() => setMobileOpen(true)}
        aria-label="Open menu"
        className="md:hidden fixed top-4 left-4 z-50 flex items-center justify-center w-10 h-10 rounded-lg bg-vision-card border border-white/10 text-white"
      >
        <Menu size={20} />
      </button>

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="md:hidden fixed inset-0 z-40 bg-black/60"
        />
      )}

      <aside
        className={cn(
          "fixed md:static top-0 left-0 z-50 flex flex-col w-64 h-screen shrink-0 bg-vision-card/95 md:bg-vision-card/60 border-r border-white/5 p-4 transition-transform duration-300",
          "md:translate-x-0 md:flex",
          mobileOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        )}
      >
        <div className="flex items-center justify-between px-2 py-4">
          <span className="text-lg font-bold tracking-wide">
            VISION UI <span className="text-vision-blue">FREE</span>
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="md:hidden flex items-center justify-center w-8 h-8"
          >
            <X size={20} />
          </button>
        </div>

        <nav className="flex-1 mt-4 space-y-1 overflow-y-auto">
          {mainMenu.map((item) => (
            <SidebarLink key={item.href} item={item} active={pathname === item.href} />
          ))}

          <p className="px-3 pt-6 pb-2 text-xs uppercase text-vision-text-muted">
            Account Pages
          </p>

          {accountMenu.map((item) => (
            <SidebarLink key={item.href} item={item} active={pathname === item.href} />
          ))}
        </nav>

        <div className="mt-auto rounded-vision-lg bg-gradient-to-br from-vision-blue to-purple-600 p-4">
          <p className="text-sm font-semibold">Need help?</p>
          <p className="text-xs text-white/80 mt-1">Please check our docs</p>
          <button className="mt-3 w-full rounded-lg bg-white/10 py-2 text-xs font-medium hover:bg-white/20 transition">
            DOCUMENTATION
          </button>
        </div>
      </aside>
    </>
  );
}

function SidebarLink({ item, active }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
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