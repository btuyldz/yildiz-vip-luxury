const items = [
  {
    title: "Dakik Hizmet",
    text: "Planlanan saatte, planlanan noktada hazır oluruz.",
    icon: "⏰",
  },
  {
    title: "Premium Araç",
    text: "Mercedes Vito ile konforlu ve prestijli yolculuk.",
    icon: "🚐",
  },
  {
    title: "Profesyonel Şoför",
    text: "Güler yüzlü, deneyimli ve güvenilir hizmet.",
    icon: "🧑‍✈️",
  },
  {
    title: "Şeffaf Fiyatlandırma",
    text: "Sürpriz ücretler olmadan net fiyat politikası.",
    icon: "💳",
  },
];

export default function Trust() {
  return (
    <section className="py-28 px-6 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="text-center">
          <p className="uppercase tracking-[0.35em] text-yellow-400 text-xs">
            NEDEN BİZ
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black">
            Yolculuğunuz Bizim İçin Değerli
          </h2>

          <p className="mt-6 max-w-2xl mx-auto text-white/55 leading-8">
            Her transferde güven, konfor ve profesyonelliği ön planda tutuyoruz.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

          {items.map((item) => (

            <div
              key={item.title}
              className="rounded-[2rem] border border-yellow-500/20 bg-zinc-950 p-8 hover:border-yellow-400 transition duration-500"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-7 text-2xl font-black">
                {item.title}
              </h3>

              <p className="mt-5 text-white/60 leading-8">
                {item.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}