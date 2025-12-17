import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Sparkles, Users, Zap } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary">GITAM</span> & <span className="text-secondary">Prerana</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              GITAM (Deemed to be University), Bengaluru, is a premier educational institution committed to excellence in higher education. 
              Nestled in a serene environment, it fosters innovation and holistic development.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              <strong className="text-foreground">Prerana</strong> is our annual Techno-Cultural and Wellness fest, a melting pot of talent, creativity, and technology. 
              For 2026, we are elevating the experience with a futuristic theme that blends high-tech innovation with mental and physical wellness.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { icon: Users, label: "5000+ Footfall", color: "text-blue-400" },
                { icon: Zap, label: "50+ Events", color: "text-yellow-400" },
                { icon: Sparkles, label: "3 Days", color: "text-purple-400" },
              ].map((stat, index) => (
                <Card key={index} className="bg-card/50 border-border/50">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <stat.icon className={`w-8 h-8 mb-2 ${stat.color}`} />
                    <span className="font-bold">{stat.label}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="h-48 bg-muted rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1000" 
                    alt="Concert" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="h-64 bg-muted rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1000" 
                    alt="Workshop" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-64 bg-muted rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1504384308090-c54be3852f33?auto=format&fit=crop&q=80&w=1000" 
                    alt="Tech" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="h-48 bg-muted rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <img 
                    src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=1000" 
                    alt="Wellness" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
