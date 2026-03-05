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
    title: "Pangkal Pinang - Jakarta",
    location: "Pangkal Pinang → Jakarta",
    image: departureImage,
    activities: [
      { time: "09:00 WIB", description: "Jemaah berkumpul di Bandara Depati Amir, Pangkal Pinang" },
      { time: "12:25 WIB", description: "Take-off menuju Jakarta (Garuda Indonesia GA137)" },
      { time: "13:54 WIB", description: "Tiba di Bandara Soekarno-Hatta, Jakarta" },
      { time: "Sore", description: "Menuju hotel transit, istirahat" },
      { time: "19:30 WIB", description: "Pemantapan manasik umrah di meeting room hotel" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    title: "Jakarta - Jeddah - Madinah",
    location: "Jakarta → Jeddah → Madinah",
    image: jeddahAirportImage,
    activities: [
      { time: "05:30 WIB", description: "Berkumpul di lobi hotel untuk persiapan ke bandara" },
      { time: "11:25 WIB", description: "Penerbangan ke Jeddah (Garuda Indonesia GA980)" },
      { time: "17:30 LT", description: "Tiba di Bandara Jeddah, perjalanan darat menuju Madinah" },
      { description: "Check-in hotel Madinah dan istirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 3,
    title: "Madinah - Rawdah & Ziarah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { time: "Subuh–11.00", description: "Rawdah jemaah perempuan" },
      { time: "11.00–Isya", description: "Rawdah jemaah laki-laki" },
      { time: "Isya–23.30", description: "Rawdah jemaah perempuan" },
      { time: "23.30–Subuh", description: "Rawdah jemaah laki-laki" },
      { description: "Ziarah: area luar Masjid Nabawi, Bani Tsaqifah, Makam Rasulullah & Sahabat, Masjid Ali, Masjid Ghamamah, Pemakaman Baqi" },
      { time: "Siang", description: "Shalat Jumat di Masjid Nabawi. Selesai shalat, acara bebas" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    title: "Madinah - Tour Sejarah",
    location: "Madinah & Sekitarnya",
    image: masjidQubaImage,
    activities: [
      { description: "Ziarah jejak sejarah Islam: Masjid Quba, Jabal Uhud, Kebun Kurma (kondisional)" },
      { description: "Melewati Masjid Qiblatain & Masjid Khandaq" },
      { time: "Sore/Malam", description: "Acara bebas (Itikaf/Tadarus) dan manasik singkat persiapan Umrah" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 5,
    title: "Madinah - Mekah (Umrah)",
    location: "Madinah → Mekah",
    image: umrahPilgrimsImage,
    activities: [
      { time: "Siang", description: "Check-out hotel Madinah, koper di depan kamar" },
      { time: "14:00 LT", description: "Berangkat menuju Mekah" },
      { description: "Miqat di Masjid Bir Ali/Dzulhulaifah untuk niat Umrah" },
      { description: "Memperbanyak lantunan Talbiyah selama perjalanan" },
      { description: "Tiba di Mekah, simpan barang di hotel, lanjut prosesi Umrah dibimbing Muthawif" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 6,
    title: "Ibadah Mandiri di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { description: "Acara bebas, memperbanyak ibadah (Itikaf, Tawaf Sunnah) di Masjidil Haram" },
      { time: "Siang", description: "Shalat Jumat di Masjidil Haram" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 7,
    title: "Ziarah Sejarah Mekah",
    location: "Mekah & Sekitarnya",
    image: jabalRahmahImage,
    activities: [
      { description: "Ziarah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdhalifah, Mina, Jabal Nur (kondisional)" },
      { description: "Miqat di Masjid Jironah bagi yang ingin Umrah ke-2 (opsional)" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 8,
    title: "City Tour Thaif",
    location: "Mekah → Thaif → Mekah",
    image: cityTaifImage,
    activities: [
      { time: "Pagi", description: "Sarapan, lalu menuju Thaif (Bonus City Tour dari El Massa)" },
      { description: "Wahana di Thaif bersifat opsional (berbayar masing-masing)" },
      { description: "Pulang melewati tempat Miqat bagi yang ingin Umrah ke-3" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 9,
    title: "Mekah - Jeddah - Jakarta",
    location: "Mekah → Jeddah → Jakarta",
    image: jeddahAirportImage,
    activities: [
      { time: "Pagi", description: "Persiapan check-out, koper di depan kamar" },
      { time: "Siang", description: "Tawaf Wada' (pamitan dengan Ka'bah)" },
      { time: "14:00 LT", description: "Check-out hotel, makan siang, perjalanan ke Bandara Jeddah" },
      { time: "21:55 LT", description: "Take-off menuju Jakarta (Garuda Indonesia GA983)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 10,
    title: "Tiba di Jakarta",
    location: "Jakarta",
    image: departureImage,
    activities: [
      { time: "11:50 WIB", description: "Tiba di Jakarta" },
      { description: "Menuju hotel transit untuk istirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 11,
    title: "Jakarta - Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    image: departureImage,
    activities: [
      { time: "05:30 WIB", description: "Berkumpul di lobi hotel menuju bandara" },
      { time: "10:20 WIB", description: "Terbang ke Pangkal Pinang (GA136)" },
      { time: "11:40 WIB", description: "Tiba di Bandara Pangkal Pinang, pembagian bagasi, zamzam, dan bingkisan kenang-kenangan" },
      { description: "Rangkaian perjalanan berakhir. Alhamdulillah." },
    ],
    highlight: "departure" as const,
  },
];

const ItinerarySection = () => {
  return (
    <section className="py-10 md:py-16 bg-gradient-pink bg-pattern-dots relative overflow-hidden">
      <div className="container mx-auto px-3 md:px-4 relative z-10">
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
            11 Hari Perjalanan
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