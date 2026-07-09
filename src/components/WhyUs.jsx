"use client";

import {
  ShieldCheck,
  Clock,
  Crown,
  MapPin,
  UserCheck,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const icons = [ShieldCheck, Crown, Clock, MapPin, UserCheck, Sparkles];

export default function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="py-28 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs">
            {t.whyUs.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            {t.whyUs.title}
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/55 leading-8">
            {t.whyUs.text}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-16">
          {t.whyUs.items.map(([title, text], index) => {
            const Icon = icons[index];

            return (
              <div
                key={title}
                data-aos="fade-up"
                data-aos-delay={index * 90}
                className="group rounded-[2rem] border border-yellow-500/20 bg-black p-9 hover:border-yellow-400 hover:-translate-y-2 transition duration-500"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <Icon size={28} strokeWidth={2.2} />
                </div>

                <h3 className="mt-8 text-2xl font-black">{title}</h3>

                <p className="mt-5 leading-8 text-white/60">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}