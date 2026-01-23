import heroImage from "@/assets/hero-makkah.jpg";
import logoElmassa from "@/assets/logo-elmassa.png";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowDown, Phone, Star } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const scrollToItinerary = () => {
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image - Full Width */}
      <div className="absolute inset-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={heroImage}
          alt="Masjidil Haram - Makkah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/30" />
      </div>

      {/* Content - Split Layout */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-left"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <img
                src={logoElmassa}
                alt="El Massa Tour & Travel"
                className="h-20 md:h-28 w-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Bismillah */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-accent text-xl md:text-2xl font-serif mb-4"
            >
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
            </motion.p>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Perjalanan Suci
              <br />
              <span className="text-accent">Menuju Baitullah</span>
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="w-24 h-1 bg-accent mb-6 origin-left"
            />

            <p className="text-lg md:text-xl text-primary-foreground/90 max-w-xl mb-8 font-light leading-relaxed">
              Wujudkan impian ibadah Umroh Anda bersama El Massa Tour & Travel.
              Perjalanan spiritual yang nyaman, aman, dan penuh keberkahan ke Tanah Suci.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
              <Button
                size="lg"
                onClick={scrollToItinerary}
                className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-lg shadow-2xl group"
              >
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Lihat Jadwal
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openWhatsApp}
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg group"
              >
                <Phone className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Hubungi Kami
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap items-center gap-4"
            >
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="text-primary-foreground/90 text-sm">Terpercaya Sejak 2010</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full border border-primary-foreground/20">
                <span className="text-primary-foreground/90 text-sm">✓ Berizin Resmi Kemenag</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "10", label: "Hari Perjalanan", icon: "📅" },
                { value: "2", label: "Kota Suci", icon: "🕌" },
                { value: "5★", label: "Hotel Berbintang", icon: "🏨" },
                { value: "24/7", label: "Pendampingan", icon: "👨‍👩‍👧‍👦" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.15 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-6 border border-primary-foreground/20 cursor-default group hover:bg-primary-foreground/15 transition-all"
                >
                  <span className="text-3xl mb-3 block">{stat.icon}</span>
                  <p className="text-4xl font-serif font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Featured Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="mt-6 bg-accent/20 backdrop-blur-md rounded-2xl p-6 border border-accent/30"
            >
              <p className="text-accent font-semibold text-lg mb-2">🎁 Bonus Spesial</p>
              <p className="text-primary-foreground/90">
                City Tour Thaif GRATIS untuk semua jamaah!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        onClick={scrollToItinerary}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/70 hover:text-accent transition-colors"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default HeroSection;