import { Plane, Hotel, Users, Clock, Shield, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Plane,
    title: "Penerbangan Premium",
    description: "Tiket pesawat PP dengan maskapai terpercaya",
  },
  {
    icon: Hotel,
    title: "Hotel Bintang 4-5",
    description: "Akomodasi dekat Masjidil Haram & Nabawi",
  },
  {
    icon: Users,
    title: "Muthawwif Berpengalaman",
    description: "Pembimbing ibadah profesional",
  },
  {
    icon: Clock,
    title: "10 Hari Perjalanan",
    description: "Waktu optimal untuk ibadah",
  },
  {
    icon: Shield,
    title: "Asuransi Perjalanan",
    description: "Perlindungan lengkap selama perjalanan",
  },
  {
    icon: Headphones,
    title: "Layanan 24 Jam",
    description: "Pendampingan setiap saat",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-8 md:py-12 bg-primary">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 md:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="text-center group cursor-default"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-2 bg-gradient-to-br from-accent via-gold-light to-accent border border-accent/50 flex items-center justify-center rounded-xl shadow-lg shadow-accent/20">
                <feature.icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="font-medium text-primary-foreground text-[10px] md:text-xs mb-0.5 leading-tight">
                {feature.title}
              </h3>
              <p className="text-[8px] md:text-[10px] text-primary-foreground/60 hidden md:block">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;