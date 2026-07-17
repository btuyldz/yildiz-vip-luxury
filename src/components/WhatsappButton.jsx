"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsappButton() {
  const { t } = useLanguage();

  const handlePhoneClick = (event) => {
    event.preventDefault();

    const phoneUrl = "tel:+905401550778";
    let redirected = false;

    const openPhone = () => {
      if (redirected) return;
      redirected = true;
      window.location.href = phoneUrl;
    };

    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/VVpGCOv79NEcEOm1v5pE",
        value: 1,
        currency: "TRY",
        event_callback: openPhone,
      });

      // Google yanıt vermezse telefon ekranı yine açılsın.
      window.setTimeout(openPhone, 800);
    } else {
      openPhone();
    }
  };

  const handleWhatsappClick = () => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/GIvJCMeJitIcEOm1v5pE",
        value: 1,
        currency: "TRY",
      });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:+905401550778"
        onClick={handlePhoneClick}
        aria-label="Telefonla ara"
        className="flex rounded-full border border-yellow-500/30 bg-black/80 px-5 py-3 text-sm font-bold text-yellow-400 backdrop-blur-xl transition hover:bg-yellow-400 hover:text-black"
      >
        {t.nav.callNow}
      </a>

      <a
        href="https://wa.me/905401550778"
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleWhatsappClick}
        aria-label="WhatsApp ile iletişime geç"
        className="group flex items-center gap-3 rounded-full bg-green-500 px-5 py-4 text-black shadow-2xl transition hover:scale-105"
      >
        <span className="text-2xl">☎</span>

        <span className="hidden font-black md:block">
          {t.nav.whatsapp}
        </span>
      </a>
    </div>
  );
}