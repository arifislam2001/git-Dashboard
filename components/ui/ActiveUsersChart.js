"use client";

import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { activeUsersData, activeUsersStats } from "@/lib/data";

export default function ActiveUsersChart() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full flex flex-col">
      <div className="h-[160px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={activeUsersData}>
            <Bar dataKey="value" fill="#ffffff" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h3 className="text-sm font-semibold mt-2">Active Users</h3>
      <p className="text-xs text-vision-cyan">
        (+23) <span className="text-vision-text-muted">than last week</span>
      </p>

      <div className="grid grid-cols-4 gap-2 mt-4">
        {activeUsersStats.map((stat) => (
          <div key={stat.label}>
            <p className="text-xs text-vision-text-muted">{stat.label}</p>
            <p className="text-sm font-semibold">{stat.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}