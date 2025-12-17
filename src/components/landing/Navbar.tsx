import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  const logoUrl = "https://harmless-tapir-303.convex.cloud/api/storage/2cdde29b-96de-40ef-afc4-12e27e3d37f2";

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={logoUrl} alt="Prerana Logo" className="h-12 object-contain" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => {
                if (link.href.startsWith("/")) {
                  e.preventDefault();
                  if (link.href.includes("#")) {
                     // Handle hash navigation if needed, for now just navigate
                     const [path, hash] = link.href.split("#");
                     if (window.location.pathname === path) {
                        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
                     } else {
                        navigate(link.href);
                     }
                  } else {
                    navigate(link.href);
                  }
                }
              }}
            >
              {link.name}
            </a>
          ))}
          <Button onClick={() => navigate("/register")}>
            Register Now
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background border-b border-border/50"
        >
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(false);
                  navigate(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" onClick={() => {
              setIsMenuOpen(false);
              navigate("/register");
            }}>
              Register Now
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}