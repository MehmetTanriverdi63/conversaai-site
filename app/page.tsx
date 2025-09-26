"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Sparkles, ShieldCheck, Clock, MessageSquare, Euro, ChevronRight, Bot, Headset, Database, Languages, Settings, CheckCircle2, ChevronDown, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ScenarioAnimation from "../components/ScenarioAnimation";

// Helper animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

export default function ConversaAI() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 text-neutral-100 selection:bg-indigo-500/30 selection:text-white">
      {/* Background decoration */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-56 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-600/30 via-fuchsia-500/20 to-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] translate-x-1/4 translate-y-1/4 rounded-full bg-gradient-to-tr from-cyan-400/20 via-emerald-400/10 to-indigo-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.12),rgba(0,0,0,0))]" />
      </div>

      {/* Nav */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500 shadow-lg shadow-indigo-900/30">
              <Bot className="h-5 w-5" />
            </div>
            <span className="text-lg font-semibold tracking-tight">ConversaAI</span>
          </div>
          <nav className="hidden items-center gap-6 md:flex">
            <a href="#features" className="hover:text-white/90 text-white/70 transition">Funktionen</a>
            <a href="#how" className="hover:text-white/90 text-white/70 transition">Ablauf</a>
            <a href="#pricing" className="hover:text-white/90 text-white/70 transition">Preise</a>
            <a href="#faq" className="hover:text-white/90 text-white/70 transition">FAQ</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden md:inline-flex">Login</Button>
            <Button className="group bg-indigo-600 hover:bg-indigo-500">
              Demo anfragen
              <ChevronRight className="ml-1 h-4 w-4 transition group-hover:translate-x-0.5" />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16 pt-20">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="grid items-center gap-10 lg:grid-cols-12">
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <Sparkles className="h-3.5 w-3.5" />
              Für Restaurants, Dönerläden & Lieferdienste
            </div>
            <h1 className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              Dein KI‑Telefonagent, der Anrufe übernimmt –
              <span className="bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-300 bg-clip-text text-transparent"> 24/7 erreichbar</span>
            </h1>
            <p className="mb-6 max-w-2xl text-lg text-white/80">
              ConversaAI nimmt Anrufe entgegen, beantwortet Fragen, nimmt Bestellungen oder Reservierungen auf
              und leitet dir alles als Nachricht weiter. Keine verpassten Anrufe mehr – mehr Umsatz, weniger Aufwand.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button className="group bg-indigo-600 hover:bg-indigo-500 text-base px-5 py-5">
                Jetzt starten
                <ArrowRight className="ml-2 h-5 w-5 transition group-hover:translate-x-1" />
              </Button>
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20 text-base px-5 py-5">
                Live‑Demo ansehen
              </Button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> DSGVO‑konform</div>
              <div className="flex items-center gap-2"><Clock className="h-4 w-4" /> 24/7 Verfügbarkeit</div>
              <div className="flex items-center gap-2"><Languages className="h-4 w-4" /> Mehrsprachig</div>
            </div>
          </motion.div>

          {/* Hero Card */}
          <motion.div variants={fadeUp} className="lg:col-span-5">
            <Card className="border-white/10 bg-gradient-to-b from-white/10 to-white/5">
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-600 to-fuchsia-500">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Echtzeit‑Transkript</p>
                    <p className="font-medium text-white">ConversaAI führt ein Kundengespräch…</p>
                  </div>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/80">
                  <p className="mb-2"><span className="text-white/60">Kunde:</span> Kann ich für 19:30 Uhr zwei Plätze reservieren?</p>
                  <p className="mb-2"><span className="text-white/60">ConversaAI:</span> Sehr gern! Name bitte?</p>
                  <p className="mb-2"><span className="text-white/60">Kunde:</span> Yildiz.</p>
                  <p className=""><span className="text-white/60">ConversaAI:</span> Perfekt, Herr/Frau Yildiz. Ich bestätige 19:30 Uhr – bis später!</p>
                </div>
                <div className="mt-4 text-xs text-white/60">Transkript & Details werden dir als Nachricht zugestellt.</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>
{/* Scenario Animation */}
<section id="scenario" className="mx-auto max-w-7xl px-6">
  <ScenarioAnimation />
</section>
      {/* Logos / social proof */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
          {["Dolunay Döner", "Ristorante Luna", "Sushi Mono", "Kebab Haus", "Pizzeria 24", "Burger Bros"].map((brand) => (
            <div key={brand} className="rounded-xl border border-white/5 bg-white/5 p-3 text-center text-xs tracking-wide">{brand}</div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          <motion.h2 variants={fadeUp} className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">Funktionen, die begeistern</motion.h2>
          <motion.p variants={fadeUp} className="mb-10 max-w-2xl text-white/80">Alles, was du brauchst, um Anrufe zuverlässig zu managen – speziell für Gastronomie & Lieferdienste.</motion.p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Headset className="h-5 w-5" />, title: "Anrufannahme 24/7", desc: "Keine verpassten Anrufe mehr – Konversationen in natürlicher Sprache." },
              { icon: <MessageSquare className="h-5 w-5" />, title: "Weiterleitung als Nachricht", desc: "Alle Details per SMS, E‑Mail oder Chat – in Echtzeit." },
              { icon: <Database className="h-5 w-5" />, title: "Bestellungen & Reservierungen", desc: "Nimmt Bestellungen auf, legt Reservierungen an und bestätigt sie." },
              { icon: <ShieldCheck className="h-5 w-5" />, title: "DSGVO & Sicherheit", desc: "EU‑Hosting, Verschlüsselung, datensparsame Verarbeitung." },
              { icon: <Settings className="h-5 w-5" />, title: "Wartung inklusive", desc: "Wir übernehmen Pflege, Training & laufende Optimierung." },
              { icon: <Languages className="h-5 w-5" />, title: "Mehrsprachig", desc: "Deutsch, Englisch und mehr – ideal für internationale Gäste." },
            ].map((f, i) => (
              <motion.div key={i} variants={fadeUp} className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-900/20">
                <div className="mb-3 inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2">
                  {f.icon}
                  <span className="text-sm text-white/80">Feature</span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-white/70">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">So funktioniert's</h2>
          <p className="max-w-2xl text-white/80">In wenigen Schritten startklar – wir kümmern uns um den Rest.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { step: 1, title: "Onboarding", desc: "Wir richten ConversaAI für deinen Betrieb ein: Öffnungszeiten, Menü, Liefergebiete." },
            { step: 2, title: "Training", desc: "Anpassung an häufige Fragen & Prozesse: Reservierung, Bestellung, Abholung, Lieferung." },
            { step: 3, title: "Live gehen", desc: "ConversaAI übernimmt Anrufe – du bekommst alle Infos direkt als Nachricht." },
          ].map((s) => (
            <div key={s.step} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-fuchsia-500 font-semibold">{s.step}</div>
              <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
              <p className="text-white/70">{s.desc}</p>
              <div className="pointer-events-none absolute -right-3 top-10 hidden h-6 w-6 rotate-45 bg-white/10 md:block" />
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">Ein Preis. Alles drin.</h2>
          <p className="text-white/80">Wartung & Verwaltung inklusive – planbar und fair.</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          <Card className="border-white/10 bg-white/5">
            <CardContent className="p-6">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white">ConversaAI Abo</h3>
                  <p className="text-sm text-white/70">Ideal für Restaurants, Dönerläden & Lieferdienste</p>
                </div>
                <Euro className="h-6 w-6" />
              </div>
              <div className="mb-2 text-white font-bold ">199 €<span className="text-lg font-medium text-white/70"> / Monat</span></div>
              <p className="mb-6 text-sm text-white/70">Keine Einrichtungsgebühr. Monatlich kündbar.</p>
              <ul className="mb-6 space-y-3 text-white">
                {[
                  "Unbegrenzte Anrufannahme 24/7*",
                  "Weiterleitung per SMS/E‑Mail/Chat",
                  "Reservierungen & Bestellungen",
                  "Dashboards & Transkripte",
                  "DSGVO‑konform, EU‑Hosting",
                  "Wartung, Updates & Support inklusive",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-500">Kostenlose Demo anfragen</Button>
              <p className="mt-3 text-xs text-white/60">*Fair‑Use Policy kann gelten.</p>
            </CardContent>
          </Card>

          <Card className="border-white/10 bg-gradient-to-b from-indigo-600/20 to-fuchsia-600/10">
            <CardContent className="p-6">
              <h3 className="mb-2 text-white font-semibold">Rechenbeispiel: Dein ROI</h3>
              <p className="mb-4 text-sm text-white/80">Mit ConversaAI können Betreiber bis zu <span className="font-semibold">1.200 €</span> pro Monat sparen, z. B. durch weniger Personalstunden und keine verpassten Anrufe.</p>
              <div className="grid gap-3 text-white">
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3"><span>Verpasste Anrufe/Monat</span><span className="font-semibold">≈ 80</span></div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3"><span>Wert pro Anruf</span><span className="font-semibold">≈ 15 €</span></div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3"><span>Pot. Mehrumsatz</span><span className="font-semibold text-emerald-400">≈ 1.200 €</span></div>
                <div className="flex items-center justify-between rounded-xl border border-white/10 bg-black/30 px-4 py-3"><span>ConversaAI Abo</span><span className="text-xl font-semibold text-white">199 €/Monat</span></div>
              </div>
              <div className="mt-4 rounded-xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">Netto‑Vorteil: <span className="font-semibold">~1.001 €</span> pro Monat</div>
              <p className="mt-3 text-xs text-white/60">Zahlen sind Beispielwerte – tatsächliche Effekte variieren je nach Betrieb.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">Was unsere Kunden sagen</h2>
          <p className="text-white/80">Echte Stimmen aus der Gastronomie.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Ayla K.", role: "Inhaberin – Kebab Haus", text: "Seit ConversaAI gehen keine Anrufe mehr verloren. Unsere Abläufe sind entspannter und wir haben mehr Bestellungen." },
            { name: "Marco L.", role: "Manager – Ristorante Luna", text: "Reservierungen laufen jetzt automatisch. Das Team hat Zeit für die Gäste vor Ort." },
            { name: "Jin S.", role: "Owner – Sushi Mono", text: "Super schnelle Einrichtung und top Support. Die Transkripte sind extrem hilfreich." },
          ].map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex items-center gap-2 text-amber-400">
                {[...Array(5)].map((_, i) => (<Star key={i} className="h-4 w-4 fill-current" />))}
              </div>
              <p className="mb-4 text-white/80">“{t.text}”</p>
              <p className="text-sm font-medium">{t.name}</p>
              <p className="text-xs text-white/60">{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight md:text-4xl">Häufige Fragen</h2>
          <p className="text-white/80">Alles, was du vor dem Start wissen möchtest.</p>
        </div>
        <div className="space-y-3">
          {[
            { q: "Wie schnell sind wir startklar?", a: "In der Regel innerhalb weniger Werktage. Wir übernehmen Einrichtung und Training – du musst nur Informationen wie Öffnungszeiten und Speisekarte liefern." },
            { q: "Ist das DSGVO‑konform?", a: "Ja. Wir hosten in der EU, setzen auf Verschlüsselung und verarbeiten Daten datensparsam. Auf Wunsch stellen wir AV‑Verträge bereit." },
            { q: "Wie erhalte ich die Anruf‑Infos?", a: "Du bekommst Transkripte und Zusammenfassungen per E‑Mail, SMS oder in deinem Chat‑Kanal (z. B. WhatsApp Business)." },
            { q: "Kann ich jederzeit kündigen?", a: "Ja, monatlich kündbar. Keine Einrichtungsgebühr." },
          ].map((item, idx) => (
            <details key={idx} className="group rounded-2xl border border-white/10 bg-white/5 p-5 open:bg-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between text-left text-lg font-medium">
                {item.q}
                <ChevronDown className="h-5 w-5 transition group-open:rotate-180" />
              </summary>
              <p className="mt-3 text-white/80">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-fuchsia-600/10 to-cyan-500/20 p-8">
          <div className="absolute right-0 top-0 h-40 w-40 translate-x-1/3 -translate-y-1/3 rounded-full bg-white/10 blur-2xl" />
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-2xl font-semibold">Bereit, keine Anrufe mehr zu verpassen?</h3>
              <p className="mb-4 text-white/80">Mit ConversaAI erhältst du einen verlässlichen KI‑Agenten und ein Team, das sich um Wartung & Verwaltung kümmert.</p>
              <div className="flex flex-wrap gap-3">
                <Button className="bg-indigo-600 hover:bg-indigo-500">Demo anfragen</Button>
                <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">Mit uns sprechen</Button>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/30 p-5 text-sm text-white/80">
              <p className="mb-2 font-medium">Kontakt</p>
              <p>📞 +49 30 12345678</p>
              <p>✉️ hello@conversa.ai</p>
              <p className="mt-2 text-white/60">Wir melden uns innerhalb von 24 Stunden.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/40">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-500">
                <Bot className="h-4 w-4" />
              </div>
              <span className="font-semibold">ConversaAI</span>
            </div>
            <p className="text-sm text-white/70">KI‑Telefonagent für Gastronomie. Mehr Bestellungen, weniger Stress.</p>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Produkt</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#features" className="hover:text-white">Funktionen</a></li>
              <li><a href="#pricing" className="hover:text-white">Preise</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Rechtliches</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Impressum</li>
              <li>Datenschutz</li>
              <li>AGB</li>
            </ul>
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold">Kontakt</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li>hello@conversa.ai</li>
              <li>+49 30 12345678</li>
              <li>Berlin, Deutschland</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">© {new Date().getFullYear()} ConversaAI. Alle Rechte vorbehalten.</div>
      </footer>
    </div>
  );
}
