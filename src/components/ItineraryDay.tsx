import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Building, Sunrise, Moon, ChevronRight } from "lucide-react";
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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.05 }}
        viewport={{ once: true, margin: "-30px" }}
      >
        <Card
          className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 h-full cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          {/* Image Header */}
          {image && (
            <div className="relative h-24 md:h-32 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <Badge
                className={`absolute top-2 left-2 text-[10px] md:text-xs ${getHighlightColor(highlight)}`}
              >
                Hari {day}
              </Badge>
            </div>
          )}

          {!image && (
            <div className={`h-16 md:h-20 ${getHighlightColor(highlight)} flex items-center justify-center relative`}>
              <Icon className="w-6 h-6 md:w-8 md:h-8 opacity-30" />
              <Badge className="absolute top-2 left-2 bg-background/90 text-foreground text-[10px] md:text-xs">
                Hari {day}
              </Badge>
            </div>
          )}

          <CardContent className="p-3 md:p-4">
            {/* Location */}
            <div className="flex items-center gap-1 text-muted-foreground text-[10px] md:text-xs mb-1">
              <MapPin className="w-3 h-3 flex-shrink-0" />
              <span className="truncate">{location}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-xs md:text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors leading-tight">
              {title}
            </h3>

            {/* Activities - Hidden on mobile */}
            <ul className="hidden md:block space-y-1">
              {activities.slice(0, 2).map((activity, idx) => (
                <li key={idx} className="flex items-start gap-1.5 text-[10px] md:text-xs">
                  <span className="w-1 h-1 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  <span className="text-muted-foreground line-clamp-1">
                    {activity.description}
                  </span>
                </li>
              ))}
            </ul>

            {/* View More */}
            <div className="mt-2 flex items-center text-[10px] md:text-xs font-medium text-accent group-hover:text-gold-dark transition-colors">
              Detail
              <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
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
        activities={activities}
        image={image}
        highlight={highlight}
      />
    </>
  );
};

export default ItineraryDay;