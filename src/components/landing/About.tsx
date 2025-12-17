import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Users, Zap } from "lucide-react";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();

  return (
    <section id="about" className="py-20 relative overflow-hidden bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">WHAT IS PRERANA?</h2>
          <blockquote className="text-xl md:text-2xl font-light italic text-primary mb-8 max-w-4xl mx-auto">
            "A festival that doesn't just happen—it evolves, inspires, and sets the stage for tomorrow."
          </blockquote>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              PRERANA isn't just a fest, it's the heartbeat of GITAM University, Bengaluru. A dazzling fusion of culture, tech, and raw student energy, it has grown into a powerhouse of inspiration. Since day one, PRERANA has been the launchpad where ideas take flight, talents rise, and collaboration transforms into unforgettable experiences.
            </p>
            <p>
              Prerana 2025 continued this legacy with two action-packed days—February 1 & 2—filled with cultural showcases, technical competitions, wellness sessions, workshops, esports battles, and endless opportunities to learn, perform, compete, and connect.
            </p>
            <p>
              This year's fest came alive through the theme: <span className="text-foreground font-semibold">[CURRENT FEST THEME PLACEHOLDER]</span> — a creative compass that encouraged participants to think boldly, break patterns, and embrace new perspectives. From the main stage to the hackathons and from wellness zones to workshops, the theme echoed in every moment of the fest.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {[
            { 
              icon: Zap, 
              title: "National Competitions", 
              desc: "Compete with the best talent from across the country in coding, robotics, and more.",
              color: "text-yellow-400" 
            },
            { 
              icon: Sparkles, 
              title: "Star Night Concerts", 
              desc: "Experience electrifying performances by top artists and bands under the stars.",
              color: "text-purple-400" 
            },
            { 
              icon: Users, 
              title: "Technical Workshops", 
              desc: "Learn from industry experts and get hands-on experience with cutting-edge tech.",
              color: "text-blue-400" 
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-card/50 border-border/50 hover:border-primary/30 transition-colors">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-full bg-background flex items-center justify-center mb-4 shadow-sm`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="link" className="text-lg gap-2" onClick={() => navigate("/#schedule")}>
            View Full Schedule <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}