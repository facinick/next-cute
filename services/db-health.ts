import { prisma } from "@/lib/prisma";

export async function checkDbHealth() {
  try {
    // Use the Health model to check database connection
    await prisma.health.findFirst({
      select: { id: true },
      take: 1
    });

    return {
      status: "healthy",
      timestamp: new Date().toISOString(),
      database: "connected"
    };
  } catch (error) {
    console.error("Database health check failed:", error);
    return {
      status: "unhealthy",
      timestamp: new Date().toISOString(),
      database: "disconnected",
      error: error instanceof Error ? error.message : "Unknown error"
    };
  }
}
