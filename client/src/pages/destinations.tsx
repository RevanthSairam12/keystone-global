import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, GraduationCap } from "lucide-react";
import { useSEO } from "@/hooks/use-seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const destinations = [
  { name: "United States", slug: "usa", image: "/images/dest-usa.png", tagline: "Home to the world's top-ranked universities and innovation hubs" },
  { name: "United Kingdom", slug: "uk", image: "/images/dest-uk.png", tagline: "Quality education with shorter program durations and rich history" },
  { name: "Canada", slug: "canada", image: "/images/dest-canada.png", tagline: "Immigrant-friendly with excellent quality of life and PR pathways" },
  { name: "Australia", slug: "australia", image: "/images/dest-australia.png", tagline: "World-class institutions with great lifestyle and work opportunities" },
  { name: "Germany", slug: "germany", image: "/images/dest-germany.png", tagline: "Low to no tuition fees with engineering and research excellence" },
  { name: "Ireland", slug: "ireland", image: "/images/dest-ireland.png", tagline: "English-speaking tech hub with a friendly culture" },
  { name: "New Zealand", slug: "new-zealand", image: "/images/dest-nz.png", tagline: "Safe environment with quality education and scenic beauty" },
  { name: "Singapore", slug: "singapore", image: "/images/dest-singapore.png", tagline: "Asia's premier education hub with strategic career opportunities" },
];

export default function Destinations() {
  useSEO({
    title: "Study Destinations - Keystone Global | USA, UK, Canada & More",
    description: "Explore top study destinations worldwide. Get expert guidance for studying in USA, UK, Canada, Australia, Germany, Ireland, New Zealand, and Singapore.",
  });

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 bg-primary" data-testid="section-destinations-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-destinations-title">
              Study Destinations
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-white/80 leading-relaxed">
              Explore the world's leading study destinations. Our expert counselors provide country-specific guidance to help you choose the perfect place for your academic journey.
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background" data-testid="section-destinations-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {destinations.map((d) => (
              <motion.div key={d.slug} variants={fadeUp}>
                <Link href={`/destinations/${d.slug}`}>
                  <Card className="overflow-visible group cursor-pointer hover-elevate h-full" data-testid={`card-destination-${d.slug}`}>
                    <div className="aspect-[4/3] overflow-hidden rounded-t-md">
                      <img
                        src={d.image}
                        alt={`Study in ${d.name}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-5">
                      <h3 className="text-lg font-semibold text-foreground mb-2">{d.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{d.tagline}</p>
                      <span className="inline-flex items-center text-sm font-medium text-primary">
                        Explore <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-primary" data-testid="section-destinations-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Not Sure Which Country is Right for You?</h2>
          <p className="text-white/70 mb-8 text-lg">
            Our expert counselors will help you choose the perfect destination based on your profile, preferences, and career goals.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" data-testid="button-destinations-cta">
              <GraduationCap className="w-4 h-4 mr-2" />
              Get Expert Advice
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
