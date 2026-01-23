import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-2">
            Itinerary Umrah
          </h3>
          <p className="text-primary-foreground/70 mb-6">
            Perjalanan spiritual menuju Tanah Suci
          </p>
          
          <div className="flex items-center justify-center gap-2 text-primary-foreground/60 text-sm">
            <span>Dibuat dengan</span>
            <Heart className="w-4 h-4 text-accent fill-accent" />
            <span>untuk umat</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-primary-foreground/10">
            <p className="text-primary-foreground/50 text-sm">
              © 2024 Itinerary Umrah. Semoga perjalanan Anda diberkahi Allah SWT.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;