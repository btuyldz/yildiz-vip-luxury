import { Check, CarFront, Sparkles } from "lucide-react";

const features = [
  "VIP İç Tasarım",
  "Deri Koltuklar",
  "Ambiyans Aydınlatma",
  "TV Sistemi",
  "Geniş Bagaj",
  "Profesyonel Şoför",
];

export default function Fleet() {
  return (
    <section id="fleet" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
              Araç Filomuz
            </p>

            <h2 className="mt-5 text-4xl md:text-7xl font-black leading-[0.92]">
              Mercedes-Benz
              <span className="block text-yellow-400">
                Vito VIP
              </span>
            </h2>

            <p className="mt-7 text-white/60 text-lg leading-8 max-w-xl">
              YILDIZ VIP LUXURY ile her yolculuk, konfor ve prestijin birleştiği
              özel bir deneyime dönüşür.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-4 max-w-xl">
              {features.map((item, index) => (
                <div
                  key={item}
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                  className="flex items-center gap-3 rounded-2xl border border-yellow-500/20 bg-zinc-950 p-5 hover:border-yellow-400 transition"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-yellow-400 text-black">
                    <Check size={18} />
                  </div>
                  <span className="text-white/75">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#reservation"
              className="mt-10 inline-flex rounded-full bg-yellow-400 px-9 py-4 text-black font-black hover:bg-yellow-300 transition"
            >
              Teklif Al
            </a>
          </div>

          <div
            data-aos="fade-left"
            className="relative h-[620px] rounded-[3rem] overflow-hidden border border-yellow-500/20 bg-cover bg-center shadow-2xl"
            style={{ backgroundImage: "url('/fleet-main.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />

            <div className="absolute top-6 left-6 flex gap-3">
              <div className="rounded-full border border-yellow-500/20 bg-black/60 backdrop-blur-xl px-5 py-3 text-yellow-400 text-sm font-bold">
                Mercedes-Benz
              </div>
              <div className="rounded-full border border-yellow-500/20 bg-black/60 backdrop-blur-xl px-5 py-3 text-yellow-400 text-sm font-bold">
                VIP Experience
              </div>
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-[2rem] border border-yellow-500/20 bg-black/70 backdrop-blur-xl p-7">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                  <CarFront size={30} />
                </div>

                <div>
                  <p className="text-yellow-400 font-black">
                    YILDIZ VIP LUXURY
                  </p>
                  <p className="mt-1 text-white/55 text-sm">
                    Premium VIP Transfer Aracı
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 text-white/60 text-sm">
                <Sparkles size={18} className="text-yellow-400" />
                İstanbul ve Türkiye geneli lüks ulaşım deneyimi.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}