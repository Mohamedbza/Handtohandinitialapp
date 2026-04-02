import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Loader2 } from "lucide-react";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #14248A 0%, #998FC7 100%)",
      }}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-2">Hand to Hand</h1>
          <p className="text-xl text-white/90">Côte d'Azur</p>
        </div>
        <Loader2 className="w-8 h-8 text-white animate-spin" />
      </div>
    </div>
  );
}
