import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const destinations = [
  {
    name: "Makkah",
    subtitle: "KOTA SUCI",
    image: heroImage,
  },
  {
    name: "Madinah",
    subtitle: "KOTA BERCAHAYA",
    image: madinahImage,
  },
  {
    name: "Thaif",
    subtitle: "CITY TOUR",
    image: cityTaifImage,
  },
];

const HeroSection = () => {
  const scrollToItinerary = () => {
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[120svh] flex flex-col overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={heroImage}
          alt="Masjidil Haram - Makkah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 pt-24 pb-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 md:mb-10"
          >
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-primary-foreground leading-tight tracking-tight">
              Itinerary Perjalanan Umrah
            </h1>
            <span className="inline-block mt-4 text-primary-foreground/70 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light">
              2025
            </span>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-2xl mx-auto mb-8 md:mb-12"
          >
            <p className="text-base sm:text-lg md:text-2xl lg:text-3xl text-primary-foreground/80 font-light leading-relaxed">
              Wujudkan perjalanan suci Anda bersama El Massa Tour & Travel
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center"
          >
            <Button
              onClick={scrollToItinerary}
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-md text-primary-foreground border border-primary-foreground/30 rounded-full px-8 py-6 md:px-10 md:py-7 text-sm sm:text-base md:text-lg font-medium tracking-wider uppercase group transition-all"
            >
              Lihat Jadwal Lengkap
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Destination Cards - Stacked on mobile */}
      <div className="relative z-10 container mx-auto px-4 pb-6 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl overflow-hidden cursor-pointer"
              onClick={scrollToItinerary}
            >
              {/* Card Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              
              {/* Glassmorphism Label */}
              <div className="absolute bottom-3 left-3 right-3 md:bottom-4 md:left-4 md:right-4">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 md:p-4 border border-white/20">
                  <h3 className="font-display text-xl sm:text-2xl md:text-2xl lg:text-3xl text-white font-medium leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-xs sm:text-sm md:text-xs lg:text-sm tracking-wider uppercase mt-1">
                    {dest.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;