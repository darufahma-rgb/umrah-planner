import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X, MapPin, Clock, Plane, Building, Sunrise, Moon, Star } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";

interface Activity {
  time?: string;
  description: string;
}

interface ItineraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  day: number;
  date?: string;
  title: string;
  location: string;
  activities: Activity[];
  image?: string;
  highlight?: string;
}

const highlightConfig: Record<string, { label: string; color: string; bg: string; icon: typeof Plane; dot: string }> = {
  departure: { label: "Perjalanan",  color: "text-sky-300",     bg: "bg-sky-500/20 border-sky-400/40",     icon: Plane,    dot: "bg-sky-400"     },
  umrah:     { label: "Ibadah Umroh",color: "text-amber-300",   bg: "bg-amber-500/20 border-amber-400/40", icon: Building, dot: "bg-amber-400"   },
  worship:   { label: "Ibadah",      color: "text-emerald-300", bg: "bg-emerald-500/20 border-emerald-400/40", icon: Sunrise, dot: "bg-emerald-400" },
  ziarah:    { label: "Ziarah",      color: "text-rose-300",    bg: "bg-rose-500/20 border-rose-400/40",   icon: Moon,     dot: "bg-rose-400"    },
  travel:    { label: "City Tour",   color: "text-purple-300",  bg: "bg-purple-500/20 border-purple-400/40", icon: Star,   dot: "bg-purple-400"  },
};

const defaultConfig = {
  label: "Kegiatan", color: "text-white/70",
  bg: "bg-white/10 border-white/20", icon: Star, dot: "bg-white/60",
};

const ItineraryModal = ({
  isOpen,
  onClose,
  day,
  date,
  title,
  location,
  activities,
  image,
  highlight,
}: ItineraryModalProps) => {
  const cfg = (highlight && highlightConfig[highlight]) || defaultConfig;
  const Icon = cfg.icon;

  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={onClose}>
      <AnimatePresence>
        {isOpen && (
          <DialogPrimitive.Portal forceMount>

            {/* Backdrop */}
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                key="overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>

            {/* Content — fixed centering container */}
            <DialogPrimitive.Content
              forceMount
              className="fixed inset-0 z-50 flex items-center justify-center p-4 focus:outline-none"
              aria-describedby={undefined}
            >
              <motion.div
                key="modal"
                initial={{ opacity: 0, y: 40, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 24, scale: 0.97 }}
                transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                className="w-full max-w-md rounded-2xl overflow-hidden shadow-2xl flex flex-col"
                style={{ maxHeight: "88vh" }}
              >
                {/* ── Hero Image ── */}
                <div className="relative h-52 md:h-60 w-full flex-shrink-0 overflow-hidden">
                  {image ? (
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-full object-cover scale-105"
                      style={{ filter: "brightness(0.72) saturate(1.15)" }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary via-secondary to-black" />
                  )}

                  {/* Deep gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                  {/* Close button */}
                  <DialogPrimitive.Close className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/40 backdrop-blur-md border border-white/20 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/60 transition-all">
                    <X className="w-4 h-4" />
                    <span className="sr-only">Tutup</span>
                  </DialogPrimitive.Close>

                  {/* Day number — large editorial */}
                  <div className="absolute top-4 left-4 flex flex-col items-start">
                    <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-semibold leading-none mb-0.5">
                      Hari
                    </span>
                    <span
                      className="font-display font-extrabold leading-none text-white"
                      style={{ fontSize: "clamp(2.8rem, 8vw, 4rem)", textShadow: "0 2px 16px rgba(0,0,0,0.6)" }}
                    >
                      {String(day).padStart(2, "0")}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-5 right-14">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold border backdrop-blur-sm ${cfg.bg} ${cfg.color}`}>
                      <Icon className="w-3 h-3" />
                      {cfg.label}
                    </span>
                  </div>

                  {/* Title & location at bottom of image */}
                  <div className="absolute bottom-0 left-0 right-0 px-4 pb-4 pt-8">
                    {date && (
                      <p className="text-white/55 text-[10px] uppercase tracking-widest font-medium mb-1">{date}</p>
                    )}
                    <DialogPrimitive.Title className="font-serif font-bold text-white text-lg md:text-xl leading-snug mb-1.5">
                      {title}
                    </DialogPrimitive.Title>
                    <div className="flex items-center gap-1.5 text-white/60 text-xs">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="truncate">{location}</span>
                    </div>
                  </div>
                </div>

                {/* ── Activities ── */}
                <div className="bg-[hsl(25,20%,10%)] flex flex-col overflow-hidden flex-1">
                  {/* Section header */}
                  <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-white/8 flex-shrink-0">
                    <Clock className="w-3.5 h-3.5 text-white/40" />
                    <span className="text-white/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                      Jadwal Kegiatan
                    </span>
                    <span className="ml-auto text-white/25 text-[10px]">{activities.length} kegiatan</span>
                  </div>

                  <ScrollArea className="flex-1 min-h-0">
                    <ul className="px-5 py-4 space-y-0">
                      {activities.map((activity, index) => (
                        <motion.li
                          key={index}
                          initial={{ opacity: 0, x: -12 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.32, delay: 0.08 + index * 0.06, ease: "easeOut" }}
                          className="flex gap-3 relative"
                        >
                          {/* Timeline connector */}
                          <div className="flex flex-col items-center flex-shrink-0 pt-1">
                            <div className={`w-2 h-2 rounded-full flex-shrink-0 ring-2 ring-white/10 ${cfg.dot}`} />
                            {index < activities.length - 1 && (
                              <div className="w-px flex-1 mt-1.5 mb-1.5 bg-white/10" style={{ minHeight: "1.25rem" }} />
                            )}
                          </div>

                          {/* Content */}
                          <div className={`flex-1 ${index === activities.length - 1 ? "pb-2" : "pb-4"}`}>
                            {activity.time && (
                              <span className={`inline-block mb-1 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.color}`}>
                                {activity.time}
                              </span>
                            )}
                            <p className="text-white/80 text-xs md:text-sm leading-relaxed">
                              {activity.description}
                            </p>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </ScrollArea>
                </div>
              </motion.div>
            </DialogPrimitive.Content>

          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
};

export default ItineraryModal;
