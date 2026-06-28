"use client";

import { useState, useEffect } from "react";
import { FileText, MoreHorizontal } from "lucide-react";

export default function CreditBalanceCard() {
  const target = 25215; 
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setDisplayValue(Math.min(Math.round(target * progress), target));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="rounded-vision-lg bg-vision-card p-4 h-full flex flex-col justify-between min-h-[180px]">
      <div className="flex items-center justify-between">
        <p className="text-xs text-vision-text-muted">Credit Balance</p>
        <MoreHorizontal size={16} className="text-vision-text-muted" />
      </div>

      <p className="text-2xl font-bold">${displayValue.toLocaleString("en-US")}</p>

      <svg viewBox="0 0 200 40" className="w-full h-10 text-vision-blue">
        <path
          d="M0 30 Q 25 10, 50 25 T 100 20 T 150 28 T 200 15"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>

      <div>
        <p className="text-xs text-vision-text-muted">NEWEST</p>
        <div className="flex items-center justify-between mt-1">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-vision-cyan/20 flex items-center justify-center">
              <FileText size={14} className="text-vision-cyan" />
            </div>
            <div>
              <p className="text-sm">Bill &amp; Taxes</p>
              <p className="text-xs text-vision-text-muted">Today, 16:36</p>
            </div>
          </div>
          <span className="text-sm text-red-400">-$154.50</span>
        </div>
      </div>
    </div>
  );
}