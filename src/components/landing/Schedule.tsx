import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const schedule = {
  day1: [
    { time: "09:00 AM", event: "Inauguration Ceremony", category: "General", location: "Main Auditorium" },
    { time: "10:30 AM", event: "Hackathon Kickoff", category: "Technical", location: "Lab Complex" },
    { time: "11:00 AM", event: "Art Exhibition Opening", category: "Cultural", location: "Student Center" },
    { time: "02:00 PM", event: "Tech Talk: AI Future", category: "Technical", location: "Seminar Hall 1" },
    { time: "04:00 PM", event: "Fashion Show", category: "Cultural", location: "Main Auditorium" },
    { time: "06:00 PM", event: "Battle of Bands", category: "Cultural", location: "Open Air Theatre" },
  ],
  day2: [
    { time: "07:00 AM", event: "Sunrise Yoga", category: "Wellness", location: "Sports Ground" },
    { time: "10:00 AM", event: "Robo Wars", category: "Technical", location: "Central Courtyard" },
    { time: "01:00 PM", event: "Dance Competition", category: "Cultural", location: "Main Auditorium" },
    { time: "03:00 PM", event: "Mental Health Workshop", category: "Wellness", location: "Seminar Hall 2" },
    { time: "05:00 PM", event: "Valedictory Ceremony", category: "General", location: "Main Auditorium" },
    { time: "07:00 PM", event: "Star Night Concert", category: "Cultural", location: "Open Air Theatre" },
  ],
};

export default function Schedule() {
  return (
    <section id="schedule" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Event Schedule</h2>
          <p className="text-muted-foreground">Don't miss out on any of the action.</p>
        </div>

        <Tabs defaultValue="day1" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="day1">Day 1 (Jan 23)</TabsTrigger>
            <TabsTrigger value="day2">Day 2 (Jan 24)</TabsTrigger>
          </TabsList>

          {Object.entries(schedule).map(([day, events]) => (
            <TabsContent key={day} value={day}>
              <div className="space-y-4">
                {events.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="hover:bg-muted/50 transition-colors border-l-4 border-l-primary">
                      <CardContent className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                          <div className="text-lg font-bold text-primary w-24">{item.time}</div>
                          <div>
                            <h3 className="text-xl font-semibold">{item.event}</h3>
                            <p className="text-sm text-muted-foreground">{item.location}</p>
                          </div>
                        </div>
                        <Badge variant={
                          item.category === "Technical" ? "default" :
                          item.category === "Cultural" ? "secondary" :
                          item.category === "Wellness" ? "outline" : "destructive"
                        } className="w-fit">
                          {item.category}
                        </Badge>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}