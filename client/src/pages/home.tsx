import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Briefcase,
  Rocket,
  Users,
  FileText,
  BookOpen,
  Stamp,
  Plane,
  Target,
  Shield,
  Handshake,
  CheckCircle2,
  ArrowRight,
  Star,
  Compass,
  HeartHandshake,
  Lock,
} from "lucide-react";
import type { Testimonial } from "@shared/schema";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const benefits = [
  {
    icon: Globe,
    title: "Global Exposure",
    items: [
      "Experience diverse cultures and perspectives",
      "Build international networks and friendships",
      "Develop cross-cultural communication skills",
    ],
  },
  {
    icon: GraduationCap,
    title: "World-Class Education",
    items: [
      "Access to cutting-edge research and facilities",
      "Learn from renowned faculty and industry experts",
      "Globally recognized degrees and certifications",
    ],
  },
  {
    icon: Briefcase,
    title: "Career Advancement",
    items: [
      "Enhanced employability in global job markets",
      "Exposure to international industries and practices",
      "Post-study work opportunities in leading economies",
    ],
  },
  {
    icon: Rocket,
    title: "Personal Growth",
    items: [
      "Independence and self-discovery",
      "Problem-solving and adaptability skills",
      "Confidence to succeed in competitive environments",
    ],
  },
];

const servicesList = [
  {
    icon: Compass,
    title: "Expert Career Counseling",
    desc: "In-depth profile evaluation, personalized academic pathway planning, and one-on-one sessions with experienced consultants.",
  },
  {
    icon: Target,
    title: "University Selection & Shortlisting",
    desc: "Customized university recommendations, profile-matched institutional selection, and application strategy development.",
  },
  {
    icon: FileText,
    title: "Application Management",
    desc: "Complete documentation support, SOP guidance, LOR coordination, and application submission with quality assurance.",
  },
  {
    icon: BookOpen,
    title: "Test Preparation",
    desc: "IELTS, TOEFL, PTE, GRE, GMAT, SAT coaching with experienced instructors and comprehensive study materials.",
  },
  {
    icon: Stamp,
    title: "Visa Consultation & Assistance",
    desc: "Country-specific visa guidance, interview preparation, embassy liaison, and expert financial documentation advice.",
  },
  {
    icon: Plane,
    title: "Pre-Departure & Settlement",
    desc: "Travel guidance, forex assistance, cultural orientation, airport coordination, and post-arrival support.",
  },
];

const destinations = [
  { name: "United States", slug: "usa", image: "/images/dest-usa.png" },
  { name: "United Kingdom", slug: "uk", image: "/images/dest-uk.png" },
  { name: "Canada", slug: "canada", image: "/images/dest-canada.png" },
  { name: "Australia", slug: "australia", image: "/images/dest-australia.png" },
  { name: "Germany", slug: "germany", image: "/images/dest-germany.png" },
  { name: "Ireland", slug: "ireland", image: "/images/dest-ireland.png" },
  { name: "New Zealand", slug: "new-zealand", image: "/images/dest-nz.png" },
  { name: "Singapore", slug: "singapore", image: "/images/dest-singapore.png" },
];

const steps = [
  { num: "01", title: "Free Consultation", desc: "Comprehensive profile evaluation and initial recommendations" },
  { num: "02", title: "Strategic Planning", desc: "Detailed course shortlisting and application timeline" },
  { num: "03", title: "Test Preparation", desc: "Enrollment in required test prep programs" },
  { num: "04", title: "Application Process", desc: "Professional SOP, LOR development and submission" },
  { num: "05", title: "Admission Success", desc: "Offer letters, scholarship support, and acceptance" },
  { num: "06", title: "Visa Processing", desc: "Complete visa documentation and interview prep" },
  { num: "07", title: "Pre-Departure", desc: "Orientation, accommodation, and travel arrangements" },
];

const differentiators = [
  { icon: Target, title: "Personalized Approach", desc: "Every student receives individual attention with customized guidance and a dedicated counselor." },
  { icon: BookOpen, title: "Expert Knowledge", desc: "Certified education consultants with in-depth understanding of global education systems." },
  { icon: HeartHandshake, title: "End-to-End Support", desc: "Comprehensive services from counseling to landing with post-arrival assistance." },
  { icon: Globe, title: "Global Partnerships", desc: "Direct relationships with universities worldwide and exclusive admission channels." },
  { icon: Shield, title: "Transparent Process", desc: "Clear communication, honest assessments, and ethical student-first practices." },
  { icon: Lock, title: "Reliable Guidance", desc: "Proven methodologies, quality documentation, and meticulous attention to detail." },
];

export default function Home() {
  useSEO({
    title: "Keystone Global - Your Gateway to World-Class Education",
    description: "Expert guidance for students aspiring to study at prestigious universities worldwide. Book a free consultation today.",
  });

  const { data: testimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src="/images/hero-campus.png"
            alt="University campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-2xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              data-testid="text-hero-title"
            >
              Your Gateway to{" "}
              <span className="text-chart-2">World-Class</span>{" "}
              Education
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed"
            >
              Expert guidance for students aspiring to study at prestigious universities worldwide. Building bridges to your global future.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link href="/contact">
                <Button size="lg" data-testid="button-hero-consultation">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Book Free Consultation
                </Button>
              </Link>
              <Link href="/destinations">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white/30" data-testid="button-hero-destinations">
                  Explore Destinations
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Overseas Education */}
      <section className="py-20 bg-background" data-testid="section-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Why Choose Overseas Education?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Studying abroad opens doors to unparalleled opportunities for academic excellence, career growth, and personal development.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {benefits.map((b) => (
              <motion.div key={b.title} variants={fadeUp}>
                <Card className="h-full hover-elevate" data-testid={`card-benefit-${b.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <b.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{b.title}</h3>
                    <ul className="space-y-2">
                      {b.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-card" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Our Comprehensive Services
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              From your first consultation to settling in your new home, we provide end-to-end support for your study abroad journey.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {servicesList.map((s) => (
              <motion.div key={s.title} variants={fadeUp}>
                <Card className="h-full hover-elevate" data-testid={`card-service-${s.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-md bg-chart-2/10 flex items-center justify-center mb-4">
                      <s.icon className="w-5 h-5 text-chart-2" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
          <div className="text-center mt-10">
            <Link href="/services">
              <Button variant="outline" data-testid="button-view-services">
                View All Services <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="py-20 bg-background" data-testid="section-destinations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Study Destinations We Cover
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Explore top study destinations around the world with our expert guidance for each country.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {destinations.map((d) => (
              <motion.div key={d.slug} variants={fadeUp}>
                <Link href={`/destinations/${d.slug}`}>
                  <Card className="overflow-visible group cursor-pointer hover-elevate" data-testid={`card-dest-${d.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md">
                      <img
                        src={d.image}
                        alt={`Study in ${d.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="text-sm font-semibold text-foreground">{d.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Steps */}
      <section className="py-20 bg-primary text-primary-foreground" data-testid="section-journey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Your Journey With Us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 max-w-2xl mx-auto">
              A clear, step-by-step process designed to make your study abroad journey smooth and successful.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {steps.slice(0, 4).map((s) => (
              <motion.div key={s.num} variants={fadeUp}>
                <div className="bg-white/10 rounded-md p-5 h-full backdrop-blur-sm" data-testid={`step-${s.num}`}>
                  <span className="text-2xl font-bold text-chart-2 mb-2 block">{s.num}</span>
                  <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-white/60">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-3 gap-5 mt-5"
          >
            {steps.slice(4).map((s) => (
              <motion.div key={s.num} variants={fadeUp}>
                <div className="bg-white/10 rounded-md p-5 h-full backdrop-blur-sm" data-testid={`step-${s.num}`}>
                  <span className="text-2xl font-bold text-chart-2 mb-2 block">{s.num}</span>
                  <h3 className="text-base font-semibold text-white mb-1.5">{s.title}</h3>
                  <p className="text-sm text-white/60">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-20 bg-background" data-testid="section-differentiators">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-14"
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              What Sets Keystone Global Apart
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              We don't just process applications - we build futures with integrity, expertise, and genuine care.
            </motion.p>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {differentiators.map((d) => (
              <motion.div key={d.title} variants={fadeUp}>
                <Card className="h-full" data-testid={`card-diff-${d.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-6">
                    <d.icon className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-base font-semibold text-foreground mb-2">{d.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      {testimonials && testimonials.length > 0 && (
        <section className="py-20 bg-card" data-testid="section-testimonials">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={stagger}
              className="text-center mb-14"
            >
              <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Student Success Stories
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
                Hear from students who turned their dreams into reality with Keystone Global.
              </motion.p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {testimonials.map((t) => (
                <motion.div key={t.id} variants={fadeUp}>
                  <Card className="h-full" data-testid={`card-testimonial-${t.id}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarImage src={t.imageUrl || ""} alt={t.name} />
                          <AvatarFallback>{t.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-sm text-foreground" data-testid={`text-testimonial-name-${t.id}`}>{t.name}</p>
                          <p className="text-xs text-muted-foreground">{t.course}</p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 mb-3">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} className="w-3.5 h-3.5 fill-chart-2 text-chart-2" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
                      <div className="mt-4 pt-3 border-t">
                        <p className="text-xs text-muted-foreground">
                          {t.university} &middot; {t.country}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-20 bg-primary" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Begin Your Global Education Journey?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-white/70 mb-8 text-lg">
              Take the first step toward your dream university. Schedule your free consultation today.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" variant="secondary" data-testid="button-cta-schedule">
                  Schedule Free Consultation
                </Button>
              </Link>
              <Link href="/destinations">
                <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30" data-testid="button-cta-destinations">
                  Explore Destinations
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
