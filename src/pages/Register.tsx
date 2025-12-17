import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ExternalLink } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Registration</h1>
            <p className="text-xl text-muted-foreground">Join us for Prerana 2026</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Fest Registration Iframe */}
            <Card className="w-full overflow-hidden border-primary/20 shadow-lg shadow-primary/5">
              <CardHeader>
                <CardTitle>Fest Registration</CardTitle>
                <CardDescription>Register for the main event here.</CardDescription>
              </CardHeader>
              <CardContent className="p-0 h-[700px]" id="fest-registration-frame">
                <iframe 
                  src="https://lu.ma/embed/event/evt_placeholder" 
                  className="w-full h-full border-0"
                  title="Fest Registration"
                  allowFullScreen
                ></iframe>
              </CardContent>
            </Card>

            {/* Individual Events Registration */}
            <div className="space-y-8">
              <Card className="h-full flex flex-col justify-center border-secondary/20 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="text-3xl">Individual Events</CardTitle>
                  <CardDescription className="text-lg">
                    Participating in specific competitions or workshops?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-lg">
                    If you wish to register for individual hackathons, dance battles, or workshops separately, please use our dedicated Google Form.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-lg">Hackathons & Coding Contests</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-lg">Cultural Competitions</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Check className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-lg">Wellness Workshops</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    size="lg" 
                    className="w-full gap-2 text-lg py-6" 
                    onClick={() => window.open("https://forms.google.com/placeholder", "_blank")}
                  >
                    Register for Individual Events <ExternalLink className="w-5 h-5" />
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
