import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { toast } from "sonner";

const plans = [
  {
    name: "Early Bird",
    price: "₹499",
    features: ["Access to all events", "Event Kit", "Lunch included", "Certificate"],
    popular: false,
  },
  {
    name: "Standard",
    price: "₹799",
    features: ["Access to all events", "Premium Event Kit", "Lunch & Snacks", "Certificate", "Workshop Access"],
    popular: true,
  },
  {
    name: "Group (5+)",
    price: "₹399",
    features: ["Per person price", "Access to all events", "Event Kit", "Lunch included", "Team Certificate"],
    popular: false,
  },
];

export default function Registration() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration successful!", {
      description: "We've sent a confirmation email to your inbox.",
    });
  };

  return (
    <section id="registration" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Register Now</h2>
          <p className="text-muted-foreground">Secure your spot at Prerana 2026.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold mt-2">{plan.price}</div>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" variant={plan.popular ? "default" : "outline"}>Select Plan</Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Quick Registration</CardTitle>
            <CardDescription>Fill out the form below to get started.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="plan">Select Plan</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a plan" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="early">Early Bird</SelectItem>
                    <SelectItem value="standard">Standard</SelectItem>
                    <SelectItem value="group">Group</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Register</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
