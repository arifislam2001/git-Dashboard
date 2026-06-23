import Link from "next/link";
import { Facebook, Apple, Chrome } from "lucide-react";

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-vision-bg">
      {/* বাম পাশ — হিরো ইমেজ/গ্রেডিয়েন্ট */}
      <div className="relative w-full lg:w-1/2 min-h-[300px] lg:min-h-screen overflow-hidden">
        {/* TODO: আসল ছবি বসাতে চাইলে এই div এর বদলে <img src="..." className="w-full h-full object-cover" /> দিন */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-700 via-vision-blue to-vision-bg" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <p className="text-xs uppercase tracking-widest text-white/70">
            Inspired by the future:
          </p>
          <h1 className="text-3xl font-bold mt-2">THE VISION UI DASHBOARD</h1>
        </div>
      </div>

      {/* ডান পাশ — ফর্ম */}
      <div className="w-full lg:w-1/2 flex flex-col">
        {/* টপ নেভ */}
        <div className="flex items-center justify-between px-6 py-4">
          <p className="text-sm font-bold tracking-wide">
            VISION UI <span className="text-vision-blue">FREE</span>
          </p>
          <div className="hidden md:flex items-center gap-6 text-xs text-vision-text-muted">
            <Link href="/dashboard" className="hover:text-white transition">
              DASHBOARD
            </Link>
            <Link href="/profile" className="hover:text-white transition">
              PROFILE
            </Link>
            <Link href="/signup" className="hover:text-white transition">
              SIGN UP
            </Link>
            <Link href="/signin" className="hover:text-white transition">
              SIGN IN
            </Link>
          </div>
          <button className="text-xs px-4 py-2 rounded-full bg-vision-blue">
            Free Download
          </button>
        </div>

        {/* ফর্ম এরিয়া */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <div className="w-full max-w-sm">
            <h2 className="text-2xl font-bold text-center">Welcome!</h2>
            <p className="text-sm text-vision-text-muted mt-1 text-center">
              Use these awesome forms to login or create new account in your project for free.
            </p>

            <div className="rounded-vision-lg bg-vision-card p-6 mt-6">
              <p className="text-sm text-center font-medium">Register with</p>

              <div className="flex items-center justify-center gap-3 mt-3">
                <button className="w-10 h-10 rounded-full bg-vision-card-light flex items-center justify-center hover:bg-white/10 transition">
                  <Facebook size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-vision-card-light flex items-center justify-center hover:bg-white/10 transition">
                  <Apple size={16} />
                </button>
                <button className="w-10 h-10 rounded-full bg-vision-card-light flex items-center justify-center hover:bg-white/10 transition">
                  <Chrome size={16} />
                </button>
              </div>

              <div className="flex items-center gap-2 my-4">
                <div className="flex-1 h-px bg-white/10" />
                <span className="text-xs text-vision-text-muted">or</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              <form className="space-y-4">
                <div>
                  <label className="text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    className="w-full mt-1 rounded-lg bg-vision-card-light border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-vision-blue placeholder:text-vision-text-muted"
                  />
                </div>

                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full mt-1 rounded-lg bg-vision-card-light border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-vision-blue placeholder:text-vision-text-muted"
                  />
                </div>

                <div>
                  <label className="text-sm">Password</label>
                  <input
                    type="password"
                    placeholder="Your password"
                    className="w-full mt-1 rounded-lg bg-vision-card-light border border-white/10 px-4 py-2.5 text-sm outline-none focus:border-vision-blue placeholder:text-vision-text-muted"
                  />
                </div>

                <label className="flex items-center gap-2 text-sm cursor-pointer">
                  <input type="checkbox" defaultChecked className="accent-vision-blue w-4 h-4" />
                  Remember me
                </label>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-vision-blue py-2.5 text-sm font-semibold hover:bg-vision-blue/80 transition"
                >
                  SIGN UP
                </button>

                <p className="text-sm text-center text-vision-text-muted">
                  Already have an account?{" "}
                  <Link href="/signin" className="text-white font-medium hover:underline">
                    Sign in
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* ফুটার */}
        <div className="text-center text-xs text-vision-text-muted py-4">
          <p>@ 2021, Made with ❤️ by Simmmple &amp; Creative Tim for a better web</p>
          <div className="flex items-center justify-center gap-4 mt-1">
            <Link href="#" className="hover:text-white transition">Marketplace</Link>
            <Link href="#" className="hover:text-white transition">Blog</Link>
            <Link href="#" className="hover:text-white transition">License</Link>
          </div>
        </div>
      </div>
    </div>
  );
}