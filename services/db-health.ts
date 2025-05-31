import { prisma } from "@/lib/prisma";

export async function checkDbHealth() {
  try {
    // Use the Health model to check database connection
    await prisma.health.upsert({
      where: { id: 1 },
      update: {
        updatedAt: new Date()
      },
      create: {
        id: 1
      }
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
