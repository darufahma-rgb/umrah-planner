import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ItinerarySectionOktober from "@/components/ItinerarySectionOktober";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SectionDivider from "@/components/SectionDivider";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";
import madinahImage from "@/assets/madinah-mosque.jpg";
import heroImage from "@/assets/hero-makkah.jpg";
import qubaImage from "@/assets/masjid-quba.jpg";
import cityTaifImage from "@/assets/city-taif.jpg";

const OktoberPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45, delay: 0.5 }}
        className="fixed bottom-6 left-4 z-40"
      >
        <Link
          to="/"
          className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-stone-200 shadow-lg rounded-full px-3.5 py-2 text-stone-700 text-xs font-semibold hover:bg-white transition-all"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
          Semua Jadwal
        </Link>
      </motion.div>

      <main>
        <HeroSection
          dateText="30 Sep – 13 Okt 2026"
          bgImage={madinahImage}
          sideTint="rgba(10,60,55,0.35)"
          cornerGlow="rgba(20,100,80,0.28)"
          destinations={[
            { name: "Madinah", subtitle: "Kota Bercahaya",  image: madinahImage  },
            { name: "Makkah",  subtitle: "Kota Suci",       image: heroImage     },
            { name: "Thaif",   subtitle: "City Tour",       image: cityTaifImage },
          ]}
        />
        <SectionDivider color="gold" delay={0} />
        <FeaturesSection />
        <SectionDivider color="gold" delay={0.3} />
        <section id="jadwal">
          <ItinerarySectionOktober />
        </section>
        <SectionDivider color="white" delay={0.6} />
        <section id="lokasi">
          <LocationsSection />
        </section>
        <SectionDivider color="gold" delay={0.9} />
        <section id="fasilitas">
          <BenefitsSection />
        </section>
        <SectionDivider color="gold" delay={0.2} />
        <section id="tips">
          <TipsSection />
        </section>
        <SectionDivider color="gold" delay={0.5} />
        <CTASection />
        <SectionDivider color="white" delay={0.1} />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default OktoberPage;
