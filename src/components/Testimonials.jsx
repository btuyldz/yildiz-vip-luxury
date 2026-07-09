const testimonials = [
  {
    title: "Havalimanı Transferi",
    name: "Kurumsal Müşteri",
    text: "Araç tertemizdi, sürüş güvenliydi ve zamanlama kusursuzdu. VIP transfer için çok profesyonel bir deneyimdi.",
  },
  {
    title: "Özel Gün Organizasyonu",
    name: "Organizasyon Hizmeti",
    text: "Aracın iç tasarımı ve konforu gerçekten çok etkileyiciydi. Özel günümüzde çok şık bir detay oldu.",
  },
  {
    title: "Şehirler Arası Transfer",
    name: "VIP Yolcu",
    text: "Uzun yolculukta konfor, sessizlik ve güven hissi çok iyiydi. Kesinlikle tekrar tercih ederiz.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center" data-aos="fade-up">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            Yorumlar
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Müşteri Deneyimleri
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-white/55">
            Premium VIP transfer deneyiminde güven, konfor ve memnuniyet önceliğimizdir.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={index * 120}
              className="rounded-[2rem] border border-yellow-500/20 bg-black p-8 hover:border-yellow-400 transition"
            >
              <div className="text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 text-white/60 leading-8">
                “{item.text}”
              </p>

              <p className="mt-8 text-yellow-400 font-bold">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}