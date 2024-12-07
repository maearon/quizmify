// app/api/topics/route.ts
import { prisma } from "@/lib/db";

export async function GET() {
  const topics = await prisma.topic_count.findMany({});
  return new Response(JSON.stringify(topics));
}
