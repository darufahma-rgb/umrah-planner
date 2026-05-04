import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight, MapPin } from "lucide-react";
import logoElmassa from "@/assets/logo-elmassa.png";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";

const packages = [
  {
    slug: "/juli-2026",
    month: "Juli",
    year: "2026",
    dates: "08 – 18 Juli 2026",
    days: "11 Hari",
    status: "open",
    statusLabel: "Pendaftaran Dibuka",
    image: heroImage,
    destinations: ["Makkah", "Madinah", "Thaif"],
    highlight: "Bonus City Tour Thaif!",
  },
  {
    slug: "/oktober-2026",
    month: "Oktober",
    year: "2026",
    dates: "Oktober 2026",
    days: "Coming Soon",
    status: "soon",
    statusLabel: "Segera Hadir",
    image: madinahImage,
    destinations: ["Makkah", "Madinah"],
    highlight: "Segera diumumkan",
  },
];

const openWhatsApp = () => {
  window.open(
    "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
    "_blank"
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={departureImage}
          alt="background"
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.35) saturate(0.8)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(180,120,60,0.15),transparent_60%)]" />
      </div>

      {/* Navbar */}
      <header className="relative z-10 flex items-center justify-between px-5 md:px-10 py-5">
        <img
          src={logoElmassa}
          alt="El Massa Tour & Travel"
          className="h-8 md:h-10 w-auto brightness-0 invert"
        />
        <button
          onClick={openWhatsApp}
          className="flex items-center gap-2 font-sans text-[11px] font-semibold tracking-widest uppercase px-4 py-2 rounded-full bg-white text-stone-800 hover:bg-white/90 transition-all"
        >
          <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-stone-800 flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Hubungi
        </button>
      </header>

      {/* Hero text */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-5 text-center pt-4 pb-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-[11px] font-medium"
        >
          <CalendarDays className="w-3 h-3 text-accent flex-shrink-0" />
          Pilih Jadwal Keberangkatan
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none tracking-wide mb-2"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          Itinerary
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold text-white leading-none tracking-wide mb-6"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          Umrah
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-4 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="text-white/65 text-sm max-w-xs md:max-w-sm leading-relaxed mb-10"
        >
          Bersama <span className="text-accent font-semibold">El Massa Tour & Travel</span> — pilih keberangkatan yang sesuai untuk Anda.
        </motion.p>

        {/* Package Cards */}
        <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.slug}
              initial={{ opacity: 0, y: 32, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 0.65 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              {pkg.status === "open" ? (
                <Link to={pkg.slug} className="block group">
                  <PackageCard pkg={pkg} />
                </Link>
              ) : (
                <div className="opacity-75 cursor-default">
                  <PackageCard pkg={pkg} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom brand tag */}
      <div className="relative z-10 text-center pb-6">
        <p className="text-white/25 text-[10px] tracking-widest uppercase">
          © 2026 El Massa Tour & Travel
        </p>
      </div>
    </div>
  );
};

const PackageCard = ({ pkg }: { pkg: typeof packages[0] }) => (
  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group-hover:border-white/25 transition-all duration-300 group-hover:-translate-y-1">
    {/* Image */}
    <div className="relative h-44 sm:h-52 overflow-hidden">
      <img
        src={pkg.image}
        alt={pkg.month}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        style={{ filter: pkg.status === "soon" ? "brightness(0.5) saturate(0.6)" : "brightness(0.6) saturate(1.05)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

      {/* Status badge */}
      <div className="absolute top-3 right-3">
        <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border backdrop-blur-sm ${
          pkg.status === "open"
            ? "bg-emerald-500/20 border-emerald-400/40 text-emerald-300"
            : "bg-white/10 border-white/20 text-white/50"
        }`}>
          {pkg.statusLabel}
        </span>
      </div>

      {/* Month / big number */}
      <div className="absolute top-3 left-4">
        <p
          className="font-display font-extrabold text-white/90 leading-none"
          style={{ fontSize: "clamp(2.2rem, 8vw, 3rem)", textShadow: "0 3px 16px rgba(0,0,0,0.8)" }}
        >
          {pkg.month}
        </p>
        <p className="text-white/40 text-xs tracking-[0.2em] font-medium mt-0.5">{pkg.year}</p>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
        <div className="flex items-center gap-1.5 mb-2 flex-wrap">
          {pkg.destinations.map((d) => (
            <span key={d} className="inline-flex items-center gap-1 text-white/55 text-[10px]">
              <MapPin className="w-2.5 h-2.5" />
              {d}
            </span>
          ))}
        </div>
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white font-semibold text-sm leading-snug">{pkg.dates}</p>
            <p className="text-accent text-[11px] font-medium mt-0.5">{pkg.days} · {pkg.highlight}</p>
          </div>
          {pkg.status === "open" && (
            <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/50 flex items-center justify-center group-hover:bg-accent/40 transition-colors flex-shrink-0">
              <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
