import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

export default function Sponsors() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Prerana 2026 is made possible by the generous support of our partners.
            </p>
            <Button onClick={() => navigate("/sponsors/partner-with-us")}>
              Partner With Us
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}