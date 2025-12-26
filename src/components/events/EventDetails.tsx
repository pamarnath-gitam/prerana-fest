import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, CheckCircle2, Clock, Layers, MapPin, Trophy, Users } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

interface EventDetailsProps {
  event: any; // Ideally type this
  category: string;
}

export default function EventDetails({ event: selectedEvent, category }: EventDetailsProps) {
  const navigate = useNavigate();
  const [agreed, setAgreed] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleRegister = () => {
    if (!selectedEvent) return;

    switch (selectedEvent.category) {
      case "Technical":
        navigate("/register/technical");
        break;
      case "Cultural":
        navigate("/register/cultural");
        break;
      case "Wellness":
        navigate("/register/wellness");
        break;
      default:
        navigate("/register");
    }
    setIsDialogOpen(false);
  };

  return (
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
              {selectedEvent.isCombo && <span className="text-sm font-bold text-secondary bg-secondary/10 px-2 py-1 rounded">COMBO</span>}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{selectedEvent.title}</h1>
            <p className="text-xl text-muted-foreground">{selectedEvent.shortDescription}</p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="text-3xl font-bold text-primary">
              {selectedEvent.registrationFee === "0" ? "Free" : selectedEvent.registrationFee}
            </div>
            <Button 
              size="lg" 
              className="text-lg px-8 shadow-lg shadow-primary/20"
              onClick={() => setIsDialogOpen(true)}
            >
              Register Now
            </Button>
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
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

                    {selectedEvent.isCombo && selectedEvent.includedEvents && (
                      <div className="bg-secondary/10 p-4 rounded-lg border border-secondary/20">
                        <h4 className="font-semibold mb-2 text-secondary">Included Events</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground">
                          {selectedEvent.includedEvents.map((ev: string, i: number) => (
                            <li key={i}>{ev}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <span className="text-xs text-muted-foreground block">Team Size</span>
                        <span className="font-medium">{selectedEvent.teamSize}</span>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <span className="text-xs text-muted-foreground block">Eligibility</span>
                        <span className="font-medium">{selectedEvent.eligibility}</span>
                      </div>
                      {selectedEvent.timeLimit && (
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <span className="text-xs text-muted-foreground block">Time Limit</span>
                          <span className="font-medium">{selectedEvent.timeLimit}</span>
                        </div>
                      )}
                      {selectedEvent.day && (
                        <div className="bg-muted/30 p-3 rounded-lg">
                          <span className="text-xs text-muted-foreground block">Day</span>
                          <span className="font-medium">{selectedEvent.day}</span>
                        </div>
                      )}
                    </div>

                    <div>
                      <h4 className="font-semibold mb-2 text-primary">Guidelines</h4>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {selectedEvent.guidelines.map((g: string, i: number) => (
                          <li key={i}>{g}</li>
                        ))}
                      </ul>
                    </div>

                    {selectedEvent.judgingCriteria.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-primary">Judging Criteria</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {selectedEvent.judgingCriteria.map((j: string, i: number) => (
                            <li key={i}>{j}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedEvent.disqualificationRules.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-2 text-destructive">Disqualification Rules</h4>
                        <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                          {selectedEvent.disqualificationRules.map((d: string, i: number) => (
                            <li key={i}>{d}</li>
                          ))}
                        </ul>
                      </div>
                    )}
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
                      I have read and understood all the rules and regulations of this {selectedEvent.isCombo ? "combo" : "cultural"} event and agree to abide by the decisions of the judges.
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

            {selectedEvent.isCombo && selectedEvent.includedEvents && (
              <Card className="border-secondary/30 bg-secondary/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-secondary">
                    <Layers className="w-5 h-5" /> Included Events
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {selectedEvent.includedEvents.map((ev: string, i: number) => (
                      <li key={i} className="flex items-center gap-2 text-lg font-medium">
                        <span className="w-2 h-2 rounded-full bg-secondary" />
                        {ev}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-secondary" /> Prizes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {selectedEvent.prizes.map((prize: string, i: number) => (
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
                  {selectedEvent.guidelines.map((item: string, i: number) => (
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
                {selectedEvent.day && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> Day
                    </div>
                    <div className="font-medium">{selectedEvent.day}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <Users className="w-4 h-4" /> Team Size
                  </div>
                  <div className="font-medium">{selectedEvent.teamSize}</div>
                </div>
                {selectedEvent.timeLimit && (
                  <div>
                    <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                      <Clock className="w-4 h-4" /> Time Limit
                    </div>
                    <div className="font-medium">{selectedEvent.timeLimit}</div>
                  </div>
                )}
                <div>
                  <div className="text-sm text-muted-foreground mb-1 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Eligibility
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
                    {selectedEvent.judgingCriteria.map((item: string, i: number) => (
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
  );
}
