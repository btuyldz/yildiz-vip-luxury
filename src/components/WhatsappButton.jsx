"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function WhatsappButton() {
  const { t } = useLanguage();

  const handleWhatsAppClick = (event) => {
    event.preventDefault();

    const whatsappUrl = "https://wa.me/905401550778";

    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function"
    ) {
      let opened = false;

      const openWhatsApp = () => {
        if (opened) return;
        opened = true;
        window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      };

      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/GIvJCMeJitIcEOm1v5pE",
        value: 1,
        currency: "TRY",
        event_callback: openWhatsApp,
      });

      // Google geri dönüş yapmazsa WhatsApp yine açılsın.
      window.setTimeout(openWhatsApp, 800);
    } else {
      window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      <a
        href="tel:+905401550778"
        className="hidden rounded-full border border-yellow-500/30 bg-black/80 px-5 py-3 text-sm font-bold text-yellow-400 backdrop-blur-xl transition hover:bg-yellow-400 hover:text-black md:flex"
      >
        {t.nav.callNow}
      </a>

      <a
        href="https://wa.me/905401550778"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp ile iletişime geç"
        onClick={handleWhatsAppClick}
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