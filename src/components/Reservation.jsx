"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Reservation() {
  const { t } = useLanguage();

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
    `${t.reservation.whatsappMessage}

${t.reservation.labels.name}: ${form.name}
${t.reservation.labels.phone}: ${form.phone}
${t.reservation.labels.from}: ${form.from}
${t.reservation.labels.to}: ${form.to}
${t.reservation.labels.date}: ${form.date}
${t.reservation.labels.time}: ${form.time}
${t.reservation.labels.passengers}: ${form.passengers}
${t.reservation.labels.note}: ${form.note}`
  );

  return (
    <section id="reservation" className="py-32 px-6 bg-black">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        <div data-aos="fade-right">
          <p className="text-yellow-400 uppercase tracking-[0.35em] text-xs">
            {t.reservation.eyebrow}
          </p>

          <h2 className="mt-5 text-4xl md:text-6xl font-black leading-tight">
            {t.reservation.title1}
            <span className="block text-yellow-400">
              {t.reservation.title2}
            </span>
          </h2>

          <p className="mt-7 text-white/60 text-lg leading-8">
            {t.reservation.text}
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {t.reservation.badges.map((item) => (
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
            <input
              name="name"
              onChange={update}
              placeholder={t.reservation.placeholders.name}
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <input
              name="phone"
              onChange={update}
              placeholder={t.reservation.placeholders.phone}
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <input
              name="from"
              onChange={update}
              placeholder={t.reservation.placeholders.from}
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <input
              name="to"
              onChange={update}
              placeholder={t.reservation.placeholders.to}
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <input
              name="date"
              onChange={update}
              type="date"
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400 text-white/60"
            />

            <input
              name="time"
              onChange={update}
              type="time"
              className="bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400 text-white/60"
            />

            <input
              name="passengers"
              onChange={update}
              placeholder={t.reservation.placeholders.passengers}
              className="md:col-span-2 bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <textarea
              name="note"
              onChange={update}
              placeholder={t.reservation.placeholders.note}
              rows="5"
              className="md:col-span-2 bg-black border border-yellow-500/20 rounded-2xl p-5 outline-none focus:border-yellow-400"
            />

            <a
              href={`https://wa.me/905401550778?text=${message}`}
              target="_blank"
              className="md:col-span-2 rounded-full bg-yellow-400 py-5 text-center font-black text-black hover:bg-yellow-300 transition"
            >
              {t.reservation.button}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}