import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowRight, Star, Users, CalendarCheck } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { icon: Users, value: "500+", label: "Jamaah Diberangkatkan" },
  { icon: Star, value: "5.0", label: "Rating Pelayanan" },
  { icon: CalendarCheck, value: "10+", label: "Tahun Pengalaman" },
];

const CTASection = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh.",
      "_blank"
    );
  };

  const callPhone = () => {
    window.open("tel:+6281249476778", "_blank");
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary via-secondary to-brown-dark relative overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-pattern-islamic opacity-15" />

      {/* Gold line top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/70 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0.6 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border border-accent/40 bg-accent/10 text-accent text-xs font-medium tracking-widest uppercase"
          >
            <span className="w-1 h-1 rounded-full bg-accent" />
            Daftar Sekarang
            <span className="w-1 h-1 rounded-full bg-accent" />
          </motion.div>

          <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary-foreground mb-4 leading-tight">
            Siap Memulai Perjalanan Suci?
          </h2>

          <div className="mx-auto mb-6 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <p className="text-sm md:text-base text-primary-foreground/75 mb-8 leading-relaxed max-w-lg mx-auto">
            Hubungi kami untuk konsultasi gratis dan penawaran terbaik paket umrah El Massa. Kursi terbatas!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              onClick={callPhone}
              className="w-full sm:w-auto shimmer-effect bg-accent hover:bg-gold-dark text-accent-foreground font-semibold rounded-full px-7 py-5 text-sm shadow-xl group transition-all"
            >
              <Phone className="w-4 h-4 mr-2" />
              Hubungi Kami
              <ArrowRight className="w-3.5 h-3.5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={openWhatsApp}
              className="w-full sm:w-auto bg-whatsapp hover:bg-whatsapp-hover text-white rounded-full px-7 py-5 text-sm group border-0 shadow-lg transition-all"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Chat WhatsApp
            </Button>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          viewport={{ once: true }}
          className="mt-14 md:mt-16 max-w-sm md:max-w-lg mx-auto"
        >
          <div className="grid grid-cols-3 gap-0 border border-white/15 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center py-5 px-3 md:py-6 ${i < 2 ? "border-r border-white/15" : ""}`}
              >
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-accent mb-2 opacity-80" />
                <p className="text-xl md:text-2xl font-serif font-bold text-accent leading-none mb-1">
                  {stat.value}
                </p>
                <p className="text-[9px] md:text-[10px] text-primary-foreground/55 text-center leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Gold line bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
};

export default CTASection;
