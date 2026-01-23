import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shirt, 
  Stethoscope, 
  BookOpen, 
  Smartphone, 
  Heart, 
  FileText,
  Lightbulb
} from "lucide-react";

const tips = [
  {
    icon: Shirt,
    title: "Pakaian Ihram",
    description: "Siapkan 2 set pakaian ihram untuk pria. Wanita menggunakan pakaian biasa yang menutup aurat dengan baik.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Bawa obat-obatan pribadi, vitamin, dan masker. Pastikan vaksinasi meningitis sudah lengkap.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Buku Doa & Manasik",
    description: "Siapkan buku panduan manasik dan kumpulan doa untuk dipelajari selama perjalanan.",
    color: "bg-rose-light/10 text-rose-light",
  },
  {
    icon: Smartphone,
    title: "Komunikasi",
    description: "Siapkan SIM card lokal Saudi atau paket roaming untuk tetap terhubung dengan keluarga.",
    color: "bg-brown/10 text-brown",
  },
  {
    icon: Heart,
    title: "Niat yang Ikhlas",
    description: "Perbaiki niat sebelum berangkat, mohon maaf kepada keluarga dan lunasi hutang piutang.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: FileText,
    title: "Dokumen Penting",
    description: "Pastikan paspor berlaku minimal 6 bulan, visa umrah, dan fotokopi dokumen penting.",
    color: "bg-rose/10 text-rose",
  },
];

const TipsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            <Lightbulb className="w-3 h-3 mr-1" />
            Persiapan Umrah
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tips Perjalanan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Persiapkan diri dengan baik agar ibadah umrah berjalan lancar dan penuh berkah
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tips.map((tip) => (
            <Card
              key={tip.title}
              className="border border-border hover:border-accent/30 hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${tip.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <tip.icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                  {tip.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {tip.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;