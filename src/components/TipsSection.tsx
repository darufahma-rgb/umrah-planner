import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shirt, 
  Stethoscope, 
  BookOpen, 
  Smartphone, 
  Heart, 
  AlertCircle,
  Lightbulb
} from "lucide-react";

const tips = [
  {
    icon: Shirt,
    title: "Pakaian Ihram",
    description: "Siapkan 2 set pakaian ihram untuk pria. Wanita boleh menggunakan pakaian biasa yang menutup aurat.",
  },
  {
    icon: Stethoscope,
    title: "Kesehatan",
    description: "Bawa obat-obatan pribadi, vitamin, dan masker. Pastikan vaksinasi meningitis sudah lengkap.",
  },
  {
    icon: BookOpen,
    title: "Buku Doa",
    description: "Siapkan buku panduan manasik dan kumpulan doa untuk dipelajari selama perjalanan.",
  },
  {
    icon: Smartphone,
    title: "Komunikasi",
    description: "Siapkan SIM card lokal Saudi atau paket roaming untuk tetap terhubung dengan keluarga.",
  },
  {
    icon: Heart,
    title: "Niat yang Ikhlas",
    description: "Perbaiki niat sebelum berangkat, mohon maaf kepada keluarga dan selesaikan urusan duniawi.",
  },
  {
    icon: AlertCircle,
    title: "Dokumen Penting",
    description: "Pastikan paspor masih berlaku minimal 6 bulan, visa umrah, dan kartu identitas lainnya.",
  },
];

const TipsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-accent text-accent">
            <Lightbulb className="w-3 h-3 mr-1" />
            Persiapan Umrah
          </Badge>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Tips Perjalanan Umrah
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Persiapkan diri Anda dengan baik agar perjalanan ibadah umrah
            berjalan lancar dan penuh berkah.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip) => (
            <Card
              key={tip.title}
              className="group border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <tip.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif text-lg text-foreground">
                  {tip.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tip.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TipsSection;