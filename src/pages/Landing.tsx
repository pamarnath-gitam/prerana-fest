import About from "@/components/landing/About";
import Footer from "@/components/landing/Footer";
import Gallery from "@/components/landing/Gallery";
import Hero from "@/components/landing/Hero";
import Navbar from "@/components/landing/Navbar";
import Pillars from "@/components/landing/Pillars";
import Registration from "@/components/landing/Registration";
import Schedule from "@/components/landing/Schedule";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pillars />
        <Schedule />
        <Gallery />
        <Registration />
      </main>
      <Footer />
    </div>
  );
}