"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function LoadingIntro() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0 });

    const timer = setTimeout(() => {
      setShow(false);
    }, 750);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute h-[520px] w-[520px] rounded-full bg-yellow-400/10 blur-[140px] animate-pulse" />

      <div className="absolute top-1/2 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-[goldLine_120s_ease-in-out]" />

      <div className="relative text-center animate-[cinemaLogo_120s_ease-in-out]">
        <div className="mb-6 text-5xl text-yellow-400 animate-[starPulse_120s_ease-in-out]">
          ✦
        </div>

        <Image
          src="/logo.png"
          alt="YILDIZ VIP LUXURY"
          width={900}
          height={900}
          priority
          className="mx-auto w-[340px] md:w-[460px] lg:w-[540px] h-auto drop-shadow-[0_0_60px_rgba(250,204,21,0.38)]"
        />
      </div>
    </div>
  );
}