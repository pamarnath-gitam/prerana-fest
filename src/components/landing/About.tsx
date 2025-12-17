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
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">More Than a Fest. It's an Experience.</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Prerana 2026 brings together the brightest minds and the most creative souls for two days of innovation, celebration, and rejuvenation.
          </p>
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
          <Button variant="link" className="text-lg gap-2" onClick={() => navigate("/schedule")}>
            View Full Schedule <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}