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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]" />

      {/* Main Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container mx-auto px-4 pt-20 md:pt-36 pb-6 md:pb-14 flex flex-col items-center"
      >
        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-5 md:mb-9 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 py-1 md:px-4 md:py-1.5 text-white/90 text-[10px] md:text-sm font-medium tracking-wide"
        >
          <CalendarDays className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent flex-shrink-0" />
          30 September – 13 Oktober 2026
        </motion.div>

        {/* Title — two words stacked with explicit gap */}
        <div className="mb-3 md:mb-7 text-center">
          <div className="flex flex-col items-center gap-3 md:gap-5">
            {["Itinerary", "Umrah"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 45, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.85, delay: 0.28 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[12vw] sm:text-5xl md:text-8xl lg:text-9xl font-bold text-white leading-none tracking-wider block"
                style={{ textShadow: "0 4px 28px rgba(139,90,43,0.55), 0 2px 10px rgba(0,0,0,0.6)" }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          {/* Gold divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.68, ease: "easeOut" }}
            className="mx-auto mt-3 md:mt-5 h-px w-20 md:w-44 bg-gradient-to-r from-transparent via-accent to-transparent"
          />

          {/* Year */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.82 }}
            className="mt-2 md:mt-4 text-accent font-light text-lg sm:text-2xl md:text-3xl tracking-[0.3em] uppercase"
          >
            2026
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.98 }}
          className="max-w-[280px] sm:max-w-sm md:max-w-lg text-center text-xs sm:text-sm md:text-lg text-white/88 leading-relaxed mb-5 md:mb-10 font-light"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.9)" }}
        >
          Wujudkan perjalanan suci Anda bersama{" "}
          <span className="text-accent font-semibold">El Massa Tour & Travel</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.12 }}
          className="flex justify-center mb-6 md:mb-16"
        >
          <Button
            onClick={scrollToItinerary}
            className="relative shimmer-effect bg-accent hover:bg-gold-dark text-accent-foreground rounded-full px-6 py-4 md:px-10 md:py-6 text-xs md:text-base font-semibold tracking-wide shadow-2xl animate-gold-glow group transition-all duration-300"
          >
            Lihat Itinerary
            <ArrowRight className="w-3.5 h-3.5 md:w-5 md:h-5 ml-1.5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Destination Cards */}
        <div className="grid grid-cols-3 gap-2 md:gap-5 w-full max-w-4xl">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 35, scale: 0.94 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, delay: 1.25 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer shadow-xl"
              style={{ height: "clamp(90px, 25vw, 220px)" }}
              onClick={scrollToItinerary}
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-1.5 md:p-3.5">
                <div className="bg-white/12 backdrop-blur-md rounded-lg md:rounded-xl p-1.5 md:p-3 border border-white/20 flex items-center justify-between gap-1">
                  <div className="min-w-0">
                    <h3 className="font-display text-sm sm:text-lg md:text-2xl text-white font-medium leading-tight truncate">
                      {dest.name}
                    </h3>
                    <p className="text-white/65 text-[8px] md:text-xs tracking-widest uppercase hidden sm:block">
                      {dest.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 text-white/65 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="hidden md:flex mt-14 flex-col items-center gap-1.5"
        >
          <p className="text-white/35 text-[9px] tracking-widest uppercase">Scroll</p>
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
