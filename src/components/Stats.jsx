const stats = [
  ["7/24", "Kesintisiz Hizmet"],
  ["81 İl", "Türkiye Geneli"],
  ["VIP", "Premium Araç"],
  ["%100", "Konfor Odaklı"],
];

export default function Stats() {
  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 text-center">
        {stats.map(([number, label]) => (
          <div
            key={label}
            className="rounded-3xl border border-yellow-500/20 bg-zinc-950 p-8 hover:border-yellow-400 transition"
          >
            <div className="text-4xl md:text-5xl font-black text-yellow-400">
              {number}
            </div>
            <div className="mt-3 text-white/60">
              {label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}