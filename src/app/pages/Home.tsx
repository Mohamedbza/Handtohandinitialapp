import { Search as SearchIcon, SlidersHorizontal, MapPin, Mic, Clock, Users } from "lucide-react";
import { Link } from "react-router";
import { BottomNav } from "../components/BottomNav";
import { ProductCard } from "../components/ProductCard";
import { categories, mockProducts, mockAuctions, mockLiveSessions } from "../data/mockData";

export function Home() {
  const formatTimeLeft = (endDate: Date) => {
    const diff = endDate.getTime() - Date.now();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    return `${hours}h ${minutes}min`;
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Status bar space */}
      <div className="h-12 bg-background" />

      {/* Search Bar */}
      <div className="px-4 mb-4">
        <div className="flex gap-2">
          <Link
            to="/search"
            className="flex-1 bg-card rounded-xl px-4 py-3 flex items-center gap-3 border border-border"
          >
            <SearchIcon className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">Rechercher sur Hand to Hand...</span>
            <Mic className="w-5 h-5 text-muted-foreground ml-auto" />
          </Link>
          <button className="w-12 h-12 bg-card rounded-xl flex items-center justify-center border border-border">
            <SlidersHorizontal className="w-5 h-5 text-foreground" />
          </button>
        </div>

        {/* Location */}
        <button className="mt-3 flex items-center gap-1 text-sm text-foreground">
          <MapPin className="w-4 h-4 text-primary" />
          <span className="font-medium">Côte d'Azur</span>
        </button>
      </div>

      {/* Categories */}
      <div className="px-4 mb-6">
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.id}
              className="flex flex-col items-center gap-2 min-w-[80px]"
            >
              <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-border">
                <img 
                  src={category.image} 
                  alt={category.label}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs text-foreground text-center leading-tight">
                {category.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Auctions Section */}
      <div className="mb-6 bg-[#F9F9FB] py-4">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Enchères en cours</h2>
          <Link to="/search?filter=auctions" className="text-sm text-primary">
            Voir tout
          </Link>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto pb-2 scrollbar-hide">
          {mockAuctions.map((auction) => (
            <Link
              key={auction.id}
              to={`/auction/${auction.id}`}
              className="min-w-[280px] bg-card rounded-2xl overflow-hidden shadow-sm border border-border"
            >
              <div className="relative aspect-video bg-muted">
                <img
                  src={auction.image}
                  alt={auction.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400";
                  }}
                />
                <div className="absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatTimeLeft(auction.endsAt)}
                </div>
              </div>
              <div className="p-3">
                <h3 className="font-medium text-sm mb-2 line-clamp-1">{auction.title}</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-muted-foreground">Enchère actuelle</p>
                    <p className="text-lg font-semibold text-primary">{auction.currentBid} €</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Users className="w-4 h-4" />
                    {auction.bidCount}
                  </div>
                </div>
                <button className="w-full mt-2 bg-primary text-primary-foreground rounded-lg py-2 text-sm font-medium">
                  Enchérir
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Live Shopping Section */}
      <div className="mb-6 bg-[#F9F9FB] py-4">
        <div className="px-4 mb-3 flex items-center justify-between">
          <h2 className="text-lg font-semibold">Live Shopping</h2>
          <Link to="/live" className="text-sm text-primary">
            Voir tout
          </Link>
        </div>
        <div className="flex gap-3 px-4 overflow-x-auto pb-2 scrollbar-hide">
          {mockLiveSessions.map((session) => (
            <Link
              key={session.id}
              to={`/live/${session.id}`}
              className="min-w-[200px]"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                <img
                  src={session.thumbnail}
                  alt={session.seller.name}
                  className="w-full h-full object-cover"
                />
                {session.isLive && (
                  <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-lg text-xs font-medium animate-pulse">
                    EN DIRECT
                  </div>
                )}
                {session.viewerCount && (
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {session.viewerCount}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <div className="flex items-center gap-2">
                    <img
                      src={session.seller.avatar}
                      alt={session.seller.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                    <span className="text-white text-sm font-medium">{session.seller.name}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Main Feed */}
      <div className="px-4">
        <h2 className="text-lg font-semibold mb-3">Près de chez vous</h2>
        <div className="grid grid-cols-2 gap-3">
          {mockProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <BottomNav />
    </div>
  );
}