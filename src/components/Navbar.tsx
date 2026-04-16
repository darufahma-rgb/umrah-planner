import { useState, useEffect } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
      const sections = ["jadwal", "lokasi", "tips"];
      let found = false;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            found = true;
            break;
          }
        }
      }
      if (!found && window.scrollY < 100) setActiveSection("home");
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
      document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
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
      {/* Floating Navbar */}
      <motion.div
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
      >
        <nav
          className={`w-full max-w-3xl transition-all duration-400 ${
            isScrolled
              ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-brown/10 border border-border/60 rounded-2xl"
              : "bg-white/12 backdrop-blur-md border border-white/20 rounded-2xl shadow-lg shadow-black/10"
          }`}
        >
          <div className="flex items-center justify-between h-13 px-4 md:px-5" style={{ height: "52px" }}>

            {/* Left: Nav Links (desktop) */}
            <div className="hidden md:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-sans px-3.5 py-1.5 text-[11px] font-semibold tracking-wider uppercase rounded-xl transition-all duration-200 ${
                    isScrolled
                      ? activeSection === link.id
                        ? "text-brown bg-accent/15 text-accent"
                        : "text-foreground/70 hover:text-foreground hover:bg-muted/60"
                      : activeSection === link.id
                      ? "text-white bg-white/20"
                      : "text-white/75 hover:text-white hover:bg-white/12"
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="nav-dot"
                      className={`absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${isScrolled ? "bg-accent" : "bg-white"}`}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile: Hamburger */}
            <button
              className={`md:hidden w-8 h-8 flex items-center justify-center rounded-xl transition-all ${
                isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/15"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            {/* Center: Logo */}
            <a
              href="/"
              className="absolute left-1/2 -translate-x-1/2"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            >
              <img
                src={logoElmassa}
                alt="El Massa"
                className={`h-7 md:h-8 w-auto transition-all duration-300 ${isScrolled ? "brightness-100" : "brightness-0 invert"}`}
              />
            </a>

            {/* Right: CTA (desktop) */}
            <div className="hidden md:flex">
              <button
                onClick={openWhatsApp}
                className={`font-sans text-[11px] font-semibold tracking-wider uppercase px-4 py-2 rounded-xl transition-all duration-200 ${
                  isScrolled
                    ? "bg-brown text-white hover:bg-brown-dark shadow-sm"
                    : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
                }`}
              >
                Hubungi
              </button>
            </div>

            {/* Mobile: WhatsApp icon */}
            <button
              onClick={openWhatsApp}
              className={`md:hidden w-8 h-8 flex items-center justify-center rounded-xl transition-all ${
                isScrolled ? "bg-brown text-white" : "bg-white/20 text-white border border-white/25"
              }`}
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </button>
          </div>
        </nav>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[72px] left-4 right-4 z-50 md:hidden"
            >
              <div className="bg-white/96 backdrop-blur-xl rounded-2xl shadow-2xl shadow-brown/15 border border-border/50 overflow-hidden">
                {/* Nav links */}
                <div className="p-2">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => scrollToSection(link.href)}
                      className={`flex w-full items-center gap-3 px-4 py-3 text-sm rounded-xl transition-all font-sans font-medium ${
                        activeSection === link.id
                          ? "bg-accent/12 text-accent"
                          : "text-foreground/75 hover:text-foreground hover:bg-muted/50"
                      }`}
                    >
                      {activeSection === link.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      )}
                      {link.label}
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="mx-4 h-px bg-border/50" />

                {/* WhatsApp CTA */}
                <div className="p-2 pt-2">
                  <button
                    onClick={openWhatsApp}
                    className="w-full font-sans flex items-center justify-center gap-2 bg-brown hover:bg-brown-dark text-white rounded-xl py-3 text-sm font-semibold transition-colors"
                  >
                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi via WhatsApp
                  </button>
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
