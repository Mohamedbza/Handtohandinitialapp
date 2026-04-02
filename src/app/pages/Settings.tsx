import { useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, User, CreditCard, MapPin, Bell, Zap, HelpCircle, FileText, LogOut, Trash2 } from "lucide-react";

export function Settings() {
  const navigate = useNavigate();

  const sections = [
    {
      title: "Mon compte",
      items: [
        { icon: User, label: "Modifier le profil", path: "#" },
        { icon: CreditCard, label: "Moyens de paiement", path: "#" },
        { icon: MapPin, label: "Adresses", path: "#" },
      ],
    },
    {
      title: "Préférences",
      items: [
        { icon: Bell, label: "Notifications", path: "#" },
        { icon: Zap, label: "Mes Boosts", path: "/boost" },
      ],
    },
    {
      title: "Aide",
      items: [
        { icon: HelpCircle, label: "Aide & Support", path: "#" },
        { icon: FileText, label: "Conditions générales", path: "#" },
        { icon: FileText, label: "Politique de confidentialité", path: "#" },
      ],
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
          <h1 className="text-xl font-semibold">Paramètres</h1>
        </div>
      </div>

      {/* Profile Section */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100"
            alt="Profile"
            className="w-16 h-16 rounded-full"
          />
          <div className="flex-1">
            <p className="font-semibold">Marie Leclerc</p>
            <p className="text-sm text-muted-foreground">marie@example.com</p>
          </div>
          <button>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Settings Sections */}
      {sections.map((section, index) => (
        <div key={index} className="border-b border-border">
          <h2 className="px-4 py-3 text-sm font-semibold text-muted-foreground">
            {section.title}
          </h2>
          {section.items.map((item, itemIndex) => {
            const Icon = item.icon;
            return (
              <button
                key={itemIndex}
                onClick={() => item.path !== "#" && navigate(item.path)}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-muted/50 transition-colors"
              >
                <Icon className="w-5 h-5 text-muted-foreground" />
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      ))}

      {/* Danger Zone */}
      <div className="p-4 space-y-2">
        <button className="w-full px-4 py-3 flex items-center gap-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors">
          <LogOut className="w-5 h-5" />
          <span>Se déconnecter</span>
        </button>
        <button className="w-full px-4 py-3 flex items-center gap-3 text-destructive hover:bg-destructive/10 rounded-xl transition-colors">
          <Trash2 className="w-5 h-5" />
          <span>Supprimer mon compte</span>
        </button>
      </div>
    </div>
  );
}
