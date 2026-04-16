import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Plane, CheckCircle2 } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  activities,
  image,
  highlight,
}: ItineraryModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] md:max-w-lg max-h-[90vh] p-0 overflow-hidden rounded-xl bg-white">
        {/* Header Image */}
        {image && (
          <div className="relative h-32 md:h-44 w-full">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <Badge className="bg-primary text-white text-xs">
                <Plane className="w-3 h-3 mr-1" />
                Hari {day}
              </Badge>
            </div>
          </div>
        )}

        <DialogHeader className={`px-4 md:px-6 ${image ? "pt-1" : "pt-4"}`}>
          <div className="flex items-center gap-1.5 text-gray-600 text-xs md:text-sm">
            <MapPin className="w-3 h-3 md:w-4 md:h-4" />
            <span className="truncate">{location}</span>
          </div>
          <DialogTitle className="font-sans text-lg md:text-xl text-gray-900 leading-tight">
            {!image && <span className="text-primary mr-2">Hari {day}:</span>}
            {title}
          </DialogTitle>
          <Badge variant="outline" className="w-fit mt-1 border-primary text-primary text-xs">
            {getHighlightLabel(highlight)}
          </Badge>
        </DialogHeader>

        <ScrollArea className="px-4 md:px-6 pb-4 md:pb-6 max-h-[50vh]">
          <div className="space-y-1 mt-3">
            <h4 className="font-semibold flex items-center gap-2 mb-3 text-sm bg-primary text-white rounded-lg px-3 py-2 w-fit">
              <Clock className="w-3.5 h-3.5" />
              Jadwal Kegiatan
            </h4>
            <ul className="space-y-2">
              {activities.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 p-2 md:p-3 rounded-lg bg-gray-100"
                >
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    {activity.time && (
                      <span className="font-semibold text-gray-900 block text-xs md:text-sm">
                        {activity.time}
                      </span>
                    )}
                    <span className="text-gray-600 text-xs md:text-sm">
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