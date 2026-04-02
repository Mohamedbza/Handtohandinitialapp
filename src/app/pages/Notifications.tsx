import { useNavigate } from "react-router";
import { ChevronLeft, MessageCircle, DollarSign, Gavel, Clock, Package, Zap, Video, CheckCircle } from "lucide-react";

export function Notifications() {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      icon: MessageCircle,
      color: "text-blue-500",
      title: "Nouveau message de @marie_06",
      time: "Il y a 5 min",
      unread: true,
    },
    {
      id: 2,
      icon: DollarSign,
      color: "text-green-500",
      title: "Votre offre de 75 € a été acceptée",
      time: "Il y a 1h",
      unread: true,
    },
    {
      id: 3,
      icon: Gavel,
      color: "text-orange-500",
      title: "Vous avez été surenchéri sur MacBook Pro M1",
      time: "Il y a 2h",
      unread: false,
    },
    {
      id: 4,
      icon: Clock,
      color: "text-red-500",
      title: "L'enchère se termine dans 1h",
      time: "Il y a 3h",
      unread: false,
    },
    {
      id: 5,
      icon: Package,
      color: "text-primary",
      title: "Votre colis a été expédié",
      time: "Hier",
      unread: false,
    },
    {
      id: 6,
      icon: Zap,
      color: "text-yellow-500",
      title: "Votre Boost expire dans 24h",
      time: "Hier",
      unread: false,
    },
    {
      id: 7,
      icon: Video,
      color: "text-purple-500",
      title: "Le live de @vintage_nice commence dans 15min",
      time: "Il y a 2 jours",
      unread: false,
    },
    {
      id: 8,
      icon: CheckCircle,
      color: "text-green-500",
      title: "Votre identité a été vérifiée",
      time: "Il y a 3 jours",
      unread: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 bg-background border-b border-border z-10">
        <div className="flex items-center gap-3 px-4 py-3">
          <button onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-semibold">Notifications</h1>
        </div>
      </div>

      {/* Notifications List */}
      <div className="divide-y divide-border">
        {notifications.map((notif) => {
          const Icon = notif.icon;
          return (
            <button
              key={notif.id}
              className={`w-full px-4 py-4 flex items-start gap-3 hover:bg-muted/50 transition-colors ${
                notif.unread ? "bg-accent/20" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center flex-shrink-0 ${notif.color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 text-left">
                <p className={`text-sm ${notif.unread ? "font-medium" : ""}`}>
                  {notif.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{notif.time}</p>
              </div>
              {notif.unread && (
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-2" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
