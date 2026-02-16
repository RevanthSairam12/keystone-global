import { storage } from "./storage";

const seedTestimonials = [
  {
    name: "Priya Sharma",
    course: "MS Computer Science",
    university: "University of Southern California",
    country: "United States",
    quote: "Keystone Global made my dream of studying in the US a reality. Their step-by-step guidance from university selection to visa approval was outstanding. I couldn't have done it without their dedicated support.",
    imageUrl: "/images/student-1.png",
  },
  {
    name: "Rahul Mehta",
    course: "MBA",
    university: "University of Toronto",
    country: "Canada",
    quote: "The team at Keystone Global was incredibly thorough with my application. Their SOP guidance and visa preparation were top-notch. I'm now pursuing my MBA at one of Canada's top business schools.",
    imageUrl: "/images/student-2.png",
  },
  {
    name: "Ananya Reddy",
    course: "MSc Data Science",
    university: "University of Edinburgh",
    country: "United Kingdom",
    quote: "From my first consultation to landing in Edinburgh, Keystone Global was with me every step. Their expertise in UK admissions and visa process gave me confidence throughout my journey.",
    imageUrl: "/images/student-3.png",
  },
];

export async function seedDatabase() {
  try {
    const count = await storage.getTestimonialCount();
    if (count === 0) {
      for (const testimonial of seedTestimonials) {
        await storage.createTestimonial(testimonial);
      }
      console.log("Seeded testimonials successfully");
    }
  } catch (error) {
    console.error("Error seeding database:", error);
  }
}
