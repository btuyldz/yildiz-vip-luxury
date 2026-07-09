"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const links = [
  ["Hizmetler", "#services"],
  ["Araç", "#fleet"],
  ["Galeri", "#gallery"],
  ["Rezervasyon", "#reservation"],
  ["İletişim", "#contact"],
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
useEffect(() => {
  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }

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
            <a key={label} href={href} className="hover:text-yellow-400 transition">
              {label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex gap-3">
          <a
            href="tel:05401550778"
            className="rounded-full border border-yellow-500/30 px-6 py-3 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            Ara
          </a>

          <a
            href="https://wa.me/905401550778"
            target="_blank"
            className="rounded-full bg-yellow-400 px-6 py-3 font-black text-black hover:bg-yellow-300 transition"
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-yellow-500/30 px-5 py-3 text-yellow-400"
        >
          {open ? "Kapat" : "Menü"}
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

            <a
              href="tel:05401550778"
              className="mt-3 rounded-full border border-yellow-500/30 px-6 py-4 text-center text-yellow-400"
            >
              Hemen Ara
            </a>

            <a
              href="https://wa.me/905401550778"
              target="_blank"
              className="rounded-full bg-yellow-400 px-6 py-4 text-center text-black"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}