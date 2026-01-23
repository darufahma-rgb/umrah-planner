import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plane, 
  Luggage, 
  FileText, 
  Building2, 
  Utensils, 
  Bus, 
  Briefcase, 
  Users, 
  MapPin, 
  BookOpen, 
  HeartPulse, 
  Droplets, 
  Camera, 
  Gift,
  ChefHat,
  Info
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface BenefitItem {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
  details: string[];
}

const benefits: BenefitItem[] = [
  { 
    icon: Plane, 
    title: 'Tiket Pesawat PP', 
    desc: 'CGK - JED (Saudia/Garuda)',
    details: [
      'Tiket PP Jakarta (CGK) - Jeddah (JED)',
      'Pilihan maskapai: Saudia Airlines atau Garuda Indonesia',
      'Kelas ekonomi dengan layanan halal meal',
      'Termasuk airport tax dan fuel surcharge'
    ]
  },
  { 
    icon: Luggage, 
    title: 'Bagasi 1 x 23 KG', 
    desc: 'Sesuai Maskapai',
    details: [
      'Bagasi check-in 1 x 23 kg',
      'Hand luggage 7 kg',
      'Sesuai ketentuan maskapai penerbangan'
    ]
  },
  { 
    icon: FileText, 
    title: 'Visa Umrah', 
    desc: 'Proses Lengkap',
    details: [
      'Proses visa umrah lengkap',
      'Pengurusan dokumen resmi',
      'Asuransi perjalanan sudah termasuk',
      'Biaya visa sudah termasuk dalam paket'
    ]
  },
  { 
    icon: Building2, 
    title: 'Hotel Makkah & Madinah', 
    desc: 'Bintang 4-5',
    details: [
      'Hotel bintang 4-5 di Makkah',
      'Hotel bintang 4-5 di Madinah',
      'Lokasi dekat dengan Masjidil Haram & Masjid Nabawi',
      'Kamar ber-AC dengan fasilitas lengkap',
      'WiFi gratis'
    ]
  },
  { 
    icon: Utensils, 
    title: 'Makan 3x Sehari', 
    desc: 'Menu Indonesia',
    details: [
      'Sarapan, makan siang, dan makan malam',
      'Menu masakan Indonesia',
      'Makanan halal terjamin',
      'Buffet di hotel atau catering khusus'
    ]
  },
  { 
    icon: Bus, 
    title: 'Bus AC Modern', 
    desc: 'Transportasi Nyaman',
    details: [
      'Bus AC modern dan nyaman',
      'Untuk seluruh perjalanan di Arab Saudi',
      'Airport transfer termasuk',
      'Perjalanan wisata ke tempat bersejarah'
    ]
  },
  { 
    icon: Briefcase, 
    title: 'Perlengkapan Umrah', 
    desc: '+ Koper Eksklusif',
    details: [
      'Koper',
      'Bahan baju',
      'Hijab',
      'Mukenah',
      'Ihram untuk laki-laki',
      'Buku panduan',
      'Tag koper',
      'Syal',
      'ID card',
      'Tas ransel kecil',
      'Tas serut untuk sandal',
      'Tas passport dan dokumen'
    ]
  },
  { 
    icon: Users, 
    title: 'Tour Leader & Muthowwif', 
    desc: 'Berpengalaman',
    details: [
      'Tour leader berpengalaman dari Indonesia',
      'Muthowwif (pembimbing ibadah) profesional',
      'Pendampingan selama perjalanan',
      'Bantuan 24 jam selama di Arab Saudi'
    ]
  },
  { 
    icon: MapPin, 
    title: 'Handling Bandara', 
    desc: 'Jakarta & Jeddah',
    details: [
      'Handling di Bandara Soekarno-Hatta Jakarta',
      'Handling di Bandara King Abdulaziz Jeddah',
      'Bantuan check-in dan boarding',
      'Porter untuk bagasi'
    ]
  },
  { 
    icon: BookOpen, 
    title: 'Bimbingan Manasik 3x', 
    desc: 'Sebelum Berangkat',
    details: [
      '3 kali bimbingan manasik sebelum berangkat',
      'Materi tata cara umrah lengkap',
      'Praktik langsung gerakan ibadah',
      'Doa-doa umrah dan ziarah',
      'Sesi tanya jawab dengan ustadz'
    ]
  },
  { 
    icon: HeartPulse, 
    title: 'Free Medical Checkup', 
    desc: '30 Hari Sebelum',
    details: [
      'Pemeriksaan kesehatan gratis',
      'Dilakukan 30 hari sebelum keberangkatan',
      'Pemeriksaan darah lengkap',
      'Konsultasi dengan dokter'
    ]
  },
  { 
    icon: Droplets, 
    title: 'Air Zamzam 5 Liter', 
    desc: 'Saat Kepulangan',
    details: [
      'Air zamzam 5 liter per jamaah',
      'Kemasan resmi dan higienis',
      'Diberikan saat kepulangan',
      'Bonus untuk acara selamatan di rumah'
    ]
  },
  { 
    icon: ChefHat, 
    title: 'Free Ayam Albaik', 
    desc: 'Saat Kepulangan',
    details: [
      'Ayam Albaik gratis',
      'Makanan khas Arab Saudi yang populer',
      'Diberikan saat kepulangan'
    ]
  },
  { 
    icon: Camera, 
    title: 'Dokumentasi', 
    desc: 'Foto & Video',
    details: [
      'Dokumentasi foto selama perjalanan',
      'Video highlight perjalanan',
      'Foto bersama di tempat-tempat bersejarah',
      'File digital diberikan setelah pulang'
    ]
  },
  { 
    icon: Gift, 
    title: 'Bingkisan Kenangan', 
    desc: 'Saat Kepulangan',
    details: [
      'Bingkisan oleh-oleh khas Tanah Suci',
      'Kenang-kenangan perjalanan umrah',
      'Diberikan saat kepulangan'
    ]
  },
];

const BenefitsSection = () => {
  const [selectedBenefit, setSelectedBenefit] = useState<BenefitItem | null>(null);

  return (
    <section className="py-16 md:py-28 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-accent font-medium text-base md:text-lg tracking-wider uppercase">
            Fasilitas Include
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mt-3">
            Benefit Perjalanan Umrah
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-base md:text-lg lg:text-xl">
            Nikmati berbagai fasilitas lengkap bersama El Massa Tour & Travel
          </p>
          <p className="text-accent text-sm mt-2">
            Klik item untuk melihat detail
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 md:gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.03, y: -2 }}
              className="group cursor-pointer"
              onClick={() => setSelectedBenefit(benefit)}
            >
              <div className="relative flex items-center gap-2 md:gap-4 bg-card border border-border/50 rounded-lg md:rounded-xl p-2.5 md:p-4 h-full hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                {/* Click indicator icon */}
                <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 opacity-50 group-hover:opacity-100 transition-opacity">
                  <Info className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                </div>
                <div className="flex-shrink-0 w-9 h-9 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <benefit.icon className="w-4 h-4 md:w-6 md:h-6 text-accent" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xs md:text-base font-semibold text-foreground leading-tight pr-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[10px] md:text-sm text-muted-foreground leading-tight mt-0.5">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:mt-14 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <div className="bg-accent/10 border border-accent/30 rounded-xl px-6 py-3 text-center">
            <span className="text-sm md:text-base lg:text-lg text-foreground">
              <span className="font-semibold text-accent">Bonus:</span> Air Zamzam 5 Liter Gratis untuk acara selamatan
            </span>
          </div>
          <div className="bg-secondary/20 border border-secondary/30 rounded-xl px-6 py-3 text-center">
            <span className="text-sm md:text-base lg:text-lg text-muted-foreground">
              <span className="font-semibold">Exclude:</span> Paspor, Vaksin, Bagasi Tambahan
            </span>
          </div>
        </motion.div>
      </div>

      {/* Detail Dialog */}
      <Dialog open={!!selectedBenefit} onOpenChange={() => setSelectedBenefit(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selectedBenefit && (
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <selectedBenefit.icon className="w-6 h-6 text-accent" />
                </div>
              )}
              <div>
                <DialogTitle className="text-xl font-serif">
                  {selectedBenefit?.title}
                </DialogTitle>
                <DialogDescription className="text-accent">
                  {selectedBenefit?.desc}
                </DialogDescription>
              </div>
            </div>
          </DialogHeader>
          <div className="mt-4">
            <h4 className="font-semibold text-foreground mb-3">Detail:</h4>
            <ul className="space-y-2">
              {selectedBenefit?.details.map((detail, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <span className="text-accent mt-1">•</span>
                  <span>{detail}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BenefitsSection;
