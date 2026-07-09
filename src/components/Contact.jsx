"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            {t.contact.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            {t.contact.title1}
            <span className="block text-yellow-400">
              {t.contact.title2}
            </span>
          </h2>

          <p className="mt-7 text-white/60 text-lg leading-8">
            {t.contact.text}
          </p>

          <div className="mt-10 grid gap-4">
            {t.contact.info.map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-yellow-500/20 bg-black p-5"
              >
                <p className="text-sm text-yellow-400">{label}</p>
                <p className="mt-1 text-white/75">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="overflow-hidden rounded-[2.5rem] border border-yellow-500/20 bg-black p-3"
        >
          <iframe
            src="https://www.google.com/maps?q=Istanbul%20Turkey&output=embed"
            width="100%"
            height="430"
            loading="lazy"
            className="rounded-[2rem]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}