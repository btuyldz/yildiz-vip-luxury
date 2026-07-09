export default function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-black text-yellow-400 tracking-[0.18em]">
              YILDIZ
            </h2>
            <p className="text-xs tracking-[0.45em] text-white/60 mt-1">
              VIP LUXURY
            </p>

            <p className="mt-6 max-w-md text-white/55 leading-7">
              İstanbul merkezli, Türkiye geneli VIP transfer, havalimanı transferi,
              şehirler arası ulaşım ve özel organizasyon hizmetleri.
            </p>
          </div>

          <div>
            <h3 className="font-black text-white mb-5">Hızlı Menü</h3>
            <ul className="space-y-3 text-white/55">
              <li><a href="#services" className="hover:text-yellow-400">Hizmetler</a></li>
              <li><a href="#fleet" className="hover:text-yellow-400">Araç</a></li>
              <li><a href="#gallery" className="hover:text-yellow-400">Galeri</a></li>
              <li><a href="#reservation" className="hover:text-yellow-400">Rezervasyon</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-black text-white mb-5">İletişim</h3>
            <ul className="space-y-3 text-white/55">
              <li>0540 155 07 78</li>
              <li>yildizvipluxury@gmail.com</li>
              <li>İstanbul • Türkiye Geneli</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-yellow-500/20 pt-8 flex flex-col md:flex-row justify-between gap-4 text-white/35 text-sm">
          <p>© 2026 YILDIZ VIP LUXURY. Tüm hakları saklıdır.</p>
          <div className="flex justify-center md:justify-end gap-4">
  <a href="https://wa.me/905401550778" target="_blank" className="hover:text-yellow-400 transition">
    WhatsApp
  </a>
  <a href="mailto:yildizvipluxury@gmail.com" className="hover:text-yellow-400 transition">
    Mail
  </a>
  <a href="#" className="hover:text-yellow-400 transition">
    Instagram
  </a>
</div>
        </div>
      </div>
    </footer>
  );
}