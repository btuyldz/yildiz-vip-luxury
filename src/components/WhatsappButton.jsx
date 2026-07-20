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
    } else {
      console.warn("Google Ads etiketi henüz yüklenmedi.");
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
    } else {
      console.warn("Google Ads etiketi henüz yüklenmedi.");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:+905401550778"
        onClick={reportPhoneConversion}
        aria-label="Telefonla ara"
      >
        Telefon
      </a>

      <a
        href="https://wa.me/905401550778"
        target="_blank"
        rel="noopener noreferrer"
        onClick={reportWhatsappConversion}
        aria-label="WhatsApp üzerinden iletişime geç"
      >
        WhatsApp
      </a>
    </div>
  );
}