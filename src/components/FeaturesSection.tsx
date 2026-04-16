import { Plane, Hotel, Users, Calendar, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Plane, title: "Penerbangan Premium", description: "Tiket PP maskapai terpercaya" },
  { icon: Hotel, title: "Hotel Bintang 4-5", description: "Dekat Masjidil Haram & Nabawi" },
  { icon: Users, title: "Muthawwif Ahli", description: "Pembimbing ibadah profesional" },
  { icon: Calendar, title: "14 Hari Perjalanan", description: "30 Sep – 13 Okt 2026" },
  { icon: Shield, title: "Asuransi Perjalanan", description: "Perlindungan lengkap" },
  { icon: Headphones, title: "Layanan 24 Jam", description: "Pendampingan setiap saat" },
];

const FeaturesSection = () => {
  return (
    <section className="py-7 md:py-10 bg-primary relative overflow-hidden">
      {/* Subtle top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: "backOut" }}
              viewport={{ once: true }}
              className={`text-center group cursor-default py-3 md:py-4 px-2 md:px-4 relative
                ${index < 5 ? "border-r border-white/10" : ""}
              `}
            >
              {/* Icon */}
              <div className="w-9 h-9 md:w-11 md:h-11 mx-auto mb-2.5 border border-accent/50 rounded-full flex items-center justify-center bg-white/5">
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-accent" strokeWidth={1.5} />
              </div>

              {/* Text */}
              <h3 className="font-sans font-medium text-primary-foreground text-[10px] md:text-xs leading-tight mb-0.5">
                {feature.title}
              </h3>
              <p className="text-[8px] md:text-[10px] text-primary-foreground/55 leading-tight hidden md:block">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
    </section>
  );
};

export default FeaturesSection;
