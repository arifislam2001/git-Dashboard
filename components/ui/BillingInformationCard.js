import { Trash2, Pencil } from "lucide-react";
import { billingInfo } from "@/lib/data";

export default function BillingInformationCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4">
      <h3 className="text-sm font-semibold">Billing Information</h3>

      <div className="space-y-3 mt-4">
        {billingInfo.map((info, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg bg-vision-card-light px-4 py-3"
          >
            <div>
              <p className="text-sm font-medium">{info.name}</p>
              <p className="text-xs text-vision-text-muted">Company Name: {info.company}</p>
              <p className="text-xs text-vision-text-muted">Email Address: {info.email}</p>
              <p className="text-xs text-vision-text-muted">VAT Number: {info.vat}</p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <button className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 transition">
                <Trash2 size={14} />
                DELETE
              </button>
              <button className="flex items-center gap-1 text-xs text-vision-text-muted hover:text-white transition">
                <Pencil size={14} />
                EDIT
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}