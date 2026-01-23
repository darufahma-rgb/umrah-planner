import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Shirt,
  Stethoscope,
  BookOpen,
  Smartphone,
  Heart,
  FileText,
  Lightbulb,
  ChevronDown,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const tips = [
  {
    icon: Shirt,
    title: "Pakaian Ihram",
    description: "Siapkan 2 set pakaian ihram untuk pria. Wanita menggunakan pakaian biasa yang menutup aurat dengan baik.",
    details: [
      "Pakaian ihram berwarna putih bersih",
      "Sandal yang nyaman untuk berjalan jauh",
      "Pakaian ganti secukupnya",
      "Jaket tipis untuk AC di pesawat/hotel",
    ],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Bawa obat-obatan pribadi, vitamin, dan masker. Pastikan vaksinasi meningitis sudah lengkap.",
    details: [
      "Vaksin meningitis (wajib)",
      "Obat-obatan rutin pribadi",
      "Vitamin dan suplemen",
      "Masker dan hand sanitizer",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Buku Doa & Manasik",
    description: "Siapkan buku panduan manasik dan kumpulan doa untuk dipelajari selama perjalanan.",
    details: [
      "Buku panduan manasik umrah",
      "Kumpulan doa harian",
      "Al-Quran ukuran saku",
      "Tasbih untuk dzikir",
    ],
    color: "bg-rose-light/10 text-rose-light",
  },
  {
    icon: Smartphone,
    title: "Komunikasi",
    description: "Siapkan SIM card lokal Saudi atau paket roaming untuk tetap terhubung dengan keluarga.",
    details: [
      "Paket roaming internasional",
      "Power bank kapasitas besar",
      "Charger dan kabel USB",
      "Download aplikasi offline map",
    ],
    color: "bg-brown/10 text-brown",
  },
  {
    icon: Heart,
    title: "Niat yang Ikhlas",
    description: "Perbaiki niat sebelum berangkat, mohon maaf kepada keluarga dan lunasi hutang piutang.",
    details: [
      "Mohon maaf kepada keluarga",
      "Selesaikan hutang piutang",
      "Buat wasiat sederhana",
      "Niatkan ibadah karena Allah",
    ],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Dokumen Penting",
    description: "Pastikan paspor berlaku minimal 6 bulan, visa umrah, dan fotokopi dokumen penting.",
    details: [
      "Paspor (min. 6 bulan berlaku)",
      "Visa umrah",
      "Fotokopi KTP & KK",
      "Pas foto ukuran 4x6 (latar putih)",
    ],
    color: "bg-rose/10 text-rose",
  },
];

interface TipCardProps {
  tip: typeof tips[0];
  index: number;
}

const TipCard = ({ tip, index }: TipCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className="border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group cursor-pointer h-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-6">
          <div className={`w-12 h-12 rounded-xl ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
            <tip.icon className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg font-bold text-foreground mb-2">
            {tip.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            {tip.description}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-2 mb-3 overflow-hidden"
              >
                {tip.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button className="flex items-center gap-1 text-sm font-medium text-accent hover:text-gold-dark transition-colors">
            {isExpanded ? "Sembunyikan" : "Lihat detail"}
            <ChevronDown
              className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TipsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            <Lightbulb className="w-3 h-3 mr-1" />
            Persiapan Umrah
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tips Perjalanan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Persiapkan diri dengan baik agar ibadah umrah berjalan lancar dan penuh berkah.{" "}
            <span className="text-accent font-medium">Klik untuk melihat detail.</span>
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tips.map((tip, index) => (
            <TipCard key={tip.title} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;