import { Heart, Info, Zap } from "lucide-react";
import { Link } from "react-router";
import type { Product } from "../data/mockData";
import { dealScoreConfig } from "../data/mockData";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const scoreConfig = dealScoreConfig[product.dealScore];

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className={`bg-card rounded-2xl overflow-hidden shadow-sm border border-border hover:shadow-md transition-all ${product.isBoosted ? 'ring-2 ring-[#F59E0B]/50' : ''}`}>
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Deal Score Badge */}
          <div className={`absolute top-2 left-2 ${scoreConfig.color} ${scoreConfig.textColor} px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 shadow-sm`}>
            <span>{scoreConfig.label}</span>
            <Info className="w-3 h-3" />
          </div>

          {/* Boost Badge */}
          {product.isBoosted && (
            <div className="absolute top-2 right-2 bg-[#F59E0B] text-white px-2 py-1 rounded-lg text-xs font-medium flex items-center gap-1 shadow-sm">
              <Zap className="w-3 h-3" /> Boost
            </div>
          )}

          {/* Heart Icon */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-sm hover:bg-white transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${product.isLiked ? 'fill-red-500 text-red-500' : 'text-foreground'}`}
            />
          </button>
        </div>

        {/* Info */}
        <div className="p-3">
          <h3 className="font-medium text-sm mb-1 line-clamp-1">{product.title}</h3>
          <p className="text-lg font-semibold text-primary mb-1">{product.price} €</p>
          <div className="flex items-center justify-between">
            <span className="text-xs bg-muted px-2 py-0.5 rounded-full text-foreground">
              {product.condition}
            </span>
            <span className="text-xs text-muted-foreground">{product.location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}