"use client";

import { useState, useEffect } from "react";

export default function CircularProgress({
  percentage,
  label,
  color = "#0075ff",
  size = 120,
}) {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const duration = 1000; // মিলিসেকেন্ডে, কতক্ষণ ধরে count-up চলবে — চাইলে বদলান
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setAnimatedValue(Math.min(Math.round(percentage * progress), percentage));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [percentage]);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (animatedValue / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#1a2151"
            strokeWidth={10}
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={color}
            strokeWidth={10}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            style={{ transition: "stroke-dashoffset 0.05s linear" }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xl font-bold">{animatedValue}%</span>
        </div>
      </div>
      {label && <p className="text-xs text-vision-text-muted mt-2">{label}</p>}
    </div>
  );
}