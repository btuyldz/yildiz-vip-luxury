"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const reportPhoneConversion = () => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-18309176041/VVpGCOv79NEcEOm1v5pE",
        value: 1.0,
        currency: "TRY",
      });

      console.log("Navbar telefon dönüşümü Google Ads'e gönderildi.");
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

      console.log("Navbar WhatsApp dönüşümü Google Ads'e gönderildi.");
    } else {
      console.warn("Google Ads etiketi henüz yüklenmedi.");
    }
  };

  const links = [
    [t.nav.services, "#services"],
    [t.nav.fleet, "#fleet"],
    [t.nav.gallery, "#gallery"],
    [t.nav.reservation, "#reservation"],
    [t.nav.contact, "#contact"],
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-2xl border-b border-yellow-500/20"
          : "bg-transparent"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between transition-all duration-500 ${
          scrolled ? "h-16" : "h-24"
        }`}
      >
        <a href="#" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt="YILDIZ VIP LUXURY"
            width={180}
            height={70}
            priority
            className={`w-auto transition-all duration-500 ${
              scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
            }`}
          />
        </a>

        <nav className="hidden lg:flex gap-10 text-sm uppercase tracking-[0.25em] text-white/70">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-yellow-400 transition"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <button
            onClick={() => setLang(lang === "tr" ? "en" : "tr")}
            className="rounded-full border border-yellow-500/30 px-5 py-3 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            {lang === "tr" ? "EN" : "TR"}
          </button>

          <a
            href="tel:+905401550778"
            onClick={reportPhoneConversion}
            className="rounded-full border border-yellow-500/30 px-6 py-3 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            {t.nav.call}
          </a>

          <a
            href="https://wa.me/905401550778"
            target="_blank"
            rel="noopener noreferrer"
            onClick={reportWhatsappConversion}
            className="rounded-full bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300 transition"
          >
            {t.nav.whatsapp}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-yellow-500/30 px-5 py-3 text-yellow-400"
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-yellow-500/20 bg-black/95 px-6 py-6">
          <div className="flex flex-col gap-5 text-sm font-bold uppercase tracking-widest text-white/75">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="hover:text-yellow-400 transition"
              >
                {label}
              </a>
            ))}

            <button
              onClick={() => {
                setLang(lang === "tr" ? "en" : "tr");
                setOpen(false);
              }}
              className="rounded-full border border-yellow-500/30 px-6 py-4 text-center text-yellow-400"
            >
              {lang === "tr" ? "English" : "Türkçe"}
            </button>

            <a
              href="tel:+905401550778"
              onClick={() => {
                reportPhoneConversion();
                setOpen(false);
              }}
              className="rounded-full border border-yellow-500/30 px-6 py-4 text-center text-yellow-400"
            >
              {t.nav.callNow}
            </a>

            <a
              href="https://wa.me/905401550778"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                reportWhatsappConversion();
                setOpen(false);
              }}
              className="rounded-full bg-yellow-400 px-6 py-4 text-center text-black"
            >
              {t.nav.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}