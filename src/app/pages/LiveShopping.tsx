import { useNavigate, useParams } from "react-router";
import { ChevronLeft, Video, Heart, Share2, Users } from "lucide-react";
import { mockLiveSessions } from "../data/mockData";
import { useEffect } from "react";

export function LiveShopping() {
  const navigate = useNavigate();
  const { id } = useParams();

  const session = id ? mockLiveSessions.find((s) => s.id === id) : null;

  useEffect(() => {
    if (id && !session) {
      navigate("/live", { replace: true });
    }
  }, [id, session, navigate]);

  // If ID is provided, show the live session detail
  if (id && session) {
    return (
      <div className="h-screen bg-black flex flex-col">
        {/* Video Area */}
        <div className="relative flex-1 bg-muted">
          <img
            src={session.thumbnail}
            alt={session.seller.name}
            className="w-full h-full object-cover"
          />
          
          {/* Top Overlay */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigate(-1)}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              
              <div className="flex items-center gap-2">
                {session.isLive && (
                  <div className="bg-red-500 text-white px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    EN DIRECT
                  </div>
                )}
                {session.viewerCount && (
                  <div className="bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs flex items-center gap-1.5">
                    <Users className="w-4 h-4" />
                    {session.viewerCount}
                  </div>
                )}
              </div>
            </div>

            {/* Seller Info */}
            <div className="flex items-center gap-2 mt-4">
              <img
                src={session.seller.avatar}
                alt={session.seller.name}
                className="w-12 h-12 rounded-full border-2 border-white"
              />
              <div className="flex-1">
                <p className="text-white font-semibold">{session.seller.name}</p>
                <p className="text-white/80 text-sm">Vendeur vérifié</p>
              </div>
              <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
                Suivre
              </button>
            </div>
          </div>

          {/* Bottom Overlay - Chat/Comments */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
            <div className="space-y-2 mb-3">
              <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 max-w-[80%]">
                <p className="text-white text-sm">
                  <span className="font-semibold">Julie :</span> C'est encore disponible ? 🔥
                </p>
              </div>
              <div className="bg-black/40 backdrop-blur-sm rounded-lg px-3 py-2 max-w-[80%]">
                <p className="text-white text-sm">
                  <span className="font-semibold">Marc :</span> Super prix ! 💯
                </p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ajouter un commentaire..."
                className="flex-1 bg-black/40 backdrop-blur-sm text-white placeholder:text-white/60 px-4 py-2.5 rounded-full outline-none"
              />
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Share2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Product Bar */}
        <div className="bg-background p-4 border-t border-border">
          <div className="flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
              alt="Product"
              className="w-16 h-16 rounded-xl object-cover"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm">Casque audio Bluetooth</p>
              <p className="text-primary font-bold text-lg">89 €</p>
            </div>
            <button className="bg-primary text-white px-6 py-3 rounded-full font-medium">
              Acheter
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If we're waiting for redirect, show nothing
  if (id && !session) {
    return null;
  }

  // Otherwise, show the list view
  return (
    <div className="h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="font-semibold">Live Shopping</h1>
          <div className="w-6" />
        </div>
      </div>

      <div className="p-4">
        {/* Live Now */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            En direct maintenant
          </h2>
          <div className="grid gap-3">
            {mockLiveSessions
              .filter((s) => s.isLive)
              .map((session) => (
                <button
                  key={session.id}
                  onClick={() => navigate(`/live/${session.id}`)}
                  className="relative rounded-2xl overflow-hidden aspect-video bg-muted"
                >
                  <img
                    src={session.thumbnail}
                    alt={session.seller.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-medium animate-pulse">
                    EN DIRECT
                  </div>
                  {session.viewerCount && (
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {session.viewerCount}
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={session.seller.avatar}
                        alt={session.seller.name}
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                      <span className="text-white font-medium">{session.seller.name}</span>
                    </div>
                  </div>
                </button>
              ))}
          </div>
        </div>

        {/* Upcoming */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Prochains lives</h2>
          <div className="space-y-3">
            {mockLiveSessions
              .filter((s) => !s.isLive)
              .map((session) => (
                <div key={session.id} className="bg-card rounded-2xl p-4 border border-border flex items-center gap-3">
                  <img
                    src={session.thumbnail}
                    alt={session.seller.name}
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                  <div className="flex-1">
                    <p className="font-medium mb-1">{session.seller.name}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      {session.scheduledFor?.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                    <button className="text-sm text-primary font-medium flex items-center gap-1">
                      🔔 Me rappeler
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}