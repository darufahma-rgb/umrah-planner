import { Heart, Phone, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import logoElmassa from "@/assets/logo-elmassa.png";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <footer className="bg-gradient-to-b from-secondary to-primary py-8 md:py-10">
      <div className="container mx-auto px-3 md:px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img
              src={logoElmassa}
              alt="El Massa Tour & Travel"
              className="h-10 md:h-12 w-auto mb-3 brightness-0 invert"
            />
            <p className="font-sans text-primary-foreground/70 text-xs">
              Perjalanan spiritual menuju Tanah Suci dengan pelayanan terbaik.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans font-semibold text-primary-foreground text-sm mb-3">Hubungi</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="tel:+6281249476778"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-xs"
                >
                  <Phone className="w-3 h-3" />
                  +62 812-4947-6778
                </a>
              </li>
              <li>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 text-whatsapp hover:text-whatsapp-hover transition-colors text-xs"
                >
                  <MessageCircle className="w-3 h-3" />
                  WhatsApp
                </button>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-sans font-semibold text-primary-foreground text-sm mb-3">Alamat</h4>
            <div className="flex items-start gap-2 text-primary-foreground/70 text-xs">
              <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
              <p className="font-sans">
                Ruko Bes Cinema, Jl. Jendral Sudirman
                <br />
                Selindung Baru, Pangkal Pinang
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-4">
          <div className="flex items-center justify-center">
            <p className="font-sans text-primary-foreground/50 text-[10px] md:text-xs text-center">
              © 2026 El Massa. Semoga diberkahi Allah SWT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;