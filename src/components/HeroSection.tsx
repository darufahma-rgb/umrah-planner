import heroImage from "@/assets/hero-makkah.jpg";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Star } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Masjidil Haram - Makkah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent" />
            <span className="text-primary-foreground text-sm font-medium">
              Perjalanan Spiritual Terbaik
            </span>
          </div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Itinerary Umrah
            <span className="block text-gradient-gold">Perjalanan Suci Anda</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8 font-light">
            Rencanakan ibadah umrah Anda dengan panduan lengkap dari kami.
            Kunjungi tempat-tempat suci di Makkah dan Madinah dengan khusyuk.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Lihat Jadwal
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              <MapPin className="w-5 h-5 mr-2" />
              Jelajahi Lokasi
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">9</p>
              <p className="text-sm text-primary-foreground/80">Hari Perjalanan</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">2</p>
              <p className="text-sm text-primary-foreground/80">Kota Suci</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">15+</p>
              <p className="text-sm text-primary-foreground/80">Lokasi Ziarah</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary-foreground/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;