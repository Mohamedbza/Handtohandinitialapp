import { useNavigate, useParams } from "react-router";
import { ChevronLeft, CheckCircle, Package, Truck, Home, Flag } from "lucide-react";
import { mockProducts } from "../data/mockData";

export function OrderTracking() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return <div>Commande non trouvée</div>;
  }

  const steps = [
    { label: "Commande confirmée", date: "1 Avr 2026, 14:32", completed: true },
    { label: "Paiement sécurisé", date: "1 Avr 2026, 14:32", completed: true },
    { label: "En attente d'expédition", date: "", completed: false, current: true },
    { label: "Expédié", date: "", completed: false },
    { label: "Livré", date: "", completed: false },
    { label: "Confirmé par l'acheteur", date: "", completed: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Suivi de commande</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Product */}
        <div className="bg-card rounded-2xl p-4 mb-6 border border-border flex gap-3">
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 rounded-xl object-cover"
          />
          <div className="flex-1">
            <p className="font-medium mb-1">{product.title}</p>
            <p className="text-sm text-muted-foreground mb-2">{product.condition}</p>
            <p className="text-lg font-semibold text-primary">{product.price} €</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-3">
              {/* Icon */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    step.completed
                      ? "bg-[#10B981]"
                      : step.current
                      ? "bg-primary animate-pulse"
                      : "bg-muted"
                  }`}
                >
                  {step.completed ? (
                    <CheckCircle className="w-5 h-5 text-white" />
                  ) : step.current ? (
                    <Package className="w-5 h-5 text-white" />
                  ) : index === 3 ? (
                    <Truck className="w-5 h-5 text-muted-foreground" />
                  ) : index === 4 ? (
                    <Home className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <div className="w-3 h-3 rounded-full bg-muted-foreground" />
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-0.5 h-12 ${
                      step.completed ? "bg-[#10B981]" : "bg-muted"
                    }`}
                  />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <p
                  className={`font-medium mb-1 ${
                    step.completed || step.current
                      ? "text-foreground"
                      : "text-muted-foreground"
                  }`}
                >
                  {step.label}
                </p>
                {step.date && (
                  <p className="text-sm text-muted-foreground">{step.date}</p>
                )}
                {step.current && (
                  <p className="text-sm text-primary mt-1">En cours...</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Tracking Number */}
        <div className="bg-muted/30 rounded-2xl p-4 mb-4">
          <p className="text-sm text-muted-foreground mb-1">Numéro de suivi</p>
          <p className="font-mono font-medium">En attente</p>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <button className="w-full bg-primary text-primary-foreground rounded-xl h-11 font-medium">
            Contacter le vendeur
          </button>
          <button className="w-full flex items-center justify-center gap-2 text-destructive">
            <Flag className="w-4 h-4" />
            Signaler un problème
          </button>
        </div>
      </div>
    </div>
  );
}
