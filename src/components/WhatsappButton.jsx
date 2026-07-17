"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Script from "next/script";

export default function WhatsappButton() {
  const { t } = useLanguage();

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:05401550778"
        className="hidden md:flex rounded-full border border-yellow-500/30 bg-black/80 px-5 py-3 text-sm font-bold text-yellow-400 backdrop-blur-xl hover:bg-yellow-400 hover:text-black transition"
      >
        {t.nav.callNow}
      </a>

      <a
        href="https://wa.me/905401550778"
        target="_blank"
        aria-label="WhatsApp ile iletişime geç"
        className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-black shadow-2xl transition hover:scale-105"
      ><a
  href="https://wa.me/905401550778"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp ile iletişime geç"
  onClick={() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/GIvJCMeJitIcEOm1v5pE",
      });
    }
  }}
  className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-black shadow-2xl transition hover:scale-105"
>
        <span className="text-2xl">☎</span>
        <span className="hidden md:block font-black">
          {t.nav.whatsapp}
        </span>
      </a>
    </div>
  );
}