import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft, Search as SearchIcon, SlidersHorizontal } from "lucide-react";
import { BottomNav } from "../components/BottomNav";
import { ProductCard } from "../components/ProductCard";
import { mockProducts } from "../data/mockData";

export function Search() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10 px-4 py-3">
        <div className="flex items-center gap-2">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <div className="flex-1 flex gap-2">
            <div className="flex-1 bg-card rounded-xl px-4 py-2 flex items-center gap-2 border border-border">
              <SearchIcon className="w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-sm"
                autoFocus
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="w-10 h-10 bg-card rounded-xl flex items-center justify-center border border-border"
            >
              <SlidersHorizontal className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="px-4 py-4">
        {searchQuery ? (
          <>
            <p className="text-sm text-muted-foreground mb-4">
              {mockProducts.length} résultats pour "{searchQuery}"
            </p>
            <div className="grid grid-cols-2 gap-3">
              {mockProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        ) : (
          <div className="py-12 text-center">
            <SearchIcon className="w-16 h-16 text-muted-foreground/50 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Rechercher sur Hand to Hand</h3>
            <p className="text-sm text-muted-foreground">
              Des milliers d'articles vous attendent
            </p>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
