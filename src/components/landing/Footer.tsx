import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();
  const logoUrl = "https://harmless-tapir-303.convex.cloud/api/storage/184e385c-8892-47b6-843e-8e75b561a7ab";

  return (
    <footer id="footer" className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoUrl} alt="Prerana Logo" className="h-10 object-contain" />
            </div>
            <p className="text-muted-foreground text-sm">
              The annual Techno-Cultural and Wellness fest of GITAM University, Bengaluru.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><button onClick={() => navigate("/about")} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => navigate("/events")} className="hover:text-primary transition-colors">Events</button></li>
              <li><button onClick={() => navigate("/sponsors")} className="hover:text-primary transition-colors">Sponsors</button></li>
              <li><button onClick={() => navigate("/privacy")} className="hover:text-primary transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => navigate("/terms")} className="hover:text-primary transition-colors">Terms & Conditions</button></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>prerana@gitam.edu</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1" />
                <span>GITAM University, Bengaluru</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2026 Prerana Fest. All rights reserved.</p>
          <div className="flex items-center gap-2">
             <span>Powered by</span>
             <span className="font-bold text-primary">GITAM University</span>
          </div>
        </div>
      </div>
    </footer>
  );
}