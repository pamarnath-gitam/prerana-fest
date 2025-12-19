import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, AlertTriangle, CheckCircle, Ban } from "lucide-react";
import { motion } from "framer-motion";

export default function SecurityGuidelines() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Security Guidelines
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              To ensure a safe and enjoyable experience for everyone at Prerana 2026, please review our security policies.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  Entry Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Valid University ID card is mandatory for entry.</p>
                <p>• Registration confirmation email/QR code.</p>
                <p>• All attendees are subject to security screening.</p>
                <p>• Wristbands must be worn at all times.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Ban className="h-5 w-5 text-destructive" />
                  Prohibited Items
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Alcohol, drugs, or illegal substances.</p>
                <p>• Weapons of any kind (including pocket knives).</p>
                <p>• Flammable items or fireworks.</p>
                <p>• Outside food and beverages.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Shield className="h-5 w-5 text-blue-500" />
                  Code of Conduct
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Respect all participants, staff, and property.</p>
                <p>• Zero tolerance for harassment or discrimination.</p>
                <p>• Follow instructions from security personnel.</p>
                <p>• Report suspicious activity immediately.</p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <AlertTriangle className="h-5 w-5 text-yellow-500" />
                  Emergency Procedures
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-muted-foreground">
                <p>• Locate nearest emergency exits upon arrival.</p>
                <p>• Medical stations are available at main venues.</p>
                <p>• In case of emergency, contact nearest volunteer.</p>
                <p>• Emergency Helpline: Available at Help Desk.</p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
