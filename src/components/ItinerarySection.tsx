import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Plane, Building, Sunrise } from "lucide-react";

const itineraryData = [
  {
    day: 1,
    title: "Keberangkatan dari Indonesia",
    location: "Jakarta - Jeddah",
    activities: [
      "Berkumpul di Bandara Soekarno-Hatta",
      "Penerbangan menuju Jeddah",
      "Persiapan niat ihram di pesawat",
    ],
    icon: Plane,
    highlight: "departure",
  },
  {
    day: 2,
    title: "Tiba di Makkah - Umrah",
    location: "Makkah Al-Mukarramah",
    activities: [
      "Tiba di Jeddah, perjalanan ke Makkah",
      "Check-in hotel",
      "Melaksanakan Umrah (Thawaf & Sa'i)",
      "Tahallul",
    ],
    icon: Building,
    highlight: "umrah",
  },
  {
    day: 3,
    title: "Ibadah di Masjidil Haram",
    location: "Makkah Al-Mukarramah",
    activities: [
      "Shalat Subuh berjamaah di Masjidil Haram",
      "Thawaf Sunnah",
      "Dzikir dan doa di Multazam",
      "Minum air zamzam",
    ],
    icon: Sunrise,
    highlight: "worship",
  },
  {
    day: 4,
    title: "Ziarah Makkah",
    location: "Makkah & Sekitarnya",
    activities: [
      "Ziarah ke Jabal Rahmah",
      "Padang Arafah",
      "Muzdalifah",
      "Mina & Jamarat",
    ],
    icon: MapPin,
    highlight: "ziarah",
  },
  {
    day: 5,
    title: "Perjalanan ke Madinah",
    location: "Makkah - Madinah",
    activities: [
      "Check-out hotel Makkah",
      "Perjalanan darat ke Madinah (±450 km)",
      "Check-in hotel Madinah",
      "Shalat di Masjid Nabawi",
    ],
    icon: Plane,
    highlight: "travel",
  },
  {
    day: 6,
    title: "Ziarah Madinah",
    location: "Madinah Al-Munawwarah",
    activities: [
      "Ziarah ke Makam Rasulullah SAW",
      "Raudhah (Taman Surga)",
      "Masjid Quba",
      "Masjid Qiblatain",
    ],
    icon: Building,
    highlight: "ziarah",
  },
  {
    day: 7,
    title: "Lanjutan Ziarah Madinah",
    location: "Madinah & Sekitarnya",
    activities: [
      "Jabal Uhud & Makam Syuhada",
      "Kebun Kurma",
      "Kompleks Percetakan Al-Quran",
      "Shalat di Masjid Nabawi",
    ],
    icon: MapPin,
    highlight: "ziarah",
  },
  {
    day: 8,
    title: "Hari Terakhir di Madinah",
    location: "Madinah Al-Munawwarah",
    activities: [
      "Ibadah bebas di Masjid Nabawi",
      "Persiapan kepulangan",
      "Perjalanan ke Jeddah",
    ],
    icon: Sunrise,
    highlight: "worship",
  },
  {
    day: 9,
    title: "Kepulangan ke Indonesia",
    location: "Jeddah - Jakarta",
    activities: [
      "Penerbangan kembali ke Indonesia",
      "Tiba di Tanah Air dengan selamat",
    ],
    icon: Plane,
    highlight: "departure",
  },
];

const getHighlightStyle = (highlight: string) => {
  const styles: Record<string, string> = {
    departure: "bg-secondary",
    umrah: "bg-primary text-primary-foreground",
    worship: "bg-accent/20 border-accent",
    ziarah: "bg-emerald-light/10 border-emerald-light/30",
    travel: "bg-muted",
  };
  return styles[highlight] || "bg-card";
};

const ItinerarySection = () => {
  return (
    <section className="py-20 bg-background bg-pattern-islamic">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            <Clock className="w-3 h-3 mr-1" />
            9 Hari Perjalanan
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Jadwal Perjalanan Umrah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ikuti perjalanan spiritual Anda hari demi hari dengan itinerary lengkap
            yang telah kami susun dengan penuh kekhusyukan.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary" />

          <div className="space-y-8">
            {itineraryData.map((item, index) => (
              <div
                key={item.day}
                className={`relative flex flex-col md:flex-row gap-4 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 bg-primary rounded-full flex items-center justify-center border-4 border-background z-10">
                  <span className="text-xs font-bold text-primary-foreground">
                    {item.day}
                  </span>
                </div>

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <Card className={`border ${getHighlightStyle(item.highlight)} shadow-sm hover:shadow-lg transition-shadow duration-300`}>
                    <CardHeader className="pb-2">
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <item.icon className="w-4 h-4" />
                        <span className="text-sm">{item.location}</span>
                      </div>
                      <CardTitle className="font-serif text-xl text-foreground">
                        Hari {item.day}: {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {item.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="flex items-start gap-2 text-sm text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;