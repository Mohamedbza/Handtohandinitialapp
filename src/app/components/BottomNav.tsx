import { Home, Search, Plus, MessageCircle, User } from "lucide-react";
import { Link, useLocation } from "react-router";

export function BottomNav() {
  const location = useLocation();

  const tabs = [
    { icon: Home, label: "Accueil", path: "/home" },
    { icon: Search, label: "Rechercher", path: "/search" },
    { icon: Plus, label: "Vendre", path: "/sell", isCenter: true },
    { icon: MessageCircle, label: "Messages", path: "/messages" },
    { icon: User, label: "Profil", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50 safe-area-bottom">
      <div className="max-w-[480px] mx-auto flex items-center justify-around h-20 px-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = location.pathname === tab.path;

          if (tab.isCenter) {
            return (
              <Link
                key={tab.path}
                to={tab.path}
                className="flex flex-col items-center justify-center -mt-6"
              >
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                  <Icon className="w-6 h-6 text-primary-foreground" strokeWidth={2} />
                </div>
                <span className="text-xs mt-2 text-foreground">{tab.label}</span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.path}
              to={tab.path}
              className={`flex flex-col items-center justify-center gap-1 min-w-[64px] py-2 ${
                isActive ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <Icon className="w-6 h-6" strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-xs">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
