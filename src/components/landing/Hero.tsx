import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export default function Hero() {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set date to Jan 23, 2026 09:00:00 IST
    // IST is UTC+5:30
    const targetDate = new Date("2026-01-23T09:00:00+05:30").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Video Background */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-transparent to-background z-20" />
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          preload="metadata"
          poster="https://drive.google.com/thumbnail?id=101cvCeV9auTsb5hHAaZXehF0OyvcQgDP-CGwSxPv1JM&sz=w1920"
          className="w-full h-full object-cover opacity-50"
        >
          <source src="https://drive.google.com/uc?export=download&id=101cvCeV9auTsb5hHAaZXehF0OyvcQgDP-CGwSxPv1JM" type="video/mp4" />
          {/* Fallback if video fails */}
        </video>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] z-20" />
      </div>

      <div className="container mx-auto px-4 relative z-30 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary border border-secondary/20 mb-8 backdrop-blur-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="text-sm font-medium">Coming Jan 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary drop-shadow-2xl">
            PRERANA 2026
          </h1>
          <p className="text-2xl md:text-3xl font-light text-white/90 mb-4 tracking-wide">
            The Spectrum Within
          </p>
          <p className="text-lg md:text-xl text-white/70 mb-8 font-light italic">
            Theme: Innovation, Collaboration, and Hope
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-12 text-white/80">
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Jan 23 - Jan 24, 2026</span>
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-md border border-white/10">
              <MapPin className="w-5 h-5 text-primary" />
              <span>GITAM University, Bengaluru</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            {[
              { label: "Days", value: timeLeft.days },
              { label: "Hours", value: timeLeft.hours },
              { label: "Minutes", value: timeLeft.minutes },
              { label: "Seconds", value: timeLeft.seconds },
            ].map((item) => (
              <div key={item.label} className="bg-black/40 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                <div className="text-4xl font-bold text-white mb-1 font-mono">{item.value.toString().padStart(2, '0')}</div>
                <div className="text-xs text-white/60 uppercase tracking-wider">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-xl shadow-[0_0_20px_-5px_var(--primary)] hover:shadow-[0_0_30px_-5px_var(--primary)] transition-shadow w-full sm:w-auto"
              onClick={() => navigate("/register")}
            >
              REGISTER NOW
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 rounded-xl bg-black/20 backdrop-blur-sm border-white/20 hover:bg-white/10 w-full sm:w-auto"
              onClick={() => navigate("/events")}
            >
              Explore Events
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}