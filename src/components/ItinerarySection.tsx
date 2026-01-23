import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import ItineraryDay from "./ItineraryDay";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";

const itineraryData = [
  {
    day: 1,
    title: "Keberangkatan dari Indonesia",
    location: "Jakarta - Jeddah",
    activities: [
      { time: "06:00", description: "Berkumpul di Bandara Soekarno-Hatta" },
      { time: "09:00", description: "Check-in & pengurusan bagasi" },
      { time: "12:00", description: "Penerbangan menuju Jeddah" },
      { description: "Persiapan niat ihram di pesawat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    title: "Tiba di Makkah - Umrah",
    location: "Makkah Al-Mukarramah",
    activities: [
      { time: "Pagi", description: "Tiba di Jeddah, perjalanan ke Makkah" },
      { description: "Check-in hotel dekat Masjidil Haram" },
      { description: "Melaksanakan Umrah (Thawaf & Sa'i)" },
      { description: "Tahallul (potong rambut)" },
    ],
    image: heroImage,
    highlight: "umrah" as const,
  },
  {
    day: 3,
    title: "Ibadah di Masjidil Haram",
    location: "Makkah Al-Mukarramah",
    activities: [
      { time: "Subuh", description: "Shalat Subuh berjamaah" },
      { description: "Thawaf Sunnah" },
      { description: "Dzikir dan doa di Multazam" },
      { description: "Minum air zamzam" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    title: "Ziarah Makkah",
    location: "Makkah & Sekitarnya",
    activities: [
      { description: "Ziarah ke Jabal Rahmah" },
      { description: "Padang Arafah" },
      { description: "Muzdalifah" },
      { description: "Mina & Jamarat" },
      { description: "Jabal Tsur" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 5,
    title: "Perjalanan ke Madinah",
    location: "Makkah - Madinah",
    activities: [
      { time: "Pagi", description: "Check-out hotel Makkah" },
      { description: "Perjalanan darat ke Madinah (±450 km)" },
      { description: "Check-in hotel Madinah" },
      { time: "Maghrib", description: "Shalat di Masjid Nabawi" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 6,
    title: "Ziarah Madinah",
    location: "Madinah Al-Munawwarah",
    activities: [
      { description: "Ziarah ke Makam Rasulullah SAW" },
      { description: "Raudhah (Taman Surga)" },
      { description: "Masjid Quba" },
      { description: "Masjid Qiblatain" },
    ],
    image: madinahImage,
    highlight: "ziarah" as const,
  },
  {
    day: 7,
    title: "Lanjutan Ziarah Madinah",
    location: "Madinah & Sekitarnya",
    activities: [
      { description: "Jabal Uhud & Makam Syuhada" },
      { description: "Kebun Kurma" },
      { description: "Kompleks Percetakan Al-Quran" },
      { time: "Malam", description: "Shalat di Masjid Nabawi" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 8,
    title: "Hari Terakhir di Madinah",
    location: "Madinah Al-Munawwarah",
    activities: [
      { description: "Ibadah bebas di Masjid Nabawi" },
      { description: "Persiapan kepulangan" },
      { time: "Sore", description: "Perjalanan ke Jeddah" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 9,
    title: "Kepulangan ke Indonesia",
    location: "Jeddah - Jakarta",
    activities: [
      { time: "Dini Hari", description: "Check-in bandara Jeddah" },
      { description: "Penerbangan kembali ke Indonesia" },
      { time: "Malam", description: "Tiba di Tanah Air dengan selamat" },
    ],
    highlight: "departure" as const,
  },
];

const ItinerarySection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            <Calendar className="w-3 h-3 mr-1" />
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

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {itineraryData.map((item) => (
            <ItineraryDay
              key={item.day}
              day={item.day}
              title={item.title}
              location={item.location}
              activities={item.activities}
              image={item.image}
              highlight={item.highlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;