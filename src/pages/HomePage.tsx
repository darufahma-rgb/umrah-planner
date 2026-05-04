import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, MapPin, Lock, Sparkles } from "lucide-react";
import logoElmassa from "@/assets/logo-elmassa.png";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";
import umrahImage from "@/assets/umrah-pilgrims.jpg";
import qubaImage from "@/assets/masjid-quba.jpg";
import jabalImage from "@/assets/jabal-rahmah.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";

const WA_PATH = "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh";
const openWhatsApp = () => window.open(WA_PATH, "_blank");

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ── Pink running-light border ─────────────────────────────── */
const PinkGlowBorder = ({
  children,
  outerClassName = "",
  borderRadius = "1rem",
  duration = 3,
  thickness = "1.5px",
}: {
  children: React.ReactNode;
  outerClassName?: string;
  borderRadius?: string;
  duration?: number;
  thickness?: string;
}) => (
  <div
    className={`relative overflow-hidden ${outerClassName}`}
    style={{ borderRadius, padding: thickness }}
  >
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: "200%",
        height: "200%",
        top: "-50%",
        left: "-50%",
        background:
          "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255,182,193,0) 73%, rgba(255,182,193,0.9) 80%, rgba(255,105,180,0.65) 85%, rgba(255,182,193,0.9) 90%, rgba(255,182,193,0) 93%, transparent 100%)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
    <div
      className="relative overflow-hidden"
      style={{ borderRadius: `calc(${borderRadius} - ${thickness})` }}
    >
      {children}
    </div>
  </div>
);

/* ── Data ─────────────────────────────────────────────────── */
const juli = {
  slug: "/juli-2026",
  month: "Juli",
  year: "2026",
  dates: "08 – 18 Juli 2026",
  days: "11 Hari",
  highlight: "Bonus City Tour Thaif Gratis",
  image: heroImage,
  destinations: ["Makkah", "Madinah", "Thaif"],
};

const oktober = {
  slug: "/oktober-2026",
  month: "Oktober",
  year: "2026",
  dates: "30 Sep – 13 Okt 2026",
  days: "14 Hari",
  highlight: "Makkah · Madinah · Thaif",
  image: madinahImage,
  destinations: ["Makkah", "Madinah", "Thaif"],
};

const locked = [
  { month: "Agustus", monthNum: "08", year: "2026", image: umrahImage },
  { month: "September", monthNum: "09", year: "2026", image: qubaImage },
  { month: "November", monthNum: "11", year: "2026", image: jabalImage },
];

/* ── Page ─────────────────────────────────────────────────── */
const HomePage = () => (
  <div className="min-h-screen bg-[#0c0a08] flex flex-col">

    {/* Fixed background */}
    <div className="fixed inset-0 pointer-events-none">
      <img src={departureImage} alt="" className="w-full h-full object-cover"
        style={{ filter: "brightness(0.22) saturate(0.6)" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0c0a08]/95" />
    </div>

    {/* Navbar */}
    <header className="relative z-20 flex items-center justify-between px-5 md:px-10 pt-6 pb-2">
      <img src={logoElmassa} alt="El Massa Tour & Travel" className="h-7 md:h-9 w-auto brightness-0 invert opacity-90" />
      <button onClick={openWhatsApp}
        className="flex items-center gap-2 text-stone-800 font-sans text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full bg-white hover:bg-white/90 transition-all shadow-sm">
        {WHATSAPP_SVG} Hubungi
      </button>
    </header>

    <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-6 pt-6 pb-12">

      {/* Title */}
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="text-center mb-2">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-4">
          <CalendarDays className="w-3 h-3" /> Pilih Jadwal Keberangkatan
        </span>
        <h1 className="font-display font-extrabold text-white leading-[0.92] tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", textShadow: "0 4px 32px rgba(0,0,0,0.7)" }}>
          Itinerary<br />Umrah
        </h1>
        <div className="mx-auto mt-4 mb-2 h-px w-10 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
        <p className="text-white/40 text-xs tracking-wide mt-3">
          Bersama <span className="text-amber-400/80 font-medium">El Massa Tour & Travel</span> · 2026
        </p>
      </motion.div>

      {/* ══ JULI — Hero Featured Card ══ */}
      <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl mt-8">
        <Link to={juli.slug} className="block group">
          <PinkGlowBorder borderRadius="1.25rem" duration={3} thickness="1.5px"
            outerClassName="shadow-[0_12px_60px_rgba(0,0,0,0.7)]">
            <div className="relative bg-[#0e0c0a]">

              {/* Image layer */}
              <div className="relative h-72 sm:h-80 overflow-hidden">
                <img src={juli.image} alt="Juli"
                  className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
                  style={{ filter: "brightness(0.5) saturate(1.1)" }} />
                {/* layered gradients for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e0c0a] via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />
                {/* subtle warm vignette */}
                <div className="absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 30% 80%, rgba(180,120,30,0.18) 0%, transparent 60%)" }} />
              </div>

              {/* Open badge — top right */}
              <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-[0.18em] uppercase px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 backdrop-blur-sm shadow-[0_0_12px_rgba(52,211,153,0.2)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Pendaftaran Dibuka
                </span>
              </div>

              {/* Gold accent line — left edge */}
              <div className="absolute top-6 left-0 w-[3px] h-16 rounded-r-full"
                style={{ background: "linear-gradient(to bottom, transparent, rgba(251,191,36,0.7), transparent)" }} />

              {/* Month — overlaid on image */}
              <div className="absolute top-5 left-5">
                <div className="flex items-baseline gap-3">
                  <p className="font-display font-black text-white leading-none drop-shadow-2xl"
                    style={{ fontSize: "clamp(3.5rem, 12vw, 5rem)", textShadow: "0 4px 32px rgba(0,0,0,0.95)" }}>
                    {juli.month}
                  </p>
                  <span className="font-sans text-white/30 text-xs font-bold tracking-[0.2em] pb-1">{juli.year}</span>
                </div>
                {/* Thin amber underline accent */}
                <div className="mt-1 h-[2px] w-12 rounded-full bg-gradient-to-r from-amber-400/70 to-transparent" />
              </div>

              {/* Bottom info block */}
              <div className="px-5 pt-3 pb-5">
                {/* Destinations row */}
                <div className="flex items-center gap-3 mb-3">
                  {juli.destinations.map((d) => (
                    <span key={d} className="inline-flex items-center gap-1 text-white/40 text-[10px] font-medium">
                      <MapPin className="w-2.5 h-2.5 flex-shrink-0" /> {d}
                    </span>
                  ))}
                </div>

                {/* Date + CTA */}
                <div className="flex items-end justify-between gap-4">
                  <div>
                    <p className="text-white font-bold text-lg leading-tight tracking-tight">{juli.dates}</p>
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-amber-400/90 text-[11px] font-semibold tracking-wide">{juli.days}</span>
                      <span className="text-white/20 text-[10px]">·</span>
                      <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-300/70">
                        <Sparkles className="w-2.5 h-2.5" /> {juli.highlight}
                      </span>
                    </div>
                  </div>

                  {/* CTA button */}
                  <button className="flex-shrink-0 flex items-center gap-2 text-[10px] font-bold tracking-[0.14em] uppercase px-4 py-2 rounded-full bg-amber-400 text-stone-900 group-hover:bg-amber-300 transition-all duration-300 shadow-[0_4px_20px_rgba(251,191,36,0.3)]">
                    Lihat
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </PinkGlowBorder>
        </Link>
      </motion.div>

      {/* ══ Divider ══ */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="w-full max-w-xl mt-7 mb-5 flex items-center gap-3">
        <div className="flex-1 h-px bg-white/10" />
        <span className="text-white/30 text-[9px] font-bold tracking-[0.28em] uppercase">Juga Tersedia</span>
        <div className="flex-1 h-px bg-white/10" />
      </motion.div>

      {/* ══ OKTOBER — Secondary Featured Card ══ */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-xl">
        <Link to={oktober.slug} className="block group">
          <PinkGlowBorder borderRadius="1rem" duration={3.5} thickness="1.5px"
            outerClassName="shadow-[0_8px_40px_rgba(0,0,0,0.55)]">
            <div className="relative bg-[#0e0c0a] flex overflow-hidden" style={{ minHeight: 130 }}>

              {/* Left: text content */}
              <div className="flex-1 flex flex-col justify-between p-4 pr-2 z-10">
                {/* Badge */}
                <span className="self-start inline-flex items-center gap-1 text-[8px] font-bold tracking-[0.15em] uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 backdrop-blur-sm">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  Buka
                </span>

                <div>
                  <p className="font-display font-black text-white/90 leading-none"
                    style={{ fontSize: "clamp(1.8rem, 7vw, 2.5rem)", textShadow: "0 2px 16px rgba(0,0,0,0.9)" }}>
                    {oktober.month}
                  </p>
                  <p className="text-white/25 text-[9px] font-bold tracking-[0.2em] uppercase mt-0.5">{oktober.year}</p>

                  <div className="mt-2">
                    <p className="text-white font-semibold text-sm leading-tight">{oktober.dates}</p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="text-amber-400/80 text-[10px] font-semibold">{oktober.days}</span>
                      <span className="text-white/20 text-[9px]">·</span>
                      <div className="flex items-center gap-1.5">
                        {oktober.destinations.map((d) => (
                          <span key={d} className="inline-flex items-center gap-0.5 text-white/30 text-[9px]">
                            <MapPin className="w-2 h-2 flex-shrink-0" /> {d}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: image panel */}
              <div className="relative w-[42%] flex-shrink-0 overflow-hidden">
                <img src={oktober.image} alt="Oktober"
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ filter: "brightness(0.45) saturate(0.9)" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0e0c0a] via-black/20 to-transparent" />
                {/* Arrow CTA overlaid on image */}
                <div className="absolute bottom-4 right-4">
                  <div className="w-8 h-8 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400/30 group-hover:border-amber-400/70 transition-all duration-300">
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </PinkGlowBorder>
        </Link>
      </motion.div>

      {/* ══ Divider: Segera Hadir ══ */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="w-full max-w-xl mt-7 mb-4 flex items-center gap-3">
        <div className="flex-1 h-px bg-white/8" />
        <span className="text-white/20 text-[9px] font-bold tracking-[0.28em] uppercase">Segera Hadir</span>
        <div className="flex-1 h-px bg-white/8" />
      </motion.div>

      {/* ══ Locked — horizontal strip ══ */}
      <div className="w-full max-w-xl grid grid-cols-3 gap-2.5">
        {locked.map((pkg, i) => (
          <motion.div key={pkg.month}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.85 + i * 0.07, ease: [0.22, 1, 0.36, 1] }}>
            <div className="relative rounded-xl overflow-hidden border border-white/[0.06]" style={{ height: 110 }}>
              <img src={pkg.image} alt={pkg.month}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ filter: "brightness(0.22) saturate(0.4)" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />

              {/* Lock icon */}
              <div className="absolute top-2 right-2">
                <div className="w-5 h-5 rounded-full bg-white/6 border border-white/10 flex items-center justify-center">
                  <Lock className="w-2.5 h-2.5 text-white/25" />
                </div>
              </div>

              {/* Month info */}
              <div className="absolute bottom-0 left-0 right-0 p-2.5">
                <p className="text-[9px] text-white/20 font-bold tracking-[0.15em] uppercase">{pkg.monthNum} · {pkg.year}</p>
                <p className="font-display font-black text-white/50 leading-none text-base mt-0.5">{pkg.month}</p>
                <span className="inline-block mt-1.5 text-[7px] font-bold tracking-[0.12em] uppercase text-white/25 border border-white/10 rounded-full px-1.5 py-0.5">
                  Segera
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="mt-10 text-white/15 text-[9px] tracking-[0.2em] uppercase text-center">
        © 2026 El Massa Tour & Travel · Pangkal Pinang
      </motion.p>
    </main>
  </div>
);

export default HomePage;
