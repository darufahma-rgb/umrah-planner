import heroImage from "@/assets/hero-makkah.jpg";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowDown } from "lucide-react";

const HeroSection = () => {
  const scrollToItinerary = () => {
    document.getElementById("jadwal")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Masjidil Haram - Makkah"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-up max-w-4xl mx-auto">
          {/* Bismillah */}
          <p className="text-accent text-lg md:text-xl font-serif mb-4">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Itinerary Umrah
          </h1>

          <div className="w-24 h-1 bg-accent mx-auto mb-6" />

          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Perjalanan spiritual menuju Baitullah dengan panduan lengkap
            ke Makkah Al-Mukarramah dan Madinah Al-Munawwarah
          </p>

          <Button
            size="lg"
            onClick={scrollToItinerary}
            className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-10 py-7 text-lg shadow-2xl"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Lihat Jadwal Perjalanan
          </Button>

          {/* Stats Row */}
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">9</p>
              <p className="text-xs md:text-sm text-primary-foreground/80">Hari</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">2</p>
              <p className="text-xs md:text-sm text-primary-foreground/80">Kota Suci</p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-4 border border-primary-foreground/20">
              <p className="text-3xl md:text-4xl font-serif font-bold text-accent">15+</p>
              <p className="text-xs md:text-sm text-primary-foreground/80">Lokasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToItinerary}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-primary-foreground/70 hover:text-accent transition-colors"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default HeroSection;