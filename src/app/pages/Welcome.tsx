import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { LogIn, UserPlus } from "lucide-react";

export function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1609461098241-8f259e32bdb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGVycmFuZWFuJTIwbWFya2V0JTIwY29sb3JmdWx8ZW58MXx8fHwxNzc1MDE0NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hand to Hand Marketplace"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-between px-6 py-12">
        {/* Logo and Tagline */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mt-12"
        >
          <div className="w-24 h-24 rounded-3xl bg-primary shadow-2xl flex items-center justify-center mb-6">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-12 h-12"
            >
              <path d="M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14" />
              <path d="m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h3c1.1 0 2-.9 2-2s-.9-2-2-2h-2" />
              <path d="M3 14h14a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Hand to Hand</h1>
          <p className="text-white/90 text-center text-lg">
            Votre marketplace de la Côte d'Azur
          </p>
        </motion.div>

        {/* Features Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 px-4"
        >
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">Enchères en direct</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">Shopping live</span>
          </div>
          <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full">
            <span className="text-white text-sm font-medium">Bonnes affaires</span>
          </div>
        </motion.div>

        {/* Auth Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-4"
        >
          <button
            onClick={() => navigate("/auth?mode=signup")}
            className="w-full bg-primary text-white rounded-2xl h-16 flex items-center justify-center gap-3 font-medium shadow-2xl hover:bg-primary/90 transition-all transform hover:scale-[1.02]"
          >
            <UserPlus className="w-6 h-6" />
            <span className="text-lg">Créer un compte</span>
          </button>

          <button
            onClick={() => navigate("/auth?mode=signin")}
            className="w-full bg-white text-primary rounded-2xl h-16 flex items-center justify-center gap-3 font-medium shadow-2xl hover:bg-white/90 transition-all transform hover:scale-[1.02]"
          >
            <LogIn className="w-6 h-6" />
            <span className="text-lg">Se connecter</span>
          </button>

          <button
            onClick={() => navigate("/home")}
            className="w-full text-white text-center py-3 font-medium hover:text-white/80 transition-colors"
          >
            Continuer sans compte
          </button>
        </motion.div>
      </div>
    </div>
  );
}
