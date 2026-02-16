import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  MessageCircle,
  Users,
  GraduationCap,
  Target,
  BookOpen,
  HelpCircle,
  FileText,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const faqs = [
  { q: "Is the consultation really free?", a: "Yes, absolutely. Our initial consultation is completely free with no obligation." },
  { q: "How long does a consultation take?", a: "Typically 30-45 minutes, but we take as much time as needed to address your questions." },
  { q: "Can my parents join the consultation?", a: "Absolutely! We encourage parent participation in the consultation process." },
  { q: "Do I need to bring any documents?", a: "For the first consultation, just bring your academic transcripts if available. We'll guide you on other documents later." },
  { q: "Can I visit without an appointment?", a: "While walk-ins are welcome, we recommend scheduling an appointment to ensure dedicated time with our counselors." },
];

const whyConsult = [
  { icon: Target, title: "Personalized Guidance", desc: "Expert advice tailored to your academic profile and career goals" },
  { icon: GraduationCap, title: "Free & No Obligation", desc: "Complimentary session with no pressure or commitment" },
  { icon: Users, title: "Expert Counselors", desc: "Certified consultants who understand global admissions" },
  { icon: BookOpen, title: "Clear Roadmap", desc: "Customized plan for your study abroad journey" },
];

export default function Contact() {
  useSEO({
    title: "Contact Us - Keystone Global | Book Free Consultation",
    description: "Schedule your free consultation with Keystone Global. Get expert guidance for studying abroad from our certified education consultants.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary" data-testid="section-contact-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-contact-title">
              Get in Touch
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
              Schedule your free consultation and take the first step toward your global education journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-background" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left sidebar - contact info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-5">
                  <h3 className="text-base font-semibold text-foreground">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Our Office</p>
                        <p className="text-xs text-muted-foreground">Hyderabad, Telangana, India</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Email Us</p>
                        <p className="text-xs text-muted-foreground">info@keystoneglobal.com</p>
                        <p className="text-xs text-muted-foreground">admissions@keystoneglobal.com</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Call Us</p>
                        <p className="text-xs text-muted-foreground">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <MessageCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">WhatsApp</p>
                        <p className="text-xs text-muted-foreground">+91 XXXXX XXXXX</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                        <Clock className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-foreground">Office Hours</p>
                        <p className="text-xs text-muted-foreground">Mon - Sat: 10 AM - 7 PM</p>
                        <p className="text-xs text-muted-foreground">Sunday: By Appointment</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-base font-semibold text-foreground mb-4">Why Schedule a Consultation?</h3>
                  <ul className="space-y-3">
                    {whyConsult.map((item) => (
                      <li key={item.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-md bg-chart-2/10 flex items-center justify-center shrink-0 mt-0.5">
                          <item.icon className="w-4 h-4 text-chart-2" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2">
              <Card>
                <CardContent className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-foreground" data-testid="text-form-title">Schedule Your Free Consultation</h2>
                      <p className="text-sm text-muted-foreground">Fill out the form below and we'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                  {/* Google Forms Embed - Replace the src URL below with your Google Form embed URL */}
                  <div className="w-full rounded-md overflow-hidden border" data-testid="google-form-container">
                    <div className="flex flex-col items-center justify-center py-20 px-6 bg-muted/30 text-center">
                      <FileText className="w-12 h-12 text-muted-foreground/40 mb-4" />
                      <p className="text-sm font-medium text-muted-foreground mb-2">Google Form will be embedded here</p>
                      <p className="text-xs text-muted-foreground/70 max-w-md">
                        To add your Google Form, open the contact page file and replace this placeholder with your Google Form embed iframe. Use the embed URL from Google Forms (Share &gt; Embed HTML).
                      </p>
                    </div>
                    {/*
                      Uncomment and replace YOUR_FORM_ID with your actual Google Form ID:
                      <iframe
                        src="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true"
                        width="100%"
                        height="800"
                        frameBorder="0"
                        marginHeight={0}
                        marginWidth={0}
                        title="Consultation Request Form"
                        data-testid="google-form-iframe"
                      >
                        Loading...
                      </iframe>
                    */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-card" data-testid="section-faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground mb-3">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions about our consultation process.</p>
          </div>
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible>
                {faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} data-testid={`faq-item-${i}`}>
                    <AccordionTrigger className="text-sm font-medium text-foreground text-left">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-muted-foreground">
                      {faq.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
