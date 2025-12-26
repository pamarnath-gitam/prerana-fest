import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Music, Heart } from "lucide-react";
import { useNavigate } from "react-router";

export default function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
            <p className="text-xl text-muted-foreground">Choose your event category to register for Prerana 2026</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Technical Events */}
            <Card className="flex flex-col border-primary/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl">Technical Events</CardTitle>
                <CardDescription>Hackathons, Coding Contests, and Workshops</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Showcase your technical prowess in our flagship hackathons and coding competitions.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2" 
                  onClick={() => navigate("/register/technical")}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Cultural Events */}
            <Card className="flex flex-col border-secondary/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                  <Music className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl">Cultural Events</CardTitle>
                <CardDescription>Dance, Music, Drama, and Arts</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Unleash your creativity and talent on the big stage. Join the cultural extravaganza.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground" 
                  onClick={() => navigate("/register/cultural")}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Wellness Events */}
            <Card className="flex flex-col border-accent/20 bg-card/50 hover:bg-card/80 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl">Wellness Events</CardTitle>
                <CardDescription>Yoga, Meditation, and Mental Health</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground">
                  Find your inner peace and participate in our wellness and mindfulness sessions.
                </p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground" 
                  onClick={() => navigate("/register/wellness")}
                >
                  Register Now <ArrowRight className="w-4 h-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}