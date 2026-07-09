export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            İletişim
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            VIP Transfer İçin
            <span className="block text-yellow-400">Bize Ulaşın</span>
          </h2>

          <p className="mt-7 text-white/60 text-lg leading-8">
            İstanbul merkezli Türkiye geneli VIP transfer, havalimanı transferi
            ve özel şoförlü ulaşım hizmetleri için bizimle iletişime geçin.
          </p>

          <div className="mt-10 grid gap-4">
            {[
              ["Telefon", "0540 155 07 78"],
              ["E-posta", "yildizvipluxury@gmail.com"],
              ["Hizmet Bölgesi", "İstanbul • Türkiye Geneli"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-yellow-500/20 bg-black p-5"
              >
                <p className="text-sm text-yellow-400">{label}</p>
                <p className="mt-1 text-white/75">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="overflow-hidden rounded-[2.5rem] border border-yellow-500/20 bg-black p-3"
        >
          <iframe
            src="https://www.google.com/maps?q=Istanbul%20Turkey&output=embed"
            width="100%"
            height="430"
            loading="lazy"
            className="rounded-[2rem]"
          ></iframe>
        </div>
      </div>
    </section>
  );
}