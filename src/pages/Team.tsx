import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Ravi Kumar",
    role: "Faculty Coordinator",
    image: "https://github.com/shadcn.png", // Placeholder
    bio: "Guiding the team towards excellence with years of experience.",
  },
  {
    name: "Aditi Sharma",
    role: "Student Lead",
    image: "https://github.com/shadcn.png",
    bio: "Leading the charge for Prerana 2026 with passion and dedication.",
  },
  {
    name: "Rahul Verma",
    role: "Technical Head",
    image: "https://github.com/shadcn.png",
    bio: "Ensuring all technical events run smoothly and efficiently.",
  },
  {
    name: "Sneha Gupta",
    role: "Cultural Head",
    image: "https://github.com/shadcn.png",
    bio: "Curating the best cultural experiences for everyone.",
  },
  {
    name: "Vikram Singh",
    role: "Wellness Coordinator",
    image: "https://github.com/shadcn.png",
    bio: "Promoting health and mindfulness throughout the fest.",
  },
  {
    name: "Priya Patel",
    role: "Marketing Lead",
    image: "https://github.com/shadcn.png",
    bio: "Spreading the word and managing our brand presence.",
  },
  {
    name: "Arjun Reddy",
    role: "Logistics Head",
    image: "https://github.com/shadcn.png",
    bio: "Managing the on-ground operations and infrastructure.",
  },
  {
    name: "Meera Nair",
    role: "Creative Director",
    image: "https://github.com/shadcn.png",
    bio: "Designing the visual identity and aesthetics of the fest.",
  },
];

export default function Team() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              The passionate individuals behind Prerana 2026 working hard to make it a memorable experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors overflow-hidden group h-full">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                    <div className="flex justify-center gap-4">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="h-4 w-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github className="h-4 w-4" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
