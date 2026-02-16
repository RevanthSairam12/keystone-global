import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Globe,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
  FileText,
  Award,
  MapPin,
  BookOpen,
} from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

interface CountryData {
  name: string;
  slug: string;
  image: string;
  heroDesc: string;
  benefits: { icon: typeof GraduationCap; title: string; desc: string }[];
  ugCourses: string[];
  pgCourses: string[];
  workDuring: string[];
  workAfter: string[];
  intakes: string[];
  tests: string[];
  visaName: string;
  visaDocs: string[];
  cities: { name: string; highlights: string[] }[];
}

const countriesData: Record<string, CountryData> = {
  usa: {
    name: "United States",
    slug: "usa",
    image: "/images/dest-usa.png",
    heroDesc: "Home to many of the world's top-ranked universities including Ivy League institutions. Access cutting-edge research facilities and innovative teaching methodologies.",
    benefits: [
      { icon: GraduationCap, title: "Academic Excellence", desc: "Top-ranked universities, Ivy League institutions, renowned faculty, and innovative teaching." },
      { icon: Briefcase, title: "Career Opportunities", desc: "OPT for 12 months, STEM OPT extension for 24 months, pathway to H-1B work visa." },
      { icon: Globe, title: "Cultural Diversity", desc: "Students from 195+ countries, multicultural environment, global perspectives." },
      { icon: FlaskConical, title: "Innovation & Research", desc: "World-class research centers, startups, and industry partnerships." },
    ],
    ugCourses: ["Computer Science & IT", "Business Administration", "Engineering", "Biological Sciences", "Psychology", "Communications & Media"],
    pgCourses: ["MBA", "MS Computer Science/Data Science", "MS Engineering", "Master of Public Health", "MS Finance & Accounting"],
    workDuring: ["Part-time: Up to 20 hours/week during sessions", "Full-time during breaks: 40 hours/week", "On-campus jobs available", "Off-campus with CPT authorization"],
    workAfter: ["OPT: 12 months for all graduates", "STEM OPT Extension: Additional 24 months", "CPT during studies as part of curriculum", "Pathway to H-1B work visa"],
    intakes: ["Fall (Aug/Sep) - Main intake", "Spring (Jan/Feb) - Limited", "Summer (May/Jun) - Very limited"],
    tests: ["TOEFL / IELTS / PTE / Duolingo", "GRE (graduate) / GMAT (business)", "SAT / ACT (undergraduate)"],
    visaName: "F-1 Student Visa",
    visaDocs: ["Valid passport", "Form I-20", "DS-160 confirmation", "SEVIS fee receipt", "Financial documents", "Academic documents"],
    cities: [
      { name: "Boston", highlights: ["Harvard, MIT, Boston University", "Strong tech & healthcare market"] },
      { name: "New York", highlights: ["Columbia, NYU, Cornell Tech", "Global financial hub"] },
      { name: "San Francisco", highlights: ["Stanford, UC Berkeley", "Heart of Silicon Valley"] },
      { name: "Los Angeles", highlights: ["UCLA, USC, Caltech", "Entertainment industry"] },
    ],
  },
  uk: {
    name: "United Kingdom",
    slug: "uk",
    image: "/images/dest-uk.png",
    heroDesc: "World-renowned universities with shorter program durations, rich academic heritage, and the Graduate Route visa for post-study work opportunities.",
    benefits: [
      { icon: GraduationCap, title: "Quality Education", desc: "Oxford, Cambridge, and Russell Group universities with centuries of academic tradition." },
      { icon: Briefcase, title: "Career Prospects", desc: "Graduate Route visa allows 2 years of post-study work in the UK." },
      { icon: Globe, title: "Shorter Duration", desc: "1-year master's programs saving time and money compared to other countries." },
      { icon: FlaskConical, title: "Research Excellence", desc: "Leading research universities with world-class facilities and innovation." },
    ],
    ugCourses: ["Business & Management", "Engineering", "Computer Science", "Law", "Medicine", "Arts & Design"],
    pgCourses: ["MBA", "MSc Data Science", "LLM", "MA International Relations", "MSc Finance"],
    workDuring: ["Part-time: Up to 20 hours/week", "Full-time during holidays"],
    workAfter: ["Graduate Route visa: 2 years post-study", "Skilled Worker visa pathway"],
    intakes: ["September - Main intake", "January - Second intake", "May - Limited programs"],
    tests: ["IELTS (preferred)", "TOEFL accepted", "PTE Academic"],
    visaName: "Student Visa (Tier 4)",
    visaDocs: ["CAS from university", "Valid passport", "Financial evidence", "TB test (if required)", "IHS payment", "English proficiency proof"],
    cities: [
      { name: "London", highlights: ["UCL, Imperial, King's College", "Global business center"] },
      { name: "Oxford", highlights: ["University of Oxford", "Historic academic city"] },
      { name: "Manchester", highlights: ["University of Manchester", "Vibrant student city"] },
      { name: "Edinburgh", highlights: ["University of Edinburgh", "Beautiful Scottish capital"] },
    ],
  },
  canada: {
    name: "Canada",
    slug: "canada",
    image: "/images/dest-canada.png",
    heroDesc: "An immigrant-friendly country offering world-class education, excellent quality of life, and clear pathways to permanent residency.",
    benefits: [
      { icon: GraduationCap, title: "Quality Education", desc: "Top universities like UofT, McGill, UBC with globally recognized degrees." },
      { icon: Briefcase, title: "PR Pathways", desc: "Post-Graduation Work Permit and clear immigration pathways to permanent residency." },
      { icon: Globe, title: "Multicultural Society", desc: "One of the most welcoming and diverse countries for international students." },
      { icon: FlaskConical, title: "Innovation Hub", desc: "Growing tech sector in Toronto, Vancouver, and Montreal." },
    ],
    ugCourses: ["Computer Science", "Business", "Engineering", "Health Sciences", "Environmental Science", "Arts & Humanities"],
    pgCourses: ["MBA", "MS Computer Science", "MEng", "Master of Public Policy", "MSc Data Analytics"],
    workDuring: ["Part-time: Up to 20 hours/week", "Full-time during breaks"],
    workAfter: ["PGWP: Up to 3 years", "Express Entry PR pathway", "Provincial Nominee Programs"],
    intakes: ["Fall (September) - Main", "Winter (January)", "Summer (May) - Limited"],
    tests: ["IELTS", "TOEFL", "PTE Academic"],
    visaName: "Study Permit",
    visaDocs: ["Letter of Acceptance", "Valid passport", "Financial proof", "GIC certificate", "Medical exam", "Biometrics"],
    cities: [
      { name: "Toronto", highlights: ["UofT, York, Ryerson", "Canada's largest city"] },
      { name: "Vancouver", highlights: ["UBC, SFU", "Beautiful Pacific coast"] },
      { name: "Montreal", highlights: ["McGill, Concordia", "Bilingual cultural hub"] },
      { name: "Ottawa", highlights: ["University of Ottawa, Carleton", "Canada's capital"] },
    ],
  },
  australia: {
    name: "Australia",
    slug: "australia",
    image: "/images/dest-australia.png",
    heroDesc: "World-class institutions, excellent lifestyle, strong work opportunities, and a welcoming multicultural environment for international students.",
    benefits: [
      { icon: GraduationCap, title: "Quality Institutions", desc: "Group of Eight universities, globally ranked, research-intensive." },
      { icon: Briefcase, title: "Work Opportunities", desc: "Post-Study Work Stream visa for 2-4 years depending on qualification." },
      { icon: Globe, title: "Lifestyle", desc: "High quality of life, beautiful landscapes, and vibrant cities." },
      { icon: FlaskConical, title: "Research Focus", desc: "Strong research output and innovation across multiple fields." },
    ],
    ugCourses: ["Business", "IT & Computer Science", "Engineering", "Health Sciences", "Environmental Science", "Creative Arts"],
    pgCourses: ["MBA", "Master of IT", "MEng", "Master of Public Health", "MSc Biotechnology"],
    workDuring: ["Part-time: Up to 48 hours/fortnight", "Full-time during breaks"],
    workAfter: ["Post-Study Work Stream: 2-4 years", "Skilled Migration pathway"],
    intakes: ["February - Main intake", "July - Second intake"],
    tests: ["IELTS", "PTE Academic (popular)", "TOEFL"],
    visaName: "Student Visa (Subclass 500)",
    visaDocs: ["eCoE", "GTE statement", "OSHC insurance", "Financial evidence", "English proficiency", "Valid passport"],
    cities: [
      { name: "Sydney", highlights: ["UNSW, University of Sydney", "Iconic harbor city"] },
      { name: "Melbourne", highlights: ["University of Melbourne, Monash", "Cultural capital"] },
      { name: "Brisbane", highlights: ["UQ, QUT", "Subtropical climate"] },
      { name: "Perth", highlights: ["UWA, Curtin", "Growing economy"] },
    ],
  },
  germany: {
    name: "Germany",
    slug: "germany",
    image: "/images/dest-germany.png",
    heroDesc: "Low to no tuition fees at public universities, engineering excellence, strong research focus, and an 18-month job seeker visa post-graduation.",
    benefits: [
      { icon: GraduationCap, title: "Low/No Tuition", desc: "Most public universities charge minimal or no tuition fees." },
      { icon: Briefcase, title: "Job Seeker Visa", desc: "18-month post-study job seeker visa for graduates." },
      { icon: Globe, title: "Engineering Hub", desc: "World-renowned for engineering, automotive, and manufacturing." },
      { icon: FlaskConical, title: "Research Excellence", desc: "Leading research institutions like Max Planck and Fraunhofer." },
    ],
    ugCourses: ["Engineering", "Computer Science", "Business", "Natural Sciences", "Mathematics", "Social Sciences"],
    pgCourses: ["MSc Engineering", "MBA", "MS Computer Science", "MA Economics", "MSc Data Science"],
    workDuring: ["Part-time: 120 full days or 240 half days/year"],
    workAfter: ["18-month job seeker visa", "EU Blue Card pathway"],
    intakes: ["Winter semester (October)", "Summer semester (April)"],
    tests: ["IELTS / TOEFL for English programs", "TestDaF / Goethe for German programs"],
    visaName: "Student Visa / Residence Permit",
    visaDocs: ["University admission letter", "Blocked account (Sperrkonto)", "Health insurance", "Language certificates", "Valid passport"],
    cities: [
      { name: "Munich", highlights: ["TU Munich, LMU", "Bavarian capital"] },
      { name: "Berlin", highlights: ["TU Berlin, HU Berlin", "Vibrant startup scene"] },
      { name: "Stuttgart", highlights: ["University of Stuttgart", "Automotive hub"] },
      { name: "Hamburg", highlights: ["University of Hamburg", "Port city"] },
    ],
  },
  ireland: {
    name: "Ireland",
    slug: "ireland",
    image: "/images/dest-ireland.png",
    heroDesc: "An English-speaking European tech hub with friendly culture, beautiful landscapes, and excellent post-study work opportunities.",
    benefits: [
      { icon: GraduationCap, title: "Quality Education", desc: "Trinity College, UCD, and other top-ranked institutions." },
      { icon: Briefcase, title: "Tech Hub", desc: "European headquarters of Google, Facebook, Apple, and more." },
      { icon: Globe, title: "English Speaking", desc: "No language barrier with a welcoming, friendly culture." },
      { icon: FlaskConical, title: "Post-Study Work", desc: "Third Level Graduate Scheme for 1-2 years." },
    ],
    ugCourses: ["Computer Science", "Business", "Engineering", "Pharmacy", "Arts & Humanities", "Science"],
    pgCourses: ["MSc Computer Science", "MBA", "MSc Data Analytics", "MA International Relations", "MSc Finance"],
    workDuring: ["Part-time: 20 hours/week during term", "Full-time during holidays: 40 hours"],
    workAfter: ["Third Level Graduate Scheme: 1-2 years", "Critical Skills Employment Permit"],
    intakes: ["September - Main intake", "January - Some programs"],
    tests: ["IELTS", "TOEFL", "PTE Academic"],
    visaName: "Student Visa",
    visaDocs: ["Letter of offer", "Financial evidence", "English proficiency", "Medical insurance", "Immigration letter", "Valid passport"],
    cities: [
      { name: "Dublin", highlights: ["Trinity College, UCD", "Tech hub, vibrant city"] },
      { name: "Cork", highlights: ["UCC", "Ireland's second city"] },
      { name: "Galway", highlights: ["NUI Galway", "Cultural city on west coast"] },
    ],
  },
  "new-zealand": {
    name: "New Zealand",
    slug: "new-zealand",
    image: "/images/dest-nz.png",
    heroDesc: "A safe, beautiful country offering quality education, excellent work opportunities, and a balanced lifestyle for international students.",
    benefits: [
      { icon: GraduationCap, title: "Quality Education", desc: "All 8 universities ranked in top 3% globally." },
      { icon: Briefcase, title: "Work Rights", desc: "Post-Study Work Visa for up to 3 years." },
      { icon: Globe, title: "Safe Environment", desc: "One of the safest and most peaceful countries in the world." },
      { icon: FlaskConical, title: "Innovation", desc: "Strong focus on sustainability and environmental research." },
    ],
    ugCourses: ["Agriculture & Forestry", "Environmental Science", "Business", "IT", "Engineering", "Tourism & Hospitality"],
    pgCourses: ["MBA", "MSc Environmental Science", "Master of IT", "MEng", "Master of Public Health"],
    workDuring: ["Part-time: 20 hours/week during term", "Full-time during holidays"],
    workAfter: ["Post-Study Work Visa: Up to 3 years", "Skilled Migrant Category"],
    intakes: ["February - Main intake", "July - Second intake"],
    tests: ["IELTS", "TOEFL", "PTE Academic"],
    visaName: "Student Visa",
    visaDocs: ["Offer of Place", "Financial evidence", "Medical certificate", "Character certificate", "Valid passport"],
    cities: [
      { name: "Auckland", highlights: ["University of Auckland", "Largest city"] },
      { name: "Wellington", highlights: ["Victoria University", "Capital city"] },
      { name: "Christchurch", highlights: ["University of Canterbury", "Garden city"] },
    ],
  },
  singapore: {
    name: "Singapore",
    slug: "singapore",
    image: "/images/dest-singapore.png",
    heroDesc: "Asia's premier education hub with world-class universities, strategic location, and excellent career opportunities in a global city-state.",
    benefits: [
      { icon: GraduationCap, title: "Top Universities", desc: "NUS and NTU consistently ranked among Asia's top universities." },
      { icon: Briefcase, title: "Career Hub", desc: "Gateway to Asian markets with strong financial and tech sectors." },
      { icon: Globe, title: "Strategic Location", desc: "Multicultural city-state at the heart of Southeast Asia." },
      { icon: FlaskConical, title: "Innovation Center", desc: "Strong R&D ecosystem with government support for startups." },
    ],
    ugCourses: ["Business & Finance", "Computer Science", "Engineering", "Biomedical Sciences", "Law", "Design"],
    pgCourses: ["MBA", "MSc Finance", "MS Computer Science", "MEng", "Master of Public Policy"],
    workDuring: ["Part-time: Up to 16 hours/week during term", "Full-time during holidays"],
    workAfter: ["Employment Pass for graduates", "S Pass pathway"],
    intakes: ["August - Main intake", "January - Some programs"],
    tests: ["IELTS", "TOEFL"],
    visaName: "Student's Pass",
    visaDocs: ["IPA letter", "e-Form 16", "Medical examination", "Valid passport", "Academic documents"],
    cities: [
      { name: "Singapore City", highlights: ["NUS, NTU, SMU", "Global financial center"] },
    ],
  },
};

export default function DestinationDetail({ slug }: { slug: string }) {
  const country = countriesData[slug];

  useSEO({
    title: country ? `Study in ${country.name} - Keystone Global` : "Destination Not Found",
    description: country ? `Discover world-class education in ${country.name}. ${country.heroDesc}` : "Destination not found.",
  });

  if (!country) {
    return (
      <div className="min-h-screen pt-32 flex items-center justify-center">
        <p className="text-muted-foreground">Country not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end" data-testid="section-country-hero">
        <div className="absolute inset-0">
          <img src={country.image} alt={`Study in ${country.name}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <Badge variant="secondary" className="mb-4 bg-white/15 text-white border-white/20">
                <MapPin className="w-3 h-3 mr-1" /> Study Destination
              </Badge>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4" data-testid="text-country-name">
              Study in {country.name}
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 max-w-2xl leading-relaxed">
              {country.heroDesc}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-background" data-testid="section-country-benefits">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Why Study in {country.name}?</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {country.benefits.map((b) => (
              <Card key={b.title} className="h-full">
                <CardContent className="p-5">
                  <b.icon className="w-7 h-7 text-primary mb-3" />
                  <h3 className="text-sm font-semibold text-foreground mb-2">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 bg-card" data-testid="section-country-courses">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Courses & Fields</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <h3 className="text-base font-semibold text-foreground">Undergraduate Programs</h3>
                </div>
                <ul className="space-y-2">
                  {country.ugCourses.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-chart-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-chart-2" />
                  <h3 className="text-base font-semibold text-foreground">Postgraduate Programs</h3>
                </div>
                <ul className="space-y-2">
                  {country.pgCourses.map((c) => (
                    <li key={c} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-3.5 h-3.5 text-chart-2 shrink-0" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Work & Quick Facts */}
      <section className="py-16 bg-background" data-testid="section-country-facts">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Work During Studies</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.workDuring.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-chart-5 mt-0.5 shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Briefcase className="w-5 h-5 text-chart-2" />
                    <h3 className="text-base font-semibold text-foreground">Post-Study Work</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.workAfter.map((w) => (
                      <li key={w} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-chart-5 mt-0.5 shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">Intakes</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.intakes.map((i) => (
                      <li key={i} className="text-sm text-muted-foreground">{i}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-chart-2" />
                    <h3 className="text-base font-semibold text-foreground">Required Tests</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.tests.map((t) => (
                      <li key={t} className="text-sm text-muted-foreground">{t}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-5 h-5 text-primary" />
                    <h3 className="text-base font-semibold text-foreground">{country.visaName}</h3>
                  </div>
                  <ul className="space-y-2">
                    {country.visaDocs.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-3.5 h-3.5 text-chart-2 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Cities */}
      <section className="py-16 bg-card" data-testid="section-country-cities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">Popular Student Cities</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {country.cities.map((city) => (
              <Card key={city.name} className="h-full">
                <CardContent className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <MapPin className="w-4 h-4 text-chart-2" />
                    <h3 className="text-sm font-semibold text-foreground">{city.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {city.highlights.map((h) => (
                      <li key={h} className="text-xs text-muted-foreground">{h}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary" data-testid="section-country-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your {country.name} Education Journey?</h2>
          <p className="text-white/70 mb-8">
            Schedule your free counseling session and get a personalized university shortlist.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" data-testid="button-country-consultation">
                Schedule Free Consultation
              </Button>
            </Link>
            <Link href="/destinations">
              <Button size="lg" variant="outline" className="bg-white/10 text-white border-white/30" data-testid="button-country-back">
                View All Destinations
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
