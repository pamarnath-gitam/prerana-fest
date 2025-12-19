import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, ShieldAlert, User } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast.success("Message sent successfully!", {
      description: "We'll get back to you within 24-48 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Connect with Prerana Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              We're here to assist you. Use the contact details below for all event-related inquiries.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Info Column */}
            <div className="space-y-6">
              {/* General & Location */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">General Contact</h3>
                      <p className="text-muted-foreground">prerana@gitam.edu</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (All queries—registration, events, media, sponsorship—are routed centrally.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <ShieldAlert className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Campus Security Helpline</h3>
                      <p className="text-muted-foreground font-mono">+91 89711 99915</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        (For safety, emergency issues, or immediate on-campus assistance.)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10 text-primary shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Campus Location</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        PRERANA Organising Committee<br />
                        GITAM University – Bengaluru Campus<br />
                        Nagadenahalli, Doddaballapur Taluk<br />
                        Bengaluru Rural District, Karnataka – 562163, India
                      </p>
                      <a 
                        href="https://maps.app.goo.gl/iSe3W3YDSogftvYX7" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block mt-2 text-primary hover:underline text-sm font-medium"
                      >
                        View on Google Maps →
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Specific Contacts */}
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardHeader>
                  <CardTitle className="text-2xl">Key Contacts</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Pranav</p>
                      <p className="text-sm text-muted-foreground">Faculty Coordinator</p>
                      <a href="tel:+919113583435" className="text-sm hover:text-primary transition-colors">+91 91135 83435</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Sriniwas</p>
                      <p className="text-sm text-muted-foreground">Head – Sponsorship</p>
                      <a href="tel:+919883790337" className="text-sm hover:text-primary transition-colors">+91 98837 90337</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <User className="h-5 w-5 text-primary mt-1 shrink-0" />
                    <div>
                      <p className="font-semibold">Thousheer</p>
                      <p className="text-sm text-muted-foreground">President</p>
                      <a href="tel:+919113815655" className="text-sm hover:text-primary transition-colors">+91 91138 15655</a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form Column */}
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20 h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">Your Name</label>
                      <Input id="name" placeholder="John Doe" required className="bg-background/50" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Your Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" required className="bg-background/50" />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Select name="subject" required>
                        <SelectTrigger className="bg-background/50">
                          <SelectValue placeholder="Select a topic" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Query</SelectItem>
                          <SelectItem value="registration">Registration Issue</SelectItem>
                          <SelectItem value="payment">Payment Issue</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="How can we help you?" 
                        required 
                        className="min-h-[150px] bg-background/50" 
                      />
                    </div>

                    <div className="pt-2">
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Sending..." : (
                          <>
                            Send Message <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-4">
                        Please allow 24–48 hours for a response.
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}