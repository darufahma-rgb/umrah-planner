import { useState } from "react";
import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ChevronRight, ChevronDown, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface LocationData {
  name: string;
  description: string;
  mapsUrl: string;
}

const makkahLocations: LocationData[] = [
  { name: "Masjidil Haram & Ka'bah", description: "Pusat ibadah umat Islam", mapsUrl: "https://maps.google.com/?q=Masjid+al-Haram,Mecca" },
  { name: "Maqam Ibrahim", description: "Tempat berdiri Nabi Ibrahim", mapsUrl: "https://maps.google.com/?q=Maqam+Ibrahim,Mecca" },
  { name: "Bukit Safa & Marwah", description: "Lokasi pelaksanaan Sa'i", mapsUrl: "https://maps.google.com/?q=Safa+and+Marwah,Mecca" },
  { name: "Jabal Rahmah", description: "Bukit Kasih Sayang", mapsUrl: "https://maps.google.com/?q=Jabal+Rahmah,Arafat" },
  { name: "Padang Arafah", description: "Lokasi wukuf Haji", mapsUrl: "https://maps.google.com/?q=Mount+Arafat,Saudi+Arabia" },
  { name: "Muzdalifah & Mina", description: "Tempat mabit", mapsUrl: "https://maps.google.com/?q=Mina,Mecca" },
];

const madinahLocations: LocationData[] = [
  { name: "Masjid Nabawi", description: "Masjid Nabi Muhammad SAW", mapsUrl: "https://maps.google.com/?q=Al-Masjid+an-Nabawi,Madinah" },
  { name: "Raudhah", description: "Taman Surga", mapsUrl: "https://maps.google.com/?q=Rawdah+Sharif,Madinah" },
  { name: "Makam Rasulullah", description: "Peristirahatan terakhir Nabi", mapsUrl: "https://maps.google.com/?q=Tomb+of+Prophet+Muhammad,Madinah" },
  { name: "Masjid Quba", description: "Masjid pertama dalam Islam", mapsUrl: "https://maps.google.com/?q=Masjid+Quba,Madinah" },
  { name: "Jabal Uhud", description: "Lokasi Perang Uhud", mapsUrl: "https://maps.google.com/?q=Mount+Uhud,Madinah" },
  { name: "Masjid Qiblatain", description: "Tempat perpindahan kiblat", mapsUrl: "https://maps.google.com/?q=Masjid+al-Qiblatayn,Madinah" },
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
      <Card className="overflow-hidden border-0 shadow-lg group">
        <div className="relative h-32 md:h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
          <div className="absolute bottom-3 left-3 right-3">
            <div className="flex items-center gap-1.5 mb-1">
              <Star className="w-3 h-3 text-accent fill-accent" />
              <span className="text-primary-foreground/80 text-xs">{subtitle}</span>
            </div>
            <h3 className="font-serif text-lg md:text-xl font-bold text-primary-foreground">
              {title}
            </h3>
          </div>
        </div>

        <CardContent className="p-3 md:p-5 bg-card">
          <p className="text-muted-foreground text-xs mb-3">{description}</p>

          <Collapsible open={isExpanded} onOpenChange={setIsExpanded}>
            <ul className="space-y-1.5">
              {locations.slice(0, 3).map((loc) => (
                <li key={loc.name} className="flex items-start gap-1.5 text-xs text-foreground">
                  <ChevronRight className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-medium text-xs">{loc.name}</span>
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-0.5 text-[10px] text-accent hover:text-gold-dark transition-colors flex-shrink-0"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-2.5 h-2.5" />
                        Maps
                      </a>
                    </div>
                    <p className="text-muted-foreground text-[10px]">{loc.description}</p>
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
                  className="space-y-1.5 mt-1.5"
                >
                  {locations.slice(3).map((loc) => (
                    <li key={loc.name} className="flex items-start gap-1.5 text-xs text-foreground">
                      <ChevronRight className="w-3 h-3 text-accent flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-medium text-xs">{loc.name}</span>
                          <a
                            href={loc.mapsUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-0.5 text-[10px] text-accent hover:text-gold-dark transition-colors flex-shrink-0"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink className="w-2.5 h-2.5" />
                            Maps
                          </a>
                        </div>
                        <p className="text-muted-foreground text-[10px]">{loc.description}</p>
                      </div>
                    </li>
                  ))}
                </motion.ul>
              </CollapsibleContent>
            </AnimatePresence>

            <CollapsibleTrigger asChild>
              <button className="mt-3 flex items-center gap-1 text-xs font-medium text-accent hover:text-gold-dark transition-colors">
                {isExpanded ? "Sembunyikan" : `+${locations.length - 3} lokasi`}
                <ChevronDown
                  className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
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
    <section className="py-10 md:py-16 bg-pink/50">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <Badge variant="outline" className="mb-3 border-primary text-primary text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            Dua Kota Suci
          </Badge>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-2">
            Destinasi Ziarah
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Kunjungi tempat-tempat suci yang penuh berkah.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          <LocationCard
            title="Makkah Al-Mukarramah"
            subtitle="Kota Suci"
            description="Pusat ibadah umat Islam sedunia, tempat Ka'bah berada."
            image={heroImage}
            locations={makkahLocations}
            index={0}
          />
          <LocationCard
            title="Madinah Al-Munawwarah"
            subtitle="Kota Bercahaya"
            description="Kota Rasulullah SAW, tempat Masjid Nabawi berada."
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