export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center brightness-[0.26] scale-110 animate-[slowZoom_22s_ease-in-out_infinite_alternate]"
        style={{ backgroundImage: "url('/hero.jpg')" }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,0.16),transparent_36%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 text-center">
        <p className="text-yellow-400 tracking-[0.5em] uppercase text-xs md:text-sm animate-[fadeUp_1s_ease-out]">
          Premium Chauffeur Service
        </p>

        <h1 className="mt-8 text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black leading-[0.9] animate-[fadeUp_1.2s_ease-out]">
          YILDIZ
          <span className="block text-yellow-400">
            VIP LUXURY
          </span>
        </h1>

        <div className="mx-auto mt-8 h-px w-72 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

        <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl text-white/75 leading-relaxed animate-[fadeUp_1.4s_ease-out]">
          İstanbul merkezli, Türkiye geneli VIP transfer, havalimanı transferi
          ve özel şoförlü lüks ulaşım hizmeti.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4 animate-[fadeUp_1.6s_ease-out]">
          <a
            href="#reservation"
            className="btn-primary"
          >
            Rezervasyon
          </a>

          <a
            href="https://wa.me/905401550778"
            target="_blank"
            className="btn-secondary"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto animate-[fadeUp_1.8s_ease-out]">
          {[
            ["7/24", "Hizmet"],
            ["Mercedes", "Vito VIP"],
            ["Türkiye", "Geneli"],
          ].map(([top, bottom]) => (
            <div
              key={top}
              className="rounded-2xl border border-yellow-500/20 bg-black/45 p-5 backdrop-blur-xl"
            >
              <p className="text-yellow-400 font-black">
                {top}
              </p>
              <p className="mt-1 text-xs text-white/60">
                {bottom}
              </p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-yellow-400 transition animate-bounce"
      >
        Aşağı Kaydır ↓
      </a>
    </section>
  );
}