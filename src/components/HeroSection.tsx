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
    <section className="relative min-h-[100svh] flex flex-col overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/90" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center container mx-auto px-4 pt-20 pb-4">
        <div className="max-w-4xl">
          {/* Title with Year */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-start gap-2 md:gap-4 mb-4 md:mb-6"
          >
            <h1 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] font-light text-primary-foreground leading-none tracking-tight">
              Umrah
            </h1>
            <span className="text-primary-foreground/60 text-lg sm:text-xl md:text-3xl lg:text-4xl font-light mt-1 md:mt-4">
              2025
            </span>
          </motion.div>

          {/* Description with left border */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="border-l-2 border-primary-foreground/40 pl-4 md:pl-6 max-w-md md:max-w-xl mb-6 md:mb-10"
          >
            <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-primary-foreground/80 font-light leading-relaxed">
              Wujudkan perjalanan suci Anda. Pengalaman spiritual yang penuh berkah menuju Tanah Suci bersama El Massa.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-start"
          >
            <Button
              onClick={scrollToItinerary}
              className="bg-primary-foreground/20 hover:bg-primary-foreground/30 backdrop-blur-md text-primary-foreground border border-primary-foreground/30 rounded-full px-6 py-5 md:px-8 md:py-6 text-xs sm:text-sm md:text-base font-medium tracking-wider uppercase group transition-all"
            >
              Lihat Itinerary
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Destination Cards */}
      <div className="relative z-10 container mx-auto px-3 md:px-4 pb-4 md:pb-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-3 gap-2 md:gap-6"
        >
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 + index * 0.15 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="group relative h-28 sm:h-36 md:h-56 lg:h-64 rounded-xl md:rounded-2xl overflow-hidden cursor-pointer"
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
              <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg md:rounded-xl p-2 md:p-4 border border-white/20">
                  <h3 className="font-serif text-sm sm:text-base md:text-2xl lg:text-3xl text-white font-light leading-tight">
                    {dest.name}
                  </h3>
                  <p className="text-white/70 text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-wider uppercase hidden sm:block">
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