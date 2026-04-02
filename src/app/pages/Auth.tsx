import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { Eye, EyeOff } from "lucide-react";

export function Auth() {
  const [searchParams] = useSearchParams();
  const modeParam = searchParams.get("mode");
  const [activeTab, setActiveTab] = useState<"login" | "signup">(
    modeParam === "signin" ? "login" : "signup"
  );
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (modeParam === "signin") {
      setActiveTab("login");
    } else if (modeParam === "signup") {
      setActiveTab("signup");
    }
  }, [modeParam]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/otp");
  };

  return (
    <div className="h-screen w-full bg-background overflow-y-auto">
      <div className="max-w-md mx-auto px-6 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-muted/30 p-1 rounded-xl">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-3 rounded-lg font-medium transition-all ${
              activeTab === "login"
                ? "bg-card shadow-sm text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Connexion
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`flex-1 py-3 rounded-lg font-medium transition-all ${
              activeTab === "signup"
                ? "bg-card shadow-sm text-foreground"
                : "text-muted-foreground"
            }`}
          >
            Inscription
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {activeTab === "signup" ? (
            <>
              <div>
                <label className="block text-sm mb-2 text-foreground">Nom complet</label>
                <input
                  type="text"
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">Adresse e-mail</label>
                <input
                  type="email"
                  placeholder="jean@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">Numéro de téléphone</label>
                <div className="flex gap-2">
                  <div className="w-20 px-3 py-3 rounded-xl bg-card border border-border flex items-center justify-center">
                    <span className="text-sm">🇫🇷 +33</span>
                  </div>
                  <input
                    type="tel"
                    placeholder="6 12 34 56 78"
                    className="flex-1 px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity mt-6"
              >
                Créer mon compte
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="block text-sm mb-2 text-foreground">E-mail ou téléphone</label>
                <input
                  type="text"
                  placeholder="jean@example.com"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 text-foreground">Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 pr-12 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
                <button type="button" className="text-sm text-primary mt-2">
                  Mot de passe oublié ?
                </button>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity mt-6"
              >
                Se connecter
              </button>
            </>
          )}

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-border" />
            <span className="text-sm text-muted-foreground">ou continuer avec</span>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Social Login */}
          <div className="flex gap-3">
            <button
              type="button"
              className="flex-1 py-3 rounded-xl border border-border bg-card flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm">Google</span>
            </button>
            <button
              type="button"
              className="flex-1 py-3 rounded-xl border border-border bg-card flex items-center justify-center gap-2 hover:bg-muted/50 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
              <span className="text-sm">Apple</span>
            </button>
          </div>

          {/* Bottom text */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            {activeTab === "signup" ? (
              <>
                Déjà un compte ?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className="text-primary font-medium"
                >
                  Se connecter
                </button>
              </>
            ) : (
              <>
                Pas encore de compte ?{" "}
                <button
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className="text-primary font-medium"
                >
                  S'inscrire
                </button>
              </>
            )}
          </p>
        </form>
      </div>
    </div>
  );
}