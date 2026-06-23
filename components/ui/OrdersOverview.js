import { orders } from "@/lib/data";

export default function OrdersOverview() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <h3 className="text-sm font-semibold">Orders overview</h3>
      <p className="text-xs text-vision-cyan mt-1">+30% this month</p>

      <ul className="mt-4 space-y-4">
        {orders.map((order, i) => (
          <li key={i} className="flex gap-3">
            <span className="w-2 h-2 mt-1.5 rounded-full bg-vision-blue shrink-0" />
            <div>
              <p className="text-sm">{order.title}</p>
              <p className="text-xs text-vision-text-muted">{order.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
