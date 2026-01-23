import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Building, Sunrise, Moon, ChevronRight, ExternalLink } from "lucide-react";
import ItineraryModal from "./ItineraryModal";
import { motion } from "framer-motion";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryDayProps {
  day: number;
  title: string;
  location: string;
  mapsUrl?: string;
  activities: Activity[];
  image?: string;
  highlight?: "departure" | "umrah" | "worship" | "ziarah" | "travel";
  index?: number;
}

const getIcon = (highlight?: string) => {
  switch (highlight) {
    case "departure":
    case "travel":
      return Plane;
    case "umrah":
      return Building;
    case "worship":
      return Sunrise;
    default:
      return Moon;
  }
};

const getHighlightColor = (highlight?: string) => {
  switch (highlight) {
    case "departure":
      return "bg-secondary text-secondary-foreground";
    case "umrah":
      return "bg-primary text-primary-foreground";
    case "worship":
      return "bg-accent text-accent-foreground";
    case "ziarah":
      return "bg-rose-light/20 text-foreground";
    case "travel":
      return "bg-brown/10 text-foreground";
    default:
      return "bg-card text-card-foreground";
  }
};

const ItineraryDay = ({
  day,
  title,
  location,
  mapsUrl,
  activities,
  image,
  highlight,
  index = 0,
}: ItineraryDayProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const Icon = getIcon(highlight);

  const handleMapsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (mapsUrl) {
      window.open(mapsUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true, margin: "-50px" }}
      >
        <Card
          className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 h-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Image Header */}
          {image && (
            <div className="relative h-40 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <Badge
                className={`absolute top-3 left-3 ${getHighlightColor(highlight)}`}
              >
                Hari {day}
              </Badge>
            </div>
          )}

          {!image && (
            <div className={`h-24 ${getHighlightColor(highlight)} flex items-center justify-center relative`}>
              <Icon className="w-10 h-10 opacity-30 group-hover:scale-110 transition-transform" />
              <Badge
                className="absolute top-3 left-3 bg-background/90 text-foreground"
              >
                Hari {day}
              </Badge>
            </div>
          )}

          <CardContent className="p-5">
            {/* Location with Maps Link */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <div className="flex items-center gap-1.5 text-muted-foreground text-sm min-w-0">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                <span className="truncate">{location}</span>
              </div>
              {mapsUrl && (
                <button
                  onClick={handleMapsClick}
                  className="flex items-center gap-1 text-xs font-medium text-accent hover:text-gold-dark transition-colors flex-shrink-0 bg-accent/10 hover:bg-accent/20 px-2 py-1 rounded-full"
                >
                  <ExternalLink className="w-3 h-3" />
                  Maps
                </button>
              )}
            </div>

            {/* Title */}
            <h3 className="font-serif text-lg font-bold text-foreground mb-4 line-clamp-2 group-hover:text-primary transition-colors">
              {title}
            </h3>

            {/* Activities */}
            <ul className="space-y-2">
              {activities.slice(0, 3).map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground line-clamp-1">
                    {activity.time && (
                      <span className="font-medium text-foreground mr-1">
                        {activity.time}
                      </span>
                    )}
                    {activity.description}
                  </span>
                </li>
              ))}
            </ul>

            {/* View More */}
            <div className="mt-4 flex items-center text-sm font-medium text-accent group-hover:text-gold-dark transition-colors">
              Lihat Detail
              <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <ItineraryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        day={day}
        title={title}
        location={location}
        mapsUrl={mapsUrl}
        activities={activities}
        image={image}
        highlight={highlight}
      />
    </>
  );
};

export default ItineraryDay;