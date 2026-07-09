export default function CTA() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto rounded-[2rem] border border-yellow-500/20 bg-gradient-to-r from-zinc-950 via-black to-zinc-950 p-10 md:p-16 text-center">
        <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
          YILDIZ VIP LUXURY
        </p>

        <h2 className="mt-5 text-4xl md:text-6xl font-black">
          Premium Yolculuk İçin Hazır mısınız?
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-white/60 leading-8">
          İstanbul ve Türkiye geneli VIP transfer talepleriniz için hemen bize ulaşın.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#reservation"
            className="rounded-full bg-yellow-400 px-9 py-4 text-black font-black hover:bg-yellow-300 transition"
          >
            Teklif Al
          </a>

          <a
            href="tel:05401550778"
            className="rounded-full border border-yellow-500/30 px-9 py-4 font-bold text-yellow-400 hover:bg-yellow-400 hover:text-black transition"
          >
            Hemen Ara
          </a>
        </div>
      </div>
    </section>
  );
}