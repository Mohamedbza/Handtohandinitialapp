import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Camera, Upload, X, Zap } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

type Step = "photos" | "details" | "price" | "shipping" | "review";

export function SellFlow() {
  const [step, setStep] = useState<Step>("photos");
  const [photos, setPhotos] = useState<string[]>([]);
  const navigate = useNavigate();

  const addPhoto = () => {
    if (photos.length < 5) {
      setPhotos([...photos, "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"]);
    }
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => step === "photos" ? navigate(-1) : setStep("photos")}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-semibold">Vendre un article</h1>
          <button className="text-sm text-muted-foreground">Annuler</button>
        </div>
        
        {/* Progress */}
        <div className="px-4 pb-3">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all"
              style={{ width: step === "photos" ? "20%" : step === "details" ? "40%" : step === "price" ? "60%" : step === "shipping" ? "80%" : "100%" }}
            />
          </div>
        </div>
      </div>

      <div className="px-4 py-6">
        {step === "photos" && (
          <>
            <h2 className="text-2xl font-semibold mb-2">Ajouter des photos</h2>
            <p className="text-muted-foreground mb-6">La première photo sera la photo de couverture</p>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {photos.map((photo, index) => (
                <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-muted">
                  <img src={photo} alt="" className="w-full h-full object-cover" />
                  <button
                    onClick={() => setPhotos(photos.filter((_, i) => i !== index))}
                    className="absolute top-2 right-2 w-6 h-6 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center"
                  >
                    <X className="w-4 h-4 text-white" />
                  </button>
                </div>
              ))}
              {photos.length < 5 && (
                <button
                  onClick={addPhoto}
                  className="aspect-square rounded-xl border-2 border-dashed border-border flex flex-col items-center justify-center gap-2 hover:border-primary transition-colors"
                >
                  <Camera className="w-6 h-6 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Ajouter</span>
                </button>
              )}
              {[...Array(Math.max(0, 5 - photos.length - 1))].map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square rounded-xl border border-border/50 bg-muted/30" />
              ))}
            </div>

            <div className="bg-muted/50 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-16 h-16 rounded-xl bg-card flex items-center justify-center border border-border">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Débloquez jusqu'à 10 photos avec Boost</p>
                  <p className="text-xs text-muted-foreground">Augmentez la visibilité de votre annonce</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setStep("details")}
              disabled={photos.length === 0}
              className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium disabled:opacity-50"
            >
              Continuer
            </button>
          </>
        )}

        {step !== "photos" && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Étape {step} - À compléter</p>
            <button
              onClick={() => navigate("/home")}
              className="mt-4 bg-primary text-primary-foreground px-6 py-3 rounded-xl"
            >
              Revenir à l'accueil
            </button>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}