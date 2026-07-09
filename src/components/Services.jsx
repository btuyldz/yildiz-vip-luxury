import { Car, Plane, Map, Briefcase, Gem, CalendarHeart } from "lucide-react";

const services = [
  [Car, "VIP Transfer", "Konforlu, güvenli ve prestijli şehir içi VIP ulaşım.", "01"],
  [Plane, "Havalimanı Transferi", "İstanbul Havalimanı ve Sabiha Gökçen transfer hizmeti.", "02"],
  [Map, "Şehirler Arası Transfer", "Türkiye genelinde özel şoförlü güvenli yolculuk.", "03"],
  [Briefcase, "Kurumsal Transfer", "Şirketler ve özel misafirler için profesyonel ulaşım.", "04"],
  [Gem, "Düğün & Organizasyon", "Özel günleriniz için lüks VIP araç hizmeti.", "05"],
  [CalendarHeart, "Özel Gün Transferleri", "Davet, toplantı, otel ve etkinlik transferleri.", "06"],
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs md:text-sm">
            Hizmetlerimiz
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Premium Transfer Çözümleri
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/55">
            Havalimanı transferinden özel gün organizasyonlarına kadar her yolculukta konfor, güven ve prestij.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {services.map(([Icon, title, text, number], index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative overflow-hidden rounded-[2rem] bg-zinc-950 border border-yellow-500/20 p-8 hover:border-yellow-400 transition duration-500"
            >
              <div className="absolute right-6 top-6 text-6xl font-black text-white/5 group-hover:text-yellow-400/10 transition">
                {number}
              </div>

              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Icon size={28} strokeWidth={2.2} />
              </div>

              <h3 className="text-2xl font-black">{title}</h3>

              <p className="mt-4 text-white/60 leading-7">{text}</p>

              <div className="mt-8 h-px w-full bg-gradient-to-r from-yellow-400/60 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}