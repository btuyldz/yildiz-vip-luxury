"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const images = [
  "gallery-1.jpg",
  "gallery-2.jpg",
  "gallery-3.jpg",
  "gallery-4.jpg",
  "gallery-5.jpg",
  "gallery-6.jpg",
  "gallery-7.jpg",
  "gallery-8.jpg"
];

export default function Gallery() {
  const { t } = useLanguage();
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section id="gallery" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs md:text-sm">
            {t.gallery.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            {t.gallery.title}
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/55">
            {t.gallery.text}
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-5">
          {images.map((img, i) => (
            <button
              key={img}
              onClick={() => setActiveImage(img)}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className={`group relative overflow-hidden rounded-[2rem] border border-yellow-500/20 bg-zinc-950 ${
                i === 0 || i === 5 ? "md:col-span-2 md:h-[460px]" : "md:h-[300px]"
              } h-[300px]`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('/${img}')` }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 text-left">
                <p className="text-yellow-400 font-black">
                  {t.gallery.cardTitle}
                </p>
                <p className="mt-1 text-sm text-white/60">
                  {t.gallery.cardText}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {activeImage && (
        <div
          onClick={() => setActiveImage(null)}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
        >
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white text-4xl z-10"
          >
            ×
          </button>

          <img
            src={`/${activeImage}`}
            alt="YILDIZ VIP LUXURY"
            className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-yellow-500/30"
          />
        </div>
      )}
    </section>
  );
}