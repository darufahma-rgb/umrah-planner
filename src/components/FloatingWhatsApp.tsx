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
    <motion.button
      onClick={openWhatsApp}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg shadow-[#25D366]/30 transition-colors"
      aria-label="Chat via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.button>
  );
};

export default FloatingWhatsApp;
