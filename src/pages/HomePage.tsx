import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, MapPin, Lock } from "lucide-react";
import logoElmassa from "@/assets/logo-elmassa.png";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";
import umrahImage from "@/assets/umrah-pilgrims.jpg";
import qubaImage from "@/assets/masjid-quba.jpg";
import jabalImage from "@/assets/jabal-rahmah.jpg";

const WA_PATH = "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh";

const openWhatsApp = () => window.open(WA_PATH, "_blank");

const featured = {
  slug: "/juli-2026",
  month: "Juli",
  monthNum: "07",
  year: "2026",
  dates: "08 – 18 Juli 2026",
  days: "11 Hari",
  status: "open" as const,
  statusLabel: "Pendaftaran Dibuka",
  image: heroImage,
  destinations: ["Makkah", "Madinah", "Thaif"],
  highlight: "Bonus City Tour Thaif Gratis",
};

const comingSoon = [
  {
    month: "Agustus",
    monthNum: "08",
    year: "2026",
    image: umrahImage,
    destinations: ["Makkah", "Madinah"],
    slug: null,
  },
  {
    month: "September",
    monthNum: "09",
    year: "2026",
    image: qubaImage,
    destinations: ["Makkah", "Madinah"],
    slug: null,
  },
  {
    month: "Oktober",
    monthNum: "10",
    year: "2026",
    image: madinahImage,
    destinations: ["Makkah", "Madinah", "Thaif"],
    slug: "/oktober-2026",
  },
  {
    month: "November",
    monthNum: "11",
    year: "2026",
    image: jabalImage,
    destinations: ["Makkah", "Madinah"],
    slug: null,
  },
];

const WHATSAPP_SVG = (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/* ── Pink running-light border ─────────────────────────────────────────── */
const PinkGlowBorder = ({
  children,
  outerClassName = "",
  innerClassName = "",
  borderRadius = "1rem",
  duration = 3,
}: {
  children: React.ReactNode;
  outerClassName?: string;
  innerClassName?: string;
  borderRadius?: string;
  duration?: number;
}) => (
  <div
    className={`relative overflow-hidden ${outerClassName}`}
    style={{ borderRadius, padding: "1.5px" }}
  >
    {/* Rotating conic gradient — creates the travelling light */}
    <motion.div
      className="absolute pointer-events-none"
      style={{
        width: "200%",
        height: "200%",
        top: "-50%",
        left: "-50%",
        background:
          "conic-gradient(from 0deg, transparent 0%, transparent 70%, rgba(255,182,193,0) 73%, rgba(255,182,193,0.85) 80%, rgba(255,105,180,0.6) 85%, rgba(255,182,193,0.85) 90%, rgba(255,182,193,0) 93%, transparent 100%)",
      }}
      animate={{ rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    />
    {/* Faint static pink glow underneath the runner */}
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        borderRadius,
        boxShadow: "0 0 12px 1px rgba(255,150,180,0.18)",
      }}
    />
    {/* Card content — sits above the gradient */}
    <div
      className={`relative overflow-hidden ${innerClassName}`}
      style={{ borderRadius: `calc(${borderRadius} - 1.5px)` }}
    >
      {children}
    </div>
  </div>
);

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#0c0a08] flex flex-col">

      {/* ── Fixed background ── */}
      <div className="fixed inset-0 pointer-events-none">
        <img
          src={departureImage}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.22) saturate(0.6)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-[#0c0a08]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(180,120,40,0.08),transparent)]" />
      </div>

      {/* ── Navbar ── */}
      <header className="relative z-20 flex items-center justify-between px-5 md:px-10 pt-6 pb-2">
        <img src={logoElmassa} alt="El Massa Tour & Travel" className="h-7 md:h-9 w-auto brightness-0 invert opacity-90" />
        <button
          onClick={openWhatsApp}
          className="flex items-center gap-2 text-stone-800 font-sans text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full bg-white hover:bg-white/90 transition-all shadow-sm"
        >
          {WHATSAPP_SVG}
          Hubungi
        </button>
      </header>

      {/* ── Page content ── */}
      <main className="relative z-10 flex-1 flex flex-col items-center px-4 md:px-6 pt-8 pb-10">

        {/* Title block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-2"
        >
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.22em] uppercase text-white/35 mb-4">
            <CalendarDays className="w-3 h-3" />
            Pilih Jadwal Keberangkatan
          </span>
          <h1
            className="font-display font-extrabold text-white leading-[0.92] tracking-tight"
            style={{ fontSize: "clamp(3rem, 10vw, 5.5rem)", textShadow: "0 4px 32px rgba(0,0,0,0.7)" }}
          >
            Itinerary<br />
            Umrah
          </h1>
          <div className="mx-auto mt-4 mb-2 h-px w-10 bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />
          <p className="text-white/40 text-xs tracking-wide mt-3">
            Bersama <span className="text-amber-400/80 font-medium">El Massa Tour & Travel</span> · 2026
          </p>
        </motion.div>

        {/* ── Featured card (Juli – OPEN) ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-xl mt-8"
        >
          <Link to={featured.slug} className="block group">
            <PinkGlowBorder
              outerClassName="shadow-[0_8px_48px_rgba(0,0,0,0.6)]"
              borderRadius="1rem"
              duration={3}
            >
              {/* Image */}
              <div className="relative h-52 sm:h-64 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.month}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  style={{ filter: "brightness(0.55) saturate(1.05)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/5" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
              </div>

              {/* Open badge */}
              <div className="absolute top-3.5 right-3.5">
                <span className="inline-flex items-center gap-1 text-[9px] font-bold tracking-[0.18em] uppercase px-2.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Pendaftaran Dibuka
                </span>
              </div>

              {/* Month name */}
              <div className="absolute top-6 left-5">
                <p
                  className="font-display font-black text-white leading-none"
                  style={{ fontSize: "clamp(2.8rem, 9vw, 4rem)", textShadow: "0 4px 24px rgba(0,0,0,0.9)" }}
                >
                  {featured.month}
                </p>
                <p className="text-white/35 text-[10px] tracking-[0.25em] font-semibold uppercase mt-0.5">{featured.year}</p>
              </div>

              {/* Bottom meta */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-5">
                <div className="flex items-center gap-3 mb-2.5">
                  {featured.destinations.map((d) => (
                    <span key={d} className="inline-flex items-center gap-1 text-white/45 text-[10px] font-medium">
                      <MapPin className="w-2.5 h-2.5 flex-shrink-0" />
                      {d}
                    </span>
                  ))}
                </div>

                <div className="flex items-end justify-between gap-3">
                  <div>
                    <p className="text-white font-bold text-base leading-tight tracking-tight">{featured.dates}</p>
                    <p className="text-amber-400 text-[11px] font-semibold mt-1 tracking-wide">{featured.days} · {featured.highlight}</p>
                  </div>
                  <div className="flex-shrink-0 w-9 h-9 rounded-full bg-amber-400/15 border border-amber-400/40 flex items-center justify-center group-hover:bg-amber-400/30 group-hover:border-amber-400/70 transition-all duration-300">
                    <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </PinkGlowBorder>
          </Link>
        </motion.div>

        {/* ── Section label: Coming Soon ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.55 }}
          className="w-full max-w-xl mt-8 mb-4 flex items-center gap-3"
        >
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-white/30 text-[9px] font-bold tracking-[0.28em] uppercase">Jadwal Berikutnya</span>
          <div className="flex-1 h-px bg-white/10" />
        </motion.div>

        {/* ── 2×2 Coming soon grid ── */}
        <div className="w-full max-w-xl grid grid-cols-2 gap-3">
          {comingSoon.map((pkg, i) => (
            <motion.div
              key={pkg.month}
              initial={{ opacity: 0, y: 20, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, delay: 0.6 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.slug ? (
                <Link to={pkg.slug} className="block group">
                  <SoonCard pkg={pkg} open />
                </Link>
              ) : (
                <SoonCard pkg={pkg} open={false} />
              )}
            </motion.div>
          ))}
        </div>

        {/* ── Footer note ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-10 text-white/20 text-[9px] tracking-[0.2em] uppercase text-center"
        >
          © 2026 El Massa Tour & Travel · Pangkal Pinang
        </motion.p>
      </main>
    </div>
  );
};

const SoonCard = ({ pkg, open }: { pkg: typeof comingSoon[0]; open: boolean }) => {
  const cardInner = (
    <div className="relative">
      {/* Image */}
      <div className="relative h-[148px] sm:h-[160px] overflow-hidden">
        <img
          src={pkg.image}
          alt={pkg.month}
          className={`w-full h-full object-cover transition-transform duration-700 ${open ? "group-hover:scale-105" : ""}`}
          style={{ filter: open ? "brightness(0.45) saturate(0.85)" : "brightness(0.28) saturate(0.5)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
      </div>

      {/* Top-right badge */}
      <div className="absolute top-2.5 right-2.5">
        {open ? (
          <span className="inline-flex items-center gap-1 text-[8px] font-bold tracking-[0.12em] uppercase px-2 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 backdrop-blur-sm">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            Buka
          </span>
        ) : (
          <div className="w-6 h-6 rounded-full bg-white/8 border border-white/12 flex items-center justify-center backdrop-blur-sm">
            <Lock className="w-3 h-3 text-white/30" />
          </div>
        )}
      </div>

      {/* Month number + year — top left */}
      <div className="absolute top-3 left-3">
        <p className={`font-sans text-[9px] font-bold tracking-[0.15em] ${open ? "text-white/35" : "text-white/25"}`}>
          {pkg.monthNum} · {pkg.year}
        </p>
      </div>

      {/* Month name */}
      <div className="absolute top-8 left-3 right-10">
        <p className={`font-display font-black leading-none text-[1.15rem] ${open ? "text-white/85" : "text-white/70"}`}>
          {pkg.month}
        </p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-3 pb-3">
        <div className="flex items-center gap-2 flex-wrap mb-2">
          {pkg.destinations.map((d) => (
            <span key={d} className={`inline-flex items-center gap-0.5 text-[9px] ${open ? "text-white/35" : "text-white/25"}`}>
              <MapPin className="w-2 h-2 flex-shrink-0" />
              {d}
            </span>
          ))}
        </div>

        {open ? (
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-[8px] font-bold tracking-[0.12em] uppercase text-amber-400">
              30 Sep – 13 Okt 2026
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-0.5 transition-transform" />
          </div>
        ) : (
          <span className="inline-flex items-center gap-1 text-[8px] font-bold tracking-[0.15em] uppercase text-white/30 border border-white/12 rounded-full px-2 py-0.5">
            Segera Hadir
          </span>
        )}
      </div>
    </div>
  );

  if (open) {
    return (
      <PinkGlowBorder
        outerClassName="shadow-lg group-hover:-translate-y-0.5 transition-transform duration-300"
        borderRadius="0.75rem"
        duration={3.5}
      >
        {cardInner}
      </PinkGlowBorder>
    );
  }

  return (
    <div className="relative rounded-xl overflow-hidden shadow-lg border border-white/[0.07]">
      {cardInner}
    </div>
  );
};

export default HomePage;
