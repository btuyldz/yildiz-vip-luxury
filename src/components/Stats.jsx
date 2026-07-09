"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {t.stats.items.map(([number, label]) => (
          <div
            key={label}
            data-aos="fade-up"
            className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 hover:border-yellow-400 transition"
          >
            <div className="text-4xl md:text-5xl font-black text-yellow-400">
              {number}
            </div>

            <div className="mt-3 text-white/60">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}