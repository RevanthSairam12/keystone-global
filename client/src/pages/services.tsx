import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Compass,
  Target,
  FileText,
  BookOpen,
  Stamp,
  Plane,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  Users,
  Globe,
  FileCheck,
  Award,
  Clock,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const services = [
  {
    id: "career-counseling",
    icon: Compass,
    title: "Career Counseling & Profile Evaluation",
    desc: "Choosing the right course and country is crucial for your academic and professional future. Our expert counselors help you make informed decisions.",
    features: [
      "Detailed profile assessment based on academic background",
      "Understanding your career goals and aspirations",
      "Personality and aptitude evaluation",
      "Course recommendations aligned with your interests",
      "Country suitability analysis",
      "Career pathway mapping for long-term success",
    ],
    approach: [
      "One-on-one consultation sessions",
      "Comprehensive questionnaires and assessments",
      "Discussion of academic strengths and interests",
      "Analysis of career opportunities in different fields",
      "Realistic goal setting and expectation management",
    ],
  },
  {
    id: "university-selection",
    icon: Target,
    title: "University Selection & Application Strategy",
    desc: "Get customized university recommendations based on your unique profile with access to 500+ partner universities worldwide.",
    features: [
      "Customized university shortlisting based on your profile",
      "Access to 500+ partner universities worldwide",
      "Detailed information on courses, duration, and structure",
      "Application requirements for each institution",
      "Strategic application planning for multiple universities",
      "Timeline management and deadline tracking",
    ],
    approach: [
      "Research on universities matching your criteria",
      "Comparison of programs, locations, and opportunities",
      "Recommendation on safety, moderate, and reach universities",
      "Understanding admission requirements and eligibility",
      "Strategic submission planning",
    ],
  },
  {
    id: "application-support",
    icon: FileText,
    title: "Application Management & Documentation",
    desc: "Complete application process management with professional document preparation and verification at every step.",
    features: [
      "Complete documentation support and verification",
      "Statement of Purpose (SOP) guidance and review",
      "Letters of Recommendation (LOR) coordination",
      "Resume/CV development for applications",
      "Application form completion support",
      "Submission and tracking until confirmation",
    ],
    approach: [
      "Multiple verification checks before submission",
      "Compliance with university-specific requirements",
      "Professional formatting and presentation",
      "Timely submission management",
      "Communication with university admission offices",
    ],
  },
  {
    id: "test-preparation",
    icon: BookOpen,
    title: "Test Preparation Programs",
    desc: "Comprehensive test preparation with experienced instructors, proven methodologies, and regular mock exams for score improvement.",
    features: [
      "IELTS, TOEFL, PTE, Duolingo language proficiency",
      "GRE, GMAT graduate admission tests",
      "SAT, ACT undergraduate tests",
      "Experienced instructors with high scores",
      "Comprehensive study materials included",
      "Regular mock tests and performance analysis",
    ],
    approach: [
      "Small batch sizes for personalized attention",
      "Proven teaching methodologies for score improvement",
      "Flexible batch timings",
      "Individual doubt-clearing sessions",
      "Score improvement tracking and exam registration",
    ],
  },
  {
    id: "visa-assistance",
    icon: Stamp,
    title: "Visa Consultation & Processing",
    desc: "Expert visa guidance with country-specific documentation, interview preparation, and embassy liaison services.",
    features: [
      "Country-specific visa guidance and requirements",
      "Complete documentation checklist",
      "Document preparation and verification",
      "Embassy appointment booking assistance",
      "Interview preparation and mock sessions",
      "Financial documentation guidance",
    ],
    approach: [
      "USA F-1, UK Tier 4, Canada Study Permit expertise",
      "Australia Subclass 500, Germany, Ireland visa support",
      "New Zealand and Singapore student visa/pass guidance",
      "Common visa interview questions and preparation",
      "Confidence building and document presentation",
      "Post-interview follow-up",
    ],
  },
  {
    id: "pre-departure",
    icon: Plane,
    title: "Pre-Departure & Post-Arrival Support",
    desc: "Comprehensive support to help you prepare for your journey abroad and settle comfortably in your new academic home.",
    features: [
      "Comprehensive orientation sessions on life abroad",
      "Flight booking assistance and travel insurance",
      "University housing and accommodation support",
      "Forex services and banking guidance",
      "International SIM card and essential preparations",
      "Airport pickup coordination and settlement help",
    ],
    approach: [
      "Cultural orientation and academic expectations",
      "Packing checklist and luggage guidelines",
      "Rental agreement review and roommate matching",
      "Education loan documentation support",
      "Connect with alumni network and student communities",
      "Part-time work and visa extension guidance",
    ],
  },
];

const scholarshipTypes = [
  "University merit scholarships",
  "Country-specific scholarships",
  "Subject-specific funding",
  "Diversity and inclusion scholarships",
  "Sports and extracurricular scholarships",
  "Research assistantships and fellowships",
];

export default function Services() {
  useSEO({
    title: "Our Services - Keystone Global | Comprehensive Study Abroad Support",
    description: "Career counseling, university selection, test preparation, visa assistance, and end-to-end support for your study abroad journey.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary" data-testid="section-services-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-services-title">
              Our Services
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
              Comprehensive overseas education services designed to support you at every stage of your study abroad journey. From initial counseling to post-arrival assistance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-20 bg-background" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              data-testid={`section-service-${service.id}`}
              style={{ scrollMarginTop: "100px" }}
            >
              <Card>
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                          <service.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-1">
                            Service {String(index + 1).padStart(2, "0")}
                          </Badge>
                          <h2 className="text-xl font-bold text-foreground">{service.title}</h2>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">{service.desc}</p>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">What We Offer</h3>
                      <ul className="space-y-2">
                        {service.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-chart-2 mt-0.5 shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Our Approach</h3>
                      <ul className="space-y-2">
                        {service.approach.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-chart-5 mt-0.5 shrink-0" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-20 bg-card" data-testid="section-scholarships">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <motion.div variants={fadeUp}>
                  <Badge variant="secondary" className="mb-4">
                    <Award className="w-3 h-3 mr-1" /> Additional Service
                  </Badge>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-4">
                  Scholarship & Financial Aid Guidance
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground mb-6 leading-relaxed">
                  We help identify scholarship opportunities, prepare applications, and maximize your chances of receiving financial support for your education.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link href="/contact">
                    <Button data-testid="button-scholarship-consult">
                      Get Scholarship Guidance <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </motion.div>
              </div>
              <motion.div variants={fadeUp}>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Types of Scholarships</h3>
                    <ul className="space-y-3">
                      {scholarshipTypes.map((s) => (
                        <li key={s} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                          <GraduationCap className="w-4 h-4 text-chart-2 shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" data-testid="section-services-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Schedule your free consultation and let us create a personalized plan for your study abroad journey.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-services-cta">
              Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
