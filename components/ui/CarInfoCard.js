import { Car, Zap } from "lucide-react";
import CircularProgress from "@/components/ui/CircularProgress";

export default function CarInfoCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full">
      <h3 className="text-sm font-semibold">Car Informations</h3>
      <p className="text-xs text-vision-text-muted mt-1">
        Hello, Mark Johnson! Your car is ready.
      </p>

      <div className="flex items-center gap-4 mt-4">
        <div className="relative shrink-0">
          <CircularProgress percentage={68} label="" color="#01b574" size={100} />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
           
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="rounded-lg bg-vision-card-light p-3">
            <p className="text-xs text-vision-text-muted">Battery Health</p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-semibold">76%</span>
              <Car size={16} className="text-vision-blue" />
            </div>
          </div>
          <div className="rounded-lg bg-vision-card-light p-3">
            <p className="text-xs text-vision-text-muted">Efficiency</p>
            <span className="font-semibold text-vision-cyan">+20%</span>
          </div>
          <div className="rounded-lg bg-vision-card-light p-3">
            <p className="text-xs text-vision-text-muted">Consumption</p>
            <div className="flex items-center justify-between mt-1">
              <span className="font-semibold">163W/km</span>
              <Zap size={16} className="text-vision-blue" />
            </div>
          </div>
          <div className="rounded-lg bg-vision-card-light p-3">
            <p className="text-xs text-vision-text-muted">This Week</p>
            <span className="font-semibold">1.342km</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-vision-text-muted mt-3">0h 58min — Time to full charge</p>
    </div>
  );
}
