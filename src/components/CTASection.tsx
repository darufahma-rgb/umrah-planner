import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-rose-dark to-brown relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Siap Memulai Perjalanan Suci?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Hubungi kami sekarang untuk konsultasi gratis dan dapatkan penawaran
            terbaik untuk paket umrah Anda.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-8 py-6 text-lg shadow-lg group"
            >
              <Phone className="w-5 h-5 mr-2" />
              Hubungi Kami
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat WhatsApp
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">500+</p>
              <p className="text-xs text-primary-foreground/70">Jamaah Terlayani</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">5⭐</p>
              <p className="text-xs text-primary-foreground/70">Rating Kepuasan</p>
            </div>
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-serif font-bold text-accent">10+</p>
              <p className="text-xs text-primary-foreground/70">Tahun Pengalaman</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;