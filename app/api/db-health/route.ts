import { checkDbHealth } from '@/services/db-health';
import { NextResponse } from 'next/server';

export async function GET() {
  const health = await checkDbHealth();

  return NextResponse.json(health, {
    status: health.status === 'healthy' ? 200 : 503
  });
}

export const dynamic = 'force-dynamic'; // Ensure this endpoint is not statically generated
