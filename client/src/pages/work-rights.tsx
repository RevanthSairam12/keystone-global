import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Globe,
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  FileText,
  DollarSign,
  Clock,
  ArrowRight,
  Users,
  Languages,
  Heart,
  Building,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const benefits = [
  { icon: DollarSign, title: "Offset Living Expenses", desc: "Earn income to support accommodation, food, transport, and daily expenses in your host country." },
  { icon: Briefcase, title: "International Work Experience", desc: "Build real-world professional skills valued by employers worldwide on your resume." },
  { icon: Users, title: "Build Professional Network", desc: "Connect with industry professionals and peers that can open doors to future career opportunities." },
  { icon: Languages, title: "Improve Language Skills", desc: "Practice and strengthen language proficiency through workplace interactions and teamwork." },
  { icon: FileText, title: "Enhance Resume / CV", desc: "Demonstrate initiative, time management, and cross-cultural competency to future employers." },
  { icon: Heart, title: "Cultural Integration", desc: "Immerse yourself in the local culture, customs, and work environment of your host country." },
];

const countryWorkRights = [
  {
    country: "United States",
    slug: "usa",
    during: "Up to 20 hrs/week on-campus during sessions. Off-campus with CPT authorization. Full-time during breaks (40 hrs/week).",
    after: "OPT: 12 months. STEM OPT Extension: Additional 24 months. H-1B work visa pathway.",
    notes: "CPT must be integral to curriculum. Off-campus work requires authorization from USCIS.",
  },
  {
    country: "United Kingdom",
    slug: "uk",
    during: "Up to 20 hrs/week during term. Full-time during official holidays.",
    after: "Graduate Route visa: 2 years post-study. Skilled Worker visa pathway available.",
    notes: "Visa must state work is permitted. Cannot be self-employed or fill a permanent full-time position.",
  },
  {
    country: "Canada",
    slug: "canada",
    during: "Up to 20 hrs/week during sessions. Full-time during scheduled breaks.",
    after: "PGWP: Up to 3 years. Express Entry PR pathway. Provincial Nominee Programs.",
    notes: "Must have valid study permit with work authorization. SIN number required before starting work.",
  },
  {
    country: "Australia",
    slug: "australia",
    during: "Up to 48 hrs/fortnight during sessions. Unlimited during scheduled breaks.",
    after: "Post-Study Work Stream: 2-4 years depending on qualification level.",
    notes: "Must have a Tax File Number (TFN). Superannuation (retirement fund) contributions apply.",
  },
  {
    country: "Germany",
    slug: "germany",
    during: "Up to 120 full days or 240 half days per year.",
    after: "18-month job-seeker visa after graduation to find employment in your field.",
    notes: "Working more than the allowed days requires approval from the Federal Employment Agency.",
  },
  {
    country: "Ireland",
    slug: "ireland",
    during: "Up to 20 hrs/week during term. Up to 40 hrs/week during holidays.",
    after: "Stay Back Option: 1-2 years depending on program level.",
    notes: "Must have Stamp 2 immigration permission. PPS number required for employment.",
  },
  {
    country: "New Zealand",
    slug: "new-zealand",
    during: "Up to 20 hrs/week during sessions. Full-time during breaks.",
    after: "Post-Study Work Visa: 1-3 years depending on qualification and location.",
    notes: "IRD number required. Partners may also get work rights depending on your qualification level.",
  },
  {
    country: "Singapore",
    slug: "singapore",
    during: "Up to 16 hrs/week during term (approved institutions only). Full-time during official holidays.",
    after: "Long Term Visit Pass (LTVP) or Employment Pass for qualifying graduates.",
    notes: "Only students at approved institutions can work. Industrial attachment/internship allowed during studies.",
  },
];

const violations = [
  { icon: ShieldAlert, title: "Visa Cancellation", desc: "Your student visa may be revoked immediately if you exceed work hour limits or work without authorization." },
  { icon: AlertTriangle, title: "Deportation", desc: "Immigration authorities can deport students found violating work conditions, requiring you to leave the country." },
  { icon: FileText, title: "Ban on Future Applications", desc: "A record of work violations can result in bans on future visa applications to that country or others." },
  { icon: GraduationCap, title: "Academic Consequences", desc: "Your university may revoke enrollment or withhold your degree if work violations breach student agreements." },
];

const verificationSteps = [
  "Always check your current visa conditions and permitted work hours before accepting any job.",
  "Consult with your university's international student office for the latest guidance on work rights.",
  "Immigration rules can change — verify current regulations before traveling and periodically during your stay.",
  "Keep copies of your work authorization documents with you at all times while employed.",
  "Ensure your employer is aware of your visa restrictions and work hour limits.",
];

const taxPoints = [
  "International students must pay taxes on earnings in most countries — understand local tax laws.",
  "Tax refunds may be available depending on your income level and country — file your return annually.",
  "Keep accurate records of all employment, including payslips, contracts, and hours worked.",
  "Some countries require a tax identification number (TIN/TFN/SIN) before you can begin working.",
  "Consult a tax professional or your university's student services for tax filing assistance.",
];

export default function WorkRights() {
  useSEO({
    title: "Work While You Study - Know Your Rights | Keystone Global",
    description: "Understand part-time work rights, regulations, and benefits for international students. Country-specific work guidelines for USA, UK, Canada, Australia, and more.",
  });

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 bg-primary" data-testid="section-work-rights-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4">
                <Briefcase className="w-3 h-3 mr-1" /> Student Work Guidelines
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-5xl font-bold text-white mb-4 font-[Poppins]">
              Work While You Study
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
              Know Your Rights
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-work-rights-intro">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-muted-foreground">
              Most study destinations allow international students to work part-time during their studies, helping you gain valuable experience, build your network, and support your living expenses. However, each country has specific regulations that must be followed.
            </motion.p>
            <motion.p variants={fadeUp} className="text-lg leading-relaxed text-muted-foreground mt-4">
              This page outlines the work rights, limitations, and legal considerations for international students across our partner destinations. Understanding these rules is essential to maintaining your visa status and having a successful study abroad experience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30" data-testid="section-work-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold font-[Poppins] mb-3">
              Benefits of Part-Time Work
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Working while studying offers more than just financial support — it shapes your career and personal growth.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full" data-testid={`card-benefit-${i}`}>
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center mb-4">
                      <b.icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{b.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-country-work-rights">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold font-[Poppins] mb-3">
              Country-Specific Work Regulations
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Work hour limits and post-study work options vary by country. Review the details for your chosen destination.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-6">
            {countryWorkRights.map((c, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card data-testid={`card-country-work-${c.slug}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center">
                            <Globe className="w-5 h-5 text-primary" />
                          </div>
                          <h3 className="text-lg font-bold font-[Poppins]" data-testid={`text-country-name-${c.slug}`}>{c.country}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Clock className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-semibold">During Studies</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-work-during-${c.slug}`}>{c.during}</p>
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-2">
                              <Briefcase className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm font-semibold">After Graduation</span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-work-after-${c.slug}`}>{c.after}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-md">
                          <AlertTriangle className="w-4 h-4 text-muted-foreground mt-0.5 shrink-0" />
                          <p className="text-xs text-muted-foreground leading-relaxed">{c.notes}</p>
                        </div>
                      </div>
                      <div className="md:self-center shrink-0">
                        <Link href={`/destinations/${c.slug}`}>
                          <Button variant="outline" size="sm" data-testid={`button-view-${c.slug}`}>
                            View Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-destructive/5" data-testid="section-violations">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-12">
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-3">
              <ShieldAlert className="w-6 h-6 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold font-[Poppins]">
                Consequences of Violation
              </h2>
            </motion.div>
            <motion.p variants={fadeUp} className="text-muted-foreground max-w-2xl mx-auto">
              Violating work conditions is a serious matter. Understand the risks before accepting any employment.
            </motion.p>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {violations.map((v, i) => (
              <motion.div key={i} variants={fadeUp}>
                <Card className="h-full border-destructive/20" data-testid={`card-violation-${i}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md bg-destructive/10 flex items-center justify-center shrink-0">
                        <v.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{v.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20" data-testid="section-verification">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-[Poppins]">Verification Required</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Before starting any employment, always verify your work rights through official channels.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {verificationSteps.map((step, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3" data-testid={`text-verification-${i}`}>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                <DollarSign className="w-5 h-5 text-primary" />
                <h2 className="text-xl md:text-2xl font-bold font-[Poppins]">Tax Obligations</h2>
              </motion.div>
              <motion.p variants={fadeUp} className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Working in a foreign country comes with tax responsibilities. Stay informed and compliant.
              </motion.p>
              <motion.div variants={stagger} className="space-y-3">
                {taxPoints.map((point, i) => (
                  <motion.div key={i} variants={fadeUp} className="flex items-start gap-3" data-testid={`text-tax-${i}`}>
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">{i + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{point}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-muted/30" data-testid="section-work-rights-disclaimer">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <Card>
              <CardContent className="p-6 md:p-8">
                <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
                  <AlertTriangle className="w-5 h-5 text-muted-foreground" />
                  <h3 className="font-bold font-[Poppins]">Important Disclaimer</h3>
                </motion.div>
                <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mb-4">
                  Part-time work opportunities are subject to visa conditions and regulations of the host country. Students must comply with all restrictions to maintain valid visa status.
                </motion.p>
                <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mb-6">
                  Always verify current work regulations with official immigration sources and your university's international student office. Our counselors provide detailed guidance on work rights during your consultation.
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link href="/contact">
                    <Button data-testid="button-work-rights-consult">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Book Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
