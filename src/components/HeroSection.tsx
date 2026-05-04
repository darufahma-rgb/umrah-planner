import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Destination {
  name: string;
  subtitle: string;
  image: string;
}

interface HeroSectionProps {
  dateText?: string;
  bgImage?: string;
  /* CSS color used in the left-side tint overlay — matches photo mood */
  sideTint?: string;
  /* Radial glow at bottom-left corner — warm or cool */
  cornerGlow?: string;
  destinations?: Destination[];
  /** e.g. "JULI 2026" — shown as large watermark label at top of hero */
  monthLabel?: string;
}

const defaultDestinations: Destination[] = [
  { name: "Makkah",  subtitle: "Kota Suci",       image: heroImage    },
  { name: "Madinah", subtitle: "Kota Bercahaya",   image: madinahImage },
  { name: "Thaif",   subtitle: "City Tour",        image: cityTaifImage },
];

const HeroSection = ({
  dateText      = "08 Juli – 18 Juli 2026",
  bgImage       = heroImage,
  sideTint      = "rgba(90,45,10,0.28)",
  cornerGlow    = "rgba(180,120,30,0.22)",
  destinations  = defaultDestinations,
  monthLabel,
}: HeroSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY            = useTransform(scrollY, [0, 600],  ["0%", "18%"]);
  const contentOpacity = useTransform(scrollY, [0, 350],  [1, 0]);
  const contentY       = useTransform(scrollY, [0, 350],  ["0%", "-8%"]);

  const scrollToItinerary = () =>
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-navy-dark">

      {/* ── Parallax background ── */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 will-change-transform">
          <motion.img
            key={bgImage}
            animate={{
              scale: [1, 1.08, 1.04, 1.08, 1],
              x: ["0%", "-1.5%", "1%", "-0.5%", "0%"],
              y: ["0%", "-1%", "0.5%", "-0.5%", "0%"],
            }}
            transition={{ duration: 22, ease: "easeInOut", repeat: Infinity, repeatType: "mirror" }}
            src={bgImage}
            alt="Hero"
            className="w-full h-full object-cover origin-center"
          />
        </motion.div>

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/85" />

        {/* Side tint — unique per month */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to right, ${sideTint} 0%, transparent 55%)`,
          }}
        />

        {/* Corner glow — warm or cool */}
        <div
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 20% 90%, ${cornerGlow} 0%, transparent 70%)`,
          }}
        />
      </div>

      {/* Vignette edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(0,0,0,0.45)_100%)]" />


      {/* ── Main content ── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 container mx-auto px-4 pt-20 md:pt-36 pb-8 md:pb-16 flex flex-col items-center"
      >
        {/* Month label */}
        {monthLabel && (
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mb-2 font-sans font-semibold uppercase tracking-[0.3em] text-white/70 text-[11px] md:text-xs text-center"
          >
            {monthLabel}
          </motion.p>
        )}

        {/* Date badge */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mb-5 md:mb-8 flex items-center gap-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3.5 py-1.5 text-white/90 text-[11px] md:text-sm font-medium"
        >
          <CalendarDays className="w-3 h-3 md:w-3.5 md:h-3.5 text-accent flex-shrink-0" />
          {dateText}
        </motion.div>

        {/* Title */}
        <div className="mb-4 md:mb-8 text-center">
          <div className="flex flex-col items-center gap-2 md:gap-4">
            {["Itinerary", "Umrah"].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 50, rotateX: -12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.85, delay: 0.28 + i * 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-[13vw] sm:text-6xl md:text-8xl lg:text-9xl font-extrabold text-white leading-none tracking-wider block"
                style={{ textShadow: "0 2px 10px rgba(90,45,10,0.45)" }}
              >
                {word}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.75, delay: 0.68, ease: "easeOut" }}
            className="mx-auto mt-3 md:mt-5 h-px w-20 md:w-44 bg-gradient-to-r from-transparent via-accent to-transparent"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.65, delay: 0.82 }}
            className="mt-2 md:mt-4 text-accent font-semibold text-lg sm:text-2xl md:text-3xl tracking-[0.35em] uppercase"
          >
            2026
          </motion.p>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.96 }}
          className="max-w-[270px] sm:max-w-xs md:max-w-lg text-center text-xs sm:text-sm md:text-base text-white/80 leading-relaxed mb-5 md:mb-10 font-light"
          style={{ textShadow: "0 1px 12px rgba(0,0,0,0.9)" }}
        >
          Wujudkan perjalanan suci Anda bersama{" "}
          <span className="text-accent font-semibold">El Massa Tour & Travel</span>.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 1.1 }}
          className="mb-8 md:mb-14"
        >
          <Button
            onClick={scrollToItinerary}
            className="shimmer-effect bg-accent hover:bg-gold-dark text-accent-foreground rounded-full px-7 py-4 md:px-10 md:py-6 text-sm md:text-base font-semibold tracking-wide shadow-2xl shadow-accent/30 animate-gold-glow group transition-all duration-300"
          >
            Lihat Itinerary
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>

        {/* Destination cards */}
        <div className="w-full max-w-4xl">
          {/* Mobile */}
          <div className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory md:hidden scrollbar-hide">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.22 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                onClick={scrollToItinerary}
                className="group relative flex-shrink-0 w-[140px] h-[100px] rounded-2xl overflow-hidden cursor-pointer snap-start shadow-xl"
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-white font-bold text-sm leading-none">{dest.name}</p>
                      <p className="text-white/60 text-[9px] mt-0.5 flex items-center gap-0.5">
                        <MapPin className="w-2 h-2" />{dest.subtitle}
                      </p>
                    </div>
                    <ArrowRight className="w-3 h-3 text-accent flex-shrink-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop */}
          <div className="hidden md:grid grid-cols-3 gap-5">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 40, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.7, delay: 1.28 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative h-52 lg:h-60 rounded-2xl overflow-hidden cursor-pointer shadow-2xl"
                onClick={scrollToItinerary}
              >
                <img src={dest.image} alt={dest.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="text-white font-bold text-xl leading-none mb-1">{dest.name}</h3>
                      <p className="text-white/60 text-xs tracking-widest uppercase flex items-center gap-1">
                        <MapPin className="w-3 h-3" />{dest.subtitle}
                      </p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center group-hover:bg-accent/40 transition-colors">
                      <ArrowRight className="w-3.5 h-3.5 text-accent group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="hidden md:flex mt-12 flex-col items-center gap-1.5"
        >
          <p className="text-white/30 text-[9px] tracking-widest uppercase">Scroll</p>
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
