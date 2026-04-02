import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Zap, Check, TrendingUp, BarChart3, Eye } from "lucide-react";

export function BoostFeature() {
  const navigate = useNavigate();
  const { listingId } = useParams();

  const tiers = [
    { duration: "24h", price: 1.99, popular: false },
    { duration: "3 jours", price: 3.49, popular: false },
    { duration: "7 jours", price: 4.99, popular: true },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Boost</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/5 rounded-2xl p-6 mb-6 text-center">
          <div className="w-16 h-16 bg-[#F59E0B] rounded-full flex items-center justify-center mx-auto mb-4">
            <Zap className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-semibold mb-2">Boostez votre annonce</h2>
          <p className="text-muted-foreground">
            Augmentez votre visibilité et vendez plus rapidement
          </p>
        </div>

        {/* Benefits */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <TrendingUp className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="font-medium">Mise en avant en tête des résultats</p>
              <p className="text-sm text-muted-foreground">
                Votre annonce apparaît en premier dans les recherches
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="font-medium">Jusqu'à 10 photos</p>
              <p className="text-sm text-muted-foreground">
                Au lieu de 5 photos pour les annonces standards
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <Zap className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="font-medium">Badge Boost visible</p>
              <p className="text-sm text-muted-foreground">
                Un badge doré met en valeur votre annonce
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-[#10B981]/10 flex items-center justify-center flex-shrink-0">
              <Eye className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="font-medium">Statistiques détaillées</p>
              <p className="text-sm text-muted-foreground">
                Suivez vos vues et favoris en temps réel
              </p>
            </div>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="space-y-3 mb-6">
          {tiers.map((tier) => (
            <div
              key={tier.duration}
              className={`relative bg-card rounded-2xl p-4 border-2 transition-all ${
                tier.popular ? "border-[#F59E0B]" : "border-border"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-3 py-1 rounded-full text-xs font-medium">
                  Populaire
                </div>
              )}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold">{tier.duration}</p>
                  <p className="text-sm text-muted-foreground">
                    Visibilité maximale pendant {tier.duration}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{tier.price} €</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full bg-[#F59E0B] hover:bg-[#F59E0B]/90 text-white rounded-xl h-12 font-medium flex items-center justify-center gap-2">
          <Zap className="w-5 h-5" />
          Booster cette annonce
        </button>
      </div>
    </div>
  );
}