import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const destinations = [
  { name: "Makkah", subtitle: "KOTA SUCI", image: heroImage },
  { name: "Madinah", subtitle: "KOTA BERCAHAYA", image: madinahImage },
  { name: "Thaif", subtitle: "CITY TOUR", image: cityTaifImage },
];

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], ["0%", "20%"]);
  const bgScale = useTransform(scrollY, [0, 600], [1, 1.1]);
  const contentOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const contentY = useTransform(scrollY, [0, 350], ["0%", "-10%"]);

  const scrollToItinerary = () => {
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative flex flex-col overflow-hidden bg-primary min-h-screen">
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          style={{ y: bgY, scale: bgScale }}
          src={heroImage}
          alt="Masjidil Haram - Makkah"
          className="w-full h-full object-cover origin-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/25 via-transparent to-primary/15" />
      </div>

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container mx-auto px-4 pt-28 md:pt-36 pb-10 md:pb-14 flex flex-col items-center"
      >
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-7 md:mb-9 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 text-white/90 text-xs md:text-sm font-medium tracking-wide"
        >
          <CalendarDays className="w-3.5 h-3.5 text-accent" />
          30 September – 13 Oktober 2026
        </motion.div>

        {/* Cinematic staggered title */}
        <div className="mb-5 md:mb-7 text-center">
          <div className="flex flex-wrap justify-center items-baseline gap-x-4 md:gap-x-6">
            {["Itinerary", "Umrah"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 55, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.9, delay: 0.28 + i * 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-wide"
                style={{ textShadow: "0 4px 28px rgba(139,90,43,0.55), 0 2px 10px rgba(0,0,0,0.6)" }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Gold divider line */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.72, ease: "easeOut" }}
            className="mx-auto mt-4 md:mt-5 h-px w-28 md:w-44 bg-gradient-to-r from-transparent via-accent to-transparent"
          />

          {/* Year */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-3 md:mt-4 text-accent font-light text-xl sm:text-2xl md:text-3xl tracking-[0.3em] uppercase"
          >
            2026
          </motion.p>
        </div>

        {/* Subtitle — high contrast */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="max-w-sm md:max-w-lg text-center text-sm sm:text-base md:text-lg text-white/90 leading-relaxed mb-8 md:mb-10 font-light"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.9), 0 0 40px rgba(0,0,0,0.6)" }}
        >
          Wujudkan perjalanan suci Anda. Pengalaman spiritual yang penuh berkah bersama{" "}
          <span className="text-accent font-semibold">El Massa Tour & Travel</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.15 }}
          className="flex justify-center mb-12 md:mb-16"
        >
          <Button
            onClick={scrollToItinerary}
            className="relative shimmer-effect bg-accent hover:bg-gold-dark text-accent-foreground rounded-full px-8 py-5 md:px-10 md:py-6 text-sm md:text-base font-semibold tracking-wide shadow-2xl animate-gold-glow group transition-all duration-300"
          >
            Lihat Itinerary
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-3 gap-3 md:gap-5 w-full max-w-4xl">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 45, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.3 + index * 0.14, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -7, scale: 1.03 }}
              className="group relative h-28 sm:h-36 md:h-48 lg:h-56 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
              onClick={scrollToItinerary}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-2 md:p-3.5">
                <div className="bg-white/12 backdrop-blur-md rounded-xl p-2 md:p-3 border border-white/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base sm:text-xl md:text-2xl text-white font-medium leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-white/70 text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase mt-0.5 hidden sm:block">
                      {dest.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-white/70 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="mt-10 md:mt-14 flex flex-col items-center gap-1.5"
        >
          <p className="text-white/35 text-[9px] tracking-widest uppercase">Scroll</p>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-8 md:h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
