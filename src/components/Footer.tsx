import { Heart, Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
              ✦ El Massa Umrah
            </h3>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Perjalanan spiritual menuju Tanah Suci dengan pelayanan terbaik dan
              pengalaman yang tak terlupakan.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +62 812-3456-7890
                </a>
              </li>
              <li>
                <button
                  onClick={openWhatsApp}
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </button>
              </li>
              <li>
                <a
                  href="mailto:info@elmassa.com"
                  className="flex items-center gap-2 text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  info@elmassa.com
                </a>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Alamat</h4>
            <div className="flex items-start gap-2 text-primary-foreground/70 text-sm">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <p>
                Jl. Masjid Raya No. 123
                <br />
                Pangkal Pinang, Bangka Belitung
                <br />
                Indonesia
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary-foreground/60 text-sm"
            >
              <span>Dibuat dengan</span>
              <Heart className="w-4 h-4 text-accent fill-accent" />
              <span>untuk umat</span>
            </motion.div>

            <p className="text-primary-foreground/50 text-sm text-center md:text-right">
              © 2024 El Massa Umrah. Semoga perjalanan Anda diberkahi Allah SWT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;