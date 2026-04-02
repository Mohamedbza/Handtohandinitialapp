import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, Handshake, TrendingDown, Video } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const slides = [
  {
    icon: Handshake,
    title: "Achetez et vendez en toute confiance",
    subtitle: "Des milliers d'articles à portée de main sur la Côte d'Azur",
    image: "https://images.unsplash.com/photo-1731312187106-a24dd45ec8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYXJrZXRwbGFjZSUyMG91dGRvb3IlMjBzdGFsbHN8ZW58MXx8fHwxNzc1MDE0NjA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: TrendingDown,
    title: "Des bonnes affaires garanties",
    subtitle: "Notre système de notation vous indique si le prix est juste",
    image: "https://images.unsplash.com/photo-1769578683495-88c7c5adbaad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG9wcGluZyUyMGJhZ3MlMjBwcm9kdWN0cyUyMHJldGFpbHxlbnwxfHx8fDE3NzUwMTQ2MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    icon: Video,
    title: "Shopping en direct & enchères",
    subtitle: "Participez aux ventes live et enchérissez en temps réel",
    image: "https://images.unsplash.com/photo-1753161618037-e6a8f740fd47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBzaG9wcGluZyUyMG9ubGluZSUyMG1hcmtldHBsYWNlfGVufDF8fHx8MTc3NTAxNDYxMHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Onboarding() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      navigate("/welcome");
    }
  };

  const handleSkip = () => {
    navigate("/welcome");
  };

  return (
    <div className="h-screen w-full bg-background flex flex-col overflow-hidden relative">
      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-sm text-foreground/60 font-medium z-10 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full"
      >
        Passer
      </button>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5 }}
          className="flex-1 flex flex-col"
        >
          {/* Image Section */}
          <div className="relative h-[55%] w-full overflow-hidden">
            <ImageWithFallback
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col items-center justify-start px-6 pt-14 pb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-center max-w-sm"
            >
              <h2 className="text-2xl font-semibold mb-3 text-foreground">
                {slides[currentSlide].title}
              </h2>
              <p className="text-foreground/60 text-base leading-relaxed">
                {slides[currentSlide].subtitle}
              </p>
            </motion.div>

            {/* Progress Dots */}
            <div className="flex gap-2 mt-auto mb-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-primary"
                      : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="w-full bg-primary text-primary-foreground rounded-xl h-14 flex items-center justify-center gap-2 font-medium hover:opacity-90 transition-opacity shadow-lg"
            >
              {currentSlide === slides.length - 1 ? "Commencer" : "Suivant"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Icon Badge - Positioned absolutely relative to main container */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="absolute top-[calc(55%-40px)] left-1/2 transform -translate-x-1/2 z-[100]"
        >
          <div className="w-20 h-20 rounded-full bg-primary shadow-xl flex items-center justify-center">
            {(() => {
              const Icon = slides[currentSlide].icon;
              return <Icon className="w-10 h-10 text-white" strokeWidth={2} />;
            })()}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}