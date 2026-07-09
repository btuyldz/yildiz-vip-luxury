import { Clock, Plane, CarFront, MapPin } from "lucide-react";

const items = [
  [Clock, "7/24 Hizmet"],
  [Plane, "Havalimanı Transferi"],
  [CarFront, "Mercedes Vito VIP"],
  [MapPin, "Türkiye Geneli"],
];

export default function TrustBar() {
  return (
    <section className="border-y border-yellow-500/20 bg-black">
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-5">
        {items.map(([Icon, text]) => (
          <div
            key={text}
            className="flex items-center justify-center gap-3 text-white/70"
          >
            <Icon size={22} className="text-yellow-400" />
            <span className="text-sm md:text-base font-semibold">
              {text}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}