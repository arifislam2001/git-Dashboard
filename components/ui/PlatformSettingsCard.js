"use client";

import { useState } from "react";
import { platformSettings } from "@/lib/data";

function Toggle({ defaultEnabled }) {
  const [enabled, setEnabled] = useState(defaultEnabled);
  return (
    <button
      onClick={() => setEnabled(!enabled)}
      className={`w-10 h-5 rounded-full relative transition ${
        enabled ? "bg-vision-blue" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white transition-transform ${
          enabled ? "translate-x-5" : ""
        }`}
      />
    </button>
  );
}

export default function PlatformSettingsCard() {
  return (
    <div className="rounded-vision-lg bg-vision-card p-4">
      <h3 className="text-sm font-semibold">Platform Settings</h3>

      <p className="text-xs text-vision-text-muted uppercase mt-4 mb-2">Account</p>
      <div className="space-y-3">
        {platformSettings?.account?.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="text-sm">{item.label}</p>
            <Toggle defaultEnabled={item.enabled} />
          </div>
        ))}
      </div>

      <p className="text-xs text-vision-text-muted uppercase mt-5 mb-2">Application</p>
      <div className="space-y-3">
        {platformSettings.application.map((item, i) => (
          <div key={i} className="flex items-center justify-between">
            <p className="text-sm">{item.label}</p>
            <Toggle defaultEnabled={item.enabled} />
          </div>
        ))}
      </div>
    </div>
  );
}
