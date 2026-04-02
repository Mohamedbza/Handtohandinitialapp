import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ChevronLeft, Settings as SettingsIcon, Star, MapPin, Calendar, CheckCircle } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ProductCard } from "../components/ProductCard";
import { mockProducts } from "../data/mockData";

export function Profile() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"vente" | "vendus" | "avis">("vente");
  
  const isOwnProfile = !userId;

  const profile = {
    name: "Marie Leclerc",
    username: "@marie_06",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    verified: true,
    memberSince: "Mars 2023",
    location: "Nice, France",
    stats: {
      sales: 23,
      purchases: 15,
      rating: 4.8,
      reviews: 23,
    },
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          {isOwnProfile && (
            <Link to="/settings">
              <SettingsIcon className="w-6 h-6" />
            </Link>
          )}
        </div>
      </div>

      {/* Profile Header */}
      <div className="relative">
        <div className="h-32 bg-gradient-to-br from-primary to-secondary" />
        <div className="px-4 pb-4">
          <div className="relative -mt-16 mb-4">
            <img
              src={profile.avatar}
              alt={profile.name}
              className="w-24 h-24 rounded-full border-4 border-background"
            />
            {profile.verified && (
              <div className="absolute bottom-0 right-0 bg-primary rounded-full p-1 border-2 border-background">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
            )}
          </div>

          <h1 className="text-2xl font-semibold mb-1">{profile.name}</h1>
          <p className="text-muted-foreground mb-3">{profile.username}</p>

          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {profile.location}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              Membre depuis {profile.memberSince}
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 mb-4">
            <div className="text-center">
              <p className="text-xl font-semibold">{profile.stats.sales}</p>
              <p className="text-xs text-muted-foreground">Ventes</p>
            </div>
            <div className="text-center">
              <p className="text-xl font-semibold">{profile.stats.purchases}</p>
              <p className="text-xs text-muted-foreground">Achats</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1 justify-center">
                <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                <p className="text-xl font-semibold">{profile.stats.rating}</p>
              </div>
              <p className="text-xs text-muted-foreground">({profile.stats.reviews} avis)</p>
            </div>
          </div>

          {/* Action Buttons */}
          {isOwnProfile ? (
            <button className="w-full bg-muted text-foreground rounded-xl h-11 font-medium">
              Modifier le profil
            </button>
          ) : (
            <div className="flex gap-2">
              <button className="flex-1 bg-muted text-foreground rounded-xl h-11 font-medium">
                Suivre
              </button>
              <Link
                to={`/chat/${userId}`}
                className="flex-1 bg-primary text-primary-foreground rounded-xl h-11 font-medium flex items-center justify-center"
              >
                Contacter
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border mb-4">
        <div className="flex px-4">
          <button
            onClick={() => setActiveTab("vente")}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              activeTab === "vente"
                ? "border-primary text-primary font-medium"
                : "border-transparent text-muted-foreground"
            }`}
          >
            En vente
          </button>
          <button
            onClick={() => setActiveTab("vendus")}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              activeTab === "vendus"
                ? "border-primary text-primary font-medium"
                : "border-transparent text-muted-foreground"
            }`}
          >
            Vendus
          </button>
          <button
            onClick={() => setActiveTab("avis")}
            className={`flex-1 py-3 border-b-2 transition-colors ${
              activeTab === "avis"
                ? "border-primary text-primary font-medium"
                : "border-transparent text-muted-foreground"
            }`}
          >
            Avis
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-4">
        {activeTab === "vente" && (
          <div className="grid grid-cols-2 gap-3">
            {mockProducts.slice(0, 4).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {activeTab === "vendus" && (
          <div className="grid grid-cols-2 gap-3">
            {mockProducts.slice(0, 2).map((product) => (
              <div key={product.id} className="relative">
                <ProductCard product={product} />
                <div className="absolute inset-0 bg-black/50 rounded-2xl flex items-center justify-center">
                  <span className="bg-white text-foreground px-4 py-2 rounded-xl font-semibold">
                    Vendu
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "avis" && (
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card rounded-xl p-4 border border-border">
                <div className="flex items-start gap-3 mb-2">
                  <img
                    src={`https://images.unsplash.com/photo-150000${i}000000-0000-0000-0000-000000000000?w=100`}
                    alt="Reviewer"
                    className="w-10 h-10 rounded-full"
                    onError={(e) => {
                      e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100";
                    }}
                  />
                  <div className="flex-1">
                    <p className="font-medium">Thomas D.</p>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${
                            j < 5 ? "fill-[#F59E0B] text-[#F59E0B]" : "text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-foreground">
                      Transaction parfaite, vendeur très réactif et article conforme.
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">Il y a 2 semaines</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
