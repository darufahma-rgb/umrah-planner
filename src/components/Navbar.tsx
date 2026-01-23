import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    window.open("https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh", "_blank");
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 p-2 md:p-4"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Left - Pill Navigation (Desktop) */}
          <div
            className={`hidden md:flex items-center gap-1 rounded-full px-2 py-1.5 transition-all duration-300 ${
              isScrolled
                ? "bg-background/90 backdrop-blur-md shadow-lg"
                : "bg-white/10 backdrop-blur-md"
            }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`px-4 py-1.5 text-xs font-medium tracking-wider uppercase transition-all rounded-full ${
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

          {/* Mobile Menu Button (Left on Mobile) */}
          <button
            className={`md:hidden p-2 rounded-full transition-all ${
              isScrolled
                ? "bg-background/90 backdrop-blur-md shadow-md"
                : "bg-white/10 backdrop-blur-md"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-5 h-5 ${isScrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>

          {/* Center - Logo */}
          <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center">
            <img
              src={logoElmassa}
              alt="El Massa Tour & Travel"
              className={`h-8 md:h-10 w-auto transition-all ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Right - CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-2">
            <Button
              onClick={openWhatsApp}
              size="sm"
              className={`rounded-full px-4 py-2 text-xs font-medium tracking-wider uppercase transition-all ${
                isScrolled
                  ? "bg-accent hover:bg-gold-dark text-accent-foreground"
                  : "bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20"
              }`}
            >
              Explore
              <ArrowRight className="w-3 h-3 ml-1" />
            </Button>
          </div>

          {/* Mobile CTA Button */}
          <Button
            onClick={openWhatsApp}
            size="sm"
            className={`md:hidden rounded-full px-3 py-2 text-xs font-medium transition-all ${
              isScrolled
                ? "bg-accent hover:bg-gold-dark text-accent-foreground"
                : "bg-white/10 backdrop-blur-md text-white border border-white/30"
            }`}
          >
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-2 bg-background/95 backdrop-blur-md rounded-xl shadow-xl"
            >
              <div className="p-3 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`block w-full text-left px-3 py-2 text-sm text-foreground hover:text-accent hover:bg-secondary/50 rounded-lg transition-colors font-medium ${
                      activeSection === link.id ? "text-accent bg-secondary/50" : ""
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <Button
                  onClick={openWhatsApp}
                  size="sm"
                  className="w-full mt-2 bg-accent hover:bg-gold-dark text-accent-foreground rounded-full text-xs"
                >
                  Hubungi Kami
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