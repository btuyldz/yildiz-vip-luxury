"use client";

import { Clock, Plane, CarFront, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [Clock, Plane, CarFront, MapPin];

export default function TrustBar() {
  const { t } = useLanguage();

  return (
    <section className="border-y border-yellow-500/20 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
        {t.trustBar.items.map((text, index) => {
          const Icon = icons[index];

          return (
            <div
              key={text}
              className="flex items-center justify-center gap-3 text-white/70"
            >
              <Icon size={22} className="text-yellow-400" />

              <span className="text-sm md:text-base font-semibold">
                {text}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}