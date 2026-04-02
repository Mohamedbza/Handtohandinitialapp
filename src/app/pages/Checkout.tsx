import { useNavigate, useParams } from "react-router";
import { ChevronLeft, CreditCard, Shield, Plus } from "lucide-react";
import { mockProducts } from "../data/mockData";

export function Checkout() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return <div>Produit non trouvé</div>;
  }

  const shippingCost = 5.99;
  const protectionFee = 2.99;
  const total = product.price + shippingCost + protectionFee;

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Paiement sécurisé</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Order Summary */}
        <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
          <h2 className="font-semibold mb-3">Récapitulatif</h2>
          <div className="flex gap-3 mb-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex-1">
              <p className="font-medium mb-1">{product.title}</p>
              <p className="text-sm text-muted-foreground">{product.condition}</p>
            </div>
          </div>

          <div className="space-y-2 pt-3 border-t border-border">
            <div className="flex justify-between text-sm">
              <span>Prix de l'article</span>
              <span className="font-medium">{product.price} €</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Frais de port</span>
              <span className="font-medium">{shippingCost.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Protection acheteur</span>
              <span className="font-medium">{protectionFee.toFixed(2)} €</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border">
              <span className="font-semibold">Total</span>
              <span className="text-xl font-bold text-primary">{total.toFixed(2)} €</span>
            </div>
          </div>
        </div>

        {/* Shipping Address */}
        <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Adresse de livraison</h2>
            <button className="text-sm text-primary">Modifier</button>
          </div>
          <div className="text-sm">
            <p className="font-medium">Marie Leclerc</p>
            <p className="text-muted-foreground">12 Avenue de la République</p>
            <p className="text-muted-foreground">06000 Nice, France</p>
            <p className="text-muted-foreground">+33 6 12 34 56 78</p>
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-semibold">Moyen de paiement</h2>
            <button className="text-sm text-primary flex items-center gap-1">
              <Plus className="w-4 h-4" />
              Ajouter
            </button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl">
              <CreditCard className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium">Visa •••• 4242</p>
                <p className="text-xs text-muted-foreground">Expire 12/25</p>
              </div>
              <input type="radio" checked className="accent-primary" readOnly />
            </div>
          </div>
        </div>

        {/* Protection Banner */}
        <div className="bg-[#10B981]/10 border border-[#10B981]/20 rounded-2xl p-4 mb-4">
          <div className="flex items-start gap-3">
            <Shield className="w-6 h-6 text-[#10B981] flex-shrink-0" />
            <div>
              <p className="font-medium mb-1">Protection acheteur Hand to Hand</p>
              <p className="text-sm text-muted-foreground">
                Vous êtes protégé : remboursement si l'article ne correspond pas à la description
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <button
          onClick={() => navigate(`/order/${id}`)}
          className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium"
        >
          Payer — {total.toFixed(2)} €
        </button>
        <div className="flex items-center justify-center gap-2 mt-3 text-xs text-muted-foreground">
          <Shield className="w-4 h-4" />
          <span>Paiement sécurisé SSL</span>
        </div>
      </div>
    </div>
  );
}
