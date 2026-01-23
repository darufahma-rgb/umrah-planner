import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import ItineraryDay from "./ItineraryDay";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";

const itineraryData = [
  {
    day: 1,
    title: "Pangkal Pinang - Jakarta - Jeddah",
    location: "Pangkal Pinang → Jakarta → Jeddah → Madinah",
    activities: [
      { time: "09:00", description: "Berkumpul di Bandara Depati Amir Pangkal Pinang" },
      { time: "12:10", description: "Take-off ke Jakarta (IU 822)" },
      { time: "13:20", description: "Tiba di Bandara Jakarta" },
      { time: "00:40", description: "Penerbangan ke Jeddah (SV 827) Saudia Airlines" },
      { time: "06:40", description: "Tiba di Jeddah, lanjut bus ke Madinah" },
      { description: "Check-in hotel Madinah & beristirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    title: "Madinah - Rawdhah & Ziarah",
    location: "Madinah Al-Munawwarah",
    activities: [
      { time: "Pagi", description: "Rawdhah untuk jemaah perempuan (InsyaAllah)" },
      { time: "Siang", description: "Rawdhah untuk jemaah laki-laki" },
      { description: "Ziarah & Pengenalan sekitar Masjid Nabawi" },
      { description: "Bani Tsaqifah, Makam Rasulullah & Sahabat" },
      { description: "Masjid Ali, Masjid Ghamamah, Pemakaman Baqi" },
      { description: "Ibadah bebas: Itikaf, Tadarus di Masjid Nabawi" },
    ],
    image: madinahImage,
    highlight: "worship" as const,
  },
  {
    day: 3,
    title: "Tour & Ziarah Madinah",
    location: "Madinah & Sekitarnya",
    activities: [
      { description: "Masjid Quba - Masjid pertama dibangun Rasulullah" },
      { description: "Jabal Uhud & Makam Para Syuhada" },
      { description: "Kebun Kurma (kondisional)" },
      { description: "Melewati Masjid Qiblatain & Masjid Khandaq" },
      { description: "Ibadah bebas di Masjid Nabawi" },
      { time: "Sore/Malam", description: "Manasik singkat persiapan Umroh" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 4,
    title: "Madinah - Mekah (Pelaksanaan Umroh)",
    location: "Madinah → Mekah",
    activities: [
      { time: "Pagi", description: "Check-out hotel, koper di depan kamar" },
      { time: "14:00", description: "Bus berangkat menuju Mekah" },
      { description: "Miqat di Masjid Bir Ali/Dzulhulaifah" },
      { description: "Mengenakan Ihram & melafazkan niat Umroh" },
      { description: "Memperbanyak Talbiyah selama perjalanan" },
      { description: "Tiba di Mekah, pelaksanaan Umroh dibimbing Muthawif" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 5,
    title: "Ibadah di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    activities: [
      { description: "Acara bebas - memperbanyak ibadah" },
      { description: "Itikaf di Masjidil Haram" },
      { description: "Tawaf Sunnah" },
      { time: "Siang", description: "Shalat Jumat berjamaah di Masjidil Haram" },
    ],
    image: heroImage,
    highlight: "worship" as const,
  },
  {
    day: 7,
    title: "Tour & Ziarah Mekah",
    location: "Mekah & Sekitarnya",
    activities: [
      { description: "Jabal Tsur" },
      { description: "Padang Arafah & Jabal Rahmah" },
      { description: "Muzdalifah & Mina" },
      { description: "Jabal Nur (kondisional)" },
      { description: "Miqat di Masjid Ji'ronah" },
      { description: "Umroh ke-2 (opsional bagi yang berminat)" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 8,
    title: "City Tour Thaif",
    location: "Mekah → Thaif → Mekah",
    activities: [
      { time: "Pagi", description: "Sarapan di hotel" },
      { description: "Bonus City Tour Thaif GRATIS dari El Massa" },
      { description: "Menikmati keindahan kota Thaif" },
      { description: "Wahana berbayar (opsional)" },
      { description: "Kembali ke Mekah" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 9,
    title: "Mekah - Jeddah (Kepulangan)",
    location: "Mekah → Jeddah",
    activities: [
      { time: "Pagi", description: "Sarapan & persiapan check-out" },
      { time: "14:00", description: "Check-out hotel, koper di depan kamar" },
      { description: "Perjalanan ke Bandara Jeddah" },
      { time: "17:30", description: "Take-off dari Jeddah (SV 816)" },
      { description: "Penerbangan menuju Jakarta" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 10,
    title: "Jakarta - Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    activities: [
      { time: "07:35", description: "Tiba di Jakarta" },
      { time: "15:15", description: "Penerbangan ke Pangkal Pinang (IU 818)" },
      { time: "16:30", description: "Tiba di Bandara Pangkal Pinang" },
      { description: "Selesai rangkaian perjalanan ibadah bersama El Massa" },
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
            10 Hari Perjalanan
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Jadwal Perjalanan Umrah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Itinerary lengkap perjalanan ibadah Umroh bersama El Massa
            dari Pangkal Pinang menuju Tanah Suci
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