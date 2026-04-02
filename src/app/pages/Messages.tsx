import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";
import { BottomNav } from "../components/BottomNav";

export function Messages() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"achats" | "ventes">("achats");

  const conversations = [
    {
      id: "1",
      user: { name: "Marie L.", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100", verified: true },
      lastMessage: "D'accord, je peux venir demain ?",
      timestamp: "Il y a 5 min",
      unread: true,
      productImage: "https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=100",
    },
    {
      id: "2",
      user: { name: "Thomas B.", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100", verified: false },
      lastMessage: "Le prix est-il négociable ?",
      timestamp: "Il y a 1h",
      unread: false,
      productImage: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=100",
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center justify-between px-4 py-3">
          <h1 className="text-xl font-semibold">Messages</h1>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 px-4 pb-3">
          <button
            onClick={() => setActiveTab("achats")}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              activeTab === "achats"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Achats
          </button>
          <button
            onClick={() => setActiveTab("ventes")}
            className={`flex-1 py-2 rounded-lg font-medium transition-all ${
              activeTab === "ventes"
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground"
            }`}
          >
            Ventes
          </button>
        </div>
      </div>

      {/* Conversations */}
      <div className="divide-y divide-border">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => navigate(`/chat/${conv.id}`)}
            className="w-full px-4 py-4 flex items-center gap-3 hover:bg-muted/50 transition-colors"
          >
            <div className="relative">
              <img
                src={conv.user.avatar}
                alt={conv.user.name}
                className="w-12 h-12 rounded-full"
              />
              {conv.unread && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full border-2 border-background" />
              )}
            </div>

            <div className="flex-1 text-left">
              <div className="flex items-center gap-2 mb-1">
                <p className={`font-medium ${conv.unread ? "text-foreground" : "text-foreground"}`}>
                  {conv.user.name}
                </p>
                {conv.user.verified && (
                  <svg className="w-4 h-4 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                )}
              </div>
              <p className={`text-sm ${conv.unread ? "font-medium text-foreground" : "text-muted-foreground"}`}>
                {conv.lastMessage}
              </p>
              <p className="text-xs text-muted-foreground mt-1">{conv.timestamp}</p>
            </div>

            <img
              src={conv.productImage}
              alt="Product"
              className="w-14 h-14 rounded-lg object-cover"
            />
          </button>
        ))}
      </div>

      {conversations.length === 0 && (
        <div className="py-20 text-center">
          <div className="w-20 h-20 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">💬</span>
          </div>
          <h3 className="font-semibold mb-2">Pas de messages</h3>
          <p className="text-sm text-muted-foreground">
            Commencez par acheter ou vendre
          </p>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
