import { useState } from "react";
import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ChevronRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface LocationData {
  name: string;
  description: string;
}

const makkahLocations: LocationData[] = [
  { name: "Masjidil Haram & Ka'bah", description: "Pusat ibadah umat Islam, tempat melaksanakan Thawaf" },
  { name: "Maqam Ibrahim", description: "Tempat berdiri Nabi Ibrahim saat membangun Ka'bah" },
  { name: "Bukit Safa & Marwah", description: "Lokasi pelaksanaan Sa'i, mengikuti jejak Siti Hajar" },
  { name: "Jabal Rahmah", description: "Bukit Kasih Sayang di Padang Arafah" },
  { name: "Padang Arafah", description: "Lokasi wukuf saat ibadah Haji" },
  { name: "Muzdalifah & Mina", description: "Tempat mabit dan melempar jumrah" },
];

const madinahLocations: LocationData[] = [
  { name: "Masjid Nabawi", description: "Masjid Nabi Muhammad SAW, masjid kedua tersuci" },
  { name: "Raudhah (Taman Surga)", description: "Area antara mimbar dan makam Rasulullah" },
  { name: "Makam Rasulullah SAW", description: "Tempat peristirahatan terakhir Nabi Muhammad" },
  { name: "Masjid Quba", description: "Masjid pertama yang dibangun dalam Islam" },
  { name: "Jabal Uhud", description: "Lokasi Perang Uhud, makam para syuhada" },
  { name: "Masjid Qiblatain", description: "Masjid tempat perpindahan arah kiblat" },
];

interface LocationCardProps {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  locations: LocationData[];
  index: number;
}

const LocationCard = ({
  title,
  subtitle,
  description,
  image,
  locations,
  index,
}: LocationCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      viewport={{ once: true }}
    >
      <Card className="overflow-hidden border-0 shadow-xl group">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span className="text-primary-foreground/80 text-sm">{subtitle}</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground">
              {title}
            </h3>
          </div>
        </div>

        <CardContent className="p-6 bg-card">
          <p className="text-muted-foreground text-sm mb-4">{description}</p>

          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <ul className="space-y-2">
              {locations.slice(0, 3).map((loc) => (
                <li key={loc.name} className="flex items-start gap-2 text-sm text-foreground">
                  <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium">{loc.name}</span>
                    <p className="text-muted-foreground text-xs">{loc.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <AnimatePresence>
              <CollapsibleContent>
                <motion.ul
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-2 mt-2"
                >
                  {locations.slice(3).map((loc) => (
                    <li key={loc.name} className="flex items-start gap-2 text-sm text-foreground">
                      <ChevronRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="font-medium">{loc.name}</span>
                        <p className="text-muted-foreground text-xs">{loc.description}</p>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </CollapsibleContent>
            </AnimatePresence>

            <CollapsibleTrigger asChild>
              <button className="mt-4 flex items-center gap-1 text-sm font-medium text-accent hover:text-gold-dark transition-colors">
                {isExpanded ? "Sembunyikan" : `Lihat ${locations.length - 3} lokasi lainnya`}
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </CollapsibleTrigger>
          </Collapsible>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const LocationsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <MapPin className="w-3 h-3 mr-1" />
            Dua Kota Suci
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Destinasi Ziarah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kunjungi tempat-tempat bersejarah dan suci yang penuh berkah.{" "}
            <span className="text-accent font-medium">Klik untuk melihat semua lokasi.</span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <LocationCard
            title="Makkah Al-Mukarramah"
            subtitle="Kota Suci"
            description="Pusat ibadah umat Islam sedunia, tempat berdirinya Ka'bah yang menjadi kiblat shalat."
            image={heroImage}
            locations={makkahLocations}
            index={0}
          />
          <LocationCard
            title="Madinah Al-Munawwarah"
            subtitle="Kota Bercahaya"
            description="Kota Rasulullah SAW, tempat Masjid Nabawi dan makam Nabi Muhammad berada."
            image={madinahImage}
            locations={madinahLocations}
            index={1}
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;