"use client";

import { useState } from "react";

export default function Reservation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    from: "",
    to: "",
    date: "",
    time: "",
    passengers: "",
    note: "",
  });

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const message = encodeURIComponent(
    `Merhaba, YILDIZ VIP LUXURY için teklif almak istiyorum.

Ad Soyad: ${form.name}
Telefon: ${form.phone}
Alış Noktası: ${form.from}
Varış Noktası: ${form.to}
Tarih: ${form.date}
Saat: ${form.time}
Yolcu Sayısı: ${form.passengers}
Not: ${form.note}`
  );

  return (
    <section id="reservation" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            Rezervasyon
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            Dakikalar İçinde
            <span className="block text-yellow-400">Teklif Alın</span>
          </h2>

          <p className="mt-7 text-white/60 text-lg leading-8">
            Transfer detaylarınızı girin. Bilgileriniz WhatsApp mesajına otomatik
            aktarılır, hızlıca fiyat teklifi alabilirsiniz.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {["Hızlı", "Güvenli", "7/24"].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-yellow-500/20 bg-zinc-950 p-5 text-center text-yellow-400 font-black"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div
          data-aos="fade-left"
          className="rounded-[2.5rem] border border-yellow-500/20 bg-zinc-950 p-6 md:p-9"
        >
          <div className="grid md:grid-cols-2 gap-4">
            <input name="name" onChange={update} placeholder="Ad Soyad" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400" />
            <input name="phone" onChange={update} placeholder="Telefon" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400" />
            <input name="from" onChange={update} placeholder="Alış Noktası" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400" />
            <input name="to" onChange={update} placeholder="Varış Noktası" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400" />
            <input name="date" onChange={update} type="date" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400 text-white/60" />
            <input name="time" onChange={update} type="time" className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400 text-white/60" />
            <input name="passengers" onChange={update} placeholder="Yolcu Sayısı" className="md:col-span-2 bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400" />

            <textarea
              name="note"
              onChange={update}
              placeholder="Ek notunuz"
              rows="5"
              className="md:col-span-2 bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <a
              href={`https://wa.me/905401550778?text=${message}`}
              target="_blank"
              className="md:col-span-2 rounded-full bg-yellow-400 py-5 text-center font-black text-black hover:bg-yellow-300 transition"
            >
              WhatsApp’tan Teklif İste
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}