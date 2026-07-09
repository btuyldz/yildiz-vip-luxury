const steps = [
  {
    no: "01",
    title: "Rezervasyon",
    text: "WhatsApp veya telefon üzerinden bize ulaşın.",
  },
  {
    no: "02",
    title: "Planlama",
    text: "Transfer detaylarınızı birlikte planlayalım.",
  },
  {
    no: "03",
    title: "VIP Karşılama",
    text: "Şoförümüz sizi tam zamanında karşılasın.",
  },
  {
    no: "04",
    title: "Konforlu Yolculuk",
    text: "Lüks Mercedes Vito ile güvenli yolculuk yapın.",
  },
];

export default function Process() {
  return (
    <section className="py-28 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            SÜREÇ
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Nasıl Çalışıyoruz?
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.no}
              className="rounded-[2rem] border border-yellow-500/20 bg-black p-8 hover:border-yellow-400 transition"
            >
              <div className="text-5xl font-black text-yellow-400">
                {step.no}
              </div>

              <h3 className="mt-6 text-2xl font-black">
                {step.title}
              </h3>

              <p className="mt-4 text-white/60 leading-7">
                {step.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}