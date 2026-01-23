import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plane, Building, Sunrise, Moon } from "lucide-react";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryDayProps {
  day: number;
  title: string;
  location: string;
  activities: Activity[];
  image?: string;
  highlight?: "departure" | "umrah" | "worship" | "ziarah" | "travel";
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
  activities,
  image,
  highlight,
}: ItineraryDayProps) => {
  const Icon = getIcon(highlight);

  return (
    <Card className="group overflow-hidden border border-border hover:border-accent/50 hover:shadow-xl transition-all duration-300 h-full">
      {/* Image Header */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
          <Icon className="w-10 h-10 opacity-30" />
          <Badge
            className="absolute top-3 left-3 bg-background/90 text-foreground"
          >
            Hari {day}
          </Badge>
        </div>
      )}

      <CardContent className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-2">
          <MapPin className="w-3.5 h-3.5" />
          <span>{location}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-lg font-bold text-foreground mb-4 line-clamp-2">
          {title}
        </h3>

        {/* Activities */}
        <ul className="space-y-2">
          {activities.slice(0, 4).map((activity, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0" />
              <span className="text-muted-foreground">
                {activity.time && (
                  <span className="font-medium text-foreground mr-1">
                    {activity.time}
                  </span>
                )}
                {activity.description}
              </span>
            </li>
          ))}
          {activities.length > 4 && (
            <li className="text-sm text-accent font-medium">
              +{activities.length - 4} kegiatan lainnya
            </li>
          )}
        </ul>
      </CardContent>
    </Card>
  );
};

export default ItineraryDay;