"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-yellow-400 tracking-[0.18em]">
              YILDIZ
            </h2>

            <p className="text-xs tracking-[0.45em] text-white/60 mt-1">
              VIP LUXURY
            </p>

            <p className="mt-6 max-w-md text-white/55 leading-7">
              {t.footer.text}
            </p>
          </div>

          <div>
            <h3 className="font-black text-white mb-5">
              {t.footer.quickMenu}
            </h3>

            <ul className="space-y-3 text-white/55">
              <li><a href="#services" className="hover:text-yellow-400">{t.footer.services}</a></li>
              <li><a href="#fleet" className="hover:text-yellow-400">{t.footer.fleet}</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400">{t.footer.gallery}</a></li>
              <li><a href="#reservation" className="hover:text-yellow-400">{t.footer.reservation}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white mb-5">
              {t.footer.contact}
            </h3>

            <ul className="space-y-3 text-white/55">
              <li>{t.footer.phone}</li>
              <li>{t.footer.email}</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/35 text-sm">
          <p>{t.footer.rights}</p>

          <div className="flex justify-center md:justify-end gap-4">
            <a
              href="https://wa.me/905401550778"
              target="_blank"
              className="hover:text-yellow-400 transition"
            >
              WhatsApp
            </a>

            <a
              href="mailto:yildizvipluxury@gmail.com"
              className="hover:text-yellow-400 transition"
            >
              Mail
            </a>

            <a href="#" className="hover:text-yellow-400 transition">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}