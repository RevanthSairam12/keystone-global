import {
  type Consultation,
  type InsertConsultation,
  type Testimonial,
  type InsertTestimonial,
  consultationRequests,
  testimonials,
} from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createConsultation(data: InsertConsultation): Promise<Consultation>;
  getConsultations(): Promise<Consultation[]>;
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(data: InsertTestimonial): Promise<Testimonial>;
  getTestimonialCount(): Promise<number>;
}

export class DatabaseStorage implements IStorage {
  async createConsultation(data: InsertConsultation): Promise<Consultation> {
    const [result] = await db.insert(consultationRequests).values(data).returning();
    return result;
  }

  async getConsultations(): Promise<Consultation[]> {
    return db.select().from(consultationRequests);
  }

  async getTestimonials(): Promise<Testimonial[]> {
    return db.select().from(testimonials);
  }

  async createTestimonial(data: InsertTestimonial): Promise<Testimonial> {
    const [result] = await db.insert(testimonials).values(data).returning();
    return result;
  }

  async getTestimonialCount(): Promise<number> {
    const result = await db.select().from(testimonials);
    return result.length;
  }
}

export const storage = new DatabaseStorage();
