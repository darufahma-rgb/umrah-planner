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
    <section className="relative flex flex-col overflow-hidden bg-primary">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 md:pt-32 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title with Year - Mobile: Side by side like reference */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 md:mb-8"
          >
            <div className="flex items-start justify-center gap-2">
              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-wide">
                Itinerary Umrah
              </h1>
              <span className="text-white/70 text-xl sm:text-2xl md:text-3xl font-light mt-1">
                2026
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-md md:max-w-xl mx-auto mb-8 md:mb-10"
          >
            <p className="text-sm sm:text-base md:text-xl text-white/80 font-light leading-relaxed">
              Wujudkan perjalanan suci Anda. Pengalaman spiritual yang penuh berkah bersama El Massa Tour & Travel.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center mb-10 md:mb-16"
          >
            <Button
              onClick={scrollToItinerary}
              className="bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/30 rounded-full px-6 py-5 md:px-8 md:py-6 text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase group transition-all"
            >
              View Itinerary
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>

        {/* Destination Cards - Stacked on mobile like reference */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:grid md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative h-36 sm:h-40 md:h-48 lg:h-56 rounded-2xl overflow-hidden cursor-pointer"
              onClick={scrollToItinerary}
            >
              {/* Card Background Image */}
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Glassmorphism Label - Like reference with arrow */}
              <div className="absolute bottom-3 left-3 right-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-white/20 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-white font-medium leading-tight">
                      {dest.name}
                    </h3>
                    <p className="text-white/70 text-[10px] sm:text-xs tracking-wider uppercase mt-0.5">
                      {dest.subtitle}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
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