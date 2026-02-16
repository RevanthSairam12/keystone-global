import type { IncomingMessage, ServerResponse } from "http";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    course: "MS Computer Science",
    university: "University of Southern California",
    country: "United States",
    quote:
      "Keystone Global made my dream of studying in the US a reality. Their step-by-step guidance from university selection to visa approval was outstanding. I couldn't have done it without their dedicated support.",
    imageUrl: "/images/student-1.png",
  },
  {
    id: 2,
    name: "Rahul Mehta",
    course: "MBA",
    university: "University of Toronto",
    country: "Canada",
    quote:
      "The team at Keystone Global was incredibly thorough with my application. Their SOP guidance and visa preparation were top-notch. I'm now pursuing my MBA at one of Canada's top business schools.",
    imageUrl: "/images/student-2.png",
  },
  {
    id: 3,
    name: "Ananya Reddy",
    course: "MSc Data Science",
    university: "University of Edinburgh",
    country: "United Kingdom",
    quote:
      "From my first consultation to landing in Edinburgh, Keystone Global was with me every step. Their expertise in UK admissions and visa process gave me confidence throughout my journey.",
    imageUrl: "/images/student-3.png",
  },
];

export default async function handler(
  req: IncomingMessage & { body?: any; url?: string; method?: string },
  res: ServerResponse & { setHeader: (name: string, value: string) => void }
) {
  const sendJson = (statusCode: number, data: any) => {
    res.writeHead(statusCode, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  };

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    return res.end();
  }

  const path = (req.url || "").replace(/\?.*$/, "");

  // GET /api/testimonials — return static data
  if (path === "/api/testimonials" && req.method === "GET") {
    return sendJson(200, testimonials);
  }

  // POST /api/consultations — acknowledge receipt (no DB)
  if (path === "/api/consultations" && req.method === "POST") {
    return sendJson(200, { message: "Consultation request received. We will contact you soon!" });
  }

  return sendJson(404, { message: "Not found" });
}
