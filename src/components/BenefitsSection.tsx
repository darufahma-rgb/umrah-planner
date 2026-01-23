import { motion } from 'framer-motion';
import { 
  Plane, 
  Luggage, 
  FileText, 
  Building2, 
  Utensils, 
  Bus, 
  Briefcase, 
  Users, 
  MapPin, 
  BookOpen, 
  HeartPulse, 
  Droplets, 
  Camera, 
  Gift,
  ChefHat
} from 'lucide-react';

const benefits = [
  { icon: Plane, title: 'Tiket Pesawat PP', desc: 'CGK - JED (Saudia/Garuda)' },
  { icon: Luggage, title: 'Bagasi 1 x 23 KG', desc: 'Sesuai Maskapai' },
  { icon: FileText, title: 'Visa Umrah', desc: 'Proses Lengkap' },
  { icon: Building2, title: 'Hotel Makkah & Madinah', desc: 'Bintang 4-5' },
  { icon: Utensils, title: 'Makan 3x Sehari', desc: 'Menu Indonesia' },
  { icon: Bus, title: 'Bus AC Modern', desc: 'Transportasi Nyaman' },
  { icon: Briefcase, title: 'Perlengkapan Umrah', desc: '+ Koper Eksklusif' },
  { icon: Users, title: 'Tour Leader & Muthowwif', desc: 'Berpengalaman' },
  { icon: MapPin, title: 'Handling Bandara', desc: 'Jakarta & Jeddah' },
  { icon: BookOpen, title: 'Bimbingan Manasik 3x', desc: 'Sebelum Berangkat' },
  { icon: HeartPulse, title: 'Free Medical Checkup', desc: '30 Hari Sebelum' },
  { icon: Droplets, title: 'Air Zamzam 5 Liter', desc: 'Saat Kepulangan' },
  { icon: ChefHat, title: 'Free Ayam Albaik', desc: 'Saat Kepulangan' },
  { icon: Camera, title: 'Dokumentasi', desc: 'Foto & Video' },
  { icon: Gift, title: 'Bingkisan Kenangan', desc: 'Saat Kepulangan' },
];

const BenefitsSection = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-accent font-medium text-sm tracking-wider uppercase">
            Fasilitas Include
          </span>
          <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Benefit Perjalanan Umrah
          </h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto text-sm md:text-base">
            Nikmati berbagai fasilitas lengkap bersama El Massa Tour & Travel
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="group"
            >
              <div className="flex items-center gap-2 md:gap-3 bg-card border border-border/50 rounded-lg p-2.5 md:p-3 h-full hover:border-accent/50 hover:shadow-md transition-all duration-300">
                <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs md:text-sm font-semibold text-foreground leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground leading-tight">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-lg px-4 py-2 text-center">
            <span className="text-xs md:text-sm text-foreground">
              <span className="font-semibold text-accent">Bonus:</span> Air Zamzam 5 Liter Gratis untuk acara selamatan
            </span>
          </div>
          <div className="bg-secondary/20 border border-secondary/30 rounded-lg px-4 py-2 text-center">
            <span className="text-xs md:text-sm text-muted-foreground">
              <span className="font-semibold">Exclude:</span> Paspor, Vaksin, Bagasi Tambahan
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection;
