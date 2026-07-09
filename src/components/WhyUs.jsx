import { ShieldCheck, Clock, Crown, MapPin, UserCheck, Sparkles } from "lucide-react";

const reasons = [
  [ShieldCheck, "Güvenilir Hizmet", "Her transfer planlı, güvenli ve zamanında gerçekleştirilir."],
  [Crown, "Premium Deneyim", "Mercedes Vito VIP ile üst düzey konfor ve prestij."],
  [Clock, "7/24 Ulaşılabilir", "Günün her saati rezervasyon ve destek hizmeti."],
  [MapPin, "Türkiye Geneli", "İstanbul merkezli, tüm Türkiye'ye VIP transfer."],
  [UserCheck, "Profesyonel Şoför", "Güler yüzlü, deneyimli ve güvenilir hizmet."],
  [Sparkles, "Lüks Konfor", "VIP iç tasarım, deri koltuklar ve sessiz yolculuk deneyimi."],
];

export default function WhyUs() {
  return (
    <section className="py-28 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs">
            NEDEN BİZ?
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Ayrıcalıklı VIP Deneyimi
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-white/55 leading-8">
            Her yolculukta güven, konfor ve prestiji aynı standartta sunuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-7 mt-16">
          {reasons.map(([Icon, title, text], index) => (
            <div
              key={title}
              data-aos="fade-up"
              data-aos-delay={index * 90}
              className="group rounded-[2rem] border border-yellow-500/20 bg-black p-9 hover:border-yellow-400 hover:-translate-y-2 transition duration-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400 text-black">
                <Icon size={28} strokeWidth={2.2} />
              </div>

              <h3 className="mt-8 text-2xl font-black">
                {title}
              </h3>

              <p className="mt-5 leading-8 text-white/60">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}