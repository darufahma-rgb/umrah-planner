import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const CTASection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh.",
      "_blank"
    );
  };

  const callPhone = () => {
    window.open("tel:+6281234567890", "_blank");
  };

  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-pink via-pink-dark to-rose relative overflow-hidden">
      <div className="absolute inset-0 bg-pattern-islamic opacity-20" />

      <div className="container mx-auto px-3 md:px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-serif text-xl md:text-3xl font-bold text-primary-foreground mb-3">
            Siap Memulai Perjalanan Suci?
          </h2>
          <p className="text-sm md:text-base text-primary-foreground/80 mb-6">
            Hubungi kami untuk konsultasi gratis dan penawaran terbaik paket umrah El Massa.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={callPhone}
              className="w-full sm:w-auto bg-accent hover:bg-gold-dark text-accent-foreground font-semibold px-6 py-5 text-sm shadow-lg group"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
              <ArrowRight className="w-3 h-3 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              onClick={openWhatsApp}
              className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-6 py-5 text-sm group"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat WhatsApp
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-8 grid grid-cols-3 gap-4 max-w-sm mx-auto"
          >
            <div className="text-center">
              <p className="text-xl md:text-2xl font-serif font-bold text-accent">500+</p>
              <p className="text-[10px] md:text-xs text-primary-foreground/70">Jamaah</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-serif font-bold text-accent">5⭐</p>
              <p className="text-[10px] md:text-xs text-primary-foreground/70">Rating</p>
            </div>
            <div className="text-center">
              <p className="text-xl md:text-2xl font-serif font-bold text-accent">10+</p>
              <p className="text-[10px] md:text-xs text-primary-foreground/70">Tahun</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;