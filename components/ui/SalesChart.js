"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import { salesData } from "@/lib/data";

export default function SalesChart() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <h3 className="text-sm font-semibold">Sales overview</h3>
      <p className="text-xs text-vision-cyan mt-1">
        (+5%) more <span className="text-vision-text-muted">in 2021</span>
      </p>

      <div className="h-[260px] mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={salesData}>
            <CartesianGrid stroke="#1a2151" vertical={false} />
            <XAxis dataKey="month" stroke="#a0aec0" fontSize={11} tickLine={false} axisLine={false} />
            <YAxis stroke="#a0aec0" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{ background: "#111c44", border: "none", borderRadius: 8 }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0075ff"
              strokeWidth={3}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
