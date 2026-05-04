import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { Link } from "react-router-dom";
import { ChevronLeft, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";

const OktoberPage = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh%20Oktober%202026",
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Back button */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        className="fixed bottom-6 left-4 z-40"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-stone-200 shadow-lg rounded-full px-3.5 py-2 text-stone-700 text-xs font-semibold hover:bg-white transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Semua Jadwal
        </Link>
      </motion.div>

      {/* Hero */}
      <section className="relative h-[70vh] min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={madinahImage}
            alt="Madinah"
            className="w-full h-full object-cover"
            style={{ filter: "brightness(0.45) saturate(0.85)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-5">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="mb-5 inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-[11px] font-medium"
          >
            <CalendarDays className="w-3 h-3 text-accent flex-shrink-0" />
            Oktober 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-wide mb-2"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
            >
              Itinerary
            </h1>
            <h1
              className="font-display text-6xl sm:text-7xl md:text-8xl font-extrabold text-white leading-none tracking-wide"
              style={{ textShadow: "0 2px 20px rgba(0,0,0,0.7)" }}
            >
              Umrah
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mx-auto my-5 h-px w-16 bg-gradient-to-r from-transparent via-accent to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-white/70 text-sm max-w-xs mx-auto leading-relaxed"
          >
            Paket umroh Oktober 2026 bersama <span className="text-accent font-semibold">El Massa Tour & Travel</span> sedang dalam persiapan.
          </motion.p>
        </div>
      </section>

      {/* Coming soon section */}
      <section className="py-20 px-5 flex flex-col items-center text-center bg-stone-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-md"
        >
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-7 h-7 text-accent" />
          </div>

          <h2 className="font-serif text-2xl md:text-3xl font-bold text-stone-800 mb-3">
            Segera Hadir
          </h2>
          <p className="text-stone-500 text-sm leading-relaxed mb-8">
            Detail itinerary dan jadwal keberangkatan Oktober 2026 sedang kami siapkan. Daftarkan minat Anda sekarang agar mendapat notifikasi pertama!
          </p>

          <button
            onClick={openWhatsApp}
            className="inline-flex items-center gap-2.5 bg-[hsl(var(--primary))] hover:opacity-90 text-white rounded-full px-7 py-3.5 text-sm font-semibold transition-all shadow-lg"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Daftar Minat via WhatsApp
          </button>
        </motion.div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default OktoberPage;
