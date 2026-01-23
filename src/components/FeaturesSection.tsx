import { Plane, Hotel, Users, Clock, Shield, Headphones } from "lucide-react";

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
    title: "9 Hari Perjalanan",
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
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center group"
            >
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-primary-foreground/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-primary-foreground text-sm mb-1">
                {feature.title}
              </h3>
              <p className="text-xs text-primary-foreground/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;