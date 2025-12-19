import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

// Data Definitions
const leadership = [
  { name: "M. Thousheer", role: "President" },
  { name: "Honalu K.G", role: "Vice President" },
  { name: "L. Mokshagna Reddy", role: "Vice President" },
];

const domainTeams = [
  {
    name: "Security",
    roles: [
      { title: "Head", members: [{ name: "M. Venkata Sai Teja" }] },
      { title: "Lead", members: [{ name: "Jaswanth Koduri" }, { name: "Spoorthi S" }] },
      { title: "Co-Lead", members: [{ name: "K.B. Dhanush Tej" }] },
    ]
  },
  {
    name: "Media",
    roles: [
      { title: "Head", members: [] },
      { title: "Lead", members: [{ name: "G. Sai Krishna" }] },
      { title: "Co-Lead", members: [{ name: "Shaik Mohammed Aasim" }] },
    ]
  },
  {
    name: "Design & Media",
    roles: [
      { title: "Head", members: [{ name: "Venkata Vishnu Vardhan Raju" }] },
      { title: "Lead", members: [{ name: "M. Dhanunjay Reddy" }] },
      { title: "Co-Lead", members: [{ name: "Rishi Lakkoju" }, { name: "Sohitha" }] },
    ]
  },
  {
    name: "Technology",
    roles: [
      { title: "Head", members: [{ name: "D. Naga Chandra Teja" }] },
      { title: "Lead", members: [] },
      { title: "Co-Lead", members: [{ name: "Shaik Mohammed Aasim" }, { name: "Kandala Pavan" }] },
    ]
  },
  {
    name: "Events",
    roles: [
      { title: "Head", members: [{ name: "B. Neha Reddy" }] },
      { title: "Lead", members: [{ name: "Rachel Smita Massey" }] },
      { title: "Co-Lead", members: [{ name: "Lanka Darshini Raj" }, { name: "P. Yathin Bharadwaj" }] },
    ]
  },
  {
    name: "Marketing",
    roles: [
      { title: "Head", members: [{ name: "Apurva Mishra" }] },
      { title: "Lead", members: [{ name: "Manoj Kumar" }] },
      { title: "Co-Lead", members: [{ name: "J. Riteesh Reddy" }] },
    ]
  },
  {
    name: "Operations",
    roles: [
      { title: "Head", members: [{ name: "Singareddy Ruthish Reddy" }] },
      { title: "Lead", members: [{ name: "P. Joel Michael Son" }] },
      { title: "Co-Lead", members: [{ name: "Allata Harshita" }] },
    ]
  },
  {
    name: "Sponsorship",
    roles: [
      { title: "Head", members: [{ name: "K. Sriniwas" }] },
      { title: "Lead", members: [{ name: "Sumanth Reddy S" }] },
      { title: "Co-Lead", members: [{ name: "Srishti Sucklecha" }] },
    ]
  },
  {
    name: "Hospitality",
    roles: [
      { title: "Head", members: [{ name: "A. Jagadeesh" }, { name: "Prakruthi V" }] },
      { title: "Lead", members: [{ name: "Dhruv Jain" }] },
      { title: "Co-Lead", members: [{ name: "Sri Nandini T" }] },
    ]
  },
  {
    name: "Legal & Documentation",
    roles: [
      { title: "Head", members: [{ name: "Sophiya Sharma" }] },
      { title: "Lead", members: [{ name: "Hrishita Rauniyar" }] },
      { title: "Co-Lead", members: [{ name: "Unnati Chari" }] },
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
          className="space-y-24"
        >
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-primary">
              Meet the Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              The passionate individuals behind Prerana 2026 working hard to make it a memorable experience.
            </p>
          </div>

          {/* Leadership Section */}
          <section className="space-y-12">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-bold text-secondary">Leadership</h2>
               <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full flex flex-col justify-center items-center py-10 px-6">
                    <CardHeader className="text-center p-0 space-y-2">
                      <CardTitle className="text-2xl font-bold tracking-tight">{member.name}</CardTitle>
                      <p className="text-lg text-primary font-medium tracking-wide uppercase">{member.role}</p>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Domain Teams Section */}
          <section className="space-y-16">
            <div className="text-center space-y-4">
               <h2 className="text-3xl font-bold text-secondary">Domain Teams</h2>
               <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {domainTeams.map((team, index) => {
                // Check if team has any members
                const hasMembers = team.roles.some(role => role.members.length > 0);
                if (!hasMembers) return null;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.05 }}
                  >
                    <Card className="bg-card/30 backdrop-blur-sm border-primary/10 hover:border-primary/40 transition-all duration-300 hover:shadow-md h-full flex flex-col">
                      <CardHeader className="pb-6 border-b border-primary/10 bg-primary/5">
                        <CardTitle className="text-2xl text-primary text-center font-bold tracking-tight">{team.name}</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-8 space-y-8 flex-1">
                        {team.roles.map((role, rIndex) => {
                          // Filter out empty roles
                          if (role.members.length === 0) return null;
                          
                          return (
                            <div key={rIndex} className="space-y-3 text-center">
                              <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-[0.2em] border-b border-border/50 pb-1 inline-block px-4">
                                {role.title}
                              </h4>
                              <div className="flex flex-wrap justify-center gap-3">
                                {role.members.map((member, mIndex) => (
                                  <div key={mIndex} className="px-4 py-2 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 transition-colors shadow-sm">
                                    <span className="text-base font-medium text-foreground/90">{member.name}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </section>

          {/* Advisory Committee Section */}
          <section className="space-y-12">
             <div className="text-center space-y-4">
               <h2 className="text-3xl font-bold text-secondary">Advisory Committee</h2>
               <p className="text-muted-foreground text-lg">Faculty Support</p>
               <div className="w-24 h-1 bg-secondary/50 mx-auto rounded-full" />
            </div>
            <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
              {advisoryCommittee.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                  className="bg-muted/10 border border-primary/10 rounded-xl px-8 py-4 text-center hover:bg-primary/5 hover:border-primary/30 transition-all hover:scale-105 cursor-default min-w-[200px]"
                >
                  <span className="font-medium text-lg tracking-wide">{member}</span>
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