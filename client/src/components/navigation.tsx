import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  GraduationCap,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { name: "Career Counseling", href: "/services#career-counseling" },
  { name: "University Selection", href: "/services#university-selection" },
  { name: "Application Support", href: "/services#application-support" },
  { name: "Test Preparation", href: "/services#test-preparation" },
  { name: "Visa Assistance", href: "/services#visa-assistance" },
  { name: "Pre-Departure Support", href: "/services#pre-departure" },
  { name: "Work Rights Guide", href: "/work-rights" },
];

const destinations = [
  { name: "United States", href: "/destinations/usa" },
  { name: "United Kingdom", href: "/destinations/uk" },
  { name: "Canada", href: "/destinations/canada" },
  { name: "Australia", href: "/destinations/australia" },
  { name: "Germany", href: "/destinations/germany" },
  { name: "Ireland", href: "/destinations/ireland" },
  { name: "New Zealand", href: "/destinations/new-zealand" },
  { name: "Singapore", href: "/destinations/singapore" },
];

export default function Navigation() {
  const [location, navigate] = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [destinationsOpen, setDestinationsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileDestinationsOpen, setMobileDestinationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navigateToSection = useCallback((href: string) => {
    const [path, hash] = href.split("#");
    if (!hash) {
      navigate(path);
      return;
    }

    const scrollToHash = () => {
      const el = document.getElementById(hash);
      if (el) {
        const offset = 100; // account for fixed header
        const top = el.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (location === path) {
      // Already on the page, just scroll
      scrollToHash();
    } else {
      // Navigate first, then scroll after render
      navigate(path);
      setTimeout(scrollToHash, 300);
    }
  }, [location, navigate]);

  const isActive = (path: string) => location === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm"
          : "bg-transparent"
      }`}
      data-testid="navigation-header"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" data-testid="link-logo">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-9 h-9 rounded-md bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className={`text-lg font-bold leading-tight ${scrolled ? "text-foreground" : "text-white"}`}>
                  Keystone Global
                </span>
                <span className={`text-[10px] font-medium leading-tight tracking-wider uppercase ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
                  Study Abroad Consultants
                </span>
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-desktop">
            <Link href="/">
              <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                isActive("/")
                  ? scrolled ? "text-foreground bg-accent" : "text-white bg-white/15"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`} data-testid="nav-home">
                Home
              </span>
            </Link>

            <Link href="/about">
              <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                isActive("/about")
                  ? scrolled ? "text-foreground bg-accent" : "text-white bg-white/15"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`} data-testid="nav-about">
                About Us
              </span>
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services">
                <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors inline-flex items-center gap-1 ${
                  location.startsWith("/services")
                    ? scrolled ? "text-foreground bg-accent" : "text-white bg-white/15"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`} data-testid="nav-services">
                  Services <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </Link>
              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-56 bg-popover border border-popover-border rounded-md shadow-lg py-1"
                  >
                    {services.map((s) => (
                      <span
                        key={s.name}
                        onClick={() => { setServicesOpen(false); navigateToSection(s.href); }}
                        className="block px-4 py-2.5 text-sm text-popover-foreground hover-elevate cursor-pointer"
                        data-testid={`nav-service-${s.name.toLowerCase().replace(/\s/g, '-')}`}
                      >
                        {s.name}
                      </span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div
              className="relative"
              onMouseEnter={() => setDestinationsOpen(true)}
              onMouseLeave={() => setDestinationsOpen(false)}
            >
              <Link href="/destinations">
                <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors inline-flex items-center gap-1 ${
                  location.startsWith("/destinations")
                    ? scrolled ? "text-foreground bg-accent" : "text-white bg-white/15"
                    : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
                }`} data-testid="nav-destinations">
                  Destinations <ChevronDown className="w-3.5 h-3.5" />
                </span>
              </Link>
              <AnimatePresence>
                {destinationsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-1 w-52 bg-popover border border-popover-border rounded-md shadow-lg py-1"
                  >
                    {destinations.map((d) => (
                      <Link key={d.name} href={d.href}>
                        <span className="block px-4 py-2.5 text-sm text-popover-foreground hover-elevate cursor-pointer" data-testid={`nav-dest-${d.name.toLowerCase().replace(/\s/g, '-')}`}>
                          {d.name}
                        </span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/contact">
              <span className={`px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors ${
                isActive("/contact")
                  ? scrolled ? "text-foreground bg-accent" : "text-white bg-white/15"
                  : scrolled ? "text-muted-foreground hover:text-foreground" : "text-white/80 hover:text-white"
              }`} data-testid="nav-contact">
                Contact Us
              </span>
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button data-testid="button-book-consultation">
                <GraduationCap className="w-4 h-4 mr-2" />
                Book Free Consultation
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${scrolled ? "text-foreground" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b overflow-hidden"
            data-testid="nav-mobile-menu"
          >
            <div className="px-4 py-4 space-y-1">
              <Link href="/">
                <span className={`block px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${isActive("/") ? "bg-accent text-foreground" : "text-muted-foreground"}`}>
                  Home
                </span>
              </Link>
              <Link href="/about">
                <span className={`block px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${isActive("/about") ? "bg-accent text-foreground" : "text-muted-foreground"}`}>
                  About Us
                </span>
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {services.map((s) => (
                        <span
                          key={s.name}
                          onClick={() => { setMobileOpen(false); navigateToSection(s.href); }}
                          className="block px-6 py-2 text-sm text-muted-foreground cursor-pointer"
                        >
                          {s.name}
                        </span>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-muted-foreground"
                  onClick={() => setMobileDestinationsOpen(!mobileDestinationsOpen)}
                >
                  Destinations
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileDestinationsOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {mobileDestinationsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden"
                    >
                      {destinations.map((d) => (
                        <Link key={d.name} href={d.href}>
                          <span className="block px-6 py-2 text-sm text-muted-foreground cursor-pointer">
                            {d.name}
                          </span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link href="/contact">
                <span className={`block px-3 py-2.5 rounded-md text-sm font-medium cursor-pointer ${isActive("/contact") ? "bg-accent text-foreground" : "text-muted-foreground"}`}>
                  Contact Us
                </span>
              </Link>

              <div className="pt-3 px-3">
                <Link href="/contact">
                  <Button className="w-full">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    Book Free Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
