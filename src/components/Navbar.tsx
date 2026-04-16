import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";
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
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border/50"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">

            {/* Desktop: Left nav links */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`px-4 py-1.5 text-xs font-semibold tracking-wider uppercase rounded-full transition-all ${
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

            {/* Mobile: Hamburger left */}
            <button
              className={`md:hidden flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isScrolled
                  ? "bg-muted text-foreground"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/20"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen
                ? <X className="w-4 h-4" />
                : <Menu className="w-4 h-4" />
              }
            </button>

            {/* Center: Logo */}
            <a
              href="/"
              className="absolute left-1/2 -translate-x-1/2 flex items-center"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <img
                src={logoElmassa}
                alt="El Massa Tour & Travel"
                className={`h-8 md:h-10 w-auto transition-all duration-300 ${
                  isScrolled ? "brightness-100" : "brightness-0 invert"
                }`}
              />
            </a>

            {/* Desktop: Right CTA */}
            <div className="hidden md:flex items-center">
              <Button
                onClick={openWhatsApp}
                size="sm"
                className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase transition-all ${
                  isScrolled
                    ? "bg-accent hover:bg-gold-dark text-accent-foreground shadow-sm"
                    : "bg-white/15 backdrop-blur-sm text-white border border-white/25 hover:bg-white/25"
                }`}
              >
                Explore
                <ArrowRight className="w-3 h-3 ml-1.5" />
              </Button>
            </div>

            {/* Mobile: WhatsApp icon right */}
            <button
              onClick={openWhatsApp}
              className={`md:hidden flex items-center justify-center w-9 h-9 rounded-full transition-all ${
                isScrolled
                  ? "bg-accent text-accent-foreground"
                  : "bg-white/15 backdrop-blur-sm text-white border border-white/20"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Slide-down menu panel */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-14 left-4 right-4 z-50 md:hidden bg-white rounded-2xl shadow-2xl overflow-hidden border border-border/60"
            >
              <div className="p-3 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => scrollToSection(link.href)}
                    className={`flex w-full items-center px-4 py-3 text-sm font-medium rounded-xl transition-colors ${
                      activeSection === link.id
                        ? "text-accent bg-accent/8"
                        : "text-foreground hover:text-accent hover:bg-muted/60"
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="pt-1 pb-1">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-accent hover:bg-gold-dark text-accent-foreground rounded-xl text-sm font-semibold py-4"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Hubungi via WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
