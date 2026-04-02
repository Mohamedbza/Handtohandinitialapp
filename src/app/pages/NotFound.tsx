import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl font-semibold mb-2">Page non trouvée</p>
        <p className="text-muted-foreground mb-6">
          La page que vous recherchez n'existe pas.
        </p>
        <button
          onClick={() => navigate("/home")}
          className="bg-primary text-white px-6 py-3 rounded-full font-medium inline-flex items-center gap-2"
        >
          <ChevronLeft className="w-5 h-5" />
          Retour à l'accueil
        </button>
      </div>
    </div>
  );
}
