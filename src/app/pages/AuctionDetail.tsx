import { useParams, useNavigate } from "react-router";
import { ChevronLeft, Clock, Users, TrendingUp, Heart, Bell } from "lucide-react";
import { mockAuctions, mockProducts } from "../data/mockData";

export function AuctionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const auction = mockAuctions.find(a => a.id === id);

  if (!auction) {
    return <div className="h-screen flex items-center justify-center">Enchère non trouvée</div>;
  }

  const formatTimeLeft = (endDate: Date) => {
    const diff = endDate.getTime() - Date.now();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${days}j ${hours}h ${minutes}min`;
  };

  return (
    <div className="min-h-screen bg-background pb-32">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
              <Bell className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16">
        {/* Image */}
        <div className="relative aspect-video bg-muted">
          <img
            src={mockProducts[0].image}
            alt={auction.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="px-4 py-4">
          {/* Countdown Timer */}
          <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-2xl p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400">
                <Clock className="w-5 h-5" />
                <span className="text-sm font-medium">Se termine dans</span>
              </div>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {formatTimeLeft(auction.endsAt)}
              </p>
            </div>
          </div>

          {/* Current Bid */}
          <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Enchère actuelle</p>
                <p className="text-3xl font-bold text-primary">{auction.currentBid} €</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Enchères</p>
                <div className="flex items-center gap-1 text-xl font-semibold">
                  <Users className="w-5 h-5" />
                  {auction.bidCount}
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <TrendingUp className="w-4 h-4" />
              <span>Enchère minimum : {auction.currentBid + 10} €</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-4">
            <h1 className="text-2xl font-semibold mb-2">{auction.title}</h1>
            <p className="text-sm text-muted-foreground">{auction.location}</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-foreground leading-relaxed">
              Véhicule en excellent état, entretien régulier, carnet d'entretien complet. 
              Contrôle technique valide. Pneus récents. Intérieur impeccable.
            </p>
          </div>

          {/* Bid History */}
          <div>
            <h3 className="font-semibold mb-3">Historique des enchères</h3>
            <div className="space-y-2">
              {[
                { user: "Marc D.", amount: auction.currentBid, time: "Il y a 2 min" },
                { user: "Julie R.", amount: auction.currentBid - 50, time: "Il y a 5 min" },
                { user: "Pierre M.", amount: auction.currentBid - 100, time: "Il y a 12 min" },
              ].map((bid, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-sm font-medium">
                      {bid.user[0]}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{bid.user}</p>
                      <p className="text-xs text-muted-foreground">{bid.time}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{bid.amount} €</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bid Section */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="max-w-md mx-auto">
          <div className="flex gap-2 mb-3">
            <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">+10 €</button>
            <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">+20 €</button>
            <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">+50 €</button>
          </div>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder={`${auction.currentBid + 10}`}
              className="flex-1 px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none"
            />
            <button className="px-6 bg-primary text-primary-foreground rounded-xl font-medium">
              Enchérir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
