import { Pencil } from "lucide-react";
import { paymentMethods } from "@/lib/data";

function CardLogo({ type }) {
  if (type === "visa") {
    return <span className="text-sm font-bold italic text-vision-blue">VISA</span>;
  }
  return (
    <div className="flex">
      <div className="w-5 h-5 rounded-full bg-red-500" />
      <div className="w-5 h-5 rounded-full bg-yellow-400 -ml-2" />
    </div>
  );
}

export default function PaymentMethodCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Payment Method</h3>
        <button className="text-xs px-3 py-1.5 rounded-lg bg-vision-blue hover:bg-vision-blue/80 transition">
          ADD A NEW CARD
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
        {paymentMethods?.map((method, i) => (
          <div
            key={i}
            className="flex items-center justify-between rounded-lg bg-vision-card-light px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <CardLogo type={method.type} />
              <span className="text-sm">{method.number}</span>
            </div>
            <Pencil size={14} className="text-vision-text-muted cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
}