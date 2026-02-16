import { useLocation } from "wouter";
import { Globe, Mail, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiYoutube } from "react-icons/si";
import { useState, useEffect, useCallback } from "react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleFooterNav = useCallback((href: string) => {
    setLocation(href);
    window.scrollTo({ top: 0 });
  }, [setLocation]);

  return (
    <>
      <footer className="bg-primary text-primary-foreground" data-testid="footer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-md bg-white/20 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold text-white">Keystone Global</span>
              </div>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                Your trusted partner in international education. Building bridges to your global future since day one.
              </p>
              <div className="flex gap-3">
                <a href="https://instagram.com/keystoneglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate" data-testid="link-instagram">
                  <SiInstagram className="w-4 h-4" />
                </a>
                <a href="https://facebook.com/keystoneglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate" data-testid="link-facebook">
                  <SiFacebook className="w-4 h-4" />
                </a>
                <a href="https://linkedin.com/company/keystoneglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate" data-testid="link-linkedin">
                  <SiLinkedin className="w-4 h-4" />
                </a>
                <a href="https://youtube.com/keystoneglobal" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center hover-elevate" data-testid="link-youtube">
                  <SiYoutube className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Our Services", href: "/services" },
                  { name: "Destinations", href: "/destinations" },
                  { name: "Contact Us", href: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <span
                      onClick={() => handleFooterNav(link.href)}
                      className="text-sm text-white/60 hover:opacity-100 transition-opacity cursor-pointer"
                      data-testid={`footer-link-${link.name.toLowerCase().replace(/\s/g, '-')}`}
                    >{link.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Services</h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Career Counseling", href: "/services" },
                  { name: "University Selection", href: "/services" },
                  { name: "Test Preparation", href: "/services" },
                  { name: "Visa Assistance", href: "/services" },
                  { name: "Application Support", href: "/services" },
                  { name: "Pre-Departure Services", href: "/services" },
                  { name: "Work Rights Guide", href: "/work-rights" },
                ].map((item) => (
                  <li key={item.name}>
                    <span
                      onClick={() => handleFooterNav(item.href)}
                      className="text-sm text-white/60 hover:opacity-100 transition-opacity cursor-pointer"
                      data-testid={`footer-link-${item.name.toLowerCase().replace(/\s/g, '-')}`}
                    >{item.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Destinations</h4>
              <ul className="space-y-2.5">
                {[
                  { name: "Study in USA", href: "/destinations/usa" },
                  { name: "Study in UK", href: "/destinations/uk" },
                  { name: "Study in Canada", href: "/destinations/canada" },
                  { name: "Study in Australia", href: "/destinations/australia" },
                  { name: "Study in Germany", href: "/destinations/germany" },
                  { name: "Study in Ireland", href: "/destinations/ireland" },
                  { name: "Study in New Zealand", href: "/destinations/new-zealand" },
                  { name: "Study in Singapore", href: "/destinations/singapore" },
                ].map((d) => (
                  <li key={d.name}>
                    <span
                      onClick={() => handleFooterNav(d.href)}
                      className="text-sm text-white/60 hover:opacity-100 transition-opacity cursor-pointer"
                      data-testid={`footer-link-${d.name.toLowerCase().replace(/\s/g, '-')}`}
                    >{d.name}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact Info</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 mt-0.5 text-white/50 shrink-0" />
                  <span className="text-sm text-white/60">Hyderabad, Telangana, India</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-white/50 shrink-0" />
                  <span className="text-sm text-white/60">+91 XXXXX XXXXX</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-white/50 shrink-0" />
                  <span className="text-sm text-white/60">info@keystoneglobal.com</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-white/50 shrink-0" />
                  <span className="text-sm text-white/60">Mon-Sat: 10 AM - 7 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
              <span>&copy; 2026 Keystone Global. All Rights Reserved.</span>
              <span>Building Bridges to Your Global Future</span>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-10 h-10 rounded-md bg-primary text-primary-foreground flex items-center justify-center shadow-lg z-[9999] hover-elevate transition-opacity duration-300 ${showScrollTop ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        data-testid="button-scroll-top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>
    </>
  );
}
