import { Compass, Users, Briefcase, Pencil } from "lucide-react";

export default function ProfileHeader() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 flex items-center justify-between flex-wrap gap-4">
      <div className="flex items-center gap-4">

        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-vision-blue to-purple-600 flex items-center justify-center text-xl font-bold">
          MJ
          <button className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-vision-blue flex items-center justify-center">
            <Pencil size={12} />
          </button>
        </div>
        <div>
          <h2 className="font-semibold">Mark Johnson</h2>
          <p className="text-xs text-vision-text-muted">mark@simmmple.com</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg bg-vision-blue">
          <Compass size={14} />
          OVERVIEW
        </button>
        <button className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg text-vision-text-muted hover:bg-white/5 transition">
          <Users size={14} />
          TEAMS
        </button>
        <button className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg text-vision-text-muted hover:bg-white/5 transition">
          <Briefcase size={14} />
          PROJECTS
        </button>
      </div>
    </div>
  );
}
