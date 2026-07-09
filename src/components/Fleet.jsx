"use client";

import { Check, CarFront, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Fleet() {
  const { t } = useLanguage();

  return (
    <section id="fleet" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
              {t.fleet.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl md:text-7xl font-black leading-[0.92]">
              {t.fleet.title1}
              <span className="block text-yellow-400">{t.fleet.title2}</span>
            </h2>

            <p className="mt-7 text-white/60 text-lg leading-8 max-w-xl">
              {t.fleet.text}
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
              {t.fleet.features.map((item, index) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-zinc-950 p-5 hover:border-yellow-400 transition"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black">
                    <Check size={18} />
                  </div>

                  <span className="text-white/75">{item}</span>
                </div>
              ))}
            </div>

            <a href="#reservation" className="mt-10 btn-primary">
              {t.fleet.button}
            </a>
          </div>

          <div
            data-aos="fade-left"
            className="relative h-[620px] rounded-[3rem] overflow-hidden border border-yellow-500/20 bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: "url('/fleet-main.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute top-6 left-6 flex gap-3">
              {t.fleet.badges.map((badge) => (
                <div
                  key={badge}
                  className="rounded-full border border-yellow-500/20 bg-black/60 backdrop-blur-xl px-5 py-3 text-yellow-400 text-sm font-bold"
                >
                  {badge}
                </div>
              ))}
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-yellow-500/20 bg-black/70 backdrop-blur-xl p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <CarFront size={30} />
                </div>

                <div>
                  <p className="text-yellow-400 font-black">
                    {t.fleet.cardTitle}
                  </p>
                  <p className="mt-1 text-white/55 text-sm">
                    {t.fleet.cardText}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-white/60 text-sm">
                <Sparkles size={18} className="text-yellow-400" />
                {t.fleet.cardNote}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}