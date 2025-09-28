// app/components/CallWorkflow.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PhoneCall, Bot, Store } from "lucide-react";

type Props = {
  // optional: eigene Bilder nutzen (liegen z.B. unter /public/steps/*)
  customerImg?: string;   // z.B. "/steps/customer.png"
  aiImg?: string;         // z.B. "/steps/ai-bot.png"
  storeImg?: string;      // z.B. "/steps/store.png"
};

const float = {
  animate: {
    y: [0, -6, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  },
};

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: {
      duration: 2,
      ease: [0.42, 0, 0.58, 1] as any, // 👈 Fix: Type-Cast
    },
  },
}


export default function CallWorkflow({
  customerImg,
  aiImg,
  storeImg,
}: Props) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
          So läuft’s mit ConversaAI – kurz & klar
        </h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          Kunde ruft an → KI spricht & erfasst → Nachricht an den Laden.
        </p>
      </div>

      <div className="relative grid gap-12 md:grid-cols-3">
        {/* geschwungene Pfeile nur Desktop */}
        <div aria-hidden className="pointer-events-none absolute left-1/3 top-24 hidden -translate-x-1/2 md:block">
          <svg width="240" height="80" viewBox="0 0 240 80" fill="none">
            <motion.path
              d="M10 40 C80 5, 160 5, 230 40"
              stroke="url(#g1)"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0}
            />
            <defs>
              <linearGradient id="g1" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#a78bfa" />
              </linearGradient>
            </defs>
            {/* Pfeilspitze */}
            <motion.path
              d="M230 40 l-12 -8 m12 8 l-12 8"
              stroke="#a78bfa"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={0.05}
            />
          </svg>
        </div>

        <div aria-hidden className="pointer-events-none absolute left-2/3 top-24 hidden -translate-x-1/2 md:block">
          <svg width="260" height="96" viewBox="0 0 260 96" fill="none">
            <motion.path
              d="M10 48 C90 10, 170 10, 250 48"
              stroke="url(#g2)"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={1}
            />
            <defs>
              <linearGradient id="g2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
            </defs>
            <motion.path
              d="M250 48 l-12 -8 m12 8 l-12 8"
              stroke="#34d399"
              strokeWidth="3"
              strokeLinecap="round"
              variants={draw}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.5 }}
              custom={1.05}
            />
          </svg>

          {/* „Binär-Daten“ über dem zweiten Pfeil */}
          <div className="relative -mt-16 h-0">
            <div className="absolute left-4 right-4 top-0 mx-auto w-[200px] overflow-hidden text-[12px] font-mono text-emerald-300/90">
              <div className="whitespace-nowrap animate-bits">
                01001100 01010011 00110010 01001100 0010 10110100
              </div>
            </div>
          </div>
        </div>

        {/* Karte 1 – Kunde */}
        <figure className="relative flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-xl" />
            <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-6 backdrop-blur">
              {customerImg ? (
                <Image
                  src={customerImg}
                  alt="Kunde"
                  width={150}
                  height={150}
                  className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] object-contain"
                />
              ) : (
                <motion.div
                  animate={float.animate}
                  className="grid h-[120px] w-[120px] place-items-center rounded-3xl bg-gradient-to-br from-sky-500/30 to-fuchsia-500/30 ring-1 ring-white/10"
                >
                  <PhoneCall className="h-10 w-10 text-white" />
                </motion.div>
              )}
            </div>
          </div>

          <figcaption className="mt-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/10 px-3 py-1 text-xs text-white/75">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-sky-500 to-fuchsia-500 text-[11px] font-semibold">
                1
              </span>
              Anruf
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold text-white">
              Kunde ruft an
            </h3>
            <p className="mt-1 max-w-[30ch] md:max-w-none text-sm text-white/70">
              Telefon oder WhatsApp – wie gewohnt.
            </p>
          </figcaption>

          {/* Mobile-Pfeil nach unten */}
          <MobileArrow index={0} />
        </figure>

        {/* Karte 2 – KI */}
        <figure className="relative flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-xl" />
            <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-6 backdrop-blur">
              {aiImg ? (
                <Image
                  src={aiImg}
                  alt="KI-Agent"
                  width={150}
                  height={150}
                  className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] object-contain"
                />
              ) : (
                <motion.div
                  animate={float.animate}
                  className="grid h-[120px] w-[120px] place-items-center rounded-3xl bg-gradient-to-br from-emerald-400/25 to-sky-500/25 ring-1 ring-white/10"
                >
                  <Bot className="h-10 w-10 text-white" />
                </motion.div>
              )}
            </div>
          </div>

          <figcaption className="mt-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/10 px-3 py-1 text-xs text-white/75">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-sky-500 text-[11px] font-semibold">
                2
              </span>
              KI-Agent
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold text-white">
              KI spricht & erfasst
            </h3>
            <p className="mt-1 max-w-[32ch] md:max-w-none text-sm text-white/70">
              Versteht Bestellungen/Reservierungen in Echtzeit.
            </p>
          </figcaption>

          <MobileArrow index={1} />
        </figure>

        {/* Karte 3 – Restaurant */}
        <figure className="relative flex flex-col items-center text-center">
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-3xl bg-white/5 blur-xl" />
            <div className="rounded-3xl ring-1 ring-white/10 bg-white/5 p-6 backdrop-blur">
              {storeImg ? (
                <Image
                  src={storeImg}
                  alt="Restaurant"
                  width={150}
                  height={150}
                  className="h-[120px] w-[120px] md:h-[140px] md:w-[140px] object-contain"
                />
              ) : (
                <motion.div
                  animate={float.animate}
                  className="grid h-[120px] w-[120px] place-items-center rounded-3xl bg-gradient-to-br from-fuchsia-500/25 to-pink-500/25 ring-1 ring-white/10"
                >
                  <Store className="h-10 w-10 text-white" />
                </motion.div>
              )}
            </div>
          </div>

          <figcaption className="mt-4">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/8 ring-1 ring-white/10 px-3 py-1 text-xs text-white/75">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-gradient-to-br from-fuchsia-500 to-pink-500 text-[11px] font-semibold">
                3
              </span>
              Restaurant
            </p>
            <h3 className="mt-2 text-lg md:text-xl font-semibold text-white">
              Nachricht & Details
            </h3>
            <p className="mt-1 max-w-[32ch] md:max-w-none text-sm text-white/70">
              Alles kommt als Nachricht (SMS/E-Mail/Chat) bei dir an.
            </p>
          </figcaption>
        </figure>
      </div>

      {/* Keyframes für den Binär-Ticker */}
      <style jsx global>{`
        @keyframes bits {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-bits { animation: bits 6s linear infinite; }
      `}</style>
    </section>
  );
}

function MobileArrow({ index }: { index: number }) {
  return (
    <div className="mt-8 block md:hidden">
      <svg width="24" height="48" viewBox="0 0 24 48" fill="none">
        <motion.path
          d="M12 0 V36"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={index}
        />
        <motion.path
          d="M12 36 l-6 -6 M12 36 l6 -6"
          stroke="#60a5fa"
          strokeWidth="2"
          strokeLinecap="round"
          variants={draw}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          custom={index + 0.05}
        />
      </svg>
    </div>
  );
}
