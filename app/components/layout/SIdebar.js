"use client";
 
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBase } from "react-icons";
import { BiCreditCard, BiLogIn, BiUserPlus } from "react-icons/bi";
import { BsGlobe2 } from "react-icons/bs";
import { ImTable2 } from "react-icons/im";

import { LuLayoutDashboard } from "react-icons/lu";

 
const mainMenu = [
  { label: "Dashboard", icon: LuLayoutDashboard, href: "/dashboard" },
  { label: "Tables", icon: ImTable2, href: "/tables" },
  { label: "Billing", icon: BiCreditCard, href: "/billing" },
  { label: "RTL", icon: BsGlobe2, href: "/rtl" },
];
 
const accountMenu = [
  { label: "Profile", icon: UserActivation, href: "/profile" },
  { label: "Sign In", icon: BiLogIn, href: "/signin" },
  { label: "Sign Up", icon: BiUserPlus, href: "/signup" },
];
 
export default function Sidebar() {
  const pathname = usePathname();
 
  return (
    <aside className="hidden md:flex md:flex-col w-64 shrink-0 bg-vision-card/60 border-r border-white/5 p-4">
      <div className="px-2 py-4 text-lg font-bold tracking-wide">
        VISION UI <span className="text-vision-blue">FREE</span>
      </div>
 
      <nav className="flex-1 mt-4 space-y-1">
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
  );
}
 
function SidebarLink({ item, active }) {
  const Icon = item.icon;
  return (
    <Link
      href={item.href}
      className={(
        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition",
        active
          ? "bg-vision-blue text-white"
          : "text-vision-text-muted hover:bg-white/5 hover:text-white"
      )}
    >
      <IconBase size={18} />
      {item.label}
    </Link>
  );
}