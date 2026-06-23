"use client";

import { useState, useEffect } from "react";
import { Wallet, Globe2, Users, ShoppingCart } from "lucide-react";

const iconMap = {
  wallet: Wallet,
  globe: Globe2,
  users: Users,
  cart: ShoppingCart,
};

function parseValue(value) {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: "", raw: value };
  const [, prefix, numberStr, suffix] = match;
  return { prefix, number: parseInt(numberStr.replace(/,/g, ""), 10), suffix };
}

function formatNumber(num) {
  return num.toLocaleString("en-US");
}

export default function StatCard({ title, value, change, positive, icon }) {
  const { prefix, number, suffix } = parseValue(value);
  const [displayNumber, setDisplayNumber] = useState(0);
  const Icon = iconMap[icon] || Wallet;

  useEffect(() => {
    const duration = 1000;
    const steps = 60;
    const stepTime = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setDisplayNumber(Math.min(Math.round(number * progress), number));

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <div className="flex items-center justify-between rounded-vision-lg bg-vision-card p-4">
      <div>
        <p className="text-xs text-vision-text-muted">{title}</p>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-lg font-semibold">
            {prefix}
            {formatNumber(displayNumber)}
            {suffix}
          </span>
          <span className={positive ? "text-vision-cyan text-xs" : "text-red-400 text-xs"}>
            {change}
          </span>
        </div>
      </div>
      <div className="w-10 h-10 rounded-lg bg-vision-blue flex items-center justify-center">
        <Icon size={18} />
      </div>
    </div>
  );
}