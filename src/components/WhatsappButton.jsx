"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsappButton() {
  const { t } = useLanguage();

  const reportPhoneConversion = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/VVpGCOv79NEcEOm1v5pE",
        value: 1.0,
        currency: "TRY",
      });

      console.log("Telefon dönüşümü Google Ads'e gönderildi.");
    }
  };

  const reportWhatsappConversion = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/GIvJCMeJitIcEOm1v5pE",
        value: 1.0,
        currency: "TRY",
      });

      console.log("WhatsApp dönüşümü Google Ads'e gönderildi.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:+905401550778"
        onClick={reportPhoneConversion}
        aria-label="Telefonla ara"
        className="flex min-w-[140px] items-center justify-center rounded-full border border-yellow-500/70 bg-black/90 px-6 py-3 text-sm font-bold text-yellow-400 shadow-lg backdrop-blur-md transition hover:bg-yellow-400 hover:text-black"
      >
        Telefon
      </a>

      <a
        href="https://wa.me/905401550778"
        target="_blank"
        rel="noopener noreferrer"
        onClick={reportWhatsappConversion}
        aria-label="WhatsApp üzerinden iletişime geç"
        className="flex min-w-[140px] items-center justify-center rounded-full bg-yellow-400 px-6 py-3 text-sm font-bold text-black shadow-lg transition hover:bg-yellow-300"
      >
        WhatsApp
      </a>
    </div>
  );
}