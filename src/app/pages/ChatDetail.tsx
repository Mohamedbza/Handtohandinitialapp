import { useState } from "react";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, Send, Paperclip, Camera, Check, CheckCheck } from "lucide-react";

export function ChatDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  const messages = [
    { id: 1, text: "Bonjour, l'article est-il toujours disponible ?", sender: "them", timestamp: "14:32" },
    { id: 2, text: "Oui, tout à fait ! Il est en excellent état.", sender: "me", timestamp: "14:35", read: true },
    { id: 3, text: "Super ! Je peux venir le chercher demain ?", sender: "them", timestamp: "14:37" },
    { id: 4, text: "Oui, pas de problème. Quelle heure vous arrange ?", sender: "me", timestamp: "14:40", read: false },
  ];

  return (
    <div className="h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="sticky top-0 bg-card border-b border-border z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="User"
            className="w-10 h-10 rounded-full"
          />
          <div className="flex-1">
            <p className="font-medium">Marie L.</p>
            <p className="text-xs text-muted-foreground">En ligne</p>
          </div>
        </div>

        {/* Product Card */}
        <div className="px-4 pb-3">
          <div className="bg-muted/30 rounded-xl p-2 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1632661674596-df8be070a5c5?w=100"
              alt="Product"
              className="w-12 h-12 rounded-lg object-cover"
            />
            <div className="flex-1">
              <p className="text-sm font-medium line-clamp-1">iPhone 13 Pro 128GB</p>
              <p className="text-sm font-semibold text-primary">650 €</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                msg.sender === "me"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-card border border-border rounded-bl-sm"
              }`}
            >
              <p className="text-sm">{msg.text}</p>
              <div className="flex items-center justify-end gap-1 mt-1">
                <span className={`text-xs ${msg.sender === "me" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                  {msg.timestamp}
                </span>
                {msg.sender === "me" && (
                  msg.read ? (
                    <CheckCheck className="w-3 h-3 text-primary-foreground/70" />
                  ) : (
                    <Check className="w-3 h-3 text-primary-foreground/70" />
                  )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Paperclip className="w-5 h-5 text-foreground" />
          </button>
          <button className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Camera className="w-5 h-5 text-foreground" />
          </button>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Votre message..."
            className="flex-1 px-4 py-2 rounded-full bg-muted border-0 outline-none focus:ring-2 focus:ring-primary/20"
          />
          <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <Send className="w-5 h-5 text-primary-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
}
