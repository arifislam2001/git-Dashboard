import { MoreVertical } from "lucide-react";

export default function ReferralCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold">Referral Tracking</h3>
        <MoreVertical size={16} className="text-vision-text-muted" />
      </div>

      <div className="flex gap-2 mt-4">
        <div className="flex-1 rounded-lg bg-vision-card-light p-3">
          <p className="text-xs text-vision-text-muted">Invited</p>
          <p className="font-semibold mt-1">145 people</p>
        </div>
        <div className="flex-1 rounded-lg bg-vision-card-light p-3">
          <p className="text-xs text-vision-text-muted">Bonus</p>
          <p className="font-semibold mt-1">1,465</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-4">

        <p className="text-2xl font-bold text-vision-cyan">9.3</p>
        <p className="text-xs text-vision-text-muted">Total Score</p>
      </div>
    </div>
  );
}
