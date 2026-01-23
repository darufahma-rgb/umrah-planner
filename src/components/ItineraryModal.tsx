import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Plane, CheckCircle2, ExternalLink } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  title: string;
  location: string;
  mapsUrl?: string;
  activities: Activity[];
  image?: string;
  highlight?: string;
}

const getHighlightLabel = (highlight?: string) => {
  switch (highlight) {
    case "departure":
      return "Perjalanan";
    case "umrah":
      return "Ibadah Umroh";
    case "worship":
      return "Ibadah";
    case "ziarah":
      return "Ziarah";
    case "travel":
      return "Tour";
    default:
      return "Kegiatan";
  }
};

const ItineraryModal = ({
  isOpen,
  onClose,
  day,
  title,
  location,
  mapsUrl,
  activities,
  image,
  highlight,
}: ItineraryModalProps) => {
  const handleMapsClick = () => {
    if (mapsUrl) {
      window.open(mapsUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg max-h-[85vh] p-0 overflow-hidden">
        {/* Header Image */}
        {image && (
          <div className="relative h-48 w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge className="bg-primary text-primary-foreground mb-2">
                <Plane className="w-3 h-3 mr-1" />
                Hari {day}
              </Badge>
            </div>
          </div>
        )}

        <DialogHeader className={`px-6 ${image ? "pt-2" : "pt-6"}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-muted-foreground text-sm">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            {mapsUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={handleMapsClick}
                className="text-accent border-accent/30 hover:bg-accent/10 hover:text-gold-dark"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                Buka Maps
              </Button>
            )}
          </div>
          <DialogTitle className="font-serif text-2xl text-foreground">
            {!image && <span className="text-accent mr-2">Hari {day}:</span>}
            {title}
          </DialogTitle>
          <Badge variant="outline" className="w-fit mt-2 border-accent text-accent">
            {getHighlightLabel(highlight)}
          </Badge>
        </DialogHeader>

        <ScrollArea className="px-6 pb-6 max-h-[40vh]">
          <div className="space-y-1 mt-4">
            <h4 className="font-semibold text-foreground flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-accent" />
              Jadwal Kegiatan
            </h4>
            <ul className="space-y-3">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <div>
                    {activity.time && (
                      <span className="font-semibold text-foreground block text-sm">
                        {activity.time}
                      </span>
                    )}
                    <span className="text-muted-foreground text-sm">
                      {activity.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default ItineraryModal;