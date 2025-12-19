import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { AlertTriangle, Backpack, Ban, DoorOpen, IdCard, Megaphone, ShieldAlert, Users } from "lucide-react";
import React from "react";

export default function SecurityGuidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main className="pt-24 pb-20 container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-primary tracking-tight"
          >
            PRERANA 2026 – SECURITY GUIDELINES
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground font-medium"
          >
            Entry • ID Verification • Bags • Prohibited Items • Participants • Crowd Management • General Safety
          </motion.p>
        </div>

        {/* Warning Notice */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <Alert variant="destructive" className="border-destructive/50 bg-destructive/10">
            <AlertTriangle className="h-5 w-5" />
            <AlertTitle className="text-lg font-bold ml-2">IMPORTANT NOTICE</AlertTitle>
            <AlertDescription className="ml-2 text-base mt-1">
              To ensure a safe and well-controlled festival experience, all attendees must adhere strictly to the following security rules. Non-compliance will result in immediate removal from the venue.
            </AlertDescription>
          </Alert>
        </motion.div>

        {/* Sections */}
        <div className="space-y-8">
          {/* Section 1: Entry Rules */}
          <Section 
            icon={DoorOpen} 
            title="SECTION 1: ENTRY RULES" 
            delay={0.4}
          >
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Entry is permitted <strong>ONLY through the Main Gate</strong>.</li>
              <li>Mandatory security screening, metal detection, and bag checks for all entrants.</li>
              <li>Re-entry allowed only with valid wristband or ID verification.</li>
              <li>Security personnel reserve full authority to deny or restrict entry as required.</li>
              <li className="text-destructive font-semibold">NO alumni are permitted inside the venue under any circumstances.</li>
              <li>Attendees must obey all instructions issued by security staff and volunteers.</li>
            </ul>
          </Section>

          {/* Section 2: ID Card Rules */}
          <Section 
            icon={IdCard} 
            title="SECTION 2: ID CARD RULES" 
            delay={0.5}
          >
            <div className="space-y-4 text-muted-foreground">
              <p><strong className="text-foreground">A valid College ID is mandatory for:</strong></p>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>GITAM students</li>
                <li>External participants</li>
                <li>Any student entering the campus</li>
              </ul>
              <div className="bg-muted/50 p-4 rounded-lg border border-border/50">
                <p className="font-semibold text-destructive">Entry without a valid College ID = NOT allowed.</p>
                <p className="text-sm mt-1">No alternative IDs (photocopies, screenshots, temporary slips) will be accepted.</p>
                <p className="text-sm mt-1">Attendees must report to the Helpdesk for verification.</p>
              </div>
            </div>
          </Section>

          {/* Section 3: Bag Rules */}
          <Section 
            icon={Backpack} 
            title="SECTION 3: BAG RULES" 
            delay={0.6}
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-primary">Morning Events</h4>
                <div className="space-y-2">
                  <p><strong className="text-foreground">Girls:</strong> Bags allowed after strict security check. Only ID card permitted inside; prohibited items will be held at the Helpdesk.</p>
                  <p><strong className="text-foreground">Boys:</strong> Bags allowed after screening. Prohibited items must be deposited at the Helpdesk.</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-bold text-lg text-secondary">Night Events</h4>
                <div className="space-y-2">
                  <p><strong className="text-foreground">Girls:</strong> Bags allowed with mandatory full bag inspection. Only ID card allowed inside.</p>
                  <p><strong className="text-foreground">Boys:</strong> <span className="text-destructive font-semibold">No bags allowed during night events.</span></p>
                </div>
              </div>
            </div>
          </Section>

          {/* Section 4: Prohibited Items */}
          <Section 
            icon={Ban} 
            title="SECTION 4: PROHIBITED ITEMS" 
            delay={0.7}
          >
            <div className="grid md:grid-cols-2 gap-6 text-muted-foreground">
              <div>
                <h4 className="font-bold text-foreground mb-2">Safety & Security</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Weapons, knives, blades, sharp objects</li>
                  <li>Lighters, matches, flammable items</li>
                  <li>Firecrackers or explosives</li>
                  <li>Laser pointers</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Substances</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Alcohol</li>
                  <li>Cigarettes, vapes, tobacco products</li>
                  <li>Drugs or any banned substances</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Political & Sensitive Materials</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Political party flags, banners, scarves, badges, or promotional materials</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Personal Items</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Perfumes, deodorant sprays, aerosol cans</li>
                  <li>Water bottles (plastic, metal, thermos — all types)</li>
                  <li>Metal or steel containers</li>
                  <li>Large food boxes or items intended for group distribution</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-bold text-foreground mb-2">Electronics & Miscellaneous</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Large speakers</li>
                  <li>Projectiles (balls, frisbees, etc.)</li>
                  <li>Unauthorized drones</li>
                  <li>Any item deemed unsafe by Security / QRT team</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Section 5: Participant Rules */}
          <Section 
            icon={Users} 
            title="SECTION 5: PARTICIPANT RULES" 
            delay={0.8}
          >
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>All participants (internal and external) must present a valid College ID.</li>
              <li>Participants must report to competitions on time. <span className="text-destructive">Late reporting may result in disqualification.</span></li>
              <li>Only registered participants may enter competition zones.</li>
              <li>ID verification is required for collecting certificates, awards, and prizes.</li>
            </ul>
          </Section>

          {/* Section 6: Crowd Movement Rules */}
          <Section 
            icon={Megaphone} 
            title="SECTION 6: CROWD MOVEMENT RULES" 
            delay={0.9}
          >
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Follow the campus <strong>ONE-WAY entry/exit system</strong> wherever implemented.</li>
              <li>Do not crowd near narrow walkways, backstage areas, or technical zones.</li>
              <li>Barricades must not be crossed under any circumstance.</li>
              <li>Follow crowd management volunteers during peak hours.</li>
              <li>In emergencies, move calmly to the nearest marked exit.</li>
            </ul>
          </Section>

          {/* Section 7: General Safety Rules */}
          <Section 
            icon={ShieldAlert} 
            title="SECTION 7: GENERAL SAFETY RULES" 
            delay={1.0}
          >
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Follow the instructions of Security, QRT (Quick Response Team), Fire & Safety, and volunteers.</li>
              <li>Report any suspicious activity or unattended items immediately.</li>
              <li>For medical emergencies or discomfort, visit the <strong>First Aid & Medical Booth</strong>.</li>
              <li>Emergency exits must remain clear and unobstructed at all times.</li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ icon: Icon, title, children, delay }: { icon: any, title: string, children: React.ReactNode, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
    >
      <Card className="border-border/50 hover:border-primary/30 transition-colors overflow-hidden">
        <CardHeader className="bg-muted/30 border-b border-border/50 pb-4">
          <CardTitle className="flex items-center gap-3 text-xl md:text-2xl">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Icon className="w-6 h-6" />
            </div>
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          {children}
        </CardContent>
      </Card>
    </motion.div>
  );
}
