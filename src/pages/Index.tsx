import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ItinerarySection from "@/components/ItinerarySection";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <section id="jadwal">
          <ItinerarySection />
        </section>
        <section id="lokasi">
          <LocationsSection />
        </section>
        <section id="tips">
          <TipsSection />
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;