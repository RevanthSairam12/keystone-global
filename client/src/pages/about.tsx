import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Heart,
  Award,
  Users,
  BookOpen,
  Handshake,
  CheckCircle2,
  GraduationCap,
  Shield,
  Target,
  Globe,
  FileCheck,
  Star,
  ArrowRight,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const values = [
  { icon: Heart, title: "Integrity", desc: "Honest, transparent guidance always in the student's best interest with ethical practices in all our processes." },
  { icon: Award, title: "Excellence", desc: "Highest standards in every service we provide with continuous improvement and attention to detail." },
  { icon: Users, title: "Student-Centricity", desc: "Every decision guided by what's best for the student with a personalized approach to each unique profile." },
  { icon: BookOpen, title: "Expertise", desc: "Deep knowledge of global education systems with continuous training on changing policies and requirements." },
  { icon: Handshake, title: "Partnership", desc: "Building lasting relationships with students, families, and universities worldwide." },
];

const whyChoose = [
  { icon: Target, title: "Personalized Guidance", items: ["Individual counseling sessions", "Dedicated counselor throughout", "Customized strategies aligned with goals", "Regular one-on-one consultations"] },
  { icon: Globe, title: "Comprehensive Services", items: ["End-to-end support from counseling to landing", "All services under one roof", "Coordinated multi-stage process", "Post-arrival assistance"] },
  { icon: GraduationCap, title: "Expert Team", items: ["Certified international education consultants", "Visa documentation specialists", "Experienced test prep instructors", "Country-specific experts"] },
  { icon: Handshake, title: "University Partnerships", items: ["Direct relationships globally", "Updated admission requirements", "Scholarship guidance", "Faster communication channels"] },
  { icon: Shield, title: "Transparent Process", items: ["Clear step-by-step explanation", "Realistic assessment and feedback", "No hidden requirements", "Open communication throughout"] },
  { icon: FileCheck, title: "Quality Assurance", items: ["Multiple verification checks", "Professional SOP/application review", "Compliance with standards", "Meticulous deadline attention"] },
];

const team = [
  { title: "Education Consultants", desc: "Certified counselors with expertise in international admissions and personalized guidance.", icon: GraduationCap },
  { title: "Visa Specialists", desc: "Expert documentation team with country-specific knowledge and high attention to detail.", icon: FileCheck },
  { title: "Test Prep Instructors", desc: "Qualified trainers for IELTS, TOEFL, GRE, GMAT with proven methodologies.", icon: BookOpen },
  { title: "Student Support Team", desc: "Dedicated team for pre and post-departure assistance, accommodation, and travel guidance.", icon: Users },
];

export default function About() {
  useSEO({
    title: "About Us - Keystone Global | Study Abroad Consultancy",
    description: "Learn about Keystone Global's mission, values, and expert team dedicated to helping students achieve their international education dreams.",
  });

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-primary" data-testid="section-about-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-about-title">
              About Keystone Global
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
              A professional overseas education consultancy based in Hyderabad, dedicated to empowering students with opportunities to pursue world-class education at prestigious universities across the globe.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background" data-testid="section-mission">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-5">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To guide and empower students in achieving their dreams of international education through expert counseling, transparent processes, ethical practices, and unwavering support from application to arrival and beyond.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-md bg-chart-2/10 flex items-center justify-center mb-5">
                    <Star className="w-6 h-6 text-chart-2" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Our Vision</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as a trusted partner in international education, known for our commitment to student success, professional excellence, and comprehensive support that transforms aspirations into achievements.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-card" data-testid="section-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Core Values</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every student we serve.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {values.map((v) => (
              <motion.div key={v.title} variants={fadeUp}>
                <Card className="h-full text-center" data-testid={`card-value-${v.title.toLowerCase()}`}>
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{v.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="py-20 bg-background" data-testid="section-founder">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="rounded-md overflow-hidden">
                <img src="/images/office.png" alt="Keystone Global Office" className="w-full h-auto" />
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-4">Founder's Message</motion.h2>
              <motion.div variants={fadeUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The decision to study abroad is one of the most significant investments you'll make in your future. At Keystone Global, we understand the dreams, aspirations, and sometimes anxieties that come with this decision.
                </p>
                <p>
                  Our commitment is simple: to provide you with expert, honest, and personalized guidance that makes your journey to international education smooth, successful, and rewarding.
                </p>
                <p>
                  Every student's journey is unique, and we pride ourselves on offering tailored solutions that align with your individual goals, academic background, and career aspirations.
                </p>
              </motion.div>
              <motion.p variants={fadeUp} className="mt-6 font-semibold text-foreground">
                &mdash; Founder & Managing Director, Keystone Global
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-card" data-testid="section-why-choose">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Why Students Choose Keystone Global</motion.h2>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChoose.map((item) => (
              <motion.div key={item.title} variants={fadeUp}>
                <Card className="h-full" data-testid={`card-why-${item.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-chart-2/10 flex items-center justify-center mb-4">
                      <item.icon className="w-5 h-5 text-chart-2" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-3">{item.title}</h3>
                    <ul className="space-y-2">
                      {item.items.map((i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-chart-5 mt-0.5 shrink-0" />
                          <span>{i}</span>
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

      {/* Team */}
      <section className="py-20 bg-background" data-testid="section-team">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-14">
            <motion.h2 variants={fadeUp} className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Our Expert Team</motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of professionals committed to your success.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <div className="rounded-md overflow-hidden max-w-4xl mx-auto">
              <img src="/images/team.png" alt="Keystone Global Team" className="w-full h-auto" />
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((t) => (
              <motion.div key={t.title} variants={fadeUp}>
                <Card className="h-full text-center" data-testid={`card-team-${t.title.toLowerCase().replace(/\s/g, '-')}`}>
                  <CardContent className="p-6">
                    <div className="w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <t.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-sm font-semibold text-foreground mb-2">{t.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary" data-testid="section-about-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Let's Build Your Global Future Together</h2>
          <p className="text-white/70 mb-8 text-lg">
            Your success is our success. Schedule a free consultation and take the first step.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-about-cta">
              Book Free Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
