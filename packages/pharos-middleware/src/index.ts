import { NextRequest, NextResponse } from 'next/server';

export function pharosMiddleware(config: { apiKey: string }) {
  return async function (req: NextRequest) {
    const res = NextResponse.next();
    const trustScore = await fetch('https://your-pharos-api-url.com/trust-score', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${config.apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userAgent: req.headers.get('user-agent') })
    }).then(r => r.json());

    res.headers.set('x-trust-score', trustScore.score.toString());
    return res;
  };
}
