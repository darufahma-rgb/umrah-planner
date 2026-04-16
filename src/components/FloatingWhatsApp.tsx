import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FloatingWhatsApp = () => {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/6281249476778?text=Halo%20El%20Massa,%20saya%20tertarik%20dengan%20paket%20Umroh",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Pulse rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring [animation-delay:0.6s]" />

      <motion.button
        onClick={openWhatsApp}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 220, damping: 14 }}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.93 }}
        className="relative bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-xl shadow-[#25D366]/35 transition-colors"
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" fill="white" strokeWidth={0} />
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp;
