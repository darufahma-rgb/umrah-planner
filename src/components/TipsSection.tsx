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
    description: "Siapkan 2 set pakaian ihram untuk pria.",
    details: ["Pakaian ihram putih", "Sandal nyaman", "Jaket tipis"],
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Bawa obat pribadi, vitamin, dan masker.",
    details: ["Vaksin meningitis", "Obat rutin", "Hand sanitizer"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Buku Doa",
    description: "Buku panduan manasik dan kumpulan doa.",
    details: ["Panduan manasik", "Al-Quran saku", "Tasbih"],
    color: "bg-rose-light/10 text-rose-light",
  },
  {
    icon: Smartphone,
    title: "Komunikasi",
    description: "SIM card lokal atau paket roaming.",
    details: ["Paket roaming", "Power bank", "Offline maps"],
    color: "bg-brown/10 text-brown",
  },
  {
    icon: Heart,
    title: "Niat Ikhlas",
    description: "Mohon maaf dan lunasi hutang piutang.",
    details: ["Mohon maaf", "Lunasi hutang", "Niat lillah"],
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Dokumen",
    description: "Paspor min. 6 bulan, visa, fotokopi KTP.",
    details: ["Paspor aktif", "Visa umrah", "Pas foto 4x6"],
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      viewport={{ once: true, margin: "-30px" }}
    >
      <Card
        className="border border-border hover:border-accent/30 hover:shadow-md transition-all duration-300 group cursor-pointer h-full"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <CardContent className="p-3 md:p-4">
          <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg ${tip.color} flex items-center justify-center mb-2`}>
            <tip.icon className="w-4 h-4 md:w-5 md:h-5" />
          </div>
          <h3 className="font-semibold text-foreground text-xs md:text-sm mb-1">
            {tip.title}
          </h3>
          <p className="text-[10px] md:text-xs text-muted-foreground leading-relaxed mb-2">
            {tip.description}
          </p>

          <AnimatePresence>
            {isExpanded && (
              <motion.ul
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-1 mb-2 overflow-hidden"
              >
                {tip.details.map((detail, idx) => (
                  <li key={idx} className="flex items-center gap-1.5 text-[10px] md:text-xs">
                    <span className="w-1 h-1 bg-accent rounded-full" />
                    <span className="text-foreground">{detail}</span>
                  </li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>

          <button className="flex items-center gap-0.5 text-[10px] md:text-xs font-medium text-accent">
            {isExpanded ? "Tutup" : "Detail"}
            <ChevronDown
              className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-180" : ""}`}
            />
          </button>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const TipsSection = () => {
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
          <Badge variant="outline" className="mb-3 border-accent text-accent text-xs">
            <Lightbulb className="w-3 h-3 mr-1" />
            Persiapan Umrah
          </Badge>
          <h2 className="font-serif text-2xl md:text-4xl font-bold text-foreground mb-2">
            Tips Perjalanan
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Persiapkan diri dengan baik untuk ibadah yang lancar.
          </p>
        </motion.div>

        {/* Tips Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 max-w-4xl mx-auto">
          {tips.map((tip, index) => (
            <TipCard key={tip.title} tip={tip} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;