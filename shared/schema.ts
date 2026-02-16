import { sql } from "drizzle-orm";
import { pgTable, text, varchar, boolean, timestamp, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const consultationRequests = pgTable("consultation_requests", {
  id: serial("id").primaryKey(),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone").notNull(),
  preferredCountry: text("preferred_country").notNull(),
  courseLevel: text("course_level").notNull(),
  fieldOfInterest: text("field_of_interest"),
  startTimeline: text("start_timeline"),
  message: text("message"),
  consultationMode: text("consultation_mode"),
  referralSource: text("referral_source"),
  agreeToUpdates: boolean("agree_to_updates").default(false),
  createdAt: timestamp("created_at").defaultNow(),
});

export const testimonials = pgTable("testimonials", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  course: text("course").notNull(),
  university: text("university").notNull(),
  country: text("country").notNull(),
  quote: text("quote").notNull(),
  imageUrl: text("image_url"),
});

export const insertConsultationSchema = createInsertSchema(consultationRequests).omit({
  id: true,
  createdAt: true,
});

export const insertTestimonialSchema = createInsertSchema(testimonials).omit({
  id: true,
});

export type InsertConsultation = z.infer<typeof insertConsultationSchema>;
export type Consultation = typeof consultationRequests.$inferSelect;
export type InsertTestimonial = z.infer<typeof insertTestimonialSchema>;
export type Testimonial = typeof testimonials.$inferSelect;
