import type { IncomingMessage, ServerResponse } from "http";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import {
  consultationRequests,
  testimonials,
  insertConsultationSchema,
} from "../shared/schema";
import { ZodError } from "zod";

let db: ReturnType<typeof drizzle> | null = null;

function getDb() {
  if (!db) {
    const pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
    });
    db = drizzle(pool);
  }
  return db;
}

// Seed testimonials if empty
const seedTestimonials = [
  {
    name: "Priya Sharma",
    course: "MS Computer Science",
    university: "University of Southern California",
    country: "United States",
    quote:
      "Keystone Global made my dream of studying in the US a reality. Their step-by-step guidance from university selection to visa approval was outstanding. I couldn't have done it without their dedicated support.",
    imageUrl: "/images/student-1.png",
  },
  {
    name: "Rahul Mehta",
    course: "MBA",
    university: "University of Toronto",
    country: "Canada",
    quote:
      "The team at Keystone Global was incredibly thorough with my application. Their SOP guidance and visa preparation were top-notch. I'm now pursuing my MBA at one of Canada's top business schools.",
    imageUrl: "/images/student-2.png",
  },
  {
    name: "Ananya Reddy",
    course: "MSc Data Science",
    university: "University of Edinburgh",
    country: "United Kingdom",
    quote:
      "From my first consultation to landing in Edinburgh, Keystone Global was with me every step. Their expertise in UK admissions and visa process gave me confidence throughout my journey.",
    imageUrl: "/images/student-3.png",
  },
];

async function ensureSeeded() {
  const database = getDb();
  const existing = await database.select().from(testimonials);
  if (existing.length === 0) {
    for (const t of seedTestimonials) {
      await database.insert(testimonials).values(t);
    }
  }
}

export default async function handler(req: IncomingMessage & { body?: any; url?: string; method?: string }, res: ServerResponse & { status?: (code: number) => any; json?: (data: any) => void; end?: () => void; setHeader: (name: string, value: string) => void }) {
  // Helper to send JSON
  const sendJson = (statusCode: number, data: any) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  // CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const path = (req.url || "").replace(/\?.*$/, "");

  // Parse body for POST requests
  let body = req.body;
  if (!body && req.method === "POST") {
    body = await new Promise<any>((resolve) => {
      let data = "";
      req.on("data", (chunk: any) => (data += chunk));
      req.on("end", () => {
        try { resolve(JSON.parse(data)); } catch { resolve({}); }
      });
    });
  }

  try {
    // GET /api/testimonials
    if (path === "/api/testimonials" && req.method === "GET") {
      const database = getDb();
      await ensureSeeded();
      const result = await database.select().from(testimonials);
      return sendJson(200, result);
    }

    // POST /api/consultations
    if (path === "/api/consultations" && req.method === "POST") {
      const database = getDb();
      const data = insertConsultationSchema.parse(body);
      const [consultation] = await database
        .insert(consultationRequests)
        .values(data)
        .returning();
      return sendJson(201, consultation);
    }

    return sendJson(404, { message: "Not found" });
  } catch (error) {
    if (error instanceof ZodError) {
      return sendJson(400, { message: "Validation error", errors: error.errors });
    }
    console.error("API error:", error);
    return sendJson(500, { message: "Internal server error" });
  }
}
