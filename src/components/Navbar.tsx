import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["jadwal", "lokasi", "tips"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#", label: "Home", id: "home" },
    { href: "#jadwal", label: "Itinerary", id: "jadwal" },
    { href: "#tips", label: "Tips", id: "tips" },
  ];

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const id = href.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/6281234567890?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left - Pill Navigation */}
          <div
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-2 transition-all duration-300 ${
              isScrolled
                ? "bg-background/90 backdrop-blur-md shadow-lg"
                : "bg-white/10 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-5 py-2 text-sm font-medium tracking-wider uppercase transition-all rounded-full ${
                  isScrolled
                    ? activeSection === link.id
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                    : activeSection === link.id
                    ? "text-accent"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Center - Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img
              src={logoElmassa}
              alt="El Massa Tour & Travel"
              className={`h-10 md:h-12 w-auto transition-all ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Right - CTA & Search */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={openWhatsApp}
              className={`rounded-full px-6 py-5 text-sm font-medium tracking-wider uppercase transition-all ${
                isScrolled
                  ? "bg-accent hover:bg-gold-dark text-accent-foreground"
                  : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              Explore
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <button
              className={`p-3 rounded-full transition-all ${
                isScrolled
                  ? "bg-secondary text-foreground hover:bg-secondary/80"
                  : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden ml-auto p-2 rounded-full bg-white/10 backdrop-blur-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-4 bg-background/95 backdrop-blur-md rounded-2xl shadow-xl"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-4 py-3 text-foreground hover:text-accent hover:bg-secondary/50 rounded-xl transition-colors font-medium tracking-wider uppercase ${
                      activeSection === link.id ? "text-accent bg-secondary/50" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={openWhatsApp}
                  className="w-full mt-2 bg-accent hover:bg-gold-dark text-accent-foreground rounded-full"
                >
                  Hubungi Kami
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;