"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CTA() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 p-10 md:p-16 text-center">
        <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
          {t.cta.eyebrow}
        </p>

        <h2 className="mt-5 text-4xl md:text-6xl font-black">
          {t.cta.title}
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-8">
          {t.cta.text}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#reservation" className="btn-primary">
            {t.cta.quote}
          </a>

          <a href="tel:05401550778" className="btn-secondary">
            {t.cta.call}
          </a>
        </div>
      </div>
    </section>
  );
}