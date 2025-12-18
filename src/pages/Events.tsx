import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { events } from "@/data/events";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, Code2, Heart, MapPin, Music, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

const categories = [
  {
    title: "Technical",
    description: "Hackathons, coding competitions, robotics, and tech talks.",
    icon: Code2,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    slug: "technical"
  },
  {
    title: "Cultural",
    description: "Dance battles, music concerts, fashion shows, and art exhibitions.",
    icon: Music,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    slug: "cultural"
  },
  {
    title: "Wellness",
    description: "Yoga sessions, meditation, mental health workshops, and fitness challenges.",
    icon: Heart,
    color: "text-green-400",
    bg: "bg-green-400/10",
    slug: "wellness"
  }
];

export default function Events() {
  const navigate = useNavigate();
  const { category, slug } = useParams();
  const [agreed, setAgreed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Filter events based on category
  const categoryEvents = category 
    ? events.filter(e => e.category.toLowerCase() === category.toLowerCase() && e.active)
    : [];

  // Find specific event if slug is present
  const selectedEvent = slug 
    ? events.find(e => e.slug === slug)
    : null;

  const handleRegister = () => {
    // Placeholder for actual registration logic
    // Could redirect to a Google Form or open another modal
    if (selectedEvent?.requiresPayment) {
      window.open("https://forms.google.com/placeholder-payment", "_blank");
    } else {
      window.open("https://forms.google.com/placeholder-free", "_blank");
    }
    setIsDialogOpen(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <Navbar />
      <main className="pt-24 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          
          {/* VIEW 1: CATEGORIES LIST (Default) */}
          {!category && !slug && (
            <>
              <div className="text-center mb-16">
                <h1 className="text-5xl font-bold mb-6">Event Categories</h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Explore the diverse range of events happening at Prerana 2026.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {categories.map((cat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="cursor-pointer"
                    onClick={() => navigate(`/events/${cat.slug}`)}
                  >
                    <Card className="h-full border-border/50 hover:border-primary/50 transition-colors">
                      <CardHeader className="flex flex-row items-center gap-4">
                        <div className={`w-16 h-16 rounded-2xl ${cat.bg} flex items-center justify-center`}>
                          <cat.icon className={`w-8 h-8 ${cat.color}`} />
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{cat.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base">
                          {cat.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* VIEW 2: EVENTS LIST (Filtered by Category) */}
          {category && !slug && (
            <>
              <div className="mb-8">
                <Button variant="ghost" onClick={() => navigate("/events")} className="gap-2 pl-0 hover:pl-2 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Back to Categories
                </Button>
              </div>
              
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-4 capitalize">{category} Events</h1>
                <p className="text-muted-foreground">Select an event to view details and register.</p>
              </div>

              {categoryEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categoryEvents.map((event, index) => (
                    <motion.div
                      key={event.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => navigate(`/events/${category}/${event.slug}`)}
                      className="cursor-pointer"
                    >
                      <Card className="h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                        <CardHeader>
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">{event.code}</span>
                            {event.requiresPayment && <span className="text-xs font-bold text-secondary">PAID</span>}
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">{event.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground text-sm line-clamp-3">{event.shortDescription}</p>
                        </CardContent>
                        <CardFooter className="text-sm text-muted-foreground flex gap-4">
                          <span className="flex items-center gap-1"><Users className="w-3 h-3" /> {event.teamSize}</span>
                          <span className="flex items-center gap-1"><Trophy className="w-3 h-3" /> {event.prizes[0].split(':')[1]}</span>
                        </CardFooter>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-muted-foreground">No events found for this category yet. Stay tuned!</p>
                </div>
              )}
            </>
          )}

          {/* VIEW 3: EVENT DETAILS */}
          {slug && selectedEvent && (
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Button variant="ghost" onClick={() => navigate(`/events/${category}`)} className="gap-2 pl-0 hover:pl-2 transition-all">
                  <ArrowLeft className="w-4 h-4" /> Back to {category} Events
                </Button>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm font-mono text-primary bg-primary/10 px-2 py-1 rounded">{selectedEvent.code}</span>
                      <span className="text-sm text-muted-foreground">{selectedEvent.category}</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedEvent.title}</h1>
                    <p className="text-xl text-muted-foreground">{selectedEvent.shortDescription}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <div className="text-3xl font-bold text-primary">
                      {selectedEvent.registrationFee === "0" ? "Free" : selectedEvent.registrationFee}
                    </div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <Button size="lg" className="text-lg px-8 shadow-lg shadow-primary/20">
                          Register Now
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[90vh] flex flex-col">
                        <DialogHeader>
                          <DialogTitle>Event Registration: {selectedEvent.title}</DialogTitle>
                          <DialogDescription>
                            Please review the rules and guidelines before proceeding.
                          </DialogDescription>
                        </DialogHeader>
                        
                        <ScrollArea className="flex-1 pr-4 max-h-[60vh]">
                          <div className="space-y-6 py-4">
                            <div>
                              <h4 className="font-semibold mb-2 text-primary">About the Event</h4>
                              <p className="text-sm text-muted-foreground">{selectedEvent.fullDescription}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-muted/30 p-3 rounded-lg">
                                <span className="text-xs text-muted-foreground block">Team Size</span>
                                <span className="font-medium">{selectedEvent.teamSize}</span>
                              </div>
                              <div className="bg-muted/30 p-3 rounded-lg">
                                <span className="text-xs text-muted-foreground block">Eligibility</span>
                                <span className="font-medium">{selectedEvent.eligibility}</span>
                              </div>
                            </div>

                            <div>
                              <h4 className="font-semibold mb-2 text-primary">Guidelines</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {selectedEvent.guidelines.map((g, i) => (
                                  <li key={i}>{g}</li>
                                ))}
                              </ul>
                            </div>

                            {selectedEvent.judgingCriteria.length > 0 && (
                              <div>
                                <h4 className="font-semibold mb-2 text-primary">Judging Criteria</h4>
                                <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                  {selectedEvent.judgingCriteria.map((j, i) => (
                                    <li key={i}>{j}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            <div>
                              <h4 className="font-semibold mb-2 text-destructive">Disqualification Rules</h4>
                              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                                {selectedEvent.disqualificationRules.map((d, i) => (
                                  <li key={i}>{d}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </ScrollArea>

                        <div className="border-t border-border pt-4 mt-4">
                          <div className="flex items-start space-x-2 mb-6">
                            <Checkbox 
                              id="terms" 
                              checked={agreed} 
                              onCheckedChange={(checked) => setAgreed(checked as boolean)} 
                            />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
                            >
                              I have read and understood the rules, guidelines, judging criteria, and disqualification terms for the selected event. I agree to abide by all PRERNA Technical Event regulations and confirm that the information provided is accurate.
                            </label>
                          </div>
                          <DialogFooter>
                            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                            <Button onClick={handleRegister} disabled={!agreed}>
                              Proceed to {selectedEvent.requiresPayment ? "Payment" : "Registration"}
                            </Button>
                          </DialogFooter>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-8">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" /> About
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">
                          {selectedEvent.fullDescription}
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Trophy className="w-5 h-5 text-secondary" /> Prizes
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {selectedEvent.prizes.map((prize, i) => (
                            <li key={i} className="flex items-center gap-2 text-lg font-medium">
                              <span className="w-2 h-2 rounded-full bg-secondary" />
                              {prize}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-accent" /> Guidelines
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                          {selectedEvent.guidelines.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Event Details</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                            <MapPin className="w-4 h-4" /> Location
                          </div>
                          <div className="font-medium">{selectedEvent.location}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                            <Users className="w-4 h-4" /> Team Size
                          </div>
                          <div className="font-medium">{selectedEvent.teamSize}</div>
                        </div>
                        <div>
                          <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                            <Calendar className="w-4 h-4" /> Eligibility
                          </div>
                          <div className="font-medium">{selectedEvent.eligibility}</div>
                        </div>
                      </CardContent>
                    </Card>

                    {selectedEvent.judgingCriteria.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle>Judging Criteria</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {selectedEvent.judgingCriteria.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-primary shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          )}

          {/* 404 STATE FOR EVENT */}
          {slug && !selectedEvent && (
            <div className="text-center py-20">
              <h2 className="text-3xl font-bold mb-4">Event Not Found</h2>
              <Button onClick={() => navigate("/events")}>Back to Events</Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}