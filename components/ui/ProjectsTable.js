import { MoreVertical } from "lucide-react";
import { projects } from "@/lib/data";

export default function ProjectsTable() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold">Projects</h3>
          <p className="text-xs text-vision-cyan mt-1">30 done this month</p>
        </div>
        <MoreVertical size={16} className="text-vision-text-muted" />
      </div>

      <table className="w-full mt-4 text-sm">
        <thead>
          <tr className="text-left text-xs text-vision-text-muted">
            <th className="pb-2">COMPANIES</th>
            <th className="pb-2">BUDGET</th>
            <th className="pb-2">COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.name} className="border-t border-white/5">
              <td className="py-3">{p.name}</td>
              <td className="py-3 text-vision-text-muted">{p.budget}</td>
              <td className="py-3">
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1.5 rounded-full bg-vision-card-light overflow-hidden">
                    <div
                      className="h-full bg-vision-blue"
                      style={{ width: `${p.completion}%` }}
                    />
                  </div>
                  <span className="text-xs text-vision-text-muted">{p.completion}%</span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
