import { Calendar, ArrowDown, ArrowUp, Clock } from "lucide-react";
import { transactions } from "@/lib/data";

function TransactionIcon({ type }) {
  if (type === "income") {
    return (
      <div className="w-7 h-7 rounded-full bg-vision-cyan/20 flex items-center justify-center">
        <ArrowUp size={14} className="text-vision-cyan" />
      </div>
    );
  }
  if (type === "pending") {
    return (
      <div className="w-7 h-7 rounded-full bg-yellow-500/20 flex items-center justify-center">
        <Clock size={14} className="text-yellow-400" />
      </div>
    );
  }
  return (
    <div className="w-7 h-7 rounded-full bg-red-500/20 flex items-center justify-center">
      <ArrowDown size={14} className="text-red-400" />
    </div>
  );
}

function amountColor(type) {
  if (type === "income") return "text-vision-cyan";
  if (type === "pending") return "text-yellow-400";
  return "text-red-400";
}

export default function TransactionsCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Your Transactions</h3>
        <div className="flex items-center gap-1 text-xs text-vision-text-muted">
          <Calendar size={14} />
          23 - 30 March 2020
        </div>
      </div>

      <div className="mt-4 space-y-5">
        {transactions.map((group) => (
          <div key={group.group}>
            <p className="text-xs text-vision-text-muted mb-2">{group.group}</p>
            <div className="space-y-3">
              {group.items.map((item) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <TransactionIcon type={item.type} />
                    <div>
                      <p className="text-sm">{item.name}</p>
                      <p className="text-xs text-vision-text-muted">{item.time}</p>
                    </div>
                  </div>
                  <span className={`text-sm ${amountColor(item.type)}`}>{item.amount}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}