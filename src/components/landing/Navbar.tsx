import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X, ShieldAlert } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import LogoDropdown from "../LogoDropdown";
import { useAuth } from "@/hooks/use-auth";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check authentication status
    const checkAuth = async () => {
      const auth = await useAuth();
      setIsAuthenticated(auth.isAuthenticated);
    };
    checkAuth();
  }, []);

  const navLinks = [
    { name: "Events", href: "/events" },
    { name: "Schedule", href: "/#schedule" },
    { name: "Sponsors", href: "/sponsors" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src="https://harmless-tapir-303.convex.cloud/api/storage/2cdde29b-96de-40ef-afc4-12e27e3d37f2" alt="PRERANA 2026" className="h-12 w-auto" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex flex-col gap-4">
            <Link to="/events" className="text-sm font-medium hover:text-primary transition-colors">
              Events
            </Link>
            <Link to="/#schedule" className="text-sm font-medium hover:text-primary transition-colors">
              Schedule
            </Link>
            <Link to="/sponsors" className="text-sm font-medium hover:text-primary transition-colors">
              Sponsors
            </Link>
            <Link to="/security-guidelines" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <ShieldAlert className="w-4 h-4" /> Security
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {isAuthenticated ? (
              <>
                <Link
                  to="/sponsors"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Sponsors
                </Link>
                <Link
                  to="/security-guidelines"
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Security Guidelines
                </Link>
                {isAuthenticated ? (
                  <div className="px-3 py-2">
                    <LogoDropdown />
                  </div>
                ) : (
                  <Button onClick={() => navigate("/login")}>
                    Login
                  </Button>
                )}
              </>
            ) : (
              <Button onClick={() => navigate("/login")}>
                Login
              </Button>
            )}
          </div>

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