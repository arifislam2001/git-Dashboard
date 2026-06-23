import { FileText } from "lucide-react";
import { invoices } from "@/lib/data";

export default function InvoicesCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Invoices</h3>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-vision-blue hover:bg-vision-blue/80 transition">
          VIEW ALL
        </button>
      </div>

      <ul className="mt-4 space-y-4">
        {invoices.map((inv) => (
          <li key={inv.id} className="flex items-center justify-between">
            <div>
              <p className="text-sm">{inv.date}</p>
              <p className="text-xs text-vision-text-muted">{inv.id}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm">{inv.amount}</span>
              <button className="flex items-center gap-1 text-xs text-vision-text-muted hover:text-white transition">
                <FileText size={14} />
                PDF
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}