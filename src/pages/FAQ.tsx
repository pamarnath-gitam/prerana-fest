import Footer from "@/components/landing/Footer";
import Navbar from "@/components/landing/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

export default function FAQ() {
  const faqs = [
    {
      question: "When and where is Prerana 2026 taking place?",
      answer: "Prerana 2026 is scheduled for January 23rd and 24th, 2026. The event will be held at the GITAM University Bengaluru campus.",
    },
    {
      question: "How can I register for events?",
      answer: "You can register for events through our website. Navigate to the 'Events' page, select your desired event, and click on the registration link. You'll need to sign in to complete the process.",
    },
    {
      question: "Is there an entry fee?",
      answer: "Entry to the fest grounds is free for all students with a valid ID. However, specific workshops, competitions, and pro-shows may have a registration fee.",
    },
    {
      question: "Can students from other colleges participate?",
      answer: "Yes! Prerana 2026 is open to students from all colleges and universities. Please bring your college ID card for verification.",
    },
    {
      question: "Will accommodation be provided?",
      answer: "Limited accommodation is available for out-station participants on a first-come, first-served basis. Please contact the hospitality team for more details.",
    },
    {
      question: "Are there participation certificates?",
      answer: "Yes, all registered participants will receive e-certificates. Winners of competitions will receive merit certificates and exciting prizes.",
    },
    {
      question: "Who do I contact for technical issues?",
      answer: "If you face any issues with the website or registration, please reach out to our technical support team via the contact information in the footer.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. Here's everything you need to know about Prerana 2026.
            </p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
