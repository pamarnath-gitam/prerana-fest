import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router";

export default function Sponsors() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6">Our Sponsors</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Prerana 2026 is made possible by the generous support of our partners.
            </p>
            <Button onClick={() => navigate("/sponsors/partner-with-us")}>
              Partner With Us
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Placeholder Sponsors */}
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="flex items-center justify-center p-8 bg-muted/30 border-border/50">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-muted-foreground opacity-50">LOGO {i + 1}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
