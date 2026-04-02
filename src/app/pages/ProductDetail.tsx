import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { ChevronLeft, Heart, Share2, Flag, MessageCircle, DollarSign, ShoppingCart, Star, Info, CheckCircle } from "lucide-react";
import { mockProducts, dealScoreConfig } from "../data/mockData";

export function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [showMakeOffer, setShowMakeOffer] = useState(false);
  
  const product = mockProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p>Produit non trouvé</p>
      </div>
    );
  }

  const images = [product.image, product.image, product.image];
  const scoreConfig = dealScoreConfig[product.dealScore];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="pt-16">
        {/* Image Carousel */}
        <div className="relative aspect-square bg-muted">
          <img
            src={images[currentImage]}
            alt={product.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
            {currentImage + 1}/{images.length}
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full ${index === currentImage ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-4">
          {/* Deal Score Section */}
          <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
            <div className="flex items-start gap-3">
              <div className={`${scoreConfig.color} ${scoreConfig.textColor} px-3 py-2 rounded-xl text-sm font-medium flex items-center gap-1`}>
                {scoreConfig.label}
                <Info className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Ce prix est <span className="font-semibold text-[#10B981]">18% en dessous</span> de la moyenne du marché pour des articles similaires
                </p>
              </div>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-[60%] bg-[#10B981] rounded-full" />
              </div>
              <span className="text-xs text-muted-foreground">vs marché</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="mb-4">
            <h1 className="text-2xl font-semibold mb-2">{product.title}</h1>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-3xl font-bold text-primary">{product.price} €</p>
              <span className="bg-accent/50 text-foreground px-3 py-1 rounded-full text-sm">
                {product.condition}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">Publié il y a 3 heures</p>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Description</h3>
            <p className="text-sm text-foreground leading-relaxed">
              Excellent état, très peu utilisé. Toutes les fonctionnalités sont parfaitement opérationnelles. 
              Vendu avec boîte et accessoires d'origine. Aucune rayure visible. Batterie en excellent état (95% de capacité).
            </p>
          </div>

          {/* Specifications */}
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Caractéristiques</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-card rounded-xl p-3 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Marque</p>
                <p className="text-sm font-medium">Apple</p>
              </div>
              <div className="bg-card rounded-xl p-3 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Modèle</p>
                <p className="text-sm font-medium">iPhone 13 Pro</p>
              </div>
              <div className="bg-card rounded-xl p-3 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Stockage</p>
                <p className="text-sm font-medium">128 GB</p>
              </div>
              <div className="bg-card rounded-xl p-3 border border-border">
                <p className="text-xs text-muted-foreground mb-1">Batterie</p>
                <p className="text-sm font-medium">95%</p>
              </div>
            </div>
          </div>

          {/* Seller */}
          <div className="bg-card rounded-2xl p-4 mb-4 border border-border">
            <Link to={`/profile/${product.seller.id}`} className="flex items-center gap-3 mb-3">
              <img
                src={product.seller.avatar}
                alt={product.seller.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium">{product.seller.name}</p>
                  {product.seller.verified && (
                    <CheckCircle className="w-4 h-4 text-primary" />
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                  <span className="font-medium">{product.seller.rating}</span>
                  <span className="text-muted-foreground">({product.seller.reviews} avis)</span>
                </div>
              </div>
            </Link>
            <div className="flex items-center justify-between text-sm pt-3 border-t border-border">
              <span className="text-muted-foreground">Membre depuis</span>
              <span className="font-medium">Mars 2023</span>
            </div>
            <div className="flex items-center justify-between text-sm pt-2">
              <span className="text-muted-foreground">Répond en</span>
              <span className="font-medium">~2h</span>
            </div>
          </div>

          {/* Report */}
          <button className="flex items-center gap-2 text-sm text-muted-foreground mx-auto">
            <Flag className="w-4 h-4" />
            Signaler
          </button>
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="flex gap-2 max-w-md mx-auto">
          <button
            onClick={() => setShowMakeOffer(true)}
            className="flex-1 bg-secondary/20 text-secondary border border-secondary rounded-xl h-12 font-medium flex items-center justify-center gap-2"
          >
            <DollarSign className="w-5 h-5" />
            Faire une offre
          </button>
          <Link
            to={`/chat/${product.seller.id}`}
            className="flex-1 bg-muted text-foreground rounded-xl h-12 font-medium flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Contacter
          </Link>
          <Link
            to={`/checkout/${product.id}`}
            className="flex-1 bg-primary text-primary-foreground rounded-xl h-12 font-medium flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-5 h-5" />
            Acheter
          </Link>
        </div>
      </div>

      {/* Make Offer Bottom Sheet */}
      {showMakeOffer && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-end"
          onClick={() => setShowMakeOffer(false)}
        >
          <div
            className="bg-card rounded-t-3xl w-full p-6 max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-12 h-1 bg-muted rounded-full mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-4">Faire une offre</h2>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-1">Prix affiché</p>
              <p className="text-2xl font-bold text-foreground">{product.price} €</p>
            </div>
            <div className="mb-4">
              <label className="text-sm font-medium mb-2 block">Votre offre</label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="Montant"
                  className="w-full px-4 py-3 pr-10 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">€</span>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">-10%</button>
              <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">-15%</button>
              <button className="px-4 py-2 rounded-lg bg-muted text-sm font-medium">-20%</button>
            </div>
            <p className="text-xs text-muted-foreground mb-4">
              L'offre est engageante pendant 24h
            </p>
            <button className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium mb-2">
              Envoyer l'offre
            </button>
            <button
              onClick={() => setShowMakeOffer(false)}
              className="w-full text-muted-foreground font-medium"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
