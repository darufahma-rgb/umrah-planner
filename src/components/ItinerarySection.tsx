import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import ItineraryDay from "./ItineraryDay";
import heroImage from "@/assets/hero-makkah.jpg";
import madinahImage from "@/assets/madinah-mosque.jpg";
import departureImage from "@/assets/departure-airport.jpg";
import masjidQubaImage from "@/assets/masjid-quba.jpg";
import umrahPilgrimsImage from "@/assets/umrah-pilgrims.jpg";
import jabalRahmahImage from "@/assets/jabal-rahmah.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";
import jeddahAirportImage from "@/assets/jeddah-airport.jpg";
import { motion } from "framer-motion";

const itineraryData = [
  {
    day: 1,
    title: "Pangkal Pinang - Jakarta - Jeddah",
    location: "Pangkal Pinang → Jeddah → Madinah",
    mapsUrl: "https://maps.google.com/?q=Madinah,Saudi+Arabia",
    image: departureImage,
    activities: [
      { time: "09:00", description: "Berkumpul di Bandara Depati Amir" },
      { time: "12:10", description: "Take-off ke Jakarta (IU 822)" },
      { time: "00:40", description: "Penerbangan ke Jeddah (SV 827)" },
      { description: "Check-in hotel Madinah" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    title: "Madinah - Rawdhah & Ziarah",
    location: "Madinah Al-Munawwarah",
    mapsUrl: "https://maps.google.com/?q=Al-Masjid+an-Nabawi,Madinah",
    image: madinahImage,
    activities: [
      { time: "Pagi", description: "Rawdhah jemaah perempuan" },
      { time: "Siang", description: "Rawdhah jemaah laki-laki" },
      { description: "Ziarah Masjid Nabawi" },
      { description: "Ibadah bebas di Masjid Nabawi" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 3,
    title: "Tour & Ziarah Madinah",
    location: "Madinah & Sekitarnya",
    mapsUrl: "https://maps.google.com/?q=Masjid+Quba,Madinah",
    image: masjidQubaImage,
    activities: [
      { description: "Masjid Quba" },
      { description: "Jabal Uhud & Makam Syuhada" },
      { description: "Masjid Qiblatain & Khandaq" },
      { time: "Sore", description: "Manasik persiapan Umroh" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 4,
    title: "Madinah - Mekah (Umroh)",
    location: "Madinah → Mekah",
    mapsUrl: "https://maps.google.com/?q=Masjid+al-Haram,Mecca",
    image: umrahPilgrimsImage,
    activities: [
      { time: "14:00", description: "Bus berangkat ke Mekah" },
      { description: "Miqat di Bir Ali" },
      { description: "Pelaksanaan Umroh" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 5,
    title: "Ibadah di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    mapsUrl: "https://maps.google.com/?q=Masjid+al-Haram,Mecca",
    image: heroImage,
    activities: [
      { description: "Ibadah bebas" },
      { description: "Itikaf & Tawaf Sunnah" },
      { time: "Siang", description: "Shalat Jumat berjamaah" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 7,
    title: "Tour & Ziarah Mekah",
    location: "Mekah & Sekitarnya",
    mapsUrl: "https://maps.google.com/?q=Jabal+Rahmah,Arafat",
    image: jabalRahmahImage,
    activities: [
      { description: "Jabal Rahmah & Arafah" },
      { description: "Muzdalifah & Mina" },
      { description: "Umroh ke-2 (opsional)" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 8,
    title: "City Tour Thaif",
    location: "Mekah → Thaif → Mekah",
    mapsUrl: "https://maps.google.com/?q=Taif,Saudi+Arabia",
    image: cityTaifImage,
    activities: [
      { description: "Bonus City Tour GRATIS" },
      { description: "Menikmati kota Thaif" },
      { description: "Kembali ke Mekah" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 9,
    title: "Mekah - Jeddah",
    location: "Mekah → Jeddah",
    mapsUrl: "https://maps.google.com/?q=King+Abdulaziz+International+Airport,Jeddah",
    image: jeddahAirportImage,
    activities: [
      { time: "14:00", description: "Check-out hotel" },
      { time: "17:30", description: "Take-off dari Jeddah (SV 816)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 10,
    title: "Jakarta - Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    mapsUrl: "https://maps.google.com/?q=Depati+Amir+Airport,Pangkal+Pinang",
    image: departureImage,
    activities: [
      { time: "07:35", description: "Tiba di Jakarta" },
      { time: "16:30", description: "Tiba di Pangkal Pinang" },
    ],
    highlight: "departure" as const,
  },
];

const ItinerarySection = () => {
  return (
    <section className="py-10 md:py-16 bg-pink">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-10"
        >
          <Badge className="mb-3 bg-white/90 text-primary border-0 text-xs shadow-sm">
            <Calendar className="w-3 h-3 mr-1" />
            10 Hari Perjalanan
          </Badge>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Jadwal Perjalanan
          </h2>
          <p className="text-white/90 text-sm max-w-xl mx-auto drop-shadow">
            Itinerary lengkap perjalanan Umroh El Massa.{" "}
            <span className="text-white font-semibold">Klik untuk detail.</span>
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {itineraryData.map((item, index) => (
            <ItineraryDay
              key={item.day}
              day={item.day}
              title={item.title}
              location={item.location}
              mapsUrl={item.mapsUrl}
              activities={item.activities}
              image={item.image}
              highlight={item.highlight}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ItinerarySection;