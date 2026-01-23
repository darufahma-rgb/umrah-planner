import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, ChevronRight } from "lucide-react";

const makkahLocations = [
  "Masjidil Haram & Ka'bah",
  "Maqam Ibrahim",
  "Bukit Safa & Marwah",
  "Jabal Rahmah",
  "Padang Arafah",
  "Muzdalifah & Mina",
];

const madinahLocations = [
  "Masjid Nabawi",
  "Raudhah (Taman Surga)",
  "Makam Rasulullah SAW",
  "Masjid Quba",
  "Jabal Uhud",
  "Masjid Qiblatain",
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <MapPin className="w-3 h-3 mr-1" />
            Dua Kota Suci
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Destinasi Ziarah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kunjungi tempat-tempat bersejarah dan suci yang penuh berkah
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Makkah */}
          <Card className="overflow-hidden border-0 shadow-xl group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={heroImage}
                alt="Makkah Al-Mukarramah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-primary-foreground/80 text-sm">Kota Suci</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  Makkah Al-Mukarramah
                </h3>
              </div>
            </div>
            <CardContent className="p-6 bg-card">
              <p className="text-muted-foreground text-sm mb-4">
                Pusat ibadah umat Islam sedunia, tempat berdirinya Ka'bah yang menjadi kiblat shalat.
              </p>
              <ul className="space-y-2">
                {makkahLocations.map((loc) => (
                  <li key={loc} className="flex items-center gap-2 text-sm text-foreground">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {loc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Madinah */}
          <Card className="overflow-hidden border-0 shadow-xl group">
            <div className="relative h-56 overflow-hidden">
              <img
                src={madinahImage}
                alt="Madinah Al-Munawwarah"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-accent fill-accent" />
                  <span className="text-primary-foreground/80 text-sm">Kota Bercahaya</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                  Madinah Al-Munawwarah
                </h3>
              </div>
            </div>
            <CardContent className="p-6 bg-card">
              <p className="text-muted-foreground text-sm mb-4">
                Kota Rasulullah SAW, tempat Masjid Nabawi dan makam Nabi Muhammad berada.
              </p>
              <ul className="space-y-2">
                {madinahLocations.map((loc) => (
                  <li key={loc} className="flex items-center gap-2 text-sm text-foreground">
                    <ChevronRight className="w-4 h-4 text-accent" />
                    {loc}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;