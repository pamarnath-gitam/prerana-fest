import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

// Data Definitions
const leadership = [
  { name: "M. Thousheer", role: "President", image: "https://github.com/shadcn.png" },
  { name: "Honalu K.G", role: "Vice President", image: "https://github.com/shadcn.png" },
  { name: "L. Mokshagna Reddy", role: "Vice President", image: "https://github.com/shadcn.png" },
];

const domainTeams = [
  {
    name: "Security",
    roles: [
      { title: "Head", members: ["M. Venkata Sai Teja"] },
      { title: "Lead", members: ["Jaswanth Koduri", "Spoorthi S"] },
      { title: "Co-Lead", members: ["K.B. Dhanush Tej"] },
    ]
  },
  {
    name: "Media",
    roles: [
      { title: "Head", members: [] },
      { title: "Lead", members: ["G. Sai Krishna"] },
      { title: "Co-Lead", members: ["Shaik Mohammed Aasim"] },
    ]
  },
  {
    name: "Design & Media",
    roles: [
      { title: "Head", members: ["Venkata Vishnu Vardhan Raju"] },
      { title: "Lead", members: ["M. Dhanunjay Reddy"] },
      { title: "Co-Lead", members: ["Rishi Lakkoju", "Sohitha"] },
    ]
  },
  {
    name: "Technology",
    roles: [
      { title: "Head", members: ["D. Naga Chandra Teja"] },
      { title: "Lead", members: [] },
      { title: "Co-Lead", members: ["Shaik Mohammed Aasim", "Kandala Pavan"] },
    ]
  },
  {
    name: "Events",
    roles: [
      { title: "Head", members: ["B. Neha Reddy"] },
      { title: "Lead", members: ["Rachel Smita Massey"] },
      { title: "Co-Lead", members: ["Lanka Darshini Raj", "P. Yathin Bharadwaj"] },
    ]
  },
  {
    name: "Marketing",
    roles: [
      { title: "Head", members: ["Apurva Mishra"] },
      { title: "Lead", members: ["Manoj Kumar"] },
      { title: "Co-Lead", members: ["J. Riteesh Reddy"] },
    ]
  },
  {
    name: "Operations",
    roles: [
      { title: "Head", members: ["Singareddy Ruthish Reddy"] },
      { title: "Lead", members: ["P. Joel Michael Son"] },
      { title: "Co-Lead", members: ["Allata Harshita"] },
    ]
  },
  {
    name: "Sponsorship",
    roles: [
      { title: "Head", members: ["K. Sriniwas"] },
      { title: "Lead", members: ["Sumanth Reddy S"] },
      { title: "Co-Lead", members: ["Srishti Sucklecha"] },
    ]
  },
  {
    name: "Hospitality",
    roles: [
      { title: "Head", members: ["A. Jagadeesh", "Prakruthi V"] },
      { title: "Lead", members: ["Dhruv Jain"] },
      { title: "Co-Lead", members: ["Sri Nandini T"] },
    ]
  },
  {
    name: "Legal & Documentation",
    roles: [
      { title: "Head", members: ["Sophiya Sharma"] },
      { title: "Lead", members: ["Hrishita Rauniyar"] },
      { title: "Co-Lead", members: ["Unnati Chari"] },
    ]
  },
];

const advisoryCommittee = [
  "Dr. Reema Chaudhury",
  "Dr. Asha Acharya",
  "Ayush BM",
  "Anitha D",
  "Meghana Musku",
  "Pranav Amarnath",
  "Arjun Raghu",
  "Srikanth",
  "Rayanka",
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
          className="space-y-20"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              The passionate individuals behind Prerana 2026 working hard to make it a memorable experience.
            </p>
          </div>

          {/* Leadership Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-secondary">Leadership</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-colors overflow-hidden group h-full">
                    <div className="aspect-square overflow-hidden bg-muted/20">
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
                    <CardContent className="text-center pb-6">
                      <div className="flex justify-center gap-4">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <Linkedin className="h-4 w-4" />
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          <Twitter className="h-4 w-4" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Domain Teams Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-secondary">Domain Teams</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {domainTeams.map((team, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                >
                  <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all h-full">
                    <CardHeader className="pb-2 border-b border-primary/10">
                      <CardTitle className="text-xl text-primary">{team.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 space-y-4">
                      {team.roles.map((role, rIndex) => (
                        <div key={rIndex} className="space-y-1">
                          <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                            {role.title}
                          </h4>
                          <div className="text-base">
                            {role.members.length > 0 ? (
                              role.members.join(", ")
                            ) : (
                              <span className="text-muted-foreground/50">—</span>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Advisory Committee Section */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-center text-secondary">Advisory Committee</h2>
            <p className="text-center text-muted-foreground -mt-6">Faculty Support</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {advisoryCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="bg-muted/10 border border-primary/10 rounded-lg p-4 text-center hover:bg-primary/5 hover:border-primary/30 transition-colors"
                >
                  <span className="font-medium">{member}</span>
                </motion.div>
              ))}
            </div>
          </section>

        </motion.div>
      </main>
      <Footer />
    </div>
  );
}