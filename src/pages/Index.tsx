import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ItinerarySection from "@/components/ItinerarySection";
import LocationsSection from "@/components/LocationsSection";
import TipsSection from "@/components/TipsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <section id="jadwal">
          <ItinerarySection />
        </section>
        <section id="lokasi">
          <LocationsSection />
        </section>
        <section id="tips">
          <TipsSection />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;