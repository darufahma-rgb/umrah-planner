import madinahImage from "@/assets/madinah-mosque.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star } from "lucide-react";

const makkahLocations = [
  { name: "Masjidil Haram", desc: "Kiblat umat Islam sedunia" },
  { name: "Ka'bah", desc: "Pusat ibadah umrah dan haji" },
  { name: "Maqam Ibrahim", desc: "Tempat berdoa setelah thawaf" },
  { name: "Bukit Safa & Marwah", desc: "Lokasi pelaksanaan sa'i" },
  { name: "Jabal Rahmah", desc: "Bukit Kasih Sayang di Arafah" },
  { name: "Muzdalifah", desc: "Tempat bermalam saat haji" },
];

const madinahLocations = [
  { name: "Masjid Nabawi", desc: "Masjid Nabi Muhammad SAW" },
  { name: "Raudhah", desc: "Taman Surga antara mimbar dan makam" },
  { name: "Makam Rasulullah", desc: "Tempat peristirahatan terakhir Nabi" },
  { name: "Masjid Quba", desc: "Masjid pertama dalam Islam" },
  { name: "Jabal Uhud", desc: "Lokasi Perang Uhud bersejarah" },
  { name: "Masjid Qiblatain", desc: "Masjid dua kiblat" },
];

const LocationsSection = () => {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary">
            <MapPin className="w-3 h-3 mr-1" />
            Dua Kota Suci
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tempat-Tempat Suci
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Kunjungi lokasi-lokasi bersejarah dan suci di Makkah dan Madinah
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Makkah Card */}
          <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-primary to-emerald-light">
            <CardContent className="p-0">
              <div className="p-8 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent" />
                  <h3 className="font-serif text-2xl font-bold">Makkah Al-Mukarramah</h3>
                </div>
                <p className="text-primary-foreground/80 mb-6">
                  Kota suci tempat berdirinya Ka'bah, pusat ibadah dan kiblat seluruh umat Islam di dunia.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {makkahLocations.map((loc) => (
                    <div key={loc.name} className="bg-primary-foreground/10 rounded-lg p-3 backdrop-blur-sm">
                      <p className="font-semibold text-sm">{loc.name}</p>
                      <p className="text-xs text-primary-foreground/70">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Madinah Card */}
          <Card className="overflow-hidden border-0 shadow-xl">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={madinahImage}
                  alt="Masjid Nabawi - Madinah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-accent" />
                  <h3 className="font-serif text-2xl font-bold text-foreground">Madinah Al-Munawwarah</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Kota bercahaya tempat Masjid Nabawi dan makam Rasulullah SAW berada.
                </p>
                <div className="grid grid-cols-2 gap-3">
                  {madinahLocations.map((loc) => (
                    <div key={loc.name} className="bg-secondary rounded-lg p-3">
                      <p className="font-semibold text-sm text-foreground">{loc.name}</p>
                      <p className="text-xs text-muted-foreground">{loc.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;