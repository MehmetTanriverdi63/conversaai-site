"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { PhoneOff, Bot, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const fade = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.5 } },
};

export default function RealScenario() {
  const [step, setStep] = useState<"problem" | "solution">("problem");

  useEffect(() => {
    const id = setInterval(() => {
      setStep((s) => (s === "problem" ? "solution" : "problem"));
    }, 4200); // alle 4.2s wechseln
    return () => clearInterval(id);
  }, []);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl text-white tracking-tight text-sky-400">
          Vorher / Nachher – so löst ConversaAI den Stress
        </h2>
        <p className="text-white max-w-2xl mx-auto">
          Realistische Szene: Verpasste Anrufe vs. entspannter Betrieb mit KI-Agent.
        </p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-blue-300/20 bg-blue-950/40 shadow-xl">
        <AnimatePresence mode="wait">
          {step === "problem" ? (
            <motion.div
              key="problem"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-[380px] md:h-[460px]"
            >
              {/* Hintergrundfoto */}
              <Image
               src="/gestressterDonerman.png"
               alt="Gestresster Dönerladen, verpasste Anrufe"
                width={950}
               height={430}
               className="absolute inset-0 object-cover"
              />
              {/* dunkler Verlauf für Lesbarkeit */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

              {/* Overlay-Text & Badges */}
              <div className="absolute left-6 bottom-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-3 py-1 text-sm border border-red-400/40 mb-3">
                  <PhoneOff className="h-4 w-4 text-red-300" />
                  <span>Verpasste Anrufe</span>
                </div>
                <h3 className="text-2xl font-semibold mb-1">Ohne ConversaAI</h3>
                <p className="text-white/85 max-w-2xl">
                  Telefon klingelt, Gäste warten, Missverständnisse bei Bestellungen.
                  <span className="ml-2 opacity-90 italic">
                    „2 Döner ohne Zwiebel + 2 Getränke … hallo?“
                  </span>
                </p>

                {/* kleine „eingehende Anrufe“-Bubbles */}
             {/*    <div className="mt-4 flex gap-2">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      initial={{ y: 8, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + i * 0.15 }}
                      className="rounded-lg bg-red-500/15 border border-red-400/30 px-3 py-1 text-xs"
                    >
                     Eingehender Anruf #{i + 1}
                    </motion.div>
                  ))}
                </div>*/}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="solution"
              variants={fade}
              initial="initial"
              animate="animate"
              exit="exit"
              className="relative h-[380px] md:h-[460px]"
            >

               {/* Hintergrundfoto */}
              <Image
               src="/friedlicherDonerman.png"
               alt="Gestresster Dönerladen, verpasste Anruuuufe"
               width={950}
               height={430}
                className="absolute inset-0  object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-blue-950/30 to-transparent" />

              {/* KI & Nachricht */}
              <div className="absolute left-6 bottom-6 right-6 text-white">
                <div className="inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-3 py-1 text-sm border border-sky-400/40 mb-3">
                  <Bot className="h-4 w-4 text-sky-300" />
                  <span>KI-Agent übernimmt Telefonate</span>
                </div>
                <h3 className="text-2xl font-semibold mb-1">Mit ConversaAI</h3>
                <p className="text-white/85 max-w-2xl">
                  Mehrere Anrufer gleichzeitig werden verstanden, Bestellungen werden korrekt erfasst.
                </p>

                {/* Nachricht-Karte */}
               {/* <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.35 }}
                  className="mt-4 max-w-md rounded-xl border border-emerald-400/25 bg-emerald-500/10 backdrop-blur px-4 py-3 text-sm"
                >
                  <div className="flex items-center gap-2 text-emerald-300 font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    Neue Bestellung erfasst
                  </div>
                  <div className="mt-2 text-white/90 leading-6">
                    2 × Döner <span className="text-white/70">(ohne Zwiebel)</span><br />
                    2 × Getränke<br />
                    Abholung: <span className="text-white/90">19:30</span>
                  </div>
                </motion.div>*/}
              </div>
            </motion.div>
          )}
        </AnimatePresence>  
      </div>

      <div className="mt-4 text-center">
        <button
          onClick={() => setStep((s) => (s === "problem" ? "solution" : "problem"))}
          className="rounded-full bg-blue-600 hover:bg-blue-500 px-4 py-2 text-sm font-medium"
        >
          {step === "problem" ? "Lösung anzeigen" : "Problem anzeigen"}
        </button>
      </div>
    </section>
  );
}
