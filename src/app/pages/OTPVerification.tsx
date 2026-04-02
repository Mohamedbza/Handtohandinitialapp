import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import { ChevronLeft } from "lucide-react";

export function OTPVerification() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = () => {
    if (otp.every((digit) => digit !== "")) {
      navigate("/kyc");
    }
  };

  return (
    <div className="h-screen w-full bg-background">
      <div className="max-w-md mx-auto px-6 py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 flex items-center gap-2 text-muted-foreground"
        >
          <ChevronLeft className="w-5 h-5" />
          Retour
        </button>

        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">Vérifiez votre numéro</h1>
          <p className="text-muted-foreground">
            Un code a été envoyé au +33 6 •• •• ••42
          </p>
        </div>

        <div className="flex gap-3 justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-xl font-semibold rounded-xl bg-card border-2 border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          ))}
        </div>

        <div className="text-center mb-8">
          {timer > 0 ? (
            <p className="text-sm text-muted-foreground">
              Renvoyer le code dans {timer}s
            </p>
          ) : (
            <button className="text-sm text-primary font-medium">
              Renvoyer le code
            </button>
          )}
        </div>

        <button
          onClick={handleVerify}
          disabled={!otp.every((digit) => digit !== "")}
          className="w-full bg-primary text-primary-foreground rounded-xl h-12 font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Vérifier
        </button>
      </div>
    </div>
  );
}
