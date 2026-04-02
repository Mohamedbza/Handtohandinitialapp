import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, CreditCard, Camera, Upload, Shield, CheckCircle, Clock } from "lucide-react";

type Step = "intro" | "id-upload" | "selfie" | "pending";

export function KYCVerification() {
  const [step, setStep] = useState<Step>("intro");
  const [idFront, setIdFront] = useState<string | null>(null);
  const [idBack, setIdBack] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleFileUpload = (side: "front" | "back") => {
    // Simulate file upload
    const mockImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='60'%3E%3Crect fill='%23D4C2FC' width='100' height='60'/%3E%3C/svg%3E";
    if (side === "front") {
      setIdFront(mockImage);
    } else {
      setIdBack(mockImage);
    }
  };

  if (step === "intro") {
    return (
      <div className="h-screen w-full bg-background">
        <div className="max-w-md mx-auto px-6 py-8">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 flex items-center gap-2 text-muted-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>

          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full bg-accent/50 flex items-center justify-center mb-6">
              <Shield className="w-12 h-12 text-primary" />
            </div>

            <h1 className="text-2xl font-semibold mb-2">Vérification d'identité</h1>
            <p className="text-muted-foreground mb-8">
              Pour la sécurité de tous, vérifiez votre identité pour vendre et acheter
            </p>

            <div className="w-full space-y-4 mb-8">
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p className="text-sm">Protège contre les arnaques</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p className="text-sm">Badge vérifié ✓ sur votre profil</p>
              </div>
              <div className="flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                <p className="text-sm">Obligatoire pour effectuer des transactions</p>
              </div>
            </div>

            <button
              onClick={() => setStep("id-upload")}
              className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity mb-3"
            >
              Commencer la vérification
            </button>
            <button
              onClick={() => navigate("/home")}
              className="w-full text-muted-foreground font-medium"
            >
              Plus tard
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "id-upload") {
    return (
      <div className="h-screen w-full bg-background">
        <div className="max-w-md mx-auto px-6 py-8">
          <button
            onClick={() => setStep("intro")}
            className="mb-6 flex items-center gap-2 text-muted-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Étape 1 sur 2</span>
              <span className="text-sm text-primary">50%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-primary rounded-full" />
            </div>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Pièce d'identité</h1>
          <p className="text-muted-foreground mb-8">
            Prenez en photo le recto et le verso de votre pièce d'identité
          </p>

          <div className="space-y-4 mb-8">
            <div
              onClick={() => handleFileUpload("front")}
              className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors cursor-pointer"
            >
              {idFront ? (
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              ) : (
                <Upload className="w-8 h-8 text-muted-foreground" />
              )}
              <span className="text-sm font-medium">
                {idFront ? "Recto ajouté ✓" : "Recto"}
              </span>
            </div>

            <div
              onClick={() => handleFileUpload("back")}
              className="border-2 border-dashed border-border rounded-xl p-8 flex flex-col items-center justify-center gap-3 hover:border-primary transition-colors cursor-pointer"
            >
              {idBack ? (
                <CheckCircle className="w-8 h-8 text-[#10B981]" />
              ) : (
                <Upload className="w-8 h-8 text-muted-foreground" />
              )}
              <span className="text-sm font-medium">
                {idBack ? "Verso ajouté ✓" : "Verso"}
              </span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mb-6 text-center">
            Assurez-vous que la photo est nette et bien éclairée
          </p>

          <button
            onClick={() => setStep("selfie")}
            disabled={!idFront || !idBack}
            className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Continuer
          </button>
        </div>
      </div>
    );
  }

  if (step === "selfie") {
    return (
      <div className="h-screen w-full bg-background">
        <div className="max-w-md mx-auto px-6 py-8">
          <button
            onClick={() => setStep("id-upload")}
            className="mb-6 flex items-center gap-2 text-muted-foreground"
          >
            <ChevronLeft className="w-5 h-5" />
            Retour
          </button>

          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-muted-foreground">Étape 2 sur 2</span>
              <span className="text-sm text-primary">100%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div className="h-full w-full bg-primary rounded-full" />
            </div>
          </div>

          <h1 className="text-2xl font-semibold mb-2">Prenez un selfie</h1>
          <p className="text-muted-foreground mb-8">
            Nous comparons votre visage avec votre pièce d'identité
          </p>

          <div className="relative aspect-[3/4] bg-muted rounded-2xl overflow-hidden mb-8 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-64 border-4 border-primary rounded-full opacity-30" />
            </div>
            <Camera className="w-16 h-16 text-muted-foreground" />
          </div>

          <button
            onClick={() => setStep("pending")}
            className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity"
          >
            Prendre la photo
          </button>
        </div>
      </div>
    );
  }

  // Pending review
  return (
    <div className="h-screen w-full bg-background">
      <div className="max-w-md mx-auto px-6 py-8">
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="w-24 h-24 rounded-full bg-accent/50 flex items-center justify-center mb-6">
            <Clock className="w-12 h-12 text-primary" />
          </div>

          <h1 className="text-2xl font-semibold mb-2">Vérification en cours</h1>
          <p className="text-muted-foreground mb-8">
            Nous vérifions vos documents. Cela prend généralement moins de 24h.
          </p>

          <button
            onClick={() => navigate("/home")}
            className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    </div>
  );
}
