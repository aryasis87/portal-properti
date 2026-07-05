'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, ArrowDown, ArrowUpRight, MessageCircle, KeyRound, Check } from 'lucide-react';
import { templates } from './components/templates-data';

const WA = 'https://wa.me/6281339908765?text=Halo%2C%20saya%20tertarik%20template%20marketplace%20properti%20di%20PortalProperti';

export default function PortalProperti() {
  return (
    <div className="blueprint min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-40 border-b border-slatep/10 bg-kabut/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="/" className="flex items-center gap-2 text-lg font-extrabold tracking-tight">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-slatep text-zamrud"><Home size={17} /></span>
            PortalProperti
          </a>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="rounded-full bg-zamrud px-5 py-2 text-sm font-extrabold text-white transition hover:bg-slatep">
            Konsultasi
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="px-4 pt-16 pb-12 text-center sm:px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-extrabold uppercase tracking-wide text-zamrud shadow-sm">
            <KeyRound size={13} /> 4 template · 4 kepribadian pasar
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.04] sm:text-6xl md:text-7xl">
            Satu industri,<br /><span className="text-zamrud">empat wajah</span> berbeda.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-mutedp">
            Marketplace properti tidak harus seragam. Editorial yang tenang, proptech yang gesit, luxury yang megah, atau hangat yang membumi — pilih wajah bisnismu.
          </p>
          <a href="#koleksi" className="mt-9 inline-flex items-center gap-2 rounded-full bg-slatep px-8 py-4 text-sm font-extrabold text-white transition hover:bg-zamrud">
            Masuk ke Perumahan <ArrowDown size={16} />
          </a>
        </motion.div>
      </section>

      {/* Koleksi — kartu rumah */}
      <section id="koleksi" className="scroll-mt-24 px-4 pb-20 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-x-10 gap-y-16 md:grid-cols-2">
          {templates.map((t, i) => (
            <motion.article
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-70px' }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <a href={t.url} aria-label={`Lihat template ${t.name}`} className="block">
                <div className="rumah-wrap relative">
                  <span className="cerobong" aria-hidden="true" />
                  <div className="rumah relative bg-white p-2 pt-[12%]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-lg">
                      <Image src={t.image} alt={`Preview ${t.name}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover object-top" priority={i < 2} />
                    </div>
                  </div>
                  {/* Pintu label */}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-t-xl px-5 py-2 text-xs font-extrabold uppercase tracking-wide text-white" style={{ background: t.warna }}>
                    {t.gaya}
                  </span>
                </div>
              </a>
              <div className="mt-6 px-1">
                <div className="flex items-baseline justify-between">
                  <h2 className="text-2xl font-extrabold">{t.name}</h2>
                  <span className="text-xs font-bold uppercase tracking-wide text-mutedp">Blok {String.fromCharCode(65 + i)}-0{i + 1}</span>
                </div>
                <p className="mt-2 leading-relaxed text-mutedp">{t.description}</p>
                <ul className="mt-4 space-y-2">
                  {t.fitur.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm font-semibold">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-white" style={{ background: t.warna }}><Check size={11} strokeWidth={3.5} /></span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-zamrud underline-offset-4 hover:underline">
                  Pesan template ini <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slatep px-4 py-16 text-center text-white sm:px-6">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55 }} className="mx-auto max-w-xl">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-zamrud"><KeyRound size={24} /></span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight md:text-4xl">Kuncinya sudah di tangan kami.</h2>
          <p className="mt-3 text-white/60">Pilih wajah yang pas untuk bisnismu — kami serahkan kuncinya dalam hitungan hari.</p>
          <a href={WA} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-zamrud px-8 py-4 text-sm font-extrabold text-white transition hover:scale-[1.03] active:scale-95">
            <MessageCircle size={16} /> Chat WhatsApp
          </a>
        </motion.div>
      </section>

      <footer className="bg-slatep px-4 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} PortalProperti · Sanzystore Dev — rumah untuk semua template.
      </footer>
    </div>
  );
}
