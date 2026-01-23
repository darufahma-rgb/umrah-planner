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
    description: "Pembimbing ibadah profesional & bersertifikat",
  },
  {
    icon: Clock,
    title: "10 Hari Perjalanan",
    description: "Waktu optimal untuk ibadah yang khusyuk",
  },
  {
    icon: Shield,
    title: "Asuransi Perjalanan",
    description: "Perlindungan lengkap selama perjalanan",
  },
  {
    icon: Headphones,
    title: "Layanan 24 Jam",
    description: "Pendampingan & bantuan setiap saat",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="text-center group cursor-default"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-accent" />
              </motion.div>
              <h3 className="font-semibold text-primary-foreground text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-primary-foreground/70">
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