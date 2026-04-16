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
    date: "30 Sep 2026",
    title: "Pangkal Pinang - Jakarta",
    location: "Pangkal Pinang → Jakarta",
    image: departureImage,
    activities: [
      { time: "09:00 WIB", description: "Jemaah berkumpul di Bandara Internasional Depati Amir, Pangkal Pinang" },
      { time: "12:25 WIB", description: "Take-off menuju Jakarta (Garuda Indonesia GA137)" },
      { time: "13:54 WIB", description: "Tiba di Bandara Soekarno-Hatta, Jakarta. Istirahat di lounge bandara" },
      { time: "19:30 WIB", description: "Berkumpul di Terminal 3 Internasional Soekarno-Hatta untuk proses check-in penerbangan ke Jeddah" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 2,
    date: "01 Okt 2026",
    title: "Jakarta - Jeddah - Madinah",
    location: "Jakarta → Jeddah → Madinah",
    image: jeddahAirportImage,
    activities: [
      { time: "00:40 WIB", description: "Take-off menuju Jeddah (Saudia Airline SV827)" },
      { time: "06:40 LT", description: "Landing di Bandara Jeddah" },
      { description: "Perjalanan menggunakan bus menuju kota Madinah" },
      { description: "Check-in hotel Madinah dan istirahat" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 3,
    date: "02 Okt 2026",
    title: "Madinah - Rawdah & Ziarah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { time: "Subuh–11.00", description: "Rawdah jemaah perempuan (InsyaAllah apabila Tasreh keluar)" },
      { time: "11.00–Isya", description: "Rawdah jemaah laki-laki" },
      { time: "Isya–23.30", description: "Rawdah jemaah perempuan" },
      { time: "23.30–Subuh", description: "Rawdah jemaah laki-laki" },
      { description: "Ziarah & pengenalan sekitar Masjid Nabawi: Bani Tsaqifah, Makam Rasulullah & Sahabat (dari luar masjid), Masjid Ali, Masjid Ghamamah, Pemakaman Baqi" },
      { description: "Shalat Jumat di Masjid Nabawi. Setelah shalat Jumat acara bebas" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 4,
    date: "03 Okt 2026",
    title: "Tour Sejarah Madinah",
    location: "Madinah & Sekitarnya",
    image: masjidQubaImage,
    activities: [
      { time: "08:00–12:00", description: "Ziarah jejak sejarah Islam: Masjid Quba, Jabal Uhud, Kebun Kurma (kondisional). Melewati Masjid Qiblatain & Masjid Khandaq" },
      { time: "12:00–15:00", description: "Shalat Dhuhur, makan siang dan istirahat" },
      { time: "15:00–16:00", description: "Persiapan shalat Ashar" },
      { time: "16:00–18:00", description: "Waktu bebas (memperbanyak ibadah atau berbelanja)" },
      { time: "18:00–21:00", description: "Ishoma" },
      { time: "21:00–23:00", description: "Agenda bebas, berbelanja atau menikmati kuliner kota Madinah" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 5,
    date: "04 Okt 2026",
    title: "Agenda Bebas Madinah",
    location: "Madinah Al-Munawwarah",
    image: madinahImage,
    activities: [
      { description: "Agenda bebas: memperbanyak ibadah di Masjid Nabawi, berbelanja, atau berkunjung ke destinasi wisata lainnya (opsional, transportasi ditanggung jemaah)" },
      { description: "Opsional: Berkunjung ke Sumur Ghars (air untuk memandikan jenazah Rasulullah SAW)" },
      { description: "Opsional: Mendaki Jabal Uhud naik mobil GMC" },
      { description: "Opsional: Trip Al Ula dan destinasi lainnya" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 6,
    date: "05 Okt 2026",
    title: "City Tour Madinah 2 & Manasik",
    location: "Madinah Al-Munawwarah",
    image: masjidQubaImage,
    activities: [
      { time: "08:00–12:00", description: "City tour Madinah ke-2: Percetakan Al Quran Malik Fahd Madinah, Jabal Magnet (naik onta opsional)" },
      { time: "12:00–15:00", description: "Ishoma" },
      { time: "15:00–16:00", description: "Shalat Ashar" },
      { time: "16:00–18:00", description: "Pemantapan manasik umrah" },
      { time: "18:00–21:00", description: "Ishoma" },
      { time: "21:00–23:00", description: "Agenda bebas, berbelanja atau menikmati kuliner kota Madinah" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 7,
    date: "06 Okt 2026",
    title: "Madinah - Mekah (Umrah 1)",
    location: "Madinah → Bir Ali → Mekah",
    image: umrahPilgrimsImage,
    activities: [
      { time: "08:00–10:00", description: "Koper diletakkan di depan kamar untuk check-out dari hotel Madinah" },
      { time: "10:00–13:00", description: "Makan siang, shalat dan bersiap check-out" },
      { time: "13:00–14:00", description: "Berangkat menuju Masjid Bir Ali/Dzulhulaifah untuk Miqat dan niat Umrah. Jemaah mengenakan pakaian Umrah/Ihram" },
      { time: "14:00–20:00", description: "Perjalanan menuju kota Mekah. Memperbanyak lantunan Talbiyah selama perjalanan" },
      { time: "20:00–22:00", description: "Tiba di Mekah. Pembagian kamar, makan malam, dan bersiap menuju Masjidil Haram" },
      { time: "22:00–23:00", description: "Berangkat menuju Masjidil Haram untuk pelaksanaan rukun Umrah dibimbing Muthawwif (diperkirakan selesai pukul 02.30–04.00)" },
    ],
    highlight: "umrah" as const,
  },
  {
    day: 8,
    date: "07 Okt 2026",
    title: "Ibadah di Masjidil Haram",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { time: "08:00–14:00", description: "Acara bebas, memperbanyak ibadah di Masjidil Haram: Itikaf, Tawaf Sunnah, dan ibadah lainnya" },
      { description: "Shalat Jumat di Masjidil Haram bersama seluruh jemaah" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 9,
    date: "08 Okt 2026",
    title: "Ziarah Sejarah Mekah",
    location: "Mekah & Sekitarnya",
    image: jabalRahmahImage,
    activities: [
      { time: "08:00–12:00", description: "Ziarah jejak sejarah Islam di sekitar Mekah: Jabal Tsur, Padang Arafah, Jabal Rahmah, Muzdhalifah, Mina, Jabal Nur (kondisional)" },
      { description: "Singgah di Masjid Ji'ranah untuk Miqat. Bagi yang ingin Umrah ke-2 (opsional), bersiap mengenakan pakaian ihram" },
      { time: "12:00–14:00", description: "Ishoma" },
      { time: "14:00–selesai", description: "Pelaksanaan Umrah kedua (opsional), kemudian dilanjutkan agenda bebas" },
    ],
    highlight: "ziarah" as const,
  },
  {
    day: 10,
    date: "09 Okt 2026",
    title: "Ibadah & City Tour Mekah 2",
    location: "Mekah Al-Mukarramah",
    image: heroImage,
    activities: [
      { time: "08:00–13:30", description: "Agenda bebas dan melaksanakan shalat Jumat di Masjidil Haram" },
      { time: "13:30–18:00", description: "City tour ke-2 kota Mekah: Museum Al Amoudi, Museum Wahyu, dan lainnya. Opsional Umrah ketiga" },
    ],
    highlight: "worship" as const,
  },
  {
    day: 11,
    date: "10 Okt 2026",
    title: "City Tour Thaif",
    location: "Mekah → Thaif → Mekah",
    image: cityTaifImage,
    activities: [
      { time: "08:00–18:00", description: "City tour kota Thaif: Masjid Abdullah ibn Abbas, Masjid Ku', Masjid Addas, Kebun Mawar dan Pabrik Parfum, Kereta Gantung" },
      { description: "Opsional: Umrah keempat" },
    ],
    highlight: "travel" as const,
  },
  {
    day: 12,
    date: "11 Okt 2026",
    title: "Tawaf Wada' & Menuju Jeddah",
    location: "Mekah → Jeddah",
    image: jeddahAirportImage,
    activities: [
      { description: "Sebelum shalat Subuh, koper diletakkan di depan kamar masing-masing" },
      { description: "Berangkat ke Masjidil Haram untuk shalat Subuh berjamaah dan Tawaf Wada' (pamitan dengan Ka'bah)" },
      { time: "09:30", description: "Check-out dari hotel setelah selesai sarapan" },
      { description: "Perjalanan ke kota Jeddah, singgah city tour, makan siang dan shalat Dhuhur" },
      { time: "17:30 LT", description: "Take-off dari Jeddah menuju Jakarta (Saudia SV816)" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 13,
    date: "12 Okt 2026",
    title: "Tiba di Jakarta - Transit",
    location: "Jakarta",
    image: departureImage,
    activities: [
      { time: "07:35 WIB", description: "Landing di Bandara Soekarno-Hatta, Jakarta" },
      { description: "Istirahat di hotel transit yang disediakan travel sambil menunggu penerbangan ke Pangkal Pinang keesokan harinya" },
    ],
    highlight: "departure" as const,
  },
  {
    day: 14,
    date: "13 Okt 2026",
    title: "Jakarta - Pangkal Pinang",
    location: "Jakarta → Pangkal Pinang",
    image: departureImage,
    activities: [
      { time: "05:30 WIB", description: "Berkumpul di lobi hotel, bersiap menuju bandara" },
      { time: "10:20 WIB", description: "Take-off menuju Pangkal Pinang (Garuda Indonesia GA136)" },
      { time: "11:40 WIB", description: "Tiba di Bandara Depati Amir, Pangkal Pinang. Pembagian bagasi, zamzam, dan bingkisan kenang-kenangan" },
      { description: "Rangkaian perjalanan ibadah penuh makna bersama El Massa telah selesai. Sampai berjumpa pada perjalanan selanjutnya!" },
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
            14 Hari Perjalanan
          </Badge>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg">
            Jadwal Perjalanan
          </h2>
          <p className="text-white/90 text-sm max-w-xl mx-auto drop-shadow">
            Itinerary lengkap perjalanan Umroh El Massa — 30 September s/d 13 Oktober 2026.{" "}
            <span className="text-white font-semibold">Klik untuk detail.</span>
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {itineraryData.map((item, index) => (
            <ItineraryDay
              key={item.day}
              day={item.day}
              date={item.date}
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
