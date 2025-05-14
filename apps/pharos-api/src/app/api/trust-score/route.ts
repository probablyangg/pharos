// apps/pharos-api/app/api/trust-score/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { userAgent } = body;
  const score = userAgent.includes('Chrome') ? 75 : 50;

  return NextResponse.json({ score, factors: ['User-Agent analysis'] });
}
